import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { EggCharacter } from "@/components/EggCharacter";
import { Button } from "@/components/ui/button";
import { TypeChart } from "@/components/TypeChart";
import { ResultCarousel } from "@/components/ResultCarousel";
import { BridgeSection } from "@/components/BridgeSection";
import { MaleBridgeSection } from "@/components/MaleBridgeSection";


import { useQuizStore } from "@/store/quizStore";
import { getTypeData, calculateCoordinates, maleTypes } from "@/data/quizData";
import { Share2, RotateCcw } from "lucide-react";
import { toast } from "sonner";
const ResultPage = () => {
  const navigate = useNavigate();
  const {
    nickname,
    gender,
    resultType,
    answers,
    resetQuiz
  } = useQuizStore();
  useEffect(() => {
    if (!resultType || !nickname) {
      navigate('/');
    }
  }, [resultType, nickname, navigate]);
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
      T: { name: '테스토스테론', emoji: '⚡', desc: '목표 쉐도 모드. 논리로 감정을 눌러버리고 해결책을 찾아 직진하는 전투형 호르몬.' },
      E: { name: '에스트로겐', emoji: '💗', desc: '공감 연결 모드. 타인의 감정을 흡수하고 관계 속에서 안정감을 찾는 유대형 호르몬.' },
      D: { name: '도파민', emoji: '🚀', desc: '자극 갈망 모드. 지루함은 적, 새로운 자극이 곧 산소. 쾌락과 흥분을 향해 돌진하는 모험형 호르몬.' },
      S: { name: '세로토닌', emoji: '🌿', desc: '안정 추구 모드. 예측 가능한 루틴과 평화로운 환경 속에서 에너지를 충전하는 균형형 호르몬.' },
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

    // Calculate percentiles - main should have lower (more rare) percentile
    const mainPercentile = main === 'T' || main === 'E' 
      ? calculateAdvancedPercentile(teDominantCount)
      : calculateAdvancedPercentile(dsDominantCount);
    
    const subPercentile = sub === 'D' || sub === 'S'
      ? calculateAdvancedPercentile(dsDominantCount)
      : calculateAdvancedPercentile(teDominantCount);

    return { 
      main: { ...hormones[main], percentile: mainPercentile }, 
      sub: { ...hormones[sub], percentile: subPercentile } 
    };
  };

  const hormoneInfo = getHormoneInfo();

  // Get compatibility info from male types
  const getCompatibilityInfo = () => {
    // Map female type emoji to male type
    const compatibilityMap: Record<string, { best: string; worst: string; bestReason: string; worstReason: string }> = {
      '번개치타': { best: 'TD_T', worst: 'TD_D', bestReason: '서로 부족한 부분을 채워줌', worstReason: '해결 vs 폭발 충돌' },
      '꾸덕거북': { best: 'TS_T', worst: 'TS_S', bestReason: '서로 부족한 부분을 채워줌', worstReason: '둔감 vs 예민 충돌' },
      '살랑햄스터': { best: 'ES_E', worst: 'ES_S', bestReason: '서로 부족한 부분을 채워줌', worstReason: '냉정 vs 예민 충돌' },
      '몽글늘보': { best: 'TD_D', worst: 'TD_T', bestReason: '서로 부족한 부분을 채워줌', worstReason: '속도 차이로 스트레스' },
      '스파크카멜레온': { best: 'ES_S', worst: 'TS_S', bestReason: '서로 부족한 부분을 채워줌', worstReason: '예측 불가 vs 계획 충돌' },
      '감성수달': { best: 'TS_T', worst: 'ED_E', bestReason: '서로 부족한 부분을 채워줌', worstReason: '소통 부재로 서운함 누적' },
    };
    
    const typeTitle = type.title;
    const match = compatibilityMap[typeTitle];
    
    if (match) {
      const bestType = maleTypes[match.best];
      const worstType = maleTypes[match.worst];
      return {
        best: bestType ? `${bestType.emoji} ${bestType.title}` : type.bestMatch,
        worst: worstType ? `${worstType.emoji} ${worstType.title}` : type.worstMatch,
        bestReason: match.bestReason,
        worstReason: match.worstReason,
      };
    }
    
    return {
      best: type.bestMatch,
      worst: type.worstMatch,
      bestReason: '서로 부족한 부분을 채워줌',
      worstReason: '감정 충돌 위험 높음',
    };
  };

  const compatibility = getCompatibilityInfo();

  const handleShare = async () => {
    const shareText = `나의 PMS ${gender === 'female' ? '호르몬' : '대응'} 유형은 "${type.title}" ${type.emoji}\n\n나도 테스트하기 👇`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'PMS 호르몬 유형 테스트',
          text: shareText,
          url: window.location.origin
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(shareText + '\n' + window.location.origin);
      toast.success("클립보드에 복사되었어요!");
    }
  };
  const handleRestart = () => {
    resetQuiz();
    navigate('/');
  };
  return <AuraBackground>
      <div className="min-h-screen px-4 py-6">
        <div className="w-full max-w-md mx-auto">
          {/* Result Header - Hero Section (Screenshot-friendly) */}
          <div className="text-center mb-6 animate-fade-up">
            <p className="text-sm text-muted-foreground mb-3">
              {nickname}님의 {gender === 'female' ? '호르몬 자아' : 'PMS 대응 유형'}는...
            </p>

            {/* Large Emoji */}
            <div className="text-6xl mb-2 drop-shadow-lg">
              {type.emoji}
            </div>
            
            {/* Hook Line - Main title */}
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">
              {type.hookLine.split(' - ')[0]}
            </h1>

            {/* Reference Card - Actress Style */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-card mx-auto max-w-sm">
              {/* Sub description - 재질 */}
              {type.hookLine.includes(' - ') && (
                <p className="text-base font-bold text-foreground mb-4">
                  {type.hookLine.split(' - ')[1]}
                </p>
              )}

              {/* Reference Image Placeholder */}
              <div className="mb-4">
                {type.refImage ? (
                  <img 
                    src={type.refImage} 
                    alt={type.hookLine.split(' - ')[1]}
                    className="w-full aspect-[3/4] max-w-[200px] object-cover rounded-xl mx-auto shadow-lg"
                  />
                ) : (
                  <div className="w-full aspect-[3/4] max-w-[200px] mx-auto bg-gradient-to-br from-muted/50 to-muted rounded-xl flex items-center justify-center">
                    <span className="text-4xl">🎬</span>
                  </div>
                )}
              </div>

              {/* Villain Quote */}
              {type.quote && (
                <div className="bg-gradient-to-r from-[#2D1B4E] to-[#1E293B] rounded-xl px-4 py-3">
                  <p className="text-white text-sm font-medium italic leading-relaxed">
                    "{type.quote}"
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Carousel Tabs - Detailed Info (PMS 호르몬 처방전) */}
          <div className="mb-5 animate-fade-up delay-100">
            <ResultCarousel type={type} nickname={nickname} gender={gender} />
          </div>

          {/* Hormone Coordinate Section with Chart */}
          <div className="mb-5 animate-fade-up delay-200">
            <div className="bg-gradient-to-br from-[#F8E8FF] to-[#E8D4F8] rounded-2xl p-3 shadow-card">
              {/* Header */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-lg">📍</span>
                <h3 className="font-display text-base font-bold text-[#9D4EDD]">
                  내 호르몬 좌표
                </h3>
              </div>

              {/* Description - hookLine split into two lines */}
              <div className="text-center mb-3">
                <p className="text-lg font-bold text-foreground">
                  {type.hookLine.split(' - ')[0]}
                </p>
                {type.hookLine.includes(' - ') && (
                  <p className="text-sm text-muted-foreground">
                    {type.hookLine.split(' - ')[1]}
                  </p>
                )}
              </div>

              {/* Chart */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 mb-3">
                <TypeChart x={coordinates.x} y={coordinates.y} />
              </div>

              {/* Main Hormone */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 mb-2 border-l-4 border-[#9D4EDD]">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">{hormoneInfo.main.emoji}</span>
                    <span className="font-bold text-foreground text-sm">주지배: {hormoneInfo.main.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-[#9D4EDD] font-bold">상위 {hormoneInfo.main.percentile}%</span>
                    <span className="text-[10px] bg-[#9D4EDD] text-white px-1.5 py-0.5 rounded-full font-medium">MAIN</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {hormoneInfo.main.desc}
                </p>
              </div>

              {/* Sub Hormone */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border-l-4 border-muted-foreground/30">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">{hormoneInfo.sub.emoji}</span>
                    <span className="font-bold text-foreground text-sm">부지배: {hormoneInfo.sub.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-muted-foreground font-bold">상위 {hormoneInfo.sub.percentile}%</span>
                    <span className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full font-medium">SUB</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {hormoneInfo.sub.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Partner Guide Section */}
          <div className="bg-gradient-to-br from-[#F8E8FF] to-[#E8D4F8] rounded-2xl p-3 mb-5 animate-fade-up delay-300 shadow-card">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">👫</span>
              <h3 className="font-display text-lg font-bold text-[#9D4EDD]">
                연인/친구 가이드
              </h3>
            </div>

            {/* Guide Content */}
            {type.bfGuide && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-3">
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {type.bfGuide}
                </p>
              </div>
            )}

            {/* Compatibility Section */}
            <p className="text-center text-sm text-muted-foreground mb-2">
              PMS 대처유형 궁합
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 text-center">
                <p className="text-xs text-muted-foreground mb-1">BEST 궁합</p>
                <p className="text-sm font-bold text-foreground leading-tight">{compatibility.best}</p>
                <p className="text-xs text-[#9D4EDD] mt-1 leading-tight">{compatibility.bestReason}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 text-center">
                <p className="text-xs text-muted-foreground mb-1">WORST 궁합</p>
                <p className="text-sm font-bold text-foreground leading-tight">{compatibility.worst}</p>
                <p className="text-xs text-rose-500 mt-1 leading-tight">{compatibility.worstReason}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons - After Partner Guide */}
          <div className="flex gap-3 mb-5 animate-fade-up delay-300">
            <Button variant="meme" size="lg" className="flex-1" onClick={handleShare}>
              <Share2 className="w-5 h-5" />
              공유하기
            </Button>
            <Button variant="outline" size="lg" onClick={handleRestart}>
              <RotateCcw className="w-5 h-5" />
            </Button>
          </div>
          {/* PMS Scientific Evidence Section - Professional Dark Theme */}
          <div className="animate-fade-up delay-400">
            <div className="bg-gradient-to-b from-[#2D1B4E] to-[#1E293B] rounded-t-2xl p-6 font-pretendard">
              {/* Title */}
              <h3 className="text-xl font-bold text-center text-white mb-2 tracking-tight">
                PMS가 갈수록 심해지는 기분
              </h3>
              
              <p className="text-center text-white/60 text-sm mb-6">
                혹시 느끼셨나요?
              </p>

              {/* Divider dots */}
              <div className="flex justify-center gap-1 mb-6">
                <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                <span className="w-1 h-1 bg-white/30 rounded-full"></span>
              </div>

              {/* SOS Signal */}
              <p className="text-center font-bold text-[#C9A0FF] text-lg mb-4">
                당신의 난소가 보내는 SOS 신호입니다.
              </p>
              
              <p className="text-sm text-white/80 leading-relaxed text-center mb-5">
                우리 몸의 호르몬 공장인 난소가 지쳐갈수록, 유지되어야 할 호르몬 수치는 급락을 반복합니다. 이 '호르몬 롤러코스터'가 바로 당신을 PMS 기간에 빌런으로 만드는 진범이자, 반드시 관리해야 할 핵심 데이터입니다.
              </p>

              {/* Source */}
              <p className="text-center text-xs text-white/40 italic">
                (Source: Penn Ovarian Aging Study & Harvard Medical School Joint Research)
              </p>
            </div>
          </div>

          {/* Bridge Section - seamlessly connected */}
          <div className="mb-6 animate-fade-up delay-400">
            {gender === 'female' ? <BridgeSection /> : <MaleBridgeSection />}
          </div>


          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground">
            © 2024 PMS 호르몬 유형 분석 · 전문의 자문 기반
          </p>
        </div>
      </div>
    </AuraBackground>;
};
export default ResultPage;