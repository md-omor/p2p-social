const MessageSection = () => {
  const topMessages = [
    {
      text: "Ciao!",
      position: "top-[2rem] md:top-[15rem] sm:left-0 left-[5%]",
      bg: "bg-[#8B3DFF]",
    },
    {
      text: "Merhaba!",
      position: "top-[-3rem] md:top-[5rem] md:left-[10%] left-[15%]",
      bg: "bg-[#E855FF]",
    },
    {
      text: "Hallo! Hur mår du?",
      position: "top-[6rem] sm:left-[45%] left-[15%]",
      bg: "bg-[#8B3DFF]",
    },
    {
      text: "Hallo! Wie geht es dir?",
      position: "top-[1rem] md:top-4 sm:right-20 right-[5%]",
      bg: "bg-[#8B3DFF]",
    },
    {
      text: "Hallo! Hur mår du?",
      position: "top-[9rem]  md:top-[12rem] sm:right-[-5%] right-[2%]",
      bg: "bg-[#8B3DFF]",
    },
  ];

  const bottomMessages = [
    {
      text: "Ciao!",
      position: "top-0 md:top-[-7rem] sm:left-0 left-[5%]",
      bg: "bg-[#8B3DFF]",
    },
    {
      text: "Merhaba!",
      position: "top-[4rem] md:top-[5rem] sm:left-[10%] left-[8%]",
      bg: "bg-[#E855FF]",
    },
    {
      text: "Hallo! Hur mår du?",
      position:
        "top-[7rem] md:top-[10rem] md:left-[45%] md:right-0 right-[15%]",
      bg: "bg-[#8B3DFF]",
    },
    {
      text: "Hallo! Wie geht es dir?",
      position: "top-4 sm:right-20 right-[5%]",
      bg: "bg-[#8B3DFF]",
    },
  ];

  return (
    <div className="py-28 md:py-16 relative px-4 sm:px-0">
      {/* Top Messages Section */}
      <div className="relative h-[150px] sm:h-[200px] max-w-6xl mx-auto mb-12 sm:mb-20">
        {topMessages.map((msg, index) => (
          <div
            key={index}
            className={`absolute ${msg.position} flex items-center gap-2`}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-600 flex-shrink-0" />
            <div
              className={`${msg.bg} rounded-full px-3 sm:px-5 py-1.5 sm:py-2`}
            >
              <p className="text-white text-xs sm:text-sm whitespace-nowrap">
                {msg.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Central Text Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white sm:!leading-[56px]">
          With private messages and calls, you can be yourself, communicate
          freely and stay in touch with the people who matter most, even if they
          are far away.
        </h2>
      </div>

      {/* Bottom Messages Section */}
      <div className="relative h-[150px] sm:h-[200px] max-w-6xl mx-auto">
        {bottomMessages.map((msg, index) => (
          <div
            key={index}
            className={`absolute ${msg.position} flex items-center gap-2`}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-600 flex-shrink-0" />
            <div
              className={`${msg.bg} rounded-full px-3 sm:px-5 py-1.5 sm:py-2`}
            >
              <p className="text-white text-xs sm:text-sm whitespace-nowrap">
                {msg.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageSection;
