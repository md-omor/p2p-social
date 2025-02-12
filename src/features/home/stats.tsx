const Stats = () => {
  const stats = [
    {
      number: "4.6",
      label: "Average Rating on App Store",
    },
    {
      number: "2M+",
      label: "Ratings on Apple & Google",
    },
    {
      number: "295M+",
      label: "Downloads",
    },
  ];

  return (
    <div className="py-8 sm:py-16 px-4 sm:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-white text-3xl sm:text-5xl leading-tight sm:leading-[70px] font-semibold">
            Join everyone,
            <br className="hidden sm:block" />
            literally everyone
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              {/* Line decoration - only show on tablet and up */}
              {index < stats.length - 1 && (
                <div className="hidden sm:block absolute top-0 right-0 w-full h-[1px] bg-black/10" />
              )}

              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4">
                {stat.number}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
