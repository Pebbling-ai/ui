
import React, { useRef } from "react";
import { Users } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar?: string;
  emoji: string;
  growthStage: string;
  backgroundColor: string;
  gradientText: string;
  borderColor: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "From planting a simple seed of an idea, we've been nurturing Pebbling with care and dedication. Just as a seed requires the right conditions to grow, we've focused on building strong foundations with secure, decentralized communication protocols that empower developers while maintaining privacy and trust.",
    author: "Raahul Dutta",
    role: "Founder & CTO",
    avatar: "/logo/raahul.png",
    emoji: "🌱",
    growthStage: "Seed",
    backgroundColor: "from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30",
    gradientText: "from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400",
    borderColor: "border-green-200 dark:border-green-800"
  },
  {
    content: "Just as a sprout breaks through the soil, Pebbling has emerged with vibrant potential. We've built this platform with a vision that transforms how developers create and collaborate. The roots of our community are growing deeper every day, nourishing the ecosystem with diverse ideas and contributions.",
    author: "Claude Daha",
    role: "Co-Founder & CEO",
    avatar: "/logo/calude.png",
    emoji: "🌿",
    growthStage: "Sprout",
    backgroundColor: "from-blue-50 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/30",
    gradientText: "from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",
    borderColor: "border-blue-200 dark:border-blue-800"
  }
];

const TestimonialCard = ({
  content,
  author,
  role,
  avatar,
  emoji,
  growthStage,
  backgroundColor,
  gradientText,
  borderColor
}: TestimonialProps) => {
  return (
    <div 
      className={`bg-gradient-to-br ${backgroundColor} rounded-xl p-8 h-full flex flex-col justify-between relative overflow-hidden shadow-lg border ${borderColor} transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group`}
    >
      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-xl z-0 group-hover:blur-2xl transition-all duration-500"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/10 blur-xl z-0 group-hover:blur-2xl transition-all duration-500"></div>
      
      <div className="relative z-10">
        {/* Growth stage indicator */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl" role="img" aria-label={growthStage}>{emoji}</span>
          <span className={`text-sm font-subheading font-medium bg-gradient-to-r ${gradientText} bg-clip-text text-transparent`}>
            {growthStage} Stage
          </span>
        </div>
        
        {/* Testimonial content */}
        <p className="font-subheading text-lg mb-6 leading-relaxed text-gray-800 dark:text-gray-200">{content}</p>
        
        {/* Author info */}
        <div className="flex items-center mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          {avatar && (
            <div className="mr-4 flex-shrink-0">
              <img 
                src={avatar} 
                alt={`${author} avatar`} 
                className={`h-12 w-12 rounded-full object-cover border-2 ${borderColor}`}
              />
            </div>
          )}
          <div>
            <h4 className="font-subheading font-bold text-xl text-gray-900 dark:text-white">{author}</h4>
            <p className="text-gray-600 dark:text-gray-300 font-subheading">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      className="relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-20" 
      id="testimonials" 
      ref={sectionRef}
    >
      {/* Background blur gradient elements */}
      <div className="absolute -top-[10%] -right-[5%] w-1/3 h-[50%] bg-green-100 dark:bg-green-900/20 opacity-60 blur-3xl rounded-full"></div>
      <div className="absolute top-[40%] -left-[5%] w-1/4 h-[40%] bg-blue-100 dark:bg-blue-900/20 opacity-50 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-[10%] right-[10%] w-1/3 h-[40%] bg-pink-100 dark:bg-pink-900/20 opacity-40 blur-3xl rounded-full"></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-subheading font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
            <Users className="w-3 h-3 mr-1" /> From the team cultivating Pebbling
          </span>
        </div>
        
        <h2 
          className="text-center text-4xl md:text-5xl font-subheading font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 dark:from-purple-400 dark:via-blue-300 dark:to-indigo-400"
        >
          Our Growth Journey
        </h2>
        
        <p 
          className="text-center font-subheading text-gray-700 dark:text-gray-300 mb-12 text-lg leading-relaxed"
        >
          From a tiny seed of an idea to the vibrant hibiscus in full bloom, follow our journey as we nurture the Pebbling ecosystem.
        </p>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <TestimonialCard 
                {...testimonial}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
