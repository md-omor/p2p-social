import Image from "next/image";

const testimonials = [
  {
    name: "Alex Mattew",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
    content:
      "I love this chat, it has to be different, convenient to communicate! So many new stickers, you can always find one to suit your mood.",
  },
  {
    name: "Anna Smith",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    content:
      "Great app. 5 stars! I love how it has different animations, for example, when you create a group chat or look for stickers. By far the best I've used.",
  },
  {
    name: "David Smith",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
    content:
      "A lot of interesting features that are not in other chats. For example, this function is voice transcription. It's especially helpful when you're in a hurry.",
  },
  {
    name: "Sam Harris",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
    content:
      "This app is incredible! The voice transcription function is just super! You can just speak and the app will recognize your words!",
  },
  {
    name: "Caroline Parks",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
    content:
      "I use only this chat, I love the translation function. At work, you often need to communicate with foreigners, here it is very easy to do.",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="py-0 sm:py-32 px-4 sm:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="mb-3 text-base sm:text-lg tracking-wider text-[#3081cf]">
            Testimonials
          </h1>
          <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold mb-5 leading-tight sm:!leading-[70px]">
            Thousands of users
            <br />
            talk about us
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* First Row */}
          <div className="lg:col-span-4">
            <TestimonialCard {...testimonials[0]} />
          </div>
          <div className="lg:col-span-4">
            <TestimonialCard {...testimonials[1]} />
          </div>
          <div className="lg:col-span-4">
            <TestimonialCard {...testimonials[2]} />
          </div>

          {/* Second Row */}
          <div className="lg:col-start-3 lg:col-span-4">
            <TestimonialCard {...testimonials[3]} />
          </div>
          <div className="lg:col-span-4">
            <TestimonialCard {...testimonials[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({
  name,
  image,
  content,
}: {
  name: string;
  image: string;
  content: string;
}) => {
  return (
    <div className="bg-[#1C1C1C] rounded-2xl p-4 sm:p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-10 h-10">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover"
            sizes="(max-width: 768px) 40px, 40px"
          />
        </div>
        <span className="text-white font-medium">{name}</span>
      </div>
      <p className="text-gray-200 text-sm leading-relaxed">{content}</p>
    </div>
  );
};

export default TestimonialsSection;
