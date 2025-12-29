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
        { emoji: "🎭", label: "빌런성", quote: "", content: type.villainTrait || type.diagnosis },
        { emoji: "✨", label: "영웅성", quote: "", content: type.heroTrait || type.normalSelf },
        { emoji: "💊", label: "케어팁", quote: "", content: type.careTip || type.survivalTip },
      ]
    : [
        { emoji: "🫡", label: "투철한 사명", quote: "", content: type.mission || type.normalSelf },
        { emoji: "💑", label: "여배우와 케미", quote: "", content: type.chemistry || type.heroTrait },
        { emoji: "⚠️", label: "NG 포인트", quote: "", content: type.villainTrait || type.diagnosis },
      ];

  return (
    <div className="w-full">
      {/* Outer container with gradient */}
      <div className="bg-gradient-to-br from-[#F8E8FF] to-[#E8D4F8] rounded-2xl p-4 shadow-card">
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
      </div>
    </div>
  );
};
