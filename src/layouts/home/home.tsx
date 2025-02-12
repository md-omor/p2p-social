"use client";

import FAQ from "@/features/home/faq";
import Hero from "@/features/home/hero";
import MessageSection from "@/features/home/message-section";
import NewFeature from "@/features/home/new-feature";
import StandOut from "@/features/home/stand-out";
import Stats from "@/features/home/stats";
import Testimonials from "@/features/home/testimonials";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash;
    // Get the section ID from search params
    const section = searchParams.get("section");

    if (hash) {
      // Remove the # from the hash
      const id = hash.replace("#", "");
      scrollToSection(id);
    } else if (section) {
      scrollToSection(section);
    }
  }, [searchParams]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Add some offset for the fixed navbar
      const offset = 100; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Hero />
      <section
        id="features"
        className="scroll-mt-24" // Add scroll margin to account for fixed header
      >
        <StandOut />
        <NewFeature />
      </section>
      <MessageSection />
      <section id="testimonials" className="scroll-mt-24">
        <Testimonials />
        <Stats />
      </section>
      <section id="faqs" className="scroll-mt-24">
        <FAQ />
      </section>
    </>
  );
};

export default Home;
