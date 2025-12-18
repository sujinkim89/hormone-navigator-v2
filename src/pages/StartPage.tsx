import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { Button } from "@/components/ui/button";
import villainMirror from "@/assets/villain-mirror.png";
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
          <div className="mb-6">
            <h1 className="font-display text-3xl sm:text-4xl font-black tracking-tight mb-2">
              <span className="text-gradient-meme">PMS 빌런 분석기</span>
            </h1>
            <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">에겐/테토 분석 끝판왕</span>
            </div>
          </div>

          {/* Subtitle */}
          <div className="space-y-3 mb-6">
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
          <div className="flex justify-center mb-6">
            <img 
              src={villainMirror} 
              alt="거울 속 빌런 모습" 
              className="w-full max-w-xs rounded-xl shadow-2xl"
            />
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 px-2">
            당신을 조종하는 호르몬 정체성을 폭로합니다.<br />
          
          </p>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <Button 
              variant="female" 
              size="xl" 
              className="w-full" 
              onClick={() => handleStart('female')}
            >
              <span className="text-lg">🔥</span>
              <span>PMS 빌런 진단</span>
              <span className="text-xs opacity-80 ml-1">(본인용)</span>
            </Button>

            <Button 
              variant="male" 
              size="xl" 
              className="w-full" 
              onClick={() => handleStart('male')}
            >
              <span className="text-lg">🛡️</span>
              <span>PMS 대응력 진단</span>
              <span className="text-xs opacity-80 ml-1">(파트너용)</span>
            </Button>
          </div>
        </div>
      </div>
    </AuraBackground>
  );
};

export default StartPage;
