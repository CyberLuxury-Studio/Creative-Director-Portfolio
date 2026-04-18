import { Hero } from "@/components/sections/Hero";
import { HorizontalGallery } from "@/components/sections/HorizontalGallery";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary selection:text-black">
      <Hero />
      <HorizontalGallery />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
