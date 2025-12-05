import { motion } from "framer-motion";
import { Share2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import eggDefault from "@/assets/egg-default.png";
import eggTired from "@/assets/egg-tired.png";
import eggHappy from "@/assets/egg-happy.png";

interface PromoSectionProps {
  onShare: () => void;
  onRestart: () => void;
}

export const PromoSection = ({ onShare, onRestart }: PromoSectionProps) => {
  return (
    <div className="space-y-0">
      {/* Section 1: Opening (B-class hooking) */}
      <section className="bg-gradient-to-br from-[#ff6b9d] to-[#ff8fab] px-6 py-10 text-white text-center rounded-2xl mb-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 mb-4">
            <p className="text-lg font-bold leading-relaxed">
              "예전엔 이 정도는<br />아니었는데..."
            </p>
          </div>
          <p className="text-sm opacity-90">
            혹시 이런 생각,<br />해보신 적 있나요?
          </p>
        </motion.div>
      </section>

      <section className="bg-white border-2 border-[#ffe4ef] rounded-2xl px-6 py-6 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
            난소의 호르몬이 불규칙해지면,<br />
            감정의 파도도 함께 거칠어집니다.
          </p>
          <div className="bg-gradient-to-r from-transparent via-[#ffebb8] to-transparent py-3 px-4 rounded-lg">
            <p className="text-[15px] font-semibold text-gray-800">
              이건 당신이 예민해진 게 아니라,<br />
              <span className="bg-[linear-gradient(transparent_60%,#ffebb8_60%)]">
                호르몬이 변하고 있다는 신호예요.
              </span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 2: CTA (Pink→Blue transition) */}
      <section className="bg-gradient-to-br from-[#ff8fab] to-[#6b9dff] px-6 py-12 text-white text-center rounded-2xl mb-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 inline-block mb-6">
            <div className="flex items-center justify-center gap-0.5">
              <span className="text-2xl font-bold tracking-tight">RHA</span>
              <span className="text-2xl font-bold relative">
                <span className="absolute -top-1 left-0 text-sm">"</span>
                <span className="ml-2">BO</span>
              </span>
            </div>
          </div>
          
          <h2 className="text-xl font-bold mb-3 leading-tight">
            전문의와 함께,<br />
            불안을 데이터로 바꾸세요
          </h2>
          
          <p className="text-[15px] opacity-90 mb-3">
            여성 건강만을 위해<br />
            만들어진 라보.
          </p>
          
          <p className="text-[15px] opacity-80 leading-relaxed mb-4">
            숫자로 확인하고,<br />
            계획을 세우고,<br />
            내 삶의 통제권을 되찾으세요
          </p>
          
          <p className="text-lg italic opacity-90">
            Define your tomorrow.
          </p>
        </motion.div>
      </section>

      {/* Section 3: Professional Explanation */}
      <section className="bg-white px-6 py-8 border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-[#2c3e50] mb-2 flex items-center justify-center gap-2">
            📊 라보 여성 호르몬 3종 검사
          </h3>
          <p className="text-[15px] text-gray-500">
            전문의가 직접 설계한 과학적인 여성호르몬 진단
          </p>
        </motion.div>
      </section>

      {/* Section 4: Hormone Character Cards */}
      <section className="bg-white px-6 py-8">
        <div className="space-y-4">
          {/* AMH Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#f0f4f8] rounded-xl p-5 shadow-[0_4px_12px_rgba(74,111,165,0.1)] hover:translate-y-[-2px] transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 flex-shrink-0 relative">
                <img src={eggDefault} alt="AMH 캐릭터" className="w-full h-full object-contain" />
                <span className="absolute -top-1 -right-1 text-2xl">🏦</span>
              </div>
              <div className="flex-1">
                <p className="text-[#4a6fa5] font-bold text-base mb-1">
                  AMH (난소 나이)
                </p>
                <p className="text-[#4a6fa5] text-sm mb-2">통장 관리자</p>
                <div className="bg-white rounded-lg px-3 py-2 shadow-sm mb-2">
                  <p className="text-sm text-gray-600 italic">
                    "제 난소 잔고, 확인하실래요?"
                  </p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  난소에 남은 난자의 양을 정확한 숫자로 보여주는 잔고 확인서
                </p>
              </div>
            </div>
          </motion.div>

          {/* FSH Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#f0f4f8] rounded-xl p-5 shadow-[0_4px_12px_rgba(74,111,165,0.1)] hover:translate-y-[-2px] transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 flex-shrink-0 relative">
                <img src={eggTired} alt="FSH 캐릭터" className="w-full h-full object-contain" />
                <span className="absolute -top-1 -right-1 text-2xl">🚨</span>
              </div>
              <div className="flex-1">
                <p className="text-[#4a6fa5] font-bold text-base mb-1">
                  FSH (난포자극호르몬)
                </p>
                <p className="text-[#4a6fa5] text-sm mb-2">과로 경고등</p>
                <div className="bg-white rounded-lg px-3 py-2 shadow-sm mb-2">
                  <p className="text-sm text-gray-600 italic">
                    "더 이상 못 버티겠어요...!"
                  </p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  난소가 보내는 SOS 신호. 배터리 5%처럼 과부하 상태를 알려줍니다
                </p>
              </div>
            </div>
          </motion.div>

          {/* E2 Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#f0f4f8] rounded-xl p-5 shadow-[0_4px_12px_rgba(74,111,165,0.1)] hover:translate-y-[-2px] transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 flex-shrink-0 relative">
                <img src={eggHappy} alt="E2 캐릭터" className="w-full h-full object-contain" />
                <span className="absolute -top-1 -right-1 text-2xl">🎭</span>
              </div>
              <div className="flex-1">
                <p className="text-[#4a6fa5] font-bold text-base mb-1">
                  E2 (에스트로겐)
                </p>
                <p className="text-[#4a6fa5] text-sm mb-2">감정 조율사</p>
                <div className="bg-white rounded-lg px-3 py-2 shadow-sm mb-2">
                  <p className="text-sm text-gray-600 italic">
                    "오늘 기분은 어떤 색깔?"
                  </p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  감정 롤러코스터를 조절하는 리모컨. 기분 균형을 맞춰줍니다
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Checklist */}
      <section className="bg-white px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-[#2c3e50] mb-4 flex items-center gap-2">
            💡 이 검사로 알 수 있는 것들
          </h3>
          <div className="space-y-3">
            {[
              "왜 요즘 PMS가 심해졌는지",
              "난소 나이는 몇 살인지",
              "지금 당장 뭘 해야 하는지"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#f8f9fa] rounded-lg px-4 py-3.5 flex items-center gap-3"
              >
                <span className="text-[#4a6fa5] font-bold text-lg">✓</span>
                <span className="text-[15px] text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 6: Founder Story */}
      <section className="bg-[#2c3e50] px-6 py-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            💝 라보 창업자의 고백
          </h3>
          
          <div className="text-[15px] leading-[1.8] space-y-4">
            <p>
              저는 의사입니다.<br />
              그런데 창업을 결심하게 된 계기는 진료실이 아닌, 아내와의 대화였습니다.
            </p>
            
            <div className="bg-white/15 border-l-[3px] border-white pl-4 py-3 rounded-r-lg">
              <p className="italic">
                "우리는 언제쯤 아이를 가져야 할까?"
              </p>
            </div>
            
            <p>
              아내는 막연한 불안감만 있을 뿐, 정확한 정보는 어디에도 없었습니다.
            </p>
            
            <p>
              보건소에서 받은 AMH 검사 결과지에는 단 두 줄만 적혀 있었고,
              "수치가 낮네요"라는 한 마디로 상담이 끝났습니다.
            </p>
            
            <p>
              이게 뭘 의미하는지, 어떻게 대처해야 하는지,
              아무도 제대로 설명해주지 않았습니다.
            </p>
            
            <p>
              의사로서, 남편으로서, 예비 아빠로서<br />
              이 문제를 그냥 넘어갈 수 없었습니다.
            </p>
          </div>
          
          <p className="text-right italic mt-6 text-sm opacity-90">
            — 라보 창업자, Medical Doctor
          </p>
        </motion.div>
      </section>

      {/* Section 7: Reviews */}
      <section className="bg-[#f8f9fa] px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-[#2c3e50] mb-4 flex items-center gap-2">
            💬 검사 받은 사람들의 이야기
          </h3>
          
          <div className="space-y-3">
            {[
              {
                quote: "AMH 수치 보고 충격받았지만, 전문의 상담으로 구체적인 계획을 세울 수 있었어요.",
                author: "32세, 직장인"
              },
              {
                quote: "막연히 불안했는데, 숫자로 확인하니까 오히려 마음이 편해졌어요.",
                author: "29세, 프리랜서"
              },
              {
                quote: "결과지 해석이 정말 자세해서 좋았어요. 앞으로 뭘 해야 할지 알게 됐어요.",
                author: "35세, 예비맘"
              }
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              >
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  "{review.quote}"
                </p>
                <p className="text-[13px] text-gray-400 text-right">
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 8: Closing */}
      <section className="bg-gradient-to-br from-[#4a6fa5] to-[#6b9dff] px-6 py-10 text-white text-center rounded-b-2xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[15px] leading-[1.8] mb-4">
            이 글을 읽고 있다는 건,<br />
            당신이 이미 자신의 몸에 관심을 갖기 시작했다는 뜻입니다.
          </p>
          
          <p className="text-[15px] leading-[1.8] mb-4">
            그 첫걸음은 정말 용기 있는 선택입니다.
          </p>
          
          <p className="text-[15px] leading-[1.8] mb-4">
            이제 한 걸음만 더 나아가면,<br />
            명확한 데이터와 전문가의 해석으로<br />
            불안 대신 계획을 가질 수 있습니다.
          </p>
          
          <p className="text-base font-bold mt-6">
            당신의 난소 건강,<br />
            지금이 가장 빠른 시점입니다. 🌸
          </p>
        </motion.div>
      </section>

      {/* Action Buttons */}
      <div className="px-6 py-6 bg-white">
        <div className="flex gap-3">
          <Button 
            className="flex-1 bg-gradient-to-r from-[#ff6b9d] to-[#ff8fab] hover:from-[#ff5a8f] hover:to-[#ff7ea0] text-white rounded-xl h-12 font-semibold"
            onClick={onShare}
          >
            <Share2 className="w-5 h-5 mr-2" />
            공유하기
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-[#ffe4ef] hover:bg-[#fff5f7] rounded-xl h-12 px-4"
            onClick={onRestart}
          >
            <RotateCcw className="w-5 h-5" />
          </Button>
        </div>
        
        <p className="text-center text-xs text-gray-400 mt-4">
          © 2024 PMS 호르몬 유형 분석 · 전문의 자문 기반
        </p>
      </div>
    </div>
  );
};
