import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { useQuizStore } from "@/store/quizStore";
import { motion, AnimatePresence } from "framer-motion";

const CountdownPage = () => {
  const navigate = useNavigate();
  const nickname = useQuizStore(state => state.nickname);
  const gender = useQuizStore(state => state.gender);
  const [phase, setPhase] = useState<'intro' | 'countdown' | 'go'>('intro');
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (!nickname) {
      navigate('/');
      return;
    }

    // Phase 1: Show intro message for 2 seconds
    const introTimer = setTimeout(() => {
      setPhase('countdown');
    }, 2000);

    return () => clearTimeout(introTimer);
  }, [nickname, navigate]);

  useEffect(() => {
    if (phase !== 'countdown') return;

    if (count === 0) {
      setPhase('go');
      setTimeout(() => {
        navigate('/quiz');
      }, 500);
      return;
    }

    const countTimer = setTimeout(() => {
      setCount(prev => prev - 1);
    }, 800);

    return () => clearTimeout(countTimer);
  }, [phase, count, navigate]);

  const isFemale = gender === 'female';

  return (
    <AuraBackground>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto text-center">
          <AnimatePresence mode="wait">
            {phase === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Loading dots animation */}
                <div className="flex justify-center gap-2 mb-8">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-primary rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                {/* Main message */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="font-display text-2xl sm:text-3xl text-foreground leading-relaxed mb-4">
                    {isFemale ? (
                      <>
                        PMS기간<br />
                        당신의 호르몬이<br />
                        <span className="text-primary font-bold">조정대를 잡았습니다.</span>
                      </>
                    ) : (
                      <>
                        PMS기간<br />
                        여자친구의 호르몬이<br />
                        <span className="text-primary font-bold">폭주 중입니다.</span>
                      </>
                    )}
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-muted-foreground text-base leading-relaxed"
                >
                  {isFemale ? (
                    <>
                      본능적으로 <span className="text-primary font-semibold">'솔직하게'</span><br />
                      터져 나오는 반응을 고르세요.
                    </>
                  ) : (
                    <>
                      본능적으로 <span className="text-primary font-semibold">'솔직하게'</span><br />
                      터져 나오는 반응을 고르세요.
                    </>
                  )}
                </motion.p>
              </motion.div>
            )}

            {phase === 'countdown' && (
              <motion.div
                key="countdown"
                className="relative h-40 flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={count}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 2, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    className="font-display text-8xl sm:text-9xl font-black text-primary"
                  >
                    {count}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            )}

            {phase === 'go' && (
              <motion.div
                key="go"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-40 flex items-center justify-center"
              >
                <span className="font-display text-6xl sm:text-7xl font-black text-gradient-meme">
                  START!
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AuraBackground>
  );
};

export default CountdownPage;
