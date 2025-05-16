
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
  avatar?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Our goal has always been to make development more accessible, efficient, and enjoyable. We're excited to see what you'll build and how you'll use these tools to create something extraordinary.",
    author: "Raahul Dutta",
    role: "Founder & CTO",
    gradient: "from-gray-700 via-gray-800 to-black",
    backgroundImage: "https://res.cloudinary.com/dhjzu51mb/image/upload/v1747394689/gzljl8zsuvfvnucimjyl.png",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
  }, {
    content: "We built this platform with a vision to transform how developers create and collaborate. Our journey began with a simple idea, but has grown into something much more powerful through the support of our amazing community.",
    author: "Claude Daha",
    role: "Co-Founder & CEO",
    gradient: "from-gray-900 via-gray-800 to-gray-700",
    backgroundImage: "https://res.cloudinary.com/dhjzu51mb/image/upload/v1747394689/gzljl8zsuvfvnucimjyl.png",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
  }
];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png",
  avatar
}: TestimonialProps) => {
  return (
    <div 
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" 
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-satoshi leading-relaxed pr-20">{`"${content}"`}</p>
        <div className="flex items-center">
          {avatar && (
            <div className="mr-4 flex-shrink-0">
              <img 
                src={avatar} 
                alt={`${author} avatar`} 
                className="h-12 w-12 rounded-full object-cover border-2 border-white"
              />
            </div>
          )}
          <div>
            <h4 className="font-satoshi font-bold text-xl">{author}</h4>
            <p className="text-white/80 font-satoshi">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          
        </div>
        
        <h2 className="text-black text-5xl font-satoshi font-bold mb-8 text-left bg-clip-text">Founder's Note</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              content={testimonial.content} 
              author={testimonial.author} 
              role={testimonial.role} 
              gradient={testimonial.gradient} 
              backgroundImage={testimonial.backgroundImage} 
              avatar={testimonial.avatar} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
