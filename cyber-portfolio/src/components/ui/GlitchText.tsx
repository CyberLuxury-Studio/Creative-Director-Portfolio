import { cn } from "@/lib/utils";

export function GlitchText({ text, className }: { text: string; className?: string }) {
  return (
    <div
      className={cn("glitch-wrapper font-display font-bold uppercase", className)}
      data-text={text}
    >
      {text}
    </div>
  );
}
