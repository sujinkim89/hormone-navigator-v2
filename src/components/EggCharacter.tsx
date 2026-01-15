import { cn } from "@/lib/utils";
import eggDefault from "@/assets/egg-default.png";
import eggHappy from "@/assets/egg-happy.png";
import eggSad from "@/assets/egg-sad.png";
import eggAngry from "@/assets/egg-angry.png";
import eggWorried from "@/assets/egg-worried.png";
import eggTired from "@/assets/egg-tired.png";

export type EggMood = "default" | "happy" | "sad" | "angry" | "worried" | "tired";

interface EggCharacterProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  mood?: EggMood;
  animate?: boolean;
}

const sizeClasses = {
  xs: "w-8 h-8",
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-28 h-28",
  xl: "w-36 h-36",
};

const moodImages: Record<EggMood, string> = {
  default: eggDefault,
  happy: eggHappy,
  sad: eggSad,
  angry: eggAngry,
  worried: eggWorried,
  tired: eggTired,
};

const moodAltTexts: Record<EggMood, string> = {
  default: "귀여운 계란 캐릭터",
  happy: "행복한 계란 캐릭터",
  sad: "슬픈 계란 캐릭터",
  angry: "화난 계란 캐릭터",
  worried: "걱정하는 계란 캐릭터",
  tired: "피곤한 계란 캐릭터",
};

export const EggCharacter = ({
  className,
  size = "md",
  mood = "default",
  animate = false
}: EggCharacterProps) => {
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <img
        src={moodImages[mood]}
        alt={moodAltTexts[mood]}
        className={cn(
          sizeClasses[size],
          "object-contain drop-shadow-lg",
          animate && "animate-egg-shake"
        )}
      />
    </div>
  );
};
