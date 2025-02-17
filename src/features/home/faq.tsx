import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Is Flux AI image generator free to use?",
      answer:
        "Flux AI image generator offers both free and paid versions. Please check our official website for specific pricing information related to Flux AI and Flex.1 technology.",
    },
    {
      question:
        "Can I use the images generated by Flux AI image generator for commercial purposes?",
      answer:
        "Yes, you can use images generated by Flux AI for commercial purposes with appropriate licensing. Please refer to our terms of service for detailed usage rights.",
    },
    {
      question: "What languages does Flux AI image generator support?",
      answer:
        "Flux AI image generator supports multiple languages including English, Spanish, French, German, and many more. The platform is continuously expanding its language support.",
    },
    {
      question: "How can I improve the quality of images generated by Flux AI?",
      answer:
        "You can improve image quality by providing detailed prompts, adjusting resolution settings, and using advanced features available in Flex.1 technology.",
    },
    {
      question: "How does Flux AI image generator protect user privacy?",
      answer:
        "Flux AI implements robust security measures to protect user data and generated content. We use encryption and follow strict privacy guidelines.",
    },
  ];

  return (
    <div className="px-4 sm:px-8 py-12 sm:py-24 mt-6 sm:mt-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h3 className="text-[#3081cf] mb-2 text-center text-base sm:text-lg px-4 sm:px-10 tracking-wider">
            More about Flux AI image generator and Flex.1 that you might want to
            know
          </h3>
          <h2 className="text-white text-2xl sm:text-4xl font-semibold px-2">
            Frequently Asked Questions about
            <br className="hidden sm:block" />
            Flux AI Image Generator
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-3 sm:space-y-4"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none bg-[rgba(30,28,28,0.28)] rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="text-white hover:no-underline px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
