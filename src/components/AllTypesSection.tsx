import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface AllTypesSectionProps {
  currentTypeCode: string;
  gender: 'female' | 'male';
}

export const AllTypesSection = ({ currentTypeCode, gender }: AllTypesSectionProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/types')}
      className="w-full bg-card rounded-2xl p-5 shadow-card flex items-center justify-between hover:bg-muted/50 transition-colors"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">📊</span>
        <div className="text-left">
          <h3 className="font-display text-lg text-foreground">전체 유형 보기</h3>
          <p className="text-xs text-muted-foreground">남녀 8가지 유형 모두 확인하기</p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground" />
    </button>
  );
};