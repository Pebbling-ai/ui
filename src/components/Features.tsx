
import React, { useEffect } from 'react';
import { cn } from "@/lib/utils";

const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            setTimeout(() => {
              target.classList.add("animate-fade-in");
              target.classList.add("opacity-100");
            }, 150);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".feature-item");
    elements.forEach((el) => {
      const element = el as HTMLElement;
      element.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700", "ease-out");
      observer.observe(element);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-12 md:py-24 bg-white" id="features">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our platform revolutionizes your experience with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="feature-item p-6 rounded-xl" key={item}>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="h-6 w-6 bg-blue-500 rounded-md"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
