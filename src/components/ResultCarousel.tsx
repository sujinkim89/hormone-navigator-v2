import { useState } from "react";
import { cn } from "@/lib/utils";
import { HormoneType } from "@/data/quizData";

interface ResultCarouselProps {
  type: HormoneType;
  nickname: string;
}

export const ResultCarousel = ({ type, nickname }: ResultCarouselProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { emoji: "🔥", label: "팩폭 진단", content: type.pmsSelf },
    { emoji: "🌿", label: "평소 본캐", content: type.normalSelf },
    { emoji: "💊", label: "생존 처방", content: type.survivalTip },
  ];

  return (
    <div className="w-full">
      {/* Tab buttons */}
      <div className="flex gap-2 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all duration-300",
              activeTab === index
                ? "bg-gradient-meme text-primary-foreground shadow-meme"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            <span className="mr-1">{tab.emoji}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-card rounded-2xl p-5 shadow-card min-h-[120px]">
        <div className="flex items-start gap-3">
          <span className="text-2xl">{tabs[activeTab].emoji}</span>
          <div>
            <h4 className="font-medium text-foreground mb-2">
              {tabs[activeTab].label}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {nickname}님은 {tabs[activeTab].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
