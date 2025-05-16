
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Our goal has always been to make development more accessible, efficient, and enjoyable. We're excited to see what you'll build and how you'll use these tools to create something extraordinary.",
    author: "Raahul Dutta",
    role: "Founder & CTO",
    gradient: "from-blue-700 via-indigo-800 to-purple-900",
    backgroundImage: "https://res.cloudinary.com/dhjzu51mb/image/upload/v1747393977/kphhpiqhd1s2aimpjlkn.png"
  }, {
    content: "We built this platform with a vision to transform how developers create and collaborate. Our journey began with a simple idea, but has grown into something much more powerful through the support of our amazing community.",
    author: "Claude Daha",
    role: "Co-Founder & CEO",
    gradient: "from-indigo-900 via-purple-800 to-orange-500",
    backgroundImage: "https://res.cloudinary.com/dhjzu51mb/image/upload/v1747393977/kphhpiqhd1s2aimpjlkn.png"
  }
  // }, {
  //   content: "Atlas adapted to our lab protocols faster than any system we've used. It's like having another researcher who never gets tired and maintains perfect precision.",
  //   author: "Dr. Amara Patel",
  //   role: "Lead Scientist, BioAdvance Research",
  //   gradient: "from-purple-800 via-pink-700 to-red-500",
  //   backgroundImage: "/background-section3.png"
  // }, {
  //   content: "As a mid-size business, we never thought advanced robotics would be accessible to us. Atlas changed that equation entirely with its versatility and ease of deployment.",
  //   author: "Jason Lee",
  //   role: "CEO, Innovative Solutions Inc.",
  //   gradient: "from-orange-600 via-red-500 to-purple-600",
  //   backgroundImage: "/background-section1.png"
  // }
];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-montserrat leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-bogue font-bold text-xl">{author}</h4>
          <p className="text-white/80 font-montserrat">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-8 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          
        </div>
        
        <h2 className="text-black text-5xl font-bogue font-bold mb-8 text-left bg-clip-text">Founder's Note</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
