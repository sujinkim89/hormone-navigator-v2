import { useNavigate } from "react-router-dom";
import { AuraBackground } from "@/components/AuraBackground";
import { EggCharacter } from "@/components/EggCharacter";
import { Button } from "@/components/ui/button";
import { femaleTypes, maleTypes, HormoneType } from "@/data/quizData";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const TypesPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'female' | 'male'>('female');

  const femaleTypeList = Object.values(femaleTypes);
  const maleTypeList = Object.values(maleTypes);

  return (
    <AuraBackground>
      <div className="min-h-screen px-4 py-6">
        <div className="w-full max-w-md mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="shrink-0"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <EggCharacter size="xs" mood="default" />
              <h1 className="font-display text-xl text-foreground">전체 유형 보기</h1>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab('female')}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                activeTab === 'female'
                  ? 'bg-gradient-meme text-primary-foreground shadow-meme'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              👩 여자 유형
            </button>
            <button
              onClick={() => setActiveTab('male')}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                activeTab === 'male'
                  ? 'bg-gradient-meme text-primary-foreground shadow-meme'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              👨 남자 유형
            </button>
          </div>

          {/* Types Grid */}
          <div className="space-y-4 animate-fade-up">
            {(activeTab === 'female' ? femaleTypeList : maleTypeList).map((type) => (
              <TypeDetailCard key={type.code} type={type} />
            ))}
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground mt-8">
            © 2024 PMS 호르몬 유형 분석
          </p>
        </div>
      </div>
    </AuraBackground>
  );
};

const TypeDetailCard = ({ type }: { type: HormoneType }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`bg-card rounded-2xl shadow-card overflow-hidden transition-all duration-300 ${
        expanded ? 'ring-2 ring-primary/30' : ''
      }`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center gap-4 text-left"
      >
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center shadow-meme shrink-0`}>
          <span className="text-2xl">{type.emoji}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg text-foreground">{type.title}</h3>
          <p className="text-xs text-muted-foreground">{type.emoji}</p>
        </div>
        <span className={`text-muted-foreground transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-3 animate-fade-up">
          <div className="bg-muted/50 rounded-xl p-3">
            <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
              {type.diagnosis}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-secondary/10 rounded-lg p-2 text-center">
              <p className="text-[10px] text-muted-foreground mb-1">BEST 궁합</p>
              <p className="text-xs font-medium text-foreground">{type.bestMatch}</p>
            </div>
            <div className="bg-rose/10 rounded-lg p-2 text-center">
              <p className="text-[10px] text-muted-foreground mb-1">WORST 궁합</p>
              <p className="text-xs font-medium text-foreground">{type.worstMatch}</p>
            </div>
          </div>

          {type.survivalTip && (
            <div className="bg-violet/10 rounded-xl p-3">
              <p className="text-xs font-medium text-violet mb-1">💡 생존 팁</p>
              <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
                {type.survivalTip}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TypesPage;
