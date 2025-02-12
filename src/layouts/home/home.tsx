import FAQ from "@/features/home/faq";
import Hero from "@/features/home/hero";
import MessageSection from "@/features/home/message-section";
import NewFeature from "@/features/home/new-feature";
import StandOut from "@/features/home/stand-out";
import Stats from "@/features/home/stats";
import Testimonials from "@/features/home/testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <StandOut />
      <NewFeature />
      <MessageSection />
      <Testimonials />
      <Stats />
      <FAQ />
    </>
  );
};

export default Home;
