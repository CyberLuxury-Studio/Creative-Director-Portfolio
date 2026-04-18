"use client";
import { NeonButton } from "../ui/NeonButton";
import { GlitchText } from "../ui/GlitchText";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-background/80 animate-pulse" />
});

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-24 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
         <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-muted font-mono tracking-[0.2em] mb-4">SYSTEM.INIT()</h2>
          <GlitchText
            text="Creative Director"
            className="text-5xl md:text-8xl lg:text-9xl mb-2 text-white"
          />
          <p className="text-xl md:text-2xl text-muted font-light mb-12 max-w-2xl border-l-2 border-primary pl-6 py-2">
            Bridging Dimensions. Architecting the digital anomaly.
          </p>

          <div className="flex gap-6">
            <NeonButton>Initialize Sequence</NeonButton>
            <NeonButton variant="secondary">View Logs</NeonButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
