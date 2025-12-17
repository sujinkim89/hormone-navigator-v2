import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { EggCharacter, EggMood } from "@/components/EggCharacter";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useQuizStore } from "@/store/quizStore";
import { femaleQuizQuestions, maleQuizQuestions, calculateType } from "@/data/quizData";
import { ChevronLeft } from "lucide-react";

const QuizPage = () => {
  const navigate = useNavigate();
  const { nickname, gender, currentQuestion, answers, addAnswer, goBack, setResultType, lastSelectedIndex } = useQuizStore();

  // Redirect if no nickname
  useEffect(() => {
    if (!nickname) {
      navigate('/');
    }
  }, [nickname, navigate]);

  const quizQuestions = gender === 'male' ? maleQuizQuestions : femaleQuizQuestions;
  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  // Dynamic egg mood based on progress
  const eggMood: EggMood = useMemo(() => {
    if (progress < 20) return "worried";
    if (progress < 40) return "tired";
    if (progress < 60) return "angry";
    if (progress < 80) return "sad";
    return "happy";
  }, [progress]);

  const handleAnswer = (type: string, index: number) => {
    addAnswer(type, index);
    
    // Check if this was the last question
    if (currentQuestion === quizQuestions.length - 1) {
      const finalAnswers = [...answers, type];
      const resultType = calculateType(finalAnswers, gender || 'female');
      setResultType(resultType);
      navigate('/result');
    }
  };

  if (!question) return null;

  return (
    <AuraBackground>
      <div className="min-h-screen flex flex-col px-4 py-6">
        <div className="w-full max-w-md mx-auto flex-1 flex flex-col">
          {/* Progress Header */}
          <div className="mb-6 animate-fade-up">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {currentQuestion > 0 && (
                  <button
                    onClick={goBack}
                    className="p-1 rounded-full hover:bg-muted/50 transition-colors"
                    aria-label="이전 질문"
                  >
                    <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  </button>
                )}
                <span className="text-sm font-medium text-muted-foreground">
                  Q{currentQuestion + 1} / {quizQuestions.length}
                </span>
              </div>
              <span className="text-sm font-medium text-primary">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Situation */}
            <div className="rounded-2xl p-5 shadow-card mb-6 animate-fade-up delay-100" style={{ background: 'linear-gradient(to right, #A78BBA, #7B5BA0)' }}>
              <div className="text-sm text-white/80 mb-2">현재 상황은?</div>
              <p className="text-base font-medium text-white leading-relaxed">
                {question.situation}
              </p>
            </div>

            {/* Question */}
            <div className="text-center mb-6 animate-fade-up delay-200">
              <h2 className="font-display text-xl text-foreground">
                {question.question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3 animate-fade-up delay-300">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant="quiz"
                  size="lg"
                  className={`w-full h-auto py-4 px-5 text-left justify-start whitespace-normal ${
                    lastSelectedIndex === index ? 'ring-2 ring-primary ring-offset-2' : ''
                  }`}
                  onClick={() => handleAnswer(option.type, index)}
                >
                  <span className="text-base leading-relaxed">
                    {option.text}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Nickname indicator with Egg */}
          <div className="mt-6 flex items-center justify-center gap-2 animate-fade-up delay-400">
            <EggCharacter size="xs" mood={eggMood} animate={false} />
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-primary">{nickname}</span>님의 호르몬 분석 중...
            </p>
          </div>
        </div>
      </div>
    </AuraBackground>
  );
};

export default QuizPage;
