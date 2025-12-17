import { cn } from "@/lib/utils";
import { HormoneType } from "@/data/quizData";

interface ResultCarouselProps {
  type: HormoneType;
  nickname: string;
  gender: 'female' | 'male';
}

export const ResultCarousel = ({ type, nickname, gender }: ResultCarouselProps) => {
  const sections = gender === 'female' 
    ? [
        { emoji: "🔥", label: "팩폭 진단", content: type.diagnosis },
        { emoji: "🌿", label: "평소 본캐", content: type.normalSelf },
        { emoji: "💊", label: "생존 처방", content: type.survivalTip },
      ]
    : [
        { emoji: "🔥", label: "팩폭 진단", content: type.diagnosis },
        { emoji: "🌿", label: "평소 본캐", content: type.normalSelf },
        { emoji: "💡", label: "케어 팁", content: type.survivalTip },
      ];

  return (
    <div className="w-full space-y-4">
      {sections.map((section, index) => (
        <div 
          key={index}
          className="bg-card rounded-2xl p-5 shadow-card animate-fade-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">{section.emoji}</span>
            <div className="flex-1">
              <h4 className="font-medium text-foreground mb-3">
                {section.label}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
