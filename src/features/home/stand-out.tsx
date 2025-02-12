import StandOutOne from "@/assets/images/65ae8c45f9aed6977620038b_lightricks-facetune1-p-500.webp";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const StandOut = () => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="mb-12 sm:mb-20">
          <h1 className="mb-3 text-base sm:text-lg tracking-wider text-[rgb(52,141,227)]">
            Benefits
          </h1>
          <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">
            Send private messages
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-8">
            Simple, secure and private messaging
            <br className="hidden sm:block" />
            and calling, free* worldwide.
          </p>
          <Button
            className="bg-[#3081cf] w-full sm:w-[192px] hover:bg-[#3081cf]/90 text-primary-foreground"
            size="lg"
          >
            Download <span>↓</span>
          </Button>
        </div>

        {/* Images Grid - Staggered Layout */}
        <div className="relative h-[400px] sm:h-[600px]">
          {/* Left Image - Lower Position */}
          <div className="absolute left-0 bottom-0 w-full sm:w-[45%]">
            <div className="rounded-[20px] sm:rounded-[32px] overflow-hidden">
              <Image
                src={StandOutOne}
                alt="Person using phone"
                className="w-full h-[250px] sm:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right Image - Higher Position */}
          <div className="absolute right-0 top-0 w-full sm:w-[45%] hidden sm:block">
            <div className="rounded-[20px] sm:rounded-[32px] overflow-hidden">
              <Image
                src={StandOutOne}
                alt="Person using laptop"
                className="w-full h-[250px] sm:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandOut;
