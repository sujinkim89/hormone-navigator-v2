import { motion } from "framer-motion";

const CredibilitySection = () => {
  return (
    <div className="text-center py-8">
      {/* Main Card with Logo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-card border border-border/50 mx-4"
      >
        {/* RHA"BO Logo */}
        <div className="flex items-center justify-center gap-0.5 mb-4">
          <span className="text-3xl font-bold tracking-tight text-[#3B5BA9]">
            RHA
          </span>
          <span className="text-3xl font-bold text-[#3B5BA9] relative">
            <span className="absolute -top-1 left-0 text-lg">"</span>
            <span className="ml-2">BO</span>
          </span>
        </div>

        {/* Main Text */}
        <p className="text-base font-medium text-foreground">
          전문의가 직접 운영하는 라보 여성 호르몬 3종 검사
        </p>
      </motion.div>

      {/* Credibility badges */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center gap-4 mt-6 flex-wrap"
      >
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          전문의 창업
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          전문의 자문
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          임상 데이터 기반
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          1만+ 검증
        </div>
      </motion.div>
    </div>
  );
};

export { CredibilitySection };