import { Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EggCharacter } from "@/components/EggCharacter";

export const MaleBridgeSection = () => {
  return (
    <div className="space-y-6">
      {/* Section 1: Hook */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <EggCharacter size="xs" mood="worried" animate={false} />
          <h3 className="font-display text-lg text-foreground">
            💭 여자친구가 왜 그러는지, 이제 좀 이해가 되셨나요?
          </h3>
        </div>
        <div className="bg-muted/50 rounded-xl p-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            사실, 그녀의 감정 기복은 <span className="text-rose font-medium">성격의 문제가 아니라, 호르몬의 언어</span>거든요.
            <br /><br />그녀 자신도 왜 그런지 모르는 경우가 많아요.
            <br />하지만 당신이 먼저 이해하고 준비한다면, 관계가 훨씬 편해질 거예요.
          </p>
        </div>
      </div>

      {/* Section 2: Gift Idea */}
      <div className="bg-gradient-to-br from-rose/20 to-violet/20 border border-rose/30 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Gift className="w-5 h-5 text-rose" />
          <h3 className="font-display text-lg text-rose">그녀를 위한 특별한 선물</h3>
        </div>
        
        <div className="bg-card/80 rounded-xl p-4 mb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            "화장품? 가방? 맛집?"
            <br /><br />물론 좋죠. 하지만...
            <br /><span className="text-rose font-medium">그녀의 건강과 미래를 위한 선물</span>은 어떨까요?
            <br /><br />매달 찾아오는 PMS, 막연한 건강 걱정...
            <br />이걸 <strong className="text-foreground">'데이터'로 바꿔주는 선물</strong>이에요.
          </p>
        </div>

        <div className="bg-card rounded-xl p-4 text-center">
          <span className="text-3xl mb-3 block">🎁</span>
          <p className="text-base font-display text-rose mb-2">"내가 널 이해하고 싶어서"</p>
          <p className="text-sm text-muted-foreground">
            이 한마디와 함께 선물하면,
            <br />그녀는 당신의 진심을 느낄 거예요.
          </p>
        </div>
      </div>

      {/* Section 3: What She Gets */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <h3 className="font-display text-lg text-foreground mb-4">
          💝 이 선물로 그녀가 얻는 것
        </h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground">왜 감정 기복이 심한지 <span className="text-foreground font-medium">과학적으로 이해</span></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground">난소 건강 상태를 <span className="text-foreground font-medium">정확한 숫자로 확인</span></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground">미래 계획을 위한 <span className="text-foreground font-medium">실제 타임라인</span></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">✓</span>
            <span className="text-muted-foreground">"내 탓이 아니었구나"라는 <span className="text-foreground font-medium">마음의 안정</span></span>
          </li>
        </ul>
      </div>

      {/* Section 4: What You Get */}
      <div className="bg-violet/10 border border-violet/30 rounded-2xl p-5">
        <h3 className="font-display text-lg text-foreground mb-4">
          🙌 그리고 당신이 얻는 것
        </h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-violet mt-0.5">✓</span>
            <span className="text-muted-foreground">그녀의 감정 변화를 <span className="text-foreground font-medium">미리 예측</span>할 수 있어요</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet mt-0.5">✓</span>
            <span className="text-muted-foreground">"왜 저래?"가 아닌 <span className="text-foreground font-medium">"아, 그럴 때구나"</span>로 바뀌어요</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet mt-0.5">✓</span>
            <span className="text-muted-foreground">불필요한 싸움이 <span className="text-foreground font-medium">확실히 줄어들어요</span></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-violet mt-0.5">✓</span>
            <span className="text-muted-foreground">"진짜 날 생각해주는구나"라는 <span className="text-foreground font-medium">그녀의 신뢰</span></span>
          </li>
        </ul>
      </div>

      {/* Section 5: Test Info */}
      <div className="bg-card rounded-2xl p-5 shadow-card">
        <h3 className="font-display text-lg text-foreground mb-2">라보 여성 호르몬 3종 검사</h3>
        <p className="text-xs text-muted-foreground mb-4">전문의가 직접 운영하는 신뢰할 수 있는 검사예요</p>

        <div className="bg-gradient-to-br from-primary/10 to-violet/10 rounded-xl p-4 border border-primary/20">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">검사 항목</span>
              <span className="font-medium text-foreground">AMH, FSH, E2</span>
            </div>
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

      {/* Section 6: Final CTA */}
      <div className="bg-gradient-card border-2 border-primary/30 rounded-3xl p-6 shadow-lg">
        <h3 className="font-display text-lg text-foreground text-center mb-4">
          🎁 그녀에게 진심을 선물하세요
        </h3>
        <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
          명품백은 1년, 꽃다발은 일주일이면 시들지만
          <br /><strong className="text-foreground">건강에 대한 관심은 평생 기억에 남아요.</strong>
          <br /><br />"나 때문에 힘들었지? 이거 한번 받아봐."
          <br />이 한마디가 관계를 바꿀 수 있어요.
        </p>

        <div className="space-y-3">
          <Button variant="premium" size="lg" className="w-full">
            <Gift className="w-5 h-5" />
            여자친구에게 선물하기
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            검사 상품 구경하기
          </Button>
        </div>
      </div>

      {/* Section 7: P.S. */}
      <div className="bg-rose/10 border border-rose/30 rounded-2xl p-5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">💌 P.S.</strong>
          <br /><br />여기까지 읽으셨다면, 당신은 이미 여자친구를 진심으로 이해하려는 좋은 남자친구예요.
          <br /><br />그녀의 감정 기복을 '성격 문제'로 치부하지 않고,
          <br />'호르몬'이라는 과학적 이유를 찾으려 한 것만으로도 대단해요.
          <br /><br /><strong className="text-rose">이제 한 걸음만 더, 그녀에게 진심을 전해보세요. 💕</strong>
        </p>
      </div>
    </div>
  );
};
