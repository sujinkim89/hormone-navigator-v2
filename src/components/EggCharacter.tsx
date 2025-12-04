import { cn } from "@/lib/utils";
import eggCharacter from "@/assets/egg-character.png";

interface EggCharacterProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

const sizeClasses = {
  xs: "w-8 h-8",
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-28 h-28",
  xl: "w-36 h-36",
};

export const EggCharacter = ({ className, size = "md", animate = true }: EggCharacterProps) => {
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <img
        src={eggCharacter}
        alt="귀여운 계란 캐릭터"
        className={cn(
          sizeClasses[size],
          "object-contain drop-shadow-lg",
          animate && "animate-egg-shake"
        )}
      />
    </div>
  );
};
