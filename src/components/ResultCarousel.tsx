import { useState } from "react";
import { cn } from "@/lib/utils";
import { HormoneType } from "@/data/quizData";
import { ChevronRight } from "lucide-react";

interface ResultCarouselProps {
  type: HormoneType;
  nickname: string;
  gender: 'female' | 'male';
}

export const ResultCarousel = ({ type, nickname, gender }: ResultCarouselProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = gender === 'female' 
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
    <div className="w-full">
      {/* Clickable Tab Cards */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "relative py-3 px-2 rounded-2xl text-center transition-all duration-300 group",
              activeTab === index
                ? "bg-gradient-meme shadow-meme scale-105"
                : "bg-card shadow-card hover:shadow-lg hover:scale-102 hover:-translate-y-0.5"
            )}
          >
            <span className={cn(
              "text-2xl block mb-1 transition-transform group-hover:scale-110",
              activeTab === index && "animate-bounce"
            )}>
              {tab.emoji}
            </span>
            <span className={cn(
              "text-xs font-medium block",
              activeTab === index ? "text-primary-foreground" : "text-foreground"
            )}>
              {tab.label}
            </span>
            {activeTab !== index && (
              <ChevronRight className="w-3 h-3 absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-card rounded-2xl p-5 shadow-card min-h-[200px] animate-fade-in">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">{tabs[activeTab].emoji}</span>
          <div className="flex-1">
            <h4 className="font-medium text-foreground mb-3">
              {tabs[activeTab].label}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {tabs[activeTab].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
