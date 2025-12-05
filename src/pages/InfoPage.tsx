import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EggCharacter } from "@/components/EggCharacter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuizStore } from "@/store/quizStore";
import { Check, Sparkles } from "lucide-react";

const InfoPage = () => {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState("");
  const setNickname = useQuizStore(state => state.setNickname);
  const gender = useQuizStore(state => state.gender);

  const isFemale = gender === 'female';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputName.trim()) {
      setNickname(inputName.trim());
      navigate('/quiz');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffeef8] via-[#fff5f7] to-[#e8f4fc]">
      <div className="max-w-[480px] mx-auto">
        
        {/* Section 1: Intro - Why PMS gets worse */}
        <section className="px-6 py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-6 leading-relaxed">
            왜 갈수록 PMS가<br />더 심해지는 걸까요?
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            "예전엔 이 정도는 아니었는데..."<br />
            혹시 이런 생각, 해보신 적 있나요?
          </p>
          <div className="bg-white/80 rounded-2xl p-5 border-l-4 border-primary">
            <p className="text-foreground text-sm leading-relaxed">
              난소의 호르몬이 불규칙해지면,<br />
              <span className="font-semibold bg-gradient-to-r from-transparent via-[#ffebb8]/60 to-transparent">감정의 파도도 함께 거칠어집니다.</span>
            </p>
            <p className="text-muted-foreground text-sm mt-3">
              이건 당신이 예민해진 게 아니라,<br />
              <span className="text-primary font-medium">호르몬이 변하고 있다는 신호</span>예요.
            </p>
          </div>
        </section>

        {/* Section 2: CTA */}
        <section className="bg-gradient-to-br from-primary to-[#ff8fab] px-6 py-10 text-center text-white">
          <p className="text-sm opacity-90 mb-2">전문의와 함께</p>
          <h2 className="text-2xl font-bold mb-4">
            불안을 데이터로 바꾸세요
          </h2>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-4">
            <p className="text-white/90 text-sm leading-relaxed">
              여성 건강만을 위해 만들어진 <span className="font-bold">라보</span>.<br />
              숫자로 확인하고, 계획을 세우고,<br />
              내 삶의 통제권을 되찾으세요.
            </p>
          </div>
          <p className="text-lg font-semibold italic opacity-90">
            Define your tomorrow.
          </p>
        </section>

        {/* Section 3: Test Introduction */}
        <section className="px-6 py-10 bg-gradient-to-b from-[#fff5f7] to-white">
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="text-2xl">📊</span>
            <h2 className="text-lg font-bold text-foreground">
              라보 여성 호르몬 3종 검사
            </h2>
          </div>
          <p className="text-center text-muted-foreground text-sm">
            전문의가 직접 설계한 과학적인 여성호르몬 진단
          </p>
        </section>

        {/* Section 4: Hormone Characters - Side by Side */}
        <section className="px-4 pb-10 bg-white">
          <div className="grid grid-cols-3 gap-3">
            {/* AMH - 통장 관리자 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                {/* Speech Bubble */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#fff5f7] border border-[#ffe4ef] rounded-xl px-2 py-1.5 min-w-[100px] text-center shadow-sm">
                  <p className="text-xs text-foreground leading-tight">
                    "제 난소 잔고,<br />확인하실래요?"
                  </p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-[#ffe4ef]"></div>
                </div>
                <div className="pt-14">
                  <EggCharacter size="lg" mood="worried" animate={false} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-primary font-bold text-xs mb-1">
                  AMH
                </div>
                <div className="text-[10px] text-muted-foreground mb-1">
                  난소 나이
                </div>
                <div className="text-[10px] font-medium text-foreground bg-[#f8f9fa] rounded-full px-2 py-0.5">
                  통장 관리자
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground leading-tight text-center mt-2 px-1">
                난소에 남은 난자의 양을 정확한 숫자로 보여주는 잔고 확인서
              </p>
            </div>

            {/* FSH - 과로 경고등 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                {/* Speech Bubble */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#fff5f7] border border-[#ffe4ef] rounded-xl px-2 py-1.5 min-w-[100px] text-center shadow-sm">
                  <p className="text-xs text-foreground leading-tight">
                    "더 이상<br />못 버티겠어요!"
                  </p>
                  <span className="text-[10px]">🔋5%</span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-[#ffe4ef]"></div>
                </div>
                <div className="pt-14">
                  <EggCharacter size="lg" mood="tired" animate={false} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-primary font-bold text-xs mb-1">
                  FSH
                </div>
                <div className="text-[10px] text-muted-foreground mb-1">
                  난포자극호르몬
                </div>
                <div className="text-[10px] font-medium text-foreground bg-[#f8f9fa] rounded-full px-2 py-0.5">
                  과로 경고등
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground leading-tight text-center mt-2 px-1">
                난소가 보내는 SOS 신호. 배터리 5%처럼 과부하 상태를 알려줍니다
              </p>
            </div>

            {/* E2 - 감정 조율사 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                {/* Speech Bubble */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#fff5f7] border border-[#ffe4ef] rounded-xl px-2 py-1.5 min-w-[100px] text-center shadow-sm">
                  <p className="text-xs text-foreground leading-tight">
                    "오늘 기분은<br />어떤 색깔?"
                  </p>
                  <span className="text-[10px]">🌈</span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-[#ffe4ef]"></div>
                </div>
                <div className="pt-14">
                  <EggCharacter size="lg" mood="happy" animate={false} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-primary font-bold text-xs mb-1">
                  E2
                </div>
                <div className="text-[10px] text-muted-foreground mb-1">
                  에스트로겐
                </div>
                <div className="text-[10px] font-medium text-foreground bg-[#f8f9fa] rounded-full px-2 py-0.5">
                  감정 조율사
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground leading-tight text-center mt-2 px-1">
                감정 롤러코스터를 조절하는 리모컨. 기분 균형을 맞춰줍니다
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Checklist */}
        <section className="px-6 py-10 bg-gradient-to-b from-white to-[#f0f7fc]">
          <div className="flex items-center gap-2 justify-center mb-6">
            <span className="text-2xl">💡</span>
            <h2 className="text-lg font-bold text-foreground">
              이 검사로 알 수 있는 것들
            </h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 py-3 border-b border-border/50">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">왜 요즘 PMS가 심해졌는지</span>
            </li>
            <li className="flex items-start gap-3 py-3 border-b border-border/50">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">난소 나이는 몇 살인지</span>
            </li>
            <li className="flex items-start gap-3 py-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">지금 당장 뭘 해야 하는지</span>
            </li>
          </ul>
        </section>

        {/* Section 6: Founder Story */}
        <section className="px-6 py-10 bg-gradient-to-b from-[#f0f7fc] to-[#e8f4fc]">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 justify-center mb-4">
              <span className="text-2xl">💝</span>
              <h2 className="text-lg font-bold text-[#5b8fb9]">
                라보 창업자의 고백
              </h2>
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                저는 <span className="font-semibold text-foreground">의사</span>입니다.<br />
                그런데 창업을 결심하게 된 계기는 진료실이 아닌, 아내와의 대화였습니다.
              </p>
              <div className="bg-[#f0f7fc] rounded-xl p-4 italic text-foreground border-l-4 border-[#5b8fb9]">
                "우리는 언제쯤 아이를 가져야 할까?"
              </div>
              <p>
                아내는 막연한 불안감만 있을 뿐, 정확한 정보는 어디에도 없었습니다.
              </p>
              <p>
                보건소에서 받은 AMH 검사 결과지에는 단 두 줄만 적혀 있었고,
                <span className="text-foreground font-medium">"수치가 낮네요"</span>라는 한 마디로 상담이 끝났습니다.
              </p>
              <p>
                이게 뭘 의미하는지, 어떻게 대처해야 하는지,<br />
                아무도 제대로 설명해주지 않았습니다.
              </p>
              <p className="font-medium text-foreground">
                의사로서, 남편으로서, 예비 아빠로서<br />
                이 문제를 그냥 넘어갈 수 없었습니다.
              </p>
              <p className="text-right text-xs text-muted-foreground mt-4">
                — 라보 창업자, Medical Doctor
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Closing */}
        <section className="px-6 py-10 bg-gradient-to-br from-[#e8f4fc] to-[#d4e9f7]">
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              이 글을 읽고 있다는 건,<br />
              당신이 이미 <span className="text-foreground font-medium">자신의 몸에 관심을 갖기 시작</span>했다는 뜻입니다.
            </p>
            <p className="text-foreground text-sm leading-relaxed mb-4">
              그 첫걸음은 정말 <span className="font-semibold text-[#5b8fb9]">용기 있는 선택</span>입니다.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              이제 한 걸음만 더 나아가면,<br />
              명확한 데이터와 전문가의 해석으로<br />
              <span className="font-semibold bg-gradient-to-r from-transparent via-[#b8d4e8]/60 to-transparent">불안 대신 계획</span>을 가질 수 있습니다.
            </p>
          </div>

          <p className="text-center text-[#5b8fb9] font-bold text-lg mb-8">
            당신의 난소 건강,<br />지금이 가장 빠른 시점입니다. 🌸
          </p>

          {/* Nickname Input & Start */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="space-y-3 mb-4">
              <label className="text-sm font-medium text-foreground">
                {isFemale ? '👩 당신의 이름은?' : '👨 당신의 이름은?'}
              </label>
              <Input 
                type="text" 
                placeholder="닉네임 입력" 
                value={inputName} 
                onChange={e => setInputName(e.target.value)} 
                className="h-14 text-base rounded-2xl border-2 border-border focus:border-[#5b8fb9] bg-card" 
                maxLength={10} 
              />
              <p className="text-xs text-muted-foreground">
                결과에 사용될 이름이에요 (최대 10자)
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <Button 
                type="submit" 
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-[#5b8fb9] to-[#7eb3d8] hover:opacity-90 text-white rounded-2xl"
                disabled={!inputName.trim()}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                나의 호르몬 타입 알아보기
              </Button>
            </form>

            <p className="text-center text-xs text-muted-foreground mt-4">
              본 테스트는 재미로 보는 심리테스트입니다.
            </p>
          </div>

          {/* Back button */}
          <button 
            onClick={() => navigate('/')} 
            className="w-full mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← 처음으로
          </button>
        </section>

      </div>
    </div>
  );
};

export default InfoPage;
