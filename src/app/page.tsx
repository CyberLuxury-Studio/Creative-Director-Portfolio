import { Hero } from "@/components/sections/Hero";
import { HorizontalGallery } from "@/components/sections/HorizontalGallery";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";



export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary selection:text-black">
      <Hero />
      <HorizontalGallery />
      <Services />
      <Contact />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
