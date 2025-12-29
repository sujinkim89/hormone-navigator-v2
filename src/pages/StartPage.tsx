import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { Button } from "@/components/ui/button";
// import villainMirror from "@/assets/villain-mirror.png";
import mainImage from "/og-main.png";
import { useQuizStore } from "@/store/quizStore";
import { Zap } from "lucide-react";

const StartPage = () => {
  const navigate = useNavigate();
  const setGender = useQuizStore(state => state.setGender);

  const handleStart = (gender: 'female' | 'male') => {
    setGender(gender);
    navigate('/info');
  };

  return (
    <AuraBackground>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
        <div className="w-full max-w-md mx-auto text-center relative z-10">

          {/* Main Title */}
          <div className="mb-2">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-3 py-1 mb-2 rounded-full">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">에겐/테토 분석 끝판왕</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-black tracking-tight">
              <span className="text-gradient-meme">PMS 빌런 분석기</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="space-y-3 mb-5">
            <p className="text-lg sm:text-xl font-medium text-foreground leading-relaxed">
              한 달에 한 번,<br />
              나도 모르게 <span className="text-primary font-bold">빌런 모드 ON</span>?
            </p>

            {/* Key Message */}
            <div className="flex items-center justify-center gap-3 text-base font-semibold">
              <span className="text-muted-foreground line-through">성격 문제 ✗</span>
              <span className="text-primary">→</span>
              <span className="text-primary">호르몬 쿠데타 ✓</span>
            </div>
          </div>

          {/* Villain Image */}
          <div className="flex justify-center mb-5">
            <img
              src={mainImage}
              alt="PMS 밈: 누군가를 죽이고 싶으면서 프레첼도 먹고 싶은 심리"
              className="w-full max-w-sm rounded-xl shadow-2xl"
            />
          </div>

          {/* Description */}
          <div className="text-muted-foreground text-sm leading-relaxed mb-6 px-2 space-y-2">
            <p>
              은밀한 정체성이 폭발하는 시기,<br />
              바로 <span className="text-primary font-semibold">PMS(월경 전 증후군)</span>
            </p>
            <p>
              의사가 직접 만든 RHABO와 함께<br />
              나의 호르몬 패턴을 분석하기
            </p>
          </div>

          {/* CTA Buttons - 크기 줄임 */}
          <div className="space-y-3">
            <Button
              variant="female"
              size="lg"
              className="w-full"
              onClick={() => handleStart('female')}
            >
              <span className="text-base">🔥</span>
              <span className="text-sm">PMS 빌런 진단</span>
              <span className="text-xs opacity-80 ml-1">(본인용)</span>
            </Button>

            <Button
              variant="male"
              size="lg"
              className="w-full"
              onClick={() => handleStart('male')}
            >
              <span className="text-base">🛡️</span>
              <span className="text-sm">PMS 대응력 진단</span>
              <span className="text-xs opacity-80 ml-1">(파트너용)</span>
            </Button>
          </div>
        </div>
      </div>
    </AuraBackground>
  );
};

export default StartPage;
