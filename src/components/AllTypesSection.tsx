import { femaleTypes, maleTypes, HormoneType } from "@/data/quizData";
import { useState } from "react";

interface AllTypesSectionProps {
  currentTypeCode: string;
  gender: 'female' | 'male';
}

export const AllTypesSection = ({ currentTypeCode, gender }: AllTypesSectionProps) => {
  const [expanded, setExpanded] = useState(false);
  const types = gender === 'female' ? femaleTypes : maleTypes;
  const typeList = Object.values(types);

  return (
    <div className="bg-card rounded-2xl p-5 shadow-card">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between"
      >
        <h3 className="font-display text-lg text-foreground">전체 유형 보기</h3>
        <span className={`text-muted-foreground transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {expanded && (
        <div className="mt-4 grid grid-cols-2 gap-3 animate-fade-up">
          {typeList.map((type) => (
            <TypeCard 
              key={type.code} 
              type={type} 
              isCurrentType={type.code === currentTypeCode}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TypeCard = ({ type, isCurrentType }: { type: HormoneType; isCurrentType: boolean }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      className={`relative rounded-xl p-3 cursor-pointer transition-all duration-300 ${
        isCurrentType 
          ? `bg-gradient-to-br ${type.color} text-primary-foreground shadow-meme` 
          : 'bg-muted/50 hover:bg-muted'
      }`}
      onClick={() => setShowDetail(!showDetail)}
    >
      <div className="text-center">
        <span className="text-2xl block mb-1">{type.emoji}</span>
        <p className={`text-sm font-medium ${isCurrentType ? 'text-primary-foreground' : 'text-foreground'}`}>
          {type.title}
        </p>
        {isCurrentType && (
          <span className="absolute -top-1 -right-1 bg-background text-foreground text-[10px] px-1.5 py-0.5 rounded-full shadow-sm">
            나
          </span>
        )}
      </div>
      
      {showDetail && (
        <div className={`mt-2 pt-2 border-t ${isCurrentType ? 'border-primary-foreground/30' : 'border-border'}`}>
          <p className={`text-xs leading-relaxed ${isCurrentType ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
            {type.diagnosis.split('\n')[0].replace(/"/g, '')}
          </p>
        </div>
      )}
    </div>
  );
};
