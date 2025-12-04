import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { EggCharacter } from "@/components/EggCharacter";
import { Button } from "@/components/ui/button";
import { useQuizStore } from "@/store/quizStore";
const StartPage = () => {
  const navigate = useNavigate();
  const setGender = useQuizStore(state => state.setGender);
  const handleStart = (gender: 'female' | 'male') => {
    setGender(gender);
    navigate('/info');
  };
  return <AuraBackground>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto text-center">
          {/* Egg Character */}
          <div className="mx-auto mb-4 animate-fade-up">
            <EggCharacter size="lg" mood="worried" />
          </div>

          {/* Floating chat bubbles decoration */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <div className="bg-card px-2.5 py-1.5 rounded-xl shadow-card text-xs animate-float-chat">헤어지자</div>
            <div className="bg-primary/10 px-2.5 py-1.5 rounded-xl shadow-card text-xs animate-float-chat delay-100">에그위키야</div>
            <div className="bg-card px-2.5 py-1.5 rounded-xl shadow-card text-xs animate-float-chat delay-200">PMS 땜에</div>
            <div className="bg-primary/10 px-2.5 py-1.5 rounded-xl shadow-card text-xs animate-float-chat delay-300">못 다니겠어 😤</div>
          </div>

          {/* Headlines */}
          <div className="space-y-4 mb-8">
            <h1 className="font-display text-2xl sm:text-3xl leading-tight animate-fade-up delay-100">
              <span className="text-gradient-meme">PMS로 기분이 날뛰는건</span>
            </h1>
            <h2 className="font-display text-xl sm:text-2xl text-foreground animate-fade-up delay-200">내 난소가 안 멈추는 탓일까?<br />
              안 멈추는 탓일까?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed animate-fade-up delay-300">
              호르몬 때문에 미쳐버릴 것 같은 날,
              <br />
              어떤 호르몬 자아가 튀어나올까?
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4 animate-fade-up delay-400">
            <Button variant="female" size="xl" className="w-full" onClick={() => handleStart('female')}>👩
여성 PMS 유형 진단
              
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
    </AuraBackground>;
};
export default StartPage;