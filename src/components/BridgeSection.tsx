import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EggCharacter } from "@/components/EggCharacter";

export const BridgeSection = () => {
  return <div className="space-y-6">
      

      {/* Section 3: Warning */}
      <div className="bg-gradient-to-br from-rose/20 to-violet/20 border border-rose/30 rounded-2xl p-5">
        <h3 className="font-display text-lg text-rose mb-4">📉 혹시, 예전보다 PMS가 심해진 것 같다고 느끼셨나요?</h3>
        
        <div className="bg-card/80 rounded-xl p-4 mb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            "요즘 왜 이렇게 감정 기복이 심하지?"
            <br />"예전엔 이 정도 아니었는데..."
            <br /><br />이런 생각, 한 번쯤 해보셨죠?
            <br />이건 단순한 컨디션 문제가 아닐 수 있어요.
            <br /><span className="text-rose font-medium">난소가 보내는 '미리 알림'일 수 있거든요.</span>
          </p>
        </div>

        <div className="bg-card rounded-xl p-4 text-center">
          <span className="text-3xl mb-3 block">🔬</span>
          <p className="text-base font-display text-rose mb-2">심리테스트는 시작점이에요</p>
          <p className="text-sm text-muted-foreground">내 유형을 알았다면, 이제 '왜 그런지'를
과학적으로 확인해볼 차례예요.<strong className="text-foreground">'왜 그런지'</strong>를 
            <br />정확한 숫자로 확인해볼 차례예요.
          </p>
        </div>
      </div>

      {/* Section 4: Hormone Tests */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <h3 className="font-display text-lg text-foreground mb-2">전문의가 직접 운영하는 라보 여성 호르몬 3종 검사</h3>
        <p className="text-xs text-muted-foreground mb-4">내 몸 상태를 가장 정확하게 알 수 있는 방법이에요</p>

        <div className="space-y-4">
          {/* AMH */}
          <div className="border border-border rounded-xl p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🏦</span>
              </div>
              <div>
                <p className="font-medium text-foreground">AMH (난소 나이)</p>
                <p className="text-xs text-muted-foreground">내 난소의 '통장 잔고' 확인하기</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">알 수 있는 것:</strong> 난소에 남은 난자의 양</p>
              <p><strong className="text-foreground">나에게 주는 것:</strong> 임신 가능 기간의 실제 타임라인</p>
            </div>
            <div className="mt-3 p-3 bg-primary/5 rounded-lg">
              <p className="text-xs text-primary">💡 "앞으로 얼마나 쓸 수 있는지, 통장 잔액을 확인하는 것과 같아요"</p>
            </div>
          </div>

          {/* FSH */}
          <div className="border border-border rounded-xl p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🚨</span>
              </div>
              <div>
                <p className="font-medium text-foreground">FSH (난포자극호르몬)</p>
                <p className="text-xs text-muted-foreground">난소의 'SOS 신호' 측정하기</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">알 수 있는 것:</strong> 난소가 얼마나 힘들게 일하고 있는지</p>
              <p><strong className="text-foreground">나에게 주는 것:</strong> 난소 기능 저하의 조기 경고 신호</p>
            </div>
            <div className="mt-3 p-3 bg-rose/5 rounded-lg">
              <p className="text-xs text-rose">💡 "배터리 5% 폰처럼, 난소가 과부하 상태라는 경고등이에요"</p>
            </div>
          </div>

          {/* E2 */}
          <div className="border border-border rounded-xl p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-violet/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🎭</span>
              </div>
              <div>
                <p className="font-medium text-foreground">E2 (에스트로겐)</p>
                <p className="text-xs text-muted-foreground">감정의 '리모컨' 상태 확인하기</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">알 수 있는 것:</strong> 현재 호르몬 균형 상태</p>
              <p><strong className="text-foreground">나에게 주는 것:</strong> PMS와 갱년기 증상의 근본 원인</p>
            </div>
            <div className="mt-3 p-3 bg-violet/5 rounded-lg">
              <p className="text-xs text-violet">💡 "감정 롤러코스터의 속도를 조절하는 스위치예요"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Benefits */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <h3 className="font-display text-lg text-foreground mb-4">
          💡 검사 후, 이런 것들이 명확해져요
        </h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground">요즘 PMS가 왜 심해졌는지 <span className="text-foreground font-medium">(호르몬 데이터로 확인)</span></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground">내 난소 나이는 실제로 몇 살인지 <span className="text-foreground font-medium">(실제 나이 ≠ 난소 나이)</span></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground">임신 계획이 있다면, 언제까지 준비해야 하는지</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground">갱년기가 대략 언제쯤 시작될지</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground">지금 당장 무엇을 해야 하는지 <span className="text-foreground font-medium">(맞춤 솔루션)</span></span>
          </li>
        </ul>
      </div>

      {/* Section 6: CTA Box */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <h3 className="font-display text-lg text-foreground mb-4">
          🎯 막연한 불안, 이제 데이터로 바꿔보세요
        </h3>
        <div className="bg-muted/50 rounded-xl p-4 mb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            "나중에 아이 갖고 싶은데... 괜찮을까?"
            <br />"이 감정 기복, 평생 이러고 살아야 하나?"
            <br />"갱년기는 대체 언제 오는 거지?"
            <br /><br /><span className="text-rose font-medium">이런 질문에 '아마도'라는 답은 없어요.</span>
            <br />숫자로 확인하고, 계획을 세우고, 내 삶의 주도권을 가져오세요.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-violet/10 rounded-xl p-4 border border-primary/20">
          <h4 className="font-medium text-foreground mb-3">🏥 검사는 생각보다 간단해요</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">소요 시간</span>
              <span className="font-medium text-foreground">단 5분</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">결과 확인</span>
              <span className="font-medium text-foreground">3~5일 이내</span>
            </div>
            
          </div>
        </div>
      </div>

      {/* Section 7: Testimonials */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <h3 className="font-display text-lg text-foreground mb-4">
          💬 먼저 검사받은 분들의 이야기
        </h3>
        <div className="space-y-3">
          <div className="bg-muted/50 rounded-xl p-4">
            <p className="text-sm text-muted-foreground italic mb-2">
              "AMH 수치 보고 솔직히 충격받았어요. 근데 오히려 마음이 편해졌어요. 뭘 해야 할지 명확해지니까요."
            </p>
            <p className="text-xs text-muted-foreground">— 32세, 직장인</p>
          </div>
          
          <div className="bg-muted/50 rounded-xl p-4">
            <p className="text-sm text-muted-foreground italic mb-2">
              "FSH가 높게 나와서 난자 동결 바로 결정했어요. 6개월만 늦었어도 정말 후회했을 것 같아요."
            </p>
            <p className="text-xs text-muted-foreground">— 29세, 프리랜서</p>
          </div>
          
          <div className="bg-muted/50 rounded-xl p-4">
            <p className="text-sm text-muted-foreground italic mb-2">
              "PMS가 심한 게 제 탓이 아니었더라고요. 호르몬 관리 시작하고 진짜 인생이 달라졌어요."
            </p>
            <p className="text-xs text-muted-foreground">— 35세, 마케터</p>
          </div>
        </div>
      </div>

      {/* Section 8: Final CTA */}
      <div className="bg-gradient-card border-2 border-primary/30 rounded-3xl p-6 shadow-lg">
        <h3 className="font-display text-lg text-foreground text-center mb-4">
          ✨ 지금 이 순간에도, 난소는 나이를 먹고 있어요
        </h3>
        <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
          심리테스트는 재밌었죠?
          <br />하지만 <strong className="text-foreground">진짜 미래는 데이터가 결정해요.</strong>
          <br /><br />막연한 불안 속에 시간을 보낼 건가요,
          <br />아니면 명확한 숫자로 내 인생의 주도권을 잡을 건가요?
          <br /><br /><strong className="text-foreground">선택은 당신의 몫이에요.</strong>
        </p>

        <div className="space-y-3">
          <Button variant="premium" size="lg" className="w-full">
            <Sparkles className="w-5 h-5" />
            혜택 받고 시작하기
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            검사 상품 구경하기
          </Button>
        </div>
      </div>

      {/* Section 9: P.S. */}
      <div className="bg-violet/10 border border-violet/30 rounded-2xl p-5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">💌 P.S.</strong>
          <br /><br />여기까지 읽으셨다면, 이미 당신은 자신의 몸에 관심을 갖기 시작한 거예요.
          <br />그 첫걸음이 정말 대단하고, 충분히 현명한 선택이에요.
          <br /><br />이제 한 걸음만 더 나아가면,
          <br />숫자로 확인된 안정감과 명확한 계획을 가질 수 있어요.
          <br /><br /><strong className="text-rose">당신의 호르몬 건강, 지금 바로 챙기세요. 🌸</strong>
        </p>
      </div>
    </div>;
};