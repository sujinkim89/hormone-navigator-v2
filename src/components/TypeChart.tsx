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
      <div className="absolute inset-0 rounded-2xl bg-gradient-card border border-border overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border" />
          {/* Horizontal center line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border" />
        </div>

        {/* Quadrant backgrounds */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-violet/5" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-hot-pink/5" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-rose/5" />

        {/* Quadrant labels */}
        <div className="absolute top-3 left-3 text-xs font-medium text-violet/70">TS</div>
        <div className="absolute top-3 right-3 text-xs font-medium text-hot-pink/70">TD</div>
        <div className="absolute bottom-3 left-3 text-xs font-medium text-secondary/70">ES</div>
        <div className="absolute bottom-3 right-3 text-xs font-medium text-rose/70">ED</div>

        {/* Axis labels */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground font-medium">
          이성 (T)
        </div>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground font-medium">
          감성 (E)
        </div>
        <div className="absolute left-1 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground font-medium writing-mode-vertical">
          안정 (S)
        </div>
        <div className="absolute right-1 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground font-medium writing-mode-vertical">
          자극 (D)
        </div>

        {/* Position marker */}
        <div
          className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 animate-scale-bounce"
          style={{
            left: `${posX}%`,
            top: `${posY}%`,
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-md" />
          {/* Main dot */}
          <div className="relative w-full h-full rounded-full bg-gradient-meme shadow-glow flex items-center justify-center">
            <span className="text-xs">📍</span>
          </div>
        </div>
      </div>
    </div>
  );
};
