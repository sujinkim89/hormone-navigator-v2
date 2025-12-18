import { cn } from "@/lib/utils";

interface TypeChartProps {
  x: number; // -1 to 1 (S to D) - normalized from quiz answers
  y: number; // -1 to 1 (E to T) - normalized from quiz answers
  className?: string;
}

export const TypeChart = ({ x, y, className }: TypeChartProps) => {
  // Convert normalized coordinates (-1 to 1) to percentage position (0-100)
  // x: negative = S (left), positive = D (right)
  // y: negative = E (bottom), positive = T (top)
  const posX = 50 + (x * 50); // Scale to 0-100%
  const posY = 50 - (y * 50); // Invert Y for visual (T is top)

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
