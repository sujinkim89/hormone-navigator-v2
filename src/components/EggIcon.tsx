import { cn } from "@/lib/utils";

interface EggIconProps {
  className?: string;
  animate?: boolean;
}

export const EggIcon = ({ className, animate = true }: EggIconProps) => {
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg
        viewBox="0 0 100 120"
        className={cn(
          "w-full h-full drop-shadow-lg",
          animate && "animate-egg-shake"
        )}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="eggGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(330, 90%, 75%)" />
            <stop offset="50%" stopColor="hsl(350, 85%, 65%)" />
            <stop offset="100%" stopColor="hsl(265, 85%, 70%)" />
          </linearGradient>
          <linearGradient id="eggShine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Egg shape */}
        <ellipse
          cx="50"
          cy="65"
          rx="38"
          ry="48"
          fill="url(#eggGradient)"
        />
        
        {/* Shine highlight */}
        <ellipse
          cx="38"
          cy="45"
          rx="15"
          ry="20"
          fill="url(#eggShine)"
        />
        
        {/* Cute face */}
        <g className="origin-center">
          {/* Eyes */}
          <circle cx="38" cy="60" r="4" fill="hsl(270, 50%, 20%)" />
          <circle cx="62" cy="60" r="4" fill="hsl(270, 50%, 20%)" />
          
          {/* Eye highlights */}
          <circle cx="36" cy="58" r="1.5" fill="white" />
          <circle cx="60" cy="58" r="1.5" fill="white" />
          
          {/* Blush */}
          <ellipse cx="30" cy="70" rx="6" ry="3" fill="hsl(350, 80%, 75%)" opacity="0.6" />
          <ellipse cx="70" cy="70" rx="6" ry="3" fill="hsl(350, 80%, 75%)" opacity="0.6" />
          
          {/* Mouth */}
          <path
            d="M 43 75 Q 50 82 57 75"
            stroke="hsl(270, 50%, 20%)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};
