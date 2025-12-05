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
  const { nickname, gender, resultType, answers, resetQuiz } = useQuizStore();

  useEffect(() => {
    if (!resultType || !nickname) {
      navigate('/');
    }
  }, [resultType, nickname, navigate]);

  if (!resultType || !nickname || !gender) return null;

  const type = getTypeData(resultType, gender);
  const coordinates = calculateCoordinates(answers);

  const handleShare = async () => {
    const shareText = `나의 PMS ${gender === 'female' ? '호르몬' : '대응'} 유형은 "${type.title}" ${type.emoji}\n\n나도 테스트하기 👇`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'PMS 호르몬 유형 테스트',
          text: shareText,
          url: window.location.origin,
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

  return (
    <AuraBackground>
      <div className="min-h-screen px-4 py-6">
        <div className="w-full max-w-md mx-auto">
          {/* Result Header */}
          <div className="text-center mb-6 animate-fade-up">
            <div className="flex justify-center mb-3">
              <EggCharacter size="sm" mood="happy" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              {nickname}님의 {gender === 'female' ? '호르몬 자아' : 'PMS 대응 유형'}는...
            </p>
            <div className={`inline-block px-6 py-4 rounded-3xl bg-gradient-to-r ${type.color} shadow-meme`}>
              <span className="text-4xl mb-2 block">{type.emoji}</span>
              <h1 className="font-display text-2xl text-primary-foreground">
                {type.title}
              </h1>
            </div>
            {/* Hook Line */}
            <p className="mt-3 text-sm text-muted-foreground italic">
              {type.hookLine}
            </p>
          </div>

          {/* Coordinate Chart */}
          <div className="mb-6 animate-fade-up delay-100">
            <h3 className="font-display text-lg text-center mb-4">내 호르몬 좌표</h3>
            <TypeChart x={coordinates.x} y={coordinates.y} />
          </div>

          {/* Carousel Tabs */}
          <div className="mb-6 animate-fade-up delay-200">
            <ResultCarousel type={type} nickname={nickname} gender={gender} />
          </div>

          {/* BF Guide (Female only) */}
          {gender === 'female' && type.bfGuide && (
            <div className="bg-violet/10 border border-violet/30 rounded-2xl p-5 mb-6 animate-fade-up delay-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">📢</span>
                <h3 className="font-medium text-foreground">남친 필독 가이드</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {type.bfGuide}
              </p>
              
              {/* Share prompt */}
              <div className="mt-4 pt-4 border-t border-violet/20">
                <p className="text-xs text-muted-foreground mb-3">
                  📸 캡쳐해서 파트너에게 공유해보세요!
                </p>
                
                {/* CTA for partner test */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-violet/20 border-violet/40 hover:bg-violet/30 text-foreground"
                  onClick={handleShare}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  "자기야, 너도 해봐" 링크 보내기
                </Button>
                <p className="text-[10px] text-violet mt-2 text-center">
                  🔥 궁합 테스트 해보자고 조르기 성공률 87%
                </p>
              </div>
            </div>
          )}

          {/* Compatibility */}
          <div className="grid grid-cols-2 gap-3 mb-8 animate-fade-up delay-300">
            <div className="bg-card rounded-2xl p-4 shadow-card text-center">
              <span className="text-2xl mb-1 block">🥰</span>
              <p className="text-xs text-muted-foreground mb-1">BEST 궁합</p>
              <p className="text-sm font-medium text-foreground">{type.bestMatch}</p>
            </div>
            <div className="bg-card rounded-2xl p-4 shadow-card text-center">
              <span className="text-2xl mb-1 block">😱</span>
              <p className="text-xs text-muted-foreground mb-1">WORST 궁합</p>
              <p className="text-sm font-medium text-foreground">{type.worstMatch}</p>
            </div>
          </div>

          {/* All Types Section */}
          <div className="mb-6 animate-fade-up delay-400">
            <AllTypesSection currentTypeCode={resultType} gender={gender} />
          </div>

          {/* Credibility Section */}
          <div className="mb-6 animate-fade-up delay-400">
            <CredibilitySection />
          </div>

          {/* Section Divider */}
          <div className="relative my-8 py-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-2xl" />
            <div className="relative text-center">
              <span className="text-xs text-muted-foreground bg-background px-4">✨ Premium Content ✨</span>
            </div>
          </div>

          {/* Bridge Section */}
          <div className="mb-8 animate-fade-up delay-500">
            {gender === 'female' ? <BridgeSection /> : <MaleBridgeSection />}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6 animate-fade-up delay-600">
            <Button 
              variant="meme" 
              size="lg" 
              className="flex-1"
              onClick={handleShare}
            >
              <Share2 className="w-5 h-5" />
              공유하기
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleRestart}
            >
              <RotateCcw className="w-5 h-5" />
            </Button>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground">
            © 2024 PMS 호르몬 유형 분석 · 전문의 자문 기반
          </p>
        </div>
      </div>
    </AuraBackground>
  );
};

export default ResultPage;
