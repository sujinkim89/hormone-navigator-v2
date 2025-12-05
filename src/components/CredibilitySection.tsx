import { motion } from "framer-motion";
const CredibilitySection = () => {
  return <div className="text-center py-8">
      {/* Question */}
      <motion.div initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="mb-6">
        
      </motion.div>

      {/* Logo Display */}
      <motion.div initial={{
      opacity: 0,
      scale: 0.95
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.6,
      delay: 0.2
    }} className="flex justify-center items-center gap-3">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-card border border-border/50">
          {/* RHA"BO Logo as styled text */}
          <div className="flex items-center justify-center gap-0.5">
            <span className="text-3xl font-bold tracking-tight text-[#3B5BA9]">
              RHA
            </span>
            <span className="text-3xl font-bold text-[#3B5BA9] relative">
              <span className="absolute -top-1 left-0 text-lg">"</span>
              <span className="ml-2">BO</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">여성건강 전문 연구소</p>
        </div>
      </motion.div>

      {/* Credibility badges */}
      <motion.div initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.4
    }} className="flex justify-center gap-4 mt-6">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">전문의 창업<span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          전문의 자문
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          임상 데이터 기반
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          1만+ 검증
        </div>
      </motion.div>
    </div>;
};
export { CredibilitySection };