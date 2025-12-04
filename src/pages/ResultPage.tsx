import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { Button } from "@/components/ui/button";
import { TypeChart } from "@/components/TypeChart";
import { ResultCarousel } from "@/components/ResultCarousel";
import { useQuizStore } from "@/store/quizStore";
import { getTypeData, calculateCoordinates } from "@/data/quizData";
import { Share2, RotateCcw, Crown, Clock, Baby, BarChart3, Lock, Sparkles, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const ResultPage = () => {
  const navigate = useNavigate();
  const { nickname, gender, resultType, answers, resetQuiz } = useQuizStore();
  const [blurRevealed, setBlurRevealed] = useState(false);

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
            <p className="text-sm text-muted-foreground mb-2">
              {nickname}님의 {gender === 'female' ? '호르몬 자아' : 'PMS 대응 유형'}는...
            </p>
            <div className={`inline-block px-6 py-4 rounded-3xl bg-gradient-to-r ${type.color} shadow-meme`}>
              <span className="text-4xl mb-2 block">{type.emoji}</span>
              <h1 className="font-display text-2xl text-primary-foreground">
                {type.title}
              </h1>
            </div>
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
              <p className="text-xs text-violet mt-3">
                💡 캡처해서 보내주세요!
              </p>
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

          {/* 🚨 Bridge Section */}
          <div className="bg-gradient-to-br from-rose/20 to-violet/20 border border-rose/30 rounded-2xl p-5 mb-6 animate-fade-up delay-400">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-rose" />
              <h3 className="font-display text-lg text-rose">PMS 기간 감정 폭주는 난소 시계의 경고입니다</h3>
            </div>
            
            <p className="text-sm font-medium text-foreground mb-4">
              왜 갈수록 PMS가 더 심해지고, 감정이 널뛰는 것 같을까요?
            </p>

            {/* Blur reveal section */}
            <div 
              className="relative rounded-xl overflow-hidden cursor-pointer mb-4"
              onClick={() => setBlurRevealed(true)}
            >
              <div className={`bg-card p-4 transition-all duration-500 ${blurRevealed ? 'blur-0' : 'blur-md'}`}>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  • 기본적으로 생리 시작 전에는 기분을 좋게 하는 에스트로겐과 진정 효과를 주는 프로게스테론 분비가 급격히 줄어듭니다.
                  <br /><br />
                  • 난소 기능이 떨어지면 호르몬이 규칙적으로 하강하지 않고 예측 불가능하게 요동칩니다.
                  <br /><br />
                  • 지금 PMS 기간에 겪는 감정 폭주는 단순한 성격 문제가 아니라, <strong className="text-rose">당신의 난소 시계가 가속되고 있다는 위험한 경고</strong>입니다.
                </p>
              </div>
              
              {!blurRevealed && (
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 backdrop-blur-sm">
                  <div className="text-center bg-card/90 px-4 py-3 rounded-xl shadow-lg">
                    <Lock className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-sm font-medium text-foreground">
                      터치해서 확인하기 👆
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Scientific Explanation */}
          <div className="bg-card rounded-2xl p-5 shadow-card mb-6 animate-fade-up delay-400">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🔬</span>
              <h3 className="font-display text-base text-foreground">여성 호르몬 건강의 과학적 검증</h3>
            </div>
            
            <p className="text-xs text-muted-foreground mb-4">
              심리 테스트만으로는 미래를 바꿀 수 없습니다. 당신의 미래 통제권을 확보하려면 난소의 정확한 상태를 파악해야 합니다.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🥚</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">AMH (난소 나이)</p>
                  <p className="text-xs text-muted-foreground">난소의 잔여 자원 (통장 잔고) - 미래 임신 마감 시기 예측</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-rose/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🚨</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">FSH (난포자극호르몬)</p>
                  <p className="text-xs text-muted-foreground">난소의 SOS 경고음 - 난소 기능 저하 신호</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-violet/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">💫</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">E2 (에스트로겐)</p>
                  <p className="text-xs text-muted-foreground">행복 & 활력 호르몬 - PMS 근본 원인 확인</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-deep-purple/20 to-violet/20 border border-violet/30 rounded-2xl p-5 mb-6 animate-fade-up delay-500">
            <p className="text-sm font-medium text-foreground text-center mb-2">
              불안을 '데이터 기반 통제권'으로 바꾸세요
            </p>
            <p className="text-xs text-muted-foreground text-center">
              주체적 여성으로서의 삶을 데이터 기반 예측 영역으로 끌어와야 합니다.
            </p>
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
