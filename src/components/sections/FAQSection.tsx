"use client";

import React, { useState } from "react";
import { ScrollReveal } from "../animations/ScrollReveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is this platform?",
    answer: "It is an advanced cyberpunk-styled solution designed for modern web applications and futuristic interfaces."
  },
  {
    question: "How do I get started?",
    answer: "Simply initialize your terminal and install the dependencies as listed in the documentation."
  },
  {
    question: "Is there a free tier available?",
    answer: "Yes, we offer an Indie tier that provides basic access to core features without any cost."
  },
  {
    question: "Can I customize the design system?",
    answer: "Absolutely. The styling is powered by Tailwind CSS v4 variables, allowing for rapid customization."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="font-headline text-4xl md:text-5xl font-black mb-16 text-center text-on-surface tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          Frequently Asked Questions
        </h2>
      </ScrollReveal>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <ScrollReveal delay={index * 0.1} key={index}>
            <div 
              className="bg-surface-container-low border border-outline-variant/30 overflow-hidden cursor-pointer hover:border-primary-container/50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="p-6 flex justify-between items-center">
                <h3 className="font-headline text-lg font-bold text-on-surface">{faq.question}</h3>
                <ChevronDown 
                  className={`text-primary-container transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </div>
              
              <div 
                className={`px-6 pb-6 text-on-surface-variant font-body transition-all duration-300 ${openIndex === index ? 'block opacity-100' : 'hidden opacity-0'}`}
              >
                {faq.answer}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
