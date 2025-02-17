import UnifieOne from "@/assets/images/unifie (1).jpg";
import UnifieTwo from "@/assets/images/unifie (2).jpg";
import VoiceOne from "@/assets/images/voice messaging (1).jpg";
import VoiceTwo from "@/assets/images/voice messaging (2).jpg";
import VoiceThree from "@/assets/images/voice messaging (3).jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const NewFeature = () => {
  const voiceMessagingContent = [
    {
      text: "Connect with your followers and family via voice messaging",
      image: VoiceOne,
    },
    {
      text: "Share your thoughts and emotions through expressive voice notes",
      image: VoiceTwo, // Assuming you have this image imported
    },
    {
      text: "Stay connected with personalized voice messages anytime, anywhere",
      image: VoiceThree, // Assuming you have this image imported
    },
  ];

  const unifieContent = [
    {
      text: "Earn Maximum With Your Content - Turn Your Creativity Into Profit",
      image: UnifieOne,
    },
    {
      text: "Monetize Your Passion With Exclusive Content Creation",
      image: UnifieTwo,
    },
  ];

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2, // Increased duration
        ease: [0.22, 1, 0.36, 1], // Smooth easing curve
        staggerChildren: 0.3, // Stagger child animations
      },
    },
    exit: {
      opacity: 0,
      x: -60,
      transition: {
        duration: 1.5, // Longer exit duration
        delay: 0.5, // Longer delay before exit
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: 60,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="my-20 sm:my-40">
      <div className="max-w-6xl mx-auto px-4">
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

        <div className="md:space-y-32 space-y-14 overflow-x-hidden">
          {/* First Row */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{
                margin: "-20%",
                amount: 0.3,
              }}
              variants={fadeInLeft}
              className="md:w-1/2 w-full"
            >
              <p className="text-gray-100 text-center md:text-left text-lg md:text-[28px] font-medium leading-relaxed w-full md:w-5/6">
                {voiceMessagingContent[0].text}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{
                margin: "-20%",
                amount: 0.3,
              }}
              variants={fadeInRight}
              className="w-full md:w-[380px] h-[300px] md:h-[470px] rounded-2xl overflow-hidden mx-auto"
            >
              <Image
                src={voiceMessagingContent[0].image}
                alt="Voice Messaging"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{
                margin: "-20%",
                amount: 0.3,
              }}
              variants={fadeInRight}
              className="md:w-1/2 w-full"
            >
              <p className="text-gray-100 text-center md:text-left text-lg md:text-[28px] font-medium leading-relaxed w-full">
                {voiceMessagingContent[1].text}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{
                margin: "-20%",
                amount: 0.3,
              }}
              variants={fadeInLeft}
              className="w-full md:w-[380px] h-[300px] md:h-[470px] rounded-2xl overflow-hidden mx-auto"
            >
              <Image
                src={voiceMessagingContent[1].image}
                alt="Voice Messaging"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>

          {/* Third Row */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{
                margin: "-20%",
                amount: 0.3,
              }}
              variants={fadeInLeft}
              className="md:w-1/2 w-full"
            >
              <p className="text-gray-100 text-center md:text-left text-lg md:text-[28px] font-medium leading-relaxed w-full md:w-5/6">
                {voiceMessagingContent[2].text}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{
                margin: "-20%",
                amount: 0.3,
              }}
              variants={fadeInRight}
              className="w-full md:w-[380px] h-[300px] md:h-[470px] rounded-2xl overflow-hidden mx-auto"
            >
              <Image
                src={voiceMessagingContent[2].image}
                alt="Voice Messaging"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Unifie Section */}
        <div className="mt-32 space-y-14 md:space-y-32 overflow-x-hidden">
          {/* First Row */}
          <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{
                margin: "-20%",
                amount: 0.3,
              }}
              variants={fadeInLeft}
              className="md:w-1/2 w-full"
            >
              <p className="text-gray-100 text-center md:text-left text-lg md:text-[28px] font-medium leading-relaxed w-full md:w-5/6">
                {unifieContent[0].text}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{
                margin: "-20%",
                amount: 0.3,
              }}
              variants={fadeInRight}
              className="w-full md:w-[380px] h-[300px] md:h-[470px] rounded-2xl overflow-hidden mx-auto"
            >
              <Image
                src={unifieContent[0].image}
                alt="Unifie Content"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{
                margin: "-20%",
                amount: 0.3,
              }}
              variants={fadeInRight}
              className="md:w-1/2 w-full"
            >
              <p className="text-gray-100 text-center md:text-left text-lg md:text-[28px] font-medium leading-relaxed w-full">
                {unifieContent[1].text}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{
                margin: "-20%",
                amount: 0.3,
              }}
              variants={fadeInLeft}
              className="w-full md:w-[380px] h-[300px] md:h-[470px] rounded-2xl overflow-hidden mx-auto"
            >
              <Image
                src={unifieContent[1].image}
                alt="Unifie Content"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeature;
