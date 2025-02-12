import { FiClock, FiCopy, FiSettings } from "react-icons/fi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbRefresh } from "react-icons/tb";

const NewFeature = () => {
  const features = [
    {
      icon: (
        <IoDocumentTextOutline className="text-[#3081cf] text-xl sm:text-2xl" />
      ),
      title: "Flux AI Text-to-Image Conversion with Flex.1",
      description:
        "Generate images simply by entering text descriptions into Flux AI image generator, enhanced by Flex.1",
    },
    {
      icon: <FiClock className="text-[#3081cf] text-2xl" />,
      title: "High-Precision Details with Flux AI and Flex.1",
      description:
        "Flux AI image generator is particularly adept at generating realistic human hands and facial expressions using Flex.1 technology",
    },
    {
      icon: <HiOutlineColorSwatch className="text-[#3081cf] text-2xl" />,
      title: "Flux AI Style Diversity powered by Flex.1",
      description:
        "Support for creating multiple artistic styles and image types with Flux AI image generator and Flex.1",
    },
    {
      icon: <FiCopy className="text-[#3081cf] text-2xl" />,
      title: "Batch Generation with Flux AI Image Generator",
      description:
        "Create multiple image variants simultaneously, enhancing creative efficiency with Flux AI powered by Flex.1",
    },
    {
      icon: <FiSettings className="text-[#3081cf] text-2xl" />,
      title: "Customizable Settings in Flux AI Image Generator",
      description:
        "Allows users to adjust parameters for ideal results with Flux AI image generator and Flex.1",
    },
    {
      icon: <TbRefresh className="text-[#3081cf] text-2xl" />,
      title: "Continuous Updates for Flux AI and Flex.1",
      description:
        "Regular model updates to continuously improve image quality and generation capabilities with Flux AI image generator and Flex.1 technology",
    },
  ];

  return (
    <div className="my-20 sm:my-40 px-4 sm:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-20 flex flex-col items-center justify-center">
          <h1 className="mb-3 text-base sm:text-lg tracking-wider text-[#3081cf] text-center">
            Features
          </h1>
          <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4">
            Core Features of Flux AI Image Generator
          </h1>
          <p className="text-gray-400 mx-auto mb-8 text-center text-base sm:text-xl leading-relaxed sm:leading-[34px] sm:w-3/4 md:w-1/2 px-4">
            Explore the powerful capabilities offered by Flux AI image
            generator, powered by Flex.1
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111111] rounded-[14px] p-6 sm:p-10 border border-gray-800/40 hover:border-[#3081cf]/30 transition-colors duration-300"
            >
              <div className="bg-[#1a1a1a] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-medium mb-3 sm:mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-400/80 leading-relaxed text-sm sm:text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewFeature;
