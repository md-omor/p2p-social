import HeroImg from "@/assets/images/hero.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="px-4 sm:px-8 mx-auto grid place-items-center gap-8 py-12 sm:py-20 lg:py-32 lg:max-w-screen-xl">
      <div className="space-y-6 sm:space-y-8 text-center">
        <h1 className="mx-auto max-w-screen-md text-center text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          Unleash Your Creative Potential with Flux AI Image Generator
        </h1>
        <p className="mx-auto max-w-screen-sm text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-[38px] text-[#a8a29e]">
          Flux AI is an advanced Flux AI-powered image generator that quickly
          creates high-quality, realistic Flux AI images, including perfect Flux
          AI-generated hand details. Powered by Flex.1 for superior results.
        </p>
        <div className="flex flex-row  items-center justify-center gap-4 sm:space-x-5">
          <Button
            className="bg-[#3081cf] w-full sm:w-[192px] hover:bg-[#3081cf]/90 text-primary-foreground"
            size="lg"
          >
            Get started <GoArrowRight />
          </Button>

          <Button
            className="bg-[#25282e] w-full sm:w-[192px] hover:bg-[#25282e]/90 text-primary-foreground"
            size="lg"
          >
            Explore
          </Button>
        </div>
      </div>

      <div className="group relative mt-8 sm:mt-14">
        <div className="absolute left-1/2 top-2 mx-auto h-12 sm:h-16 w-[95%] -translate-x-1/2 transform rounded-full bg-[#3081cf]/20 blur-[50px] lg:-top-4 lg:h-40"></div>
        <div className="absolute left-1/2 -bottom-2 mx-auto h-12 sm:h-16 w-[95%] -translate-x-1/2 transform rounded-full bg-[#3081cf]/20 blur-[50px] lg:-bottom-4 lg:h-40"></div>
        <div className="absolute left-0 top-1/2 h-[95%] w-12 sm:w-16 -translate-y-1/2 transform rounded-full bg-[#3081cf]/20 blur-[50px] lg:w-40"></div>
        <div className="absolute right-0 top-1/2 h-[95%] w-12 sm:w-16 -translate-y-1/2 transform rounded-full bg-[#3081cf]/20 blur-[50px] lg:w-40"></div>
        <div className="rouded-lg relative mx-auto flex w-full items-center rounded-lg border border-t-2 border-secondary border-t-primary/30 leading-none">
          <Image
            src={HeroImg}
            alt="Hero"
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
