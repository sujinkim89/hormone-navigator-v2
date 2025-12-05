import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TypeChart } from "@/components/TypeChart";
import { ResultCarousel } from "@/components/ResultCarousel";
import { PromoSection } from "@/components/PromoSection";
import { AllTypesSection } from "@/components/AllTypesSection";
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-4">
      <div className="max-w-[480px] mx-auto bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-br from-pink-400 to-pink-300 px-6 py-10 text-center text-white">
          <p className="text-sm opacity-90 mb-2">
            {nickname}님의 {gender === 'female' ? '호르몬 자아' : 'PMS 대응 유형'}는...
          </p>
          <div className="text-5xl mb-3">{type.emoji}</div>
          <h1 className="text-2xl font-bold">{type.title}</h1>
          <p className="text-sm opacity-80 mt-2 italic">{type.hookLine}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          
          {/* Coordinate Chart */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">내 호르몬 좌표</h2>
            <TypeChart x={coordinates.x} y={coordinates.y} />
          </section>

          {/* Carousel Tabs */}
          <section className="mb-8">
            <ResultCarousel type={type} nickname={nickname} gender={gender} />
          </section>

          {/* BF Guide (Female only) */}
          {gender === 'female' && type.bfGuide && (
            <section className="mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5">
                <h3 className="text-lg font-bold text-pink-500 mb-3 text-center">
                  📢 남친 필독 가이드
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {type.bfGuide}
                </p>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-xs text-gray-500 mb-3 text-center">
                    📸 캡쳐해서 파트너에게 공유해보세요!
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-white/80 border-pink-200 hover:bg-pink-50 text-gray-700"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    "자기야, 너도 해봐" 링크 보내기
                  </Button>
                  <p className="text-[10px] text-pink-400 mt-2 text-center">
                    🔥 궁합 테스트 해보자고 조르기 성공률 87%
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Compatibility */}
          <section className="mb-8">
            <div className="flex gap-3">
              <div className="flex-1 bg-gray-50 border-2 border-pink-100 rounded-2xl p-4 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <span className="text-3xl mb-2 block">🥰</span>
                <p className="text-xs text-gray-500 mb-1">BEST 궁합</p>
                <p className="text-sm font-bold text-gray-800">{type.bestMatch}</p>
              </div>
              <div className="flex-1 bg-gray-50 border-2 border-pink-100 rounded-2xl p-4 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <span className="text-3xl mb-2 block">😱</span>
                <p className="text-xs text-gray-500 mb-1">WORST 궁합</p>
                <p className="text-sm font-bold text-gray-800">{type.worstMatch}</p>
              </div>
            </div>
          </section>

          {/* All Types Section */}
          <section className="mb-8">
            <AllTypesSection currentTypeCode={resultType} gender={gender} />
          </section>
        </div>

        {/* Promo Section (Female only) */}
        {gender === 'female' && (
          <PromoSection onShare={handleShare} onRestart={handleRestart} />
        )}

        {/* For Male: Simple buttons */}
        {gender === 'male' && (
          <div className="px-6 pb-6">
            <div className="flex gap-3 mb-6">
              <Button 
                className="flex-1 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white rounded-xl h-12"
                onClick={handleShare}
              >
                <Share2 className="w-5 h-5 mr-2" />
                공유하기
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-pink-200 hover:bg-pink-50 rounded-xl h-12 px-4"
                onClick={handleRestart}
              >
                <RotateCcw className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-center text-xs text-gray-400 pb-4">
              © 2024 PMS 호르몬 유형 분석 · 전문의 자문 기반
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
