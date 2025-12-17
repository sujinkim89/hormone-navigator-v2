import { cn } from "@/lib/utils";
import { HormoneType } from "@/data/quizData";

interface ResultCarouselProps {
  type: HormoneType;
  nickname: string;
  gender: 'female' | 'male';
}

export const ResultCarousel = ({ type, nickname, gender }: ResultCarouselProps) => {
  // Extract first quoted line and rest of content
  const extractQuoteAndContent = (content: string) => {
    const lines = content.split('\n').filter(line => line.trim());
    const quoteLine = lines.find(line => line.startsWith('"') && line.endsWith('"'));
    const restContent = lines.filter(line => line !== quoteLine).join('\n\n');
    return { quote: quoteLine || '', content: restContent };
  };

  const sections = gender === 'female' 
    ? [
        { emoji: "🔥", label: "팩폭 진단", ...extractQuoteAndContent(type.diagnosis) },
        { emoji: "🌿", label: "평소 본캐", ...extractQuoteAndContent(type.normalSelf) },
        { emoji: "💊", label: "생존 처방", ...extractQuoteAndContent(type.survivalTip) },
      ]
    : [
        { emoji: "🔥", label: "팩폭 진단", ...extractQuoteAndContent(type.diagnosis) },
        { emoji: "🌿", label: "평소 본캐", ...extractQuoteAndContent(type.normalSelf) },
        { emoji: "💡", label: "케어 팁", ...extractQuoteAndContent(type.survivalTip) },
      ];

  return (
    <div className="w-full animate-fade-up">
      {/* Outer container with gradient */}
      <div className="bg-gradient-to-br from-[#F8E8FF] to-[#E8D4F8] rounded-3xl p-4 shadow-card">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">💊</span>
          <h3 className="font-display text-lg font-bold text-[#9D4EDD]">
            PMS 호르몬 처방전
          </h3>
        </div>

        {/* Inner cards */}
        <div className="space-y-3">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Section header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{section.emoji}</span>
                <h4 className="font-bold text-foreground">
                  {section.label}
                </h4>
              </div>
              
              {/* Quote */}
              {section.quote && (
                <p className="text-sm font-medium text-foreground mb-2">
                  {section.quote}
                </p>
              )}
              
              {/* Content */}
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom tip */}
        <div className="mt-3 bg-white/60 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-sm font-bold text-foreground mb-1">
            "감정의 속도 늦추기 훈련"
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            지금 넘치는 감정은 당신의 잘못이 아니지만, 그 감정을 그대로 표출하면 후회할 일이 생깁니다. 감정이 혹 올라올 때 바로 반응하지 말고, 딱 '3초 딜레이'를 거는 훈련이 필요합니다.
          </p>
        </div>
      </div>
    </div>
  );
};
