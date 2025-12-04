import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { Button } from "@/components/ui/button";
import { TypeChart } from "@/components/TypeChart";
import { ResultCarousel } from "@/components/ResultCarousel";
import { useQuizStore } from "@/store/quizStore";
import { hormoneTypes, calculateCoordinates } from "@/data/quizData";
import { Share2, RotateCcw, Crown, Clock, Baby, BarChart3, MessageCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";

const ResultPage = () => {
  const navigate = useNavigate();
  const { nickname, gender, resultType, answers, resetQuiz } = useQuizStore();
  const [blurRevealed, setBlurRevealed] = useState(false);

  // Redirect if no result
  useEffect(() => {
    if (!resultType || !nickname) {
      navigate('/');
    }
  }, [resultType, nickname, navigate]);

  if (!resultType || !nickname) return null;

  const type = hormoneTypes[resultType];
  const coordinates = calculateCoordinates(answers);

  const handleShare = async () => {
    const shareText = `나의 PMS 호르몬 유형은 "${type.title}" ${type.emoji}\n${type.description}\n\n나도 테스트하기 👇`;
    
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
            <p className="text-sm text-muted-foreground mb-2">
              {nickname}님의 호르몬 자아는...
            </p>
            <div className={`inline-block px-6 py-4 rounded-3xl bg-gradient-to-r ${type.color} shadow-meme`}>
              <span className="text-4xl mb-2 block">{type.emoji}</span>
              <h1 className="font-display text-2xl text-primary-foreground">
                {type.title}
              </h1>
            </div>
          </div>

          {/* Type Description */}
          <div className="bg-card rounded-2xl p-5 shadow-card mb-6 animate-fade-up delay-100">
            <p className="text-center text-foreground leading-relaxed">
              {type.description}
            </p>
          </div>

          {/* Coordinate Chart */}
          <div className="mb-6 animate-fade-up delay-200">
            <h3 className="font-display text-lg text-center mb-4">내 호르몬 좌표</h3>
            <TypeChart x={coordinates.x} y={coordinates.y} />
          </div>

          {/* Carousel Tabs */}
          <div className="mb-6 animate-fade-up delay-300">
            <ResultCarousel type={type} nickname={nickname} />
          </div>

          {/* BF Guide (Female only) */}
          {gender === 'female' && (
            <div className="bg-violet/10 border border-violet/30 rounded-2xl p-5 mb-6 animate-fade-up delay-400">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle className="w-5 h-5 text-violet" />
                <h3 className="font-medium text-foreground">남친 필독 가이드</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {type.bfGuide}
              </p>
              <p className="text-xs text-violet">
                💡 캡처해서 보내주세요!
              </p>
            </div>
          )}

          {/* Compatibility */}
          <div className="grid grid-cols-2 gap-3 mb-8 animate-fade-up delay-500">
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

          {/* 🚨 Bridge Section */}
          <div className="bg-gradient-to-br from-rose/20 to-violet/20 border border-rose/30 rounded-2xl p-5 mb-6 animate-fade-up delay-500">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🚨</span>
              <h3 className="font-display text-lg text-rose">긴급 알림</h3>
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-3">
              <strong>30대 후반, 당신의 '감정 폭주'는</strong>
              <br />
              난소 시계의 가속 경고일 수 있습니다.
            </p>
            <p className="text-xs text-muted-foreground">
              PMS가 심해지는 건 난소 노화의 신호! 호르몬 검사로 확인해보세요.
            </p>
          </div>

          {/* Meme Sales Section */}
          <div className="mb-6 animate-fade-up delay-500">
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground">
                💔 골반이 안 멈추는데 어떡해... 3화
              </p>
              <p className="font-display text-lg text-foreground">파국을 막는 법</p>
            </div>
            
            <div 
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setBlurRevealed(true)}
            >
              <div className="aspect-video bg-gradient-to-br from-hot-pink/30 to-violet/30 flex items-center justify-center">
                <div className={`transition-all duration-500 ${blurRevealed ? 'blur-0' : 'blur-lg'}`}>
                  <span className="text-6xl">💔</span>
                </div>
              </div>
              
              {!blurRevealed && (
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 backdrop-blur-sm">
                  <div className="text-center">
                    <p className="text-primary-foreground font-medium text-sm">
                      터치해서 비극 막기 👆
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Premium Sales Card */}
          <div className="bg-gradient-card border-2 border-primary/30 rounded-3xl p-6 mb-8 shadow-lg animate-fade-up delay-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg text-foreground">
                나의 완경 여정 분석
              </h3>
              <span className="bg-gradient-meme text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Crown className="w-3 h-3" />
                PREMIUM
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-5">
              미래 임신 계획 & 호르몬 3종 종합 분석
            </p>

            {/* Key Values */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">완경 여정 예측</p>
                  <p className="text-xs text-muted-foreground">미래를 대비하세요</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Baby className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">임신/시술 권장 시기</p>
                  <p className="text-xs text-muted-foreground">타이밍이 중요해요</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-violet" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">호르몬 3종 분석</p>
                  <p className="text-xs text-muted-foreground">FSH, AMH, E2 종합 진단</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <Button variant="premium" size="lg" className="w-full">
                <Sparkles className="w-5 h-5" />
                혜택 받고 시작하기
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                상품 바로 구경하기
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6 animate-fade-up delay-500">
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
