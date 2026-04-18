import { Monitor, Box, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Monitor size={32} className="text-primary mb-6" />,
    title: "UI/UX Architecture",
    desc: "Building brutalist, high-performance interfaces that break conventional grid systems."
  },
  {
    icon: <Box size={32} className="text-secondary mb-6" />,
    title: "Spatial Design",
    desc: "Integrating 3D environments and WebGL elements to create depth and immersion."
  },
  {
    icon: <Sparkles size={32} className="text-tertiary mb-6" />,
    title: "Motion Engineering",
    desc: "Choreographing fluid, physics-based animations that breathe life into static data."
  }
];

export function Services() {
  return (
    <section className="py-32 px-6 md:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-16">
          Capabilities_
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-surface p-10 border border-surface-high hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500 transform translate-x-1/2 -translate-y-1/2" />
              {s.icon}
              <h3 className="text-2xl font-display font-bold text-white mb-4">{s.title}</h3>
              <p className="text-muted font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
