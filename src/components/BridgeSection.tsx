import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import appMockup from "@/assets/app-mockup-transparent.png";
import hormoneCharacters from "@/assets/hormone-characters-trio.png";
import rhaboLogoSignature from "@/assets/rhabo-logo-signature.png";

export const BridgeSection = () => {
  return (
    <div className="w-full font-pretendard">
      {/* === PHASE 2: Dark Section === */}
      <div className="bg-[#1E293B] py-8 px-4">

        {/* Hormone Characters Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="text-center mb-5">
            <h3 className="text-[20px] font-bold text-white mb-1.5 tracking-tight leading-tight font-pretendard">
              불안을 데이터로 바꿔야 합니다.
            </h3>
            <p className="text-[12px] text-slate-400 tracking-normal-mobile font-pretendard">
              우리 몸에는 여성 3대 호르몬이 있습니다.
            </p>
          </div>
          
          <img 
            src={hormoneCharacters} 
            alt="AMH, FSH, E2 호르몬 캐릭터" 
            className="w-full max-w-sm mx-auto rounded-xl mb-5"
          />
          
          {/* Hormone Descriptions - 3 Column */}
          <div className="grid grid-cols-3 gap-4 text-center max-w-sm mx-auto">
            <div>
              <p className="text-white font-bold text-[15px] mb-1 tracking-tight">AMH</p>
              <p className="text-slate-400 text-[11px] leading-relaxed tracking-normal-mobile">
                난소 나이
                <br />가임력의 타이머
              </p>
            </div>
            <div>
              <p className="text-white font-bold text-[15px] mb-1 tracking-tight">FSH</p>
              <p className="text-slate-400 text-[11px] leading-relaxed tracking-normal-mobile">
                난포자극호르몬
                <br />난소 활동 신호
              </p>
            </div>
            <div>
              <p className="text-white font-bold text-[15px] mb-1 tracking-tight">E2</p>
              <p className="text-slate-400 text-[11px] leading-relaxed tracking-normal-mobile">
                에스트로겐
                <br />여성성 조율 호르몬
              </p>
            </div>
          </div>
        </motion.div>

        {/* RHABO Introduction - Above Mockup */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          {/* White Card Container */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mx-2">
            {/* RHABO Logo Image */}
            <div className="flex justify-center mb-4">
              <img 
                src={rhaboLogoSignature} 
                alt="RHABO 로고" 
                className="h-8 w-auto"
              />
            </div>
            
            {/* Main Description */}
            <p className="text-center text-white font-bold text-[15px] mb-5 tracking-tight font-pretendard">
              전문의가 직접 운영하는 라보 여성 호르몬 3종 검사
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-[11px] text-slate-300 font-pretendard">
              <span>전문의 창업</span>
              <span className="text-[#9D4EDD]">•</span>
              <span>전문의 자문</span>
              <span className="text-[#9D4EDD]">•</span>
              <span>임상 데이터 기반</span>
              <span className="text-[#9D4EDD]">•</span>
              <span>1만+ 검증</span>
            </div>
          </div>
        </motion.div>

        {/* Mobile Mockup Image - Transparent Background */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative mb-10"
        >
          <img 
            src={appMockup} 
            alt="라보 앱 화면" 
            className="w-full max-w-md mx-auto"
            style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden' }}
          />
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#2D3A4F] rounded-2xl p-4 mb-6">
            <h4 className="text-white font-bold text-center mb-4 text-[14px] tracking-tight-mobile">
              검사 후, 이런 것들이 명확해집니다
            </h4>
            <ul className="space-y-3 text-slate-300 text-[12px] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#4A7CFF] mt-0.5 flex-shrink-0">●</span>
                <span className="tracking-normal-mobile">
                  요즘 PMS가 왜 심해졌는지 
                  <span className="text-[#4A7CFF] font-medium"> (호르몬 데이터로 확인)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4A7CFF] mt-0.5 flex-shrink-0">●</span>
                <span className="tracking-normal-mobile">
                  내 난소 나이는 실제로 몇 살인지 
                  <span className="text-[#4A7CFF] font-medium"> (실제 나이 ≠ 난소 나이)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4A7CFF] mt-0.5 flex-shrink-0">●</span>
                <span className="tracking-normal-mobile">임신 계획이 있다면, 언제까지 준비해야 하는지</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4A7CFF] mt-0.5 flex-shrink-0">●</span>
                <span className="tracking-normal-mobile">갱년기가 대략 언제쯤 시작될지</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4A7CFF] mt-0.5 flex-shrink-0">●</span>
                <span className="tracking-normal-mobile">
                  지금 당장 무엇을 해야 하는지 
                  <span className="text-[#4A7CFF] font-medium"> (맞춤 솔루션)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="bg-[#2D3A4F] rounded-2xl p-4 mb-6">
            <p className="text-center text-white font-semibold text-[14px] mb-4 tracking-tight-mobile">
              먼저 검사받은 분들의 이야기
            </p>
            <div className="space-y-3">
              <div className="bg-[#1E293B] rounded-xl p-3 border border-slate-600/30">
                <p className="text-slate-300 text-[12px] leading-relaxed mb-1 tracking-normal-mobile">
                  "AMH 수치 보고 솔직히 충격받았어요. 근데 오히려 마음이 편해졌어요. 
                  뭘 해야 할지 명확해지니까요."
                </p>
                <p className="text-slate-500 text-[10px]">— 32세, 직장인</p>
              </div>
              <div className="bg-[#1E293B] rounded-xl p-3 border border-slate-600/30">
                <p className="text-slate-300 text-[12px] leading-relaxed mb-1 tracking-normal-mobile">
                  "FSH가 높게 나와서 난자 동결 바로 결정했어요. 
                  6개월만 늦었어도 정말 후회했을 것 같아요."
                </p>
                <p className="text-slate-500 text-[10px]">— 29세, 프리랜서</p>
              </div>
              <div className="bg-[#1E293B] rounded-xl p-3 border border-slate-600/30">
                <p className="text-slate-300 text-[12px] leading-relaxed mb-1 tracking-normal-mobile">
                  "PMS가 심한 게 제 탓이 아니었더라고요. 
                  호르몬 관리 시작하고 진짜 인생이 달라졌어요."
                </p>
                <p className="text-slate-500 text-[10px]">— 35세, 마케터</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-[#3B4A6B] rounded-2xl p-5 text-center">
            <p className="text-white text-[14px] font-semibold tracking-tight-mobile">지금 이 순간에도</p>
            <p className="text-slate-400 text-[12px] mb-4 tracking-normal-mobile">난소는 나이를 먹고 있습니다.</p>

            <a 
              href="https://www.rhabo.co.kr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                className="w-full bg-[#4A7CFF] hover:bg-[#3A6CEF] text-white font-bold py-4 rounded-xl text-[14px] tracking-tight-mobile"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                혜택 받고 시작하기
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

    </div>
  );
};
