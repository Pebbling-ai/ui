
import React from "react";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
        <div className="w-full rounded-lg overflow-hidden relative">
          <div className="bg-mono-800 p-8 sm:p-16 flex flex-col justify-between min-h-[250px] sm:min-h-[350px]">
            <div className="flex items-center text-white">
              <img src="/logo.svg" alt="Logo" className="h-6 w-auto mr-3 invert" />
              <span className="text-white text-xl font-medium">
              </span>
            </div>
            
            <div className="mt-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl text-white font-thin-serif font-normal italic tracking-wide">
                Leave it to Manus
              </h2>
              <p className="text-white/80 mt-4 max-w-2xl">
                A powerful collaboration between artificial intelligence and human creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
