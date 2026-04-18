"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { id: 1, title: "Neo-Tokyo Archive", tags: ["React", "WebGL"], color: "border-primary" },
  { id: 2, title: "Neural Bridge", tags: ["Three.js", "GLSL"], color: "border-secondary" },
  { id: 3, title: "Void Protocol", tags: ["Next.js", "Framer"], color: "border-tertiary" },
  { id: 4, title: "Synthetic Life", tags: ["Spline", "React"], color: "border-primary" },
];

export function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-surface-low">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-24 left-12 md:left-24 z-10 mix-blend-difference">
           <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter">
             Selected Works //
           </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24 pt-20">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`group relative w-[80vw] md:w-[60vw] h-[60vh] flex-shrink-0 bg-surface border-l-2 ${p.color} p-8 flex flex-col justify-end overflow-hidden transition-colors hover:bg-surface-high cursor-pointer`}
            >
              {/* Placeholder Image Area */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-black" />

              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex gap-3">
                    {p.tags.map(tag => (
                      <span key={tag} className="font-mono text-xs text-muted border border-surface-high px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <ArrowUpRight className="text-white group-hover:text-primary" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
