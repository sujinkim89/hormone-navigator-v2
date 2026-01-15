import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { Button } from "@/components/ui/button";
import { TypeChart } from "@/components/TypeChart";
import { ResultCarousel } from "@/components/ResultCarousel";
import { BridgeSection } from "@/components/BridgeSection";
import { MaleBridgeSection } from "@/components/MaleBridgeSection";
import { ShareBottomSheet } from "@/components/ShareBottomSheet";

import { useQuizStore } from "@/store/quizStore";
import { getTypeData, calculateCoordinates, maleTypes, femaleTypes } from "@/data/quizData";
import { Share2, RotateCcw } from "lucide-react";
import { trackResultView, trackRestartQuiz, trackRhaboCTAClick, trackShareOpen, trackNicknameEdit } from "@/lib/analytics";
const ResultPage = () => {
  const navigate = useNavigate();
  const [shareOpen, setShareOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [localNickname, setLocalNickname] = useState('');
  const nameInputRef = useRef<HTMLInputElement>(null);
  const resultCardRef = useRef<HTMLDivElement>(null);
  const {
    nickname,
    gender,
    resultType,
    answers,
    resetQuiz,
    setNickname
  } = useQuizStore();
  useEffect(() => {
    if (!resultType || !nickname) {
      navigate('/');
    } else if (resultType && gender) {
      // Track result view when page loads
      trackResultView(resultType, gender);
    }
  }, [resultType, nickname, gender, navigate]);

  useEffect(() => {
    setLocalNickname(nickname);
  }, [nickname]);

  useEffect(() => {
    if (isEditingName && nameInputRef.current) {
      nameInputRef.current.focus();
      nameInputRef.current.select();
    }
  }, [isEditingName]);

  const handleNameClick = () => {
    trackNicknameEdit();
    setIsEditingName(true);
  };

  const handleNameSave = () => {
    if (localNickname.trim()) {
      setNickname(localNickname.trim());
    } else {
      setLocalNickname(nickname);
    }
    setIsEditingName(false);
  };

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNameSave();
    } else if (e.key === 'Escape') {
      setLocalNickname(nickname);
      setIsEditingName(false);
    }
  };
  if (!resultType || !nickname || !gender) return null;
  const type = getTypeData(resultType, gender);
  const coordinates = calculateCoordinates(answers);

  // Advanced percentile calculation based on binomial distribution
  // For 5 questions per axis, the distribution is:
  // 5/5 (100%) → 3%, 4/5 (80%) → 16%, 3/5 (60%) → 31%, 2.5/5 (50%) → 50%
  const calculateAdvancedPercentile = (dominantCount: number, totalQuestions: number = 5) => {
    // If balanced or less dominant, return 50% (most common)
    if (dominantCount <= totalQuestions / 2) {
      return 50;
    }
    
    // Percentile mapping for 5 questions based on binomial probability
    // P(X=k) for n=5, p=0.5: more extreme = rarer
    const percentileMap5: Record<number, number> = {
      3: 31,  // 3/5 dominant → ~31% (slightly above average)
      4: 16,  // 4/5 dominant → ~16% (fairly rare)
      5: 3,   // 5/5 dominant → ~3% (very rare)
    };
    
    return percentileMap5[dominantCount] || 50;
  };

  // Get main and sub hormone info with percentiles
  const getHormoneInfo = () => {
    const hormones = {
      T: { name: '테스토스테론', emoji: '⚡', desc: '논리로 해결책을 찾아 직진하는 전투형 호르몬' },
      E: { name: '에스트로겐', emoji: '💗', desc: '깊은 공감과 관계를 중시하는 유대형 호르몬' },
      D: { name: '도파민', emoji: '🚀', desc: '새로운 자극과 흥분을 쫓는 모험형 호르몬' },
      S: { name: '세로토닌', emoji: '🌿', desc: '규칙과 평화 속 안정을 찾는 균형형 호르몬' },
    };

    // Count answers per hormone type
    // DS axis: questions 1-5 (5 questions)
    // TE axis: questions 6-10 (5 questions)
    let tCount = 0, eCount = 0, dCount = 0, sCount = 0;
    
    answers.forEach((answer, index) => {
      const questionNum = index + 1;
      if (questionNum <= 5) {
        // DS axis (Q1-Q5)
        if (answer === 'D') dCount++;
        else if (answer === 'S') sCount++;
      } else {
        // TE axis (Q6-Q10)
        if (answer === 'T') tCount++;
        else if (answer === 'E') eCount++;
      }
    });

    // Determine dominant hormone on each axis
    const dsDominant: 'D' | 'S' = dCount >= sCount ? 'D' : 'S';
    const teDominant: 'T' | 'E' = tCount >= eCount ? 'T' : 'E';
    
    // Calculate how extreme each axis is (distance from center)
    const dsExtremity = Math.abs(dCount - sCount); // 0-5
    const teExtremity = Math.abs(tCount - eCount); // 0-5
    
    // Get dominant count for each axis
    const dsDominantCount = Math.max(dCount, sCount);
    const teDominantCount = Math.max(tCount, eCount);
    
    // Main hormone comes from the MORE extreme axis
    // If tied, TE axis takes priority
    let main: 'T' | 'E' | 'D' | 'S';
    let sub: 'T' | 'E' | 'D' | 'S';
    
    if (teExtremity >= dsExtremity) {
      // TE axis is more extreme (or tied) → TE is main
      main = teDominant;
      sub = dsDominant;
    } else {
      // DS axis is more extreme → DS is main
      main = dsDominant;
      sub = teDominant;
    }

    // Calculate percentiles - fixed for all types
    const mainPercentile = 3; // Fixed to 3% for all types
    const subPercentile = 15; // Fixed to 15% for all types

    return { 
      main: { ...hormones[main], percentile: mainPercentile, desc: type.hormoneCoordinate?.mainDesc || hormones[main].desc }, 
      sub: { ...hormones[sub], percentile: subPercentile, desc: type.hormoneCoordinate?.subDesc || hormones[sub].desc } 
    };
  };

  const hormoneInfo = getHormoneInfo();

  // Get compatibility info from male types
  const getCompatibilityInfo = () => {
    // Legacy map logic removed as it used outdated keys. 
    // Now directly using data from quizData.ts
    
    return {
      best: type.bestMatch,
      worst: type.worstMatch,
    };
  };

  const compatibility = getCompatibilityInfo();

  // Helper to format compatibility string
  const formatCompatibility = (matchString: string) => {
    const items = matchString.split(',').map(s => s.trim());
    
    if (gender === 'male') {
      // Partner page: matches are female types (titles). 
      // Replace title (e.g. "쉬헐크") with descriptive name (e.g. "초록빛 폭주 테토녀")
      return items.map(item => {
        const foundType = Object.values(femaleTypes).find(t => t.title === item);
        return foundType ? foundType.hookLine.split(' - ')[0] : item;
      });
    }
    
    return items;
  };

  const bestMatches = formatCompatibility(compatibility.best);
  const worstMatches = formatCompatibility(compatibility.worst);

  // Helper to split text into two lines for mobile display
  const splitTextForMobile = (text: string): [string, string] => {
    if (text.length <= 8) return [text, '']; // Short text, no need to split
    
    // Count spaces in the text
    const spaceCount = (text.match(/ /g) || []).length;
    
    // If there are 2 or more spaces, split at the last space
    // Example: "디바마을 퀸 에겐녀" -> "디바마을 퀸" / "에겐녀"
    if (spaceCount >= 2) {
      const lastSpaceIndex = text.lastIndexOf(' ');
      return [text.slice(0, lastSpaceIndex), text.slice(lastSpaceIndex + 1)];
    }
    
    // If there's only one space, split at that space
    if (spaceCount === 1) {
      const spaceIndex = text.indexOf(' ');
      return [text.slice(0, spaceIndex), text.slice(spaceIndex + 1)];
    }
    
    // If no space, find the middle point
    const midPoint = Math.floor(text.length / 2);
    return [text.slice(0, midPoint), text.slice(midPoint)];
  };

  const handleShare = () => {
    trackShareOpen(resultType || '');
    setShareOpen(true);
  };

  const handleRestart = () => {
    trackRestartQuiz(resultType || '', gender || 'female');
    resetQuiz();
    navigate('/');
  };

  const handleRhaboCTAClick = () => {
    trackRhaboCTAClick(gender || 'female', resultType || '');
  };
  return <AuraBackground>
      <div className="min-h-screen px-4 py-6 pt-9">
        <div className="w-full max-w-md mx-auto">
          {/* Result Header - Hero Section (Screenshot-friendly) */}
          <div
            ref={resultCardRef}
            data-result-card
            className="text-center mb-6 bg-[#F8E8FF] rounded-2xl py-6 px-4"
          >
            <p className="text-sm text-muted-foreground mb-3">
              {isEditingName ? (
                <span className="flex items-center justify-center gap-2">
                  <input
                    ref={nameInputRef}
                    type="text"
                    value={localNickname}
                    onChange={(e) => setLocalNickname(e.target.value)}
                    onBlur={handleNameSave}
                    onKeyDown={handleNameKeyDown}
                    className="text-center bg-white border-2 border-[#9D4EDD] rounded-lg px-2 py-1 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-[#9D4EDD] max-w-[120px]"
                    maxLength={10}
                  />
                  <span>님의 {gender === 'female' ? '호르몬 빌런 유형' : '호르몬 빌런 대응유형'}은?</span>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-1 flex-wrap">
                  <span 
                    onClick={handleNameClick}
                    className="cursor-pointer hover:text-[#9D4EDD] transition-colors font-medium underline decoration-dotted decoration-[#9D4EDD] hover:decoration-2"
                    title="닉네임 수정하기"
                  >
                    {nickname}
                  </span>
                  <span>님의 {gender === 'female' ? '호르몬 빌런 유형' : '호르몬 빌런 대응유형'}은?</span>
                </span>
              )}
            </p>

            {/* Hook Line - Main title */}
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">
              {type.hookLine.split(' - ')[0]}
            </h1>

            {/* Reference Card - Actress Style */}
            <div className="bg-white rounded-2xl p-5 shadow-card mx-auto max-w-sm">
              {/* Sub description - 재질 */}
              {type.hookLine.includes(' - ') && (
                <p className="text-base font-bold text-foreground mb-4">
                  {type.hookLine.split(' - ')[1]}
                </p>
              )}

              {/* Character Summary */}
              {type.characterSummary && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line font-medium">
                    {type.characterSummary}
                  </p>
                </div>
              )}

              {/* Reference Image Placeholder */}
              <div className="mb-4">
                {type.refImage ? (
                  <img
                    src={type.refImage}
                    alt={type.hookLine.split(' - ')[1]}
                    className="w-full aspect-[3/4] max-w-[200px] object-cover rounded-xl mx-auto shadow-lg"
                    crossOrigin="anonymous"
                  />
                ) : (
                  <div className="w-full aspect-[3/4] max-w-[200px] mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-4xl">🎬</span>
                  </div>
                )}
              </div>

              {/* Villain Quote */}
              {type.quote && (
                <div className="bg-gradient-to-r from-[#2D1B4E] to-[#1E293B] rounded-xl px-4 py-3">
                  <p className="text-white text-sm font-medium italic leading-relaxed whitespace-pre-line">
                    "{type.quote}"
                  </p>
                </div>
              )}
            </div>

            {/* Watermark for share image */}
            <p className="text-xs text-muted-foreground/60 mt-4">
              MADE WITH ❤️ BY @RHABO
            </p>
          </div>

          {/* Carousel Tabs - Detailed Info (PMS 호르몬 처방전) */}
          <div className="mb-6">
            <ResultCarousel type={type} nickname={nickname} gender={gender} />
          </div>

          {/* Hormone Coordinate Section with Chart */}
          <div className="mb-6">
            <div className="bg-gradient-to-br from-[#F8E8FF] to-[#E8D4F8] rounded-2xl p-4 shadow-card">
              {/* Header */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-lg">📍</span>
                <h3 className="font-display text-base font-bold text-[#9D4EDD]">
                  내 호르몬 좌표
                </h3>
              </div>

              {/* Description - hookLine split into two lines */}
              {type.hormoneCoordinate ? (
                <div className="text-center mb-4">
                  <p className="text-lg font-bold text-foreground whitespace-pre-line leading-snug">
                    {type.hormoneCoordinate.title}
                  </p>
                </div>
              ) : (
                <div className="text-center mb-4">
                  <p className="text-lg font-bold text-foreground">
                    {type.hookLine.split(' - ')[0]}
                  </p>
                  {type.hookLine.includes(' - ') && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {type.hookLine.split(' - ')[1]}
                    </p>
                  )}
                </div>
              )}

              {/* Chart */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-4">
                <TypeChart x={coordinates.x} y={coordinates.y} />
              </div>

              {/* Main Hormone */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-3 border-l-4 border-[#9D4EDD]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{hormoneInfo.main.emoji}</span>
                    <span className="font-bold text-foreground text-sm">주지배: {hormoneInfo.main.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#9D4EDD] font-bold">상위 {hormoneInfo.main.percentile}%</span>
                    <span className="text-[10px] bg-[#9D4EDD] text-white px-2 py-0.5 rounded-full font-medium">MAIN</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {hormoneInfo.main.desc}
                </p>
              </div>

              {/* Sub Hormone */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-l-4 border-muted-foreground/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{hormoneInfo.sub.emoji}</span>
                    <span className="font-bold text-foreground text-sm">부지배: {hormoneInfo.sub.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground font-bold">상위 {hormoneInfo.sub.percentile}%</span>
                    <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-medium">SUB</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {hormoneInfo.sub.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Partner Guide Section */}
          <div className="bg-gradient-to-br from-[#F8E8FF] to-[#E8D4F8] rounded-2xl p-4 mb-6 shadow-card">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">👫</span>
              <h3 className="font-display text-lg font-bold text-[#9D4EDD]">
                연인/친구 가이드
              </h3>
            </div>

            {/* Guide Content */}
            {type.bfGuide && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-4">
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {type.bfGuide}
                </p>
              </div>
            )}

            {/* Compatibility Section */}
            <p className="text-center text-sm text-muted-foreground mb-3">
              PMS 대처유형 궁합
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center flex flex-col justify-center min-h-[120px]">
                <p className="text-xs text-muted-foreground mb-2">BEST 궁합</p>
                <div className="text-sm font-bold text-foreground leading-tight">
                  {(() => {
                    const [first, second] = splitTextForMobile(bestMatches[0] || '');
                    return second ? (
                      <>
                        {first}<br />{second}
                      </>
                    ) : (
                      first
                    );
                  })()}
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center flex flex-col justify-center min-h-[120px]">
                <p className="text-xs text-muted-foreground mb-2">WORST 궁합</p>
                <div className="text-sm font-bold text-foreground leading-tight">
                  {(() => {
                    const [first, second] = splitTextForMobile(worstMatches[0] || '');
                    return second ? (
                      <>
                        {first}<br />{second}
                      </>
                    ) : (
                      first
                    );
                  })()}
                </div>
              </div>
            </div>
            
            {/* Share Prompt */}
            <div className={`text-center ${gender === 'female' ? 'mt-[18px] mb-2' : 'mt-[18px] mb-2'}`}>
              <p className="text-sm text-muted-foreground font-medium">
                {gender === 'female' 
                  ? (
                    <>
                      이제 파트너에게 공유하면 다 이해할 거예요 😎<br />
                      PMS 평화 협정을 맺으세요 🕊️
                    </>
                  )
                  : (
                    <>
                      이제 파트너에게 공유하면 다 이해할 거예요 😎<br />
                      PMS 평화 협정을 맺으세요 🕊️
                    </>
                  )
                }
              </p>
            </div>
          </div>

          {/* Action Buttons - After Partner Guide */}
          <div className="flex gap-3 mb-6">
            <Button variant="meme" size="lg" className="flex-1" onClick={handleShare}>
              <Share2 className="w-5 h-5" />
              공유하기
            </Button>
            <Button variant="outline" size="lg" onClick={handleRestart}>
              <RotateCcw className="w-5 h-5" />
            </Button>
          </div>
          {/* PMS Scientific Evidence Section */}
          <div className="mb-6">
            {gender === 'female' ? <BridgeSection /> : <MaleBridgeSection />}
          </div>



          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground">
            © PMS 호르몬 유형 분석 · Mirra x RHABO
          </p>
        </div>
      </div>

      {/* Share Bottom Sheet */}
      <ShareBottomSheet
        open={shareOpen}
        onOpenChange={setShareOpen}
        shareData={{
          title: 'PMS 호르몬 유형 테스트',
          text: `나의 PMS ${gender === 'female' ? '호르몬' : '대응'} 유형은 "${type.title}" ${type.emoji}\n\n나도 테스트하기 👇`,
          url: window.location.origin,
          typeTitle: type.title,
          emoji: type.emoji,
          nickname: nickname,
          gender: gender,
        }}
        resultCardRef={resultCardRef}
      />

      {/* Sticky Bottom CTA - Moved here to be visible immediately */}
      <div className="fixed bottom-4 left-0 right-0 p-4 z-50 bg-gradient-to-t from-[#1A1A2E] via-[#1A1A2E] to-transparent pb-8">
        <div className="max-w-md mx-auto">
          <a
            href="http://pf.kakao.com/_dlxkQn"
            target="_blank"
            rel="noopener noreferrer"
            className="block shadow-xl rounded-xl"
            onClick={handleRhaboCTAClick}
          >
            <Button 
              className="w-full bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white font-bold py-8 rounded-xl text-[20px] tracking-tight shadow-lg shadow-blue-900/20 whitespace-pre-wrap leading-tight"
            >
              {gender === 'female' 
                ? "30만원 지원금 받고\n진짜 호르몬 검사 시작하기"
                : "진짜 호르몬 검사 선물하고\n30만원 지원금 받기"
              }
            </Button>
          </a>
        </div>
      </div>
    </AuraBackground>;
};
export default ResultPage;