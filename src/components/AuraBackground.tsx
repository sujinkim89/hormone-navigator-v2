import { cn } from "@/lib/utils";

interface AuraBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const AuraBackground = ({ className, children }: AuraBackgroundProps) => {
  return (
    <div className={cn("relative min-h-screen overflow-hidden bg-background", className)}>
      {/* Animated aura blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-aura animate-pulse-slow blur-3xl"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute top-[30%] right-[-20%] w-[50%] h-[50%] rounded-full bg-gradient-aura animate-pulse-slow blur-3xl"
          style={{ animationDelay: '1.5s' }}
        />
        <div 
          className="absolute bottom-[-10%] left-[20%] w-[55%] h-[55%] rounded-full bg-gradient-aura animate-pulse-slow blur-3xl"
          style={{ animationDelay: '3s' }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
