import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { EggCharacter } from "@/components/EggCharacter";
import { Button } from "@/components/ui/button";
import { TypeChart } from "@/components/TypeChart";
import { ResultCarousel } from "@/components/ResultCarousel";
import { BridgeSection } from "@/components/BridgeSection";
import { MaleBridgeSection } from "@/components/MaleBridgeSection";
import { AllTypesSection } from "@/components/AllTypesSection";
import { CredibilitySection } from "@/components/CredibilitySection";
import { useQuizStore } from "@/store/quizStore";
import { getTypeData, calculateCoordinates } from "@/data/quizData";
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

  // Calculate percentile based on how extreme the position is
  const calculatePercentile = (x: number, y: number) => {
    // Distance from center (0,0) - more extreme = rarer
    const distance = Math.sqrt(x * x + y * y);
    // Max distance would be sqrt(2) ≈ 1.414 if both x and y are at max
    const maxDistance = Math.sqrt(2);
    // Convert to percentile (higher distance = lower percentile = rarer)
    const percentile = Math.round((1 - distance / maxDistance) * 50) + 1;
    return Math.max(1, Math.min(50, percentile));
  };

  const percentile = calculatePercentile(coordinates.x, coordinates.y);

  // Get type description based on result
  const getTypeDescription = () => {
    if (resultType.includes('TD') || resultType.includes('DT')) return '치타형 리더';
    if (resultType.includes('TS') || resultType.includes('ST')) return '판다형 완벽주의자';
    if (resultType.includes('ED') || resultType.includes('DE')) return '햄스터형 감성파';
    if (resultType.includes('ES') || resultType.includes('SE')) return '늘보형 힐러';
    return '독특한 유형';
  };

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
          {/* Result Header - Hero Section */}
          <div className="text-center mb-8 animate-fade-up">
            <p className="text-sm text-muted-foreground mb-4">
              {nickname}님의 {gender === 'female' ? '호르몬 자아' : 'PMS 대응 유형'}는...
            </p>
            
            {/* Title Badge */}
            <div className={`inline-block px-8 py-3 rounded-full bg-gradient-to-r ${type.color} shadow-meme mb-6`}>
              <h1 className="font-display text-2xl text-primary-foreground">
                {type.title}
              </h1>
            </div>

            {/* Large Emoji */}
            <div className="text-8xl mb-4 drop-shadow-lg">
              {type.emoji}
            </div>
            
            {/* Hook Line */}
            <p className="text-base text-foreground font-medium px-4 mb-6">
              "{type.hookLine}"
            </p>

            {/* Age Comparison */}
            <div className="inline-flex items-center gap-4 bg-card rounded-2xl px-6 py-4 shadow-card">
              <div className="text-center">
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <span>👶</span> 외모
                </p>
                <p className="text-2xl font-bold text-primary">24세</p>
              </div>
              <span className="text-sm text-muted-foreground font-medium">VS</span>
              <div className="text-center">
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <span>🔥</span> 호르몬
                </p>
                <p className="text-2xl font-bold text-[#FF6B6B]">38세</p>
              </div>
            </div>
          </div>

          {/* Hormone DNA Section with Chart */}
          <div className="mb-6 animate-fade-up delay-100">
            <div className="bg-gradient-to-br from-[#F8E8FF] to-[#E8D4F8] rounded-3xl p-4 shadow-card">
              {/* Header */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-xl">🧬</span>
                <h3 className="font-display text-lg font-bold text-[#9D4EDD]">
                  내 호르몬 DNA
                </h3>
              </div>

              {/* Percentile Badge */}
              <div className="flex justify-center mb-3">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9D4EDD] to-[#7C3AED] text-white px-4 py-2 rounded-full">
                  <span className="font-bold">상위 {percentile}%</span>
                  <span className="text-white/80 text-sm">{getTypeDescription()}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-center text-sm text-muted-foreground mb-4">
                빠른 결단력으로 조직을 이끄는 추진형
              </p>

              {/* Chart */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4">
                <TypeChart x={coordinates.x} y={coordinates.y} />
              </div>
            </div>
          </div>

          {/* Carousel Tabs - Detailed Info */}
          <div className="mb-6 animate-fade-up delay-200">
            <ResultCarousel type={type} nickname={nickname} gender={gender} />
          </div>

          {/* Partner Guide Section */}
          <div className="bg-gradient-to-br from-[#F8E8FF] to-[#E8D4F8] rounded-3xl p-4 mb-6 animate-fade-up delay-300 shadow-card">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
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
            <p className="text-center text-sm text-muted-foreground mb-3">
              PMS 대처유형 궁합
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">BEST 궁합</p>
                <p className="text-sm font-bold text-foreground">{type.bestMatch}</p>
                <p className="text-xs text-[#9D4EDD] mt-1">서로 부족한 부분을 채워줌</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">WORST 궁합</p>
                <p className="text-sm font-bold text-foreground">{type.worstMatch}</p>
                <p className="text-xs text-rose-500 mt-1">감정 충돌 위험 높음</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full bg-white/90 border-[#9D4EDD]/30 hover:bg-white text-foreground font-medium"
              onClick={handleShare}
            >
              <Share2 className="w-5 h-5 mr-2 text-[#9D4EDD]" />
              테스트 링크 공유하기
            </Button>
            <p className="text-xs text-center text-[#9D4EDD] mt-2">
              "궁합 테스트하고 PMS 평화협정 맺기"
            </p>
          </div>

          {/* All Types Section */}
          <div className="mb-6 animate-fade-up delay-400">
            <AllTypesSection currentTypeCode={resultType} gender={gender} />
          </div>

          {/* Bridge Section */}
          <div className="mb-6 animate-fade-up delay-400">
            {gender === 'female' ? <BridgeSection /> : <MaleBridgeSection />}
          </div>

          {/* Credibility Section */}
          <div className="mb-8 animate-fade-up delay-500">
            <CredibilitySection />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6 animate-fade-up delay-600">
            <Button variant="meme" size="lg" className="flex-1" onClick={handleShare}>
              <Share2 className="w-5 h-5" />
              공유하기
            </Button>
            <Button variant="outline" size="lg" onClick={handleRestart}>
              <RotateCcw className="w-5 h-5" />
            </Button>
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