import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { EggCharacter } from "@/components/EggCharacter";
import { useQuizStore } from "@/store/quizStore";
import { motion, AnimatePresence } from "framer-motion";

const loadingMessages = [
  {
    emoji: "🧬",
    title: "[호르몬 맞다이]",
    text: "에겐 vs 테토 지분싸움 데스매치 중",
  },
  {
    emoji: "🧠",
    title: "[눈물 성분 분석]",
    text: "오후 2시 사무실에서 흘린 눈물 원인 판독 중",
  },
  {
    emoji: "🛒",
    title: "[장바구니 검수]",
    text: "새벽 2시 결제 건 호르몬 소행인지 확인 중",
  },
];

const AnalyzingPage = () => {
  const navigate = useNavigate();
  const nickname = useQuizStore(state => state.nickname);
  const resultType = useQuizStore(state => state.resultType);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (!nickname || !resultType) {
      navigate('/');
      return;
    }

    // 메시지 순환
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex(prev => (prev + 1) % loadingMessages.length);
    }, 1500);

    // 4.5초 후 결과 페이지로 이동
    const navigateTimer = setTimeout(() => {
      navigate('/result');
    }, 4500);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(navigateTimer);
    };
  }, [nickname, resultType, navigate]);

  const currentMessage = loadingMessages[currentMessageIndex];

  return (
    <AuraBackground>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-2xl sm:text-3xl text-foreground mb-8"
          >
            호르몬 분석 중...
          </motion.h1>

          {/* Egg Character */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <EggCharacter size="lg" mood="worried" animate={true} />
          </motion.div>

          {/* Loading Messages */}
          <div className="h-24 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMessageIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl p-4 shadow-card border border-primary/20"
              >
                <div className="flex items-center gap-2 mb-2 justify-center">
                  <span className="text-2xl">{currentMessage.emoji}</span>
                  <span className="text-sm font-bold text-primary">{currentMessage.title}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {currentMessage.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-2 mt-8"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Nickname */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xs text-muted-foreground mt-6"
          >
            <span className="font-medium text-primary">{nickname}</span>님의 호르몬 자아를 분석하고 있어요
          </motion.p>
        </div>
      </div>
    </AuraBackground>
  );
};

export default AnalyzingPage;
