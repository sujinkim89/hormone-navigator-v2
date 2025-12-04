import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useQuizStore } from "@/store/quizStore";
import { quizQuestions, calculateType } from "@/data/quizData";

const QuizPage = () => {
  const navigate = useNavigate();
  const { nickname, gender, currentQuestion, answers, addAnswer, setResultType } = useQuizStore();

  // Redirect if no nickname
  useEffect(() => {
    if (!nickname) {
      navigate('/');
    }
  }, [nickname, navigate]);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  const handleAnswer = (type: string) => {
    addAnswer(type);
    
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
              <span className="text-sm font-medium text-muted-foreground">
                Q{currentQuestion + 1} / {quizQuestions.length}
              </span>
              <span className="text-sm font-medium text-primary">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Situation */}
            <div className="bg-card rounded-2xl p-5 shadow-card mb-6 animate-fade-up delay-100">
              <div className="text-sm text-muted-foreground mb-2">상황</div>
              <p className="text-base font-medium text-foreground leading-relaxed">
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
                  className="w-full h-auto py-4 px-5 text-left justify-start whitespace-normal"
                  onClick={() => handleAnswer(option.type)}
                >
                  <span className="text-base leading-relaxed">
                    {option.text}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Nickname indicator */}
          <div className="mt-6 text-center animate-fade-up delay-400">
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
