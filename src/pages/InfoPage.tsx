import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { EggCharacter } from "@/components/EggCharacter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuizStore } from "@/store/quizStore";
import { AlertTriangle, Sparkles, Heart, BookOpen } from "lucide-react";
const InfoPage = () => {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState("");
  const setNickname = useQuizStore(state => state.setNickname);
  const gender = useQuizStore(state => state.gender);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputName.trim()) {
      setNickname(inputName.trim());
      navigate('/quiz');
    }
  };
  return <AuraBackground>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto">
          {/* Egg Character */}
          <div className="flex justify-center mb-4 animate-fade-up">
            <EggCharacter size="sm" mood="angry" />
          </div>

          {/* Warning Title */}
          <div className="text-center mb-6 animate-fade-up">
            <h1 className="font-display text-2xl sm:text-3xl text-foreground mb-2">
              잠깐! 🚨
            </h1>
            <p className="font-display text-xl text-gradient-meme">그거 네 여자친구 성격 아니야!</p>
          </div>

          {/* Nickname Input */}
          <div className="space-y-2 mb-6 animate-fade-up delay-100">
            <label className="text-sm font-medium text-foreground">
              {gender === 'female' ? '👩 언니 본캐 이름이 뭐야?' : '👨 형 이름이 뭐야?'}
            </label>
            <Input type="text" placeholder="닉네임 입력" value={inputName} onChange={e => setInputName(e.target.value)} className="h-14 text-base rounded-2xl border-2 border-border focus:border-primary bg-card" maxLength={10} />
            <p className="text-xs text-muted-foreground">
              결과에 사용될 이름이에요 (최대 10자)
            </p>
          </div>

          {/* Warning Box */}
          <div className="bg-accent/20 border-2 border-accent rounded-2xl p-4 mb-6 animate-fade-up delay-100">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
              <p className="text-sm text-accent-foreground">본 테스트는 재미로 보는 심리테스트입니다.
진지한 의학 진단은 의사에게. <br />
                진지한 의학 진단은 병원으로!
              </p>
            </div>
          </div>

          {/* Selling Points */}
          <div className="space-y-3 mb-8 animate-fade-up delay-200">
            <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-foreground">
                <span className="font-medium">네 여자친구 이상한 사람 아님!</span> 호르몬 탓임!
              </p>
            </div>
            
            <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-sm text-foreground">
                <span className="font-medium">내 여자친구의 발작 버튼</span>을 알면 평화가 옴
              </p>
            </div>
            
            <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card">
              <div className="w-10 h-10 rounded-full bg-violet/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-violet" />
              </div>
              <p className="text-sm text-foreground">전문의가 자문한 '찐 분석'<span className="font-medium">전문의가 자문한 </span>의 '찐 분석'
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <form onSubmit={handleSubmit} className="animate-fade-up delay-300">
            <Button type="submit" variant="meme" size="xl" className="w-full" disabled={!inputName.trim()}>
              호르몬 자아 분석 시작! 🔮
            </Button>
          </form>

          {/* Back button */}
          <button onClick={() => navigate('/')} className="w-full mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← 처음으로
          </button>
        </div>
      </div>
    </AuraBackground>;
};
export default InfoPage;