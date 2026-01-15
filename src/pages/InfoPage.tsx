import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { Button } from "@/components/ui/button";
import { useQuizStore } from "@/store/quizStore";
import { AlertTriangle, Sparkles, Heart, BookOpen, RefreshCw } from "lucide-react";
import { getRandomNickname } from "@woowa-babble/random-nickname";
import { trackNicknameGenerated, trackQuizStart } from "@/lib/analytics";

const generateNickname = (): string => {
  const types = ['animals', 'heros', 'characters', 'monsters'] as const;
  const randomType = types[Math.floor(Math.random() * types.length)];
  return getRandomNickname(randomType);
};

const InfoPage = () => {
  const navigate = useNavigate();
  const [nickname, setNicknameState] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const setNickname = useQuizStore(state => state.setNickname);
  const gender = useQuizStore(state => state.gender);

  const isFemale = gender === 'female';

  useEffect(() => {
    setNicknameState(generateNickname());
  }, []);

  const handleRegenerate = () => {
    trackNicknameGenerated();
    setIsSpinning(true);
    setNicknameState(generateNickname());
    setTimeout(() => setIsSpinning(false), 300);
  };

  const handleSubmit = () => {
    if (nickname.trim()) {
      trackQuizStart(gender || 'female');
      setNickname(nickname.trim());
      navigate('/countdown');
    }
  };

  return (
    <AuraBackground>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto">

          {/* Warning Title */}
          <div className="text-center mb-6">
            <h1 className="font-display text-2xl sm:text-3xl text-foreground mb-2">
              잠깐! 🚨
            </h1>
            <p className="font-display text-xl text-gradient-meme">
              {isFemale ? '그날 예민한거 네 성격 아니야!' : '그날 예민한거 네 여자친구 성격 아니야!'}
            </p>
          </div>

          {/* Random Nickname */}
          <div className="space-y-2 mb-6">
            <label className="text-sm font-medium text-foreground">
              {isFemale ? '👩 언니 오늘의 닉네임은...' : '👨 형 오늘의 닉네임은...'}
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNicknameState(e.target.value)}
                placeholder="닉네임을 입력하세요"
                className="flex-1 h-14 px-4 rounded-2xl border-2 border-primary/30 bg-card text-base font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                maxLength={10}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-14 w-14 rounded-2xl border-2 border-border"
                onClick={handleRegenerate}
              >
                <RefreshCw className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              직접 입력하거나 랜덤으로 뽑기!
            </p>
          </div>

          {/* Selling Points */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-foreground">
                <span className="font-medium">{isFemale ? '너 성격 이상한 사람 아님!' : '네 여자친구 성격 이상한 사람 아님!'}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-sm text-foreground">
                <span className="font-medium">{isFemale ? '나의 호르몬 발작 버튼' : '여자친구의 호르몬 발작 버튼'}</span>을 알면 평화가 옴
              </p>
            </div>

            <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card">
              <div className="w-10 h-10 rounded-full bg-violet/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-violet" />
              </div>
              <p className="text-sm text-foreground">
                <span className="font-medium">전문의가 자문한</span> '찐 분석'
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="button"
            variant="meme"
            size="xl"
            className="w-full"
            onClick={handleSubmit}
            disabled={!nickname.trim()}
          >
            호르몬 자아 분석 시작! 🔮
          </Button>

          {/* Warning Box */}
          <div className="bg-accent/20 border-2 border-accent rounded-2xl p-4 mt-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
              <p className="text-sm text-accent-foreground">
                본 테스트는 재미로 보는 심리테스트입니다.<br />
                진지한 의학 진단은 병원으로!
              </p>
            </div>
          </div>

          {/* Back button */}
          <button type="button" onClick={() => navigate('/')} className="w-full mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← 처음으로
          </button>
        </div>
      </div>
    </AuraBackground>
  );
};

export default InfoPage;
