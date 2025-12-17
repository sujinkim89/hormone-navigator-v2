import { cn } from "@/lib/utils";

interface TypeChartProps {
  x: number; // -50 to 50 (S to D)
  y: number; // -50 to 50 (E to T)
  className?: string;
}

export const TypeChart = ({ x, y, className }: TypeChartProps) => {
  // Convert coordinates to percentage position (0-100)
  const posX = 50 + x;
  const posY = 50 - y; // Invert Y for visual (T is top)

  return (
    <div className={cn("relative w-full aspect-square max-w-[280px] mx-auto", className)}>
      {/* Background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-card border border-border">
        {/* Grid lines */}
        <div className="absolute inset-0">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border" />
          {/* Horizontal center line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border" />
        </div>

        {/* Quadrant backgrounds */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-violet/5 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-hot-pink/5 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-rose/5 rounded-br-2xl" />

        {/* Axis labels */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-bold whitespace-nowrap">
          테스토스테론
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-bold whitespace-nowrap">
          에스트로겐
        </div>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-bold [writing-mode:vertical-lr]">
          세로토닌
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-bold [writing-mode:vertical-lr]">
          도파민
        </div>
      </div>

      {/* Position marker - outside overflow container */}
      <div
        className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 z-20"
        style={{
          left: `${posX}%`,
          top: `${posY}%`,
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-hot-pink/50 blur-xl animate-pulse" />
        {/* Main dot */}
        <div className="relative w-full h-full rounded-full bg-gradient-meme shadow-glow flex items-center justify-center border-3 border-background animate-scale-bounce">
          <span className="text-lg">📍</span>
        </div>
      </div>
    </div>
  );
};
