
import React from "react";

const GradientTextSection = () => {
  return (
    <section className="w-full py-16 bg-white" id="product-info">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-center mb-16">
            <span className="text-blue-700">Pebbling</span> works with{" "}
            <span className="text-slate-600">your team</span>,{" "}
            <span className="text-orange-500">not instead of it</span>. By{" "}
            <span className="text-slate-700">handling repetitive tasks</span>,{" "}
            <span className="text-orange-600">improving safety conditions</span>, and{" "}
            <span className="text-slate-600">learning from every interaction</span>,{" "}
            <span className="text-orange-500">Pebbling helps humans</span>{" "}
            <span className="text-slate-700">focus on what they do best</span>:{" "}
            <span className="text-orange-600">create, solve, and innovate</span>.
          </h2>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-center">
            <span className="text-blue-700">Hibiscus</span> delivers{" "}
            <span className="text-orange-500">evolutionary AI</span> that{" "}
            <span className="text-slate-600">adapts to your environment</span>. With{" "}
            <span className="text-slate-700">advanced neural processing</span> and{" "}
            <span className="text-orange-600">cognitive solutions</span>,{" "}
            <span className="text-blue-600">Hibiscus transforms</span> how{" "}
            <span className="text-orange-500">enterprises interact</span> with{" "}
            <span className="text-slate-700">technology</span>.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default GradientTextSection;
