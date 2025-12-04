import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { EggCharacter } from "@/components/EggCharacter";
import { Button } from "@/components/ui/button";
import { useQuizStore } from "@/store/quizStore";
import { Sparkles } from "lucide-react";

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
        {/* Snowflakes decoration */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white/20 animate-float-chat"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                fontSize: `${8 + Math.random() * 12}px`,
              }}
            >
              ❄
            </div>
          ))}
        </div>

        <div className="w-full max-w-md mx-auto text-center relative z-10">
          {/* Year-end Special Badge */}
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 px-3 py-1.5 rounded-full mb-4 animate-fade-up">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">연말특집</span>
            <Sparkles className="w-3.5 h-3.5 text-primary" />
          </div>

          {/* Egg Character */}
          <div className="mx-auto mb-4 animate-fade-up">
            <EggCharacter size="lg" mood="worried" />
          </div>

          {/* Floating chat bubbles decoration */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <div className="bg-card px-2.5 py-1.5 rounded-xl shadow-card text-xs animate-float-chat">연말인데 왜 싸워</div>
            <div className="bg-primary/10 px-2.5 py-1.5 rounded-xl shadow-card text-xs animate-float-chat delay-100">에겐 테토 논란</div>
            <div className="bg-card px-2.5 py-1.5 rounded-xl shadow-card text-xs animate-float-chat delay-200">12월은 왜 이래</div>
            <div className="bg-primary/10 px-2.5 py-1.5 rounded-xl shadow-card text-xs animate-float-chat delay-300">호르몬 탓이야 😤</div>
          </div>

          {/* Headlines */}
          <div className="space-y-4 mb-8">
            <h1 className="font-display text-2xl sm:text-3xl leading-tight animate-fade-up delay-100">
              <span className="text-gradient-meme">에겐 테토 논란 종결</span>
            </h1>
            <h2 className="font-display text-xl sm:text-2xl text-foreground animate-fade-up delay-200">
              연말연시 감정 롤러코스터,<br />
              진짜 호르몬 분석
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed animate-fade-up delay-300">
              2024년 마지막 날까지 흔드는 호르몬,
              <br />
              어떤 호르몬 자아가 튀어나올까?
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4 animate-fade-up delay-400">
            <Button variant="female" size="xl" className="w-full" onClick={() => handleStart('female')}>
              👩 여성 PMS 유형 진단
            </Button>
            
            <p className="text-xs text-muted-foreground">내 호르몬 패턴 팩폭 받기</p>

            <Button variant="male" size="xl" className="w-full" onClick={() => handleStart('male')}>
              <span className="text-lg">👨</span>
              <span>남성 PMS 대응 유형</span>
            </Button>
            
            <p className="text-xs text-muted-foreground">여친의 발작 버튼 위치 분석</p>
          </div>
        </div>
      </div>
    </AuraBackground>
  );
};

export default StartPage;
