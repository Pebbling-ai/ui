
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import LottieAnimation from "@/components/LottieAnimation";

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  // Animation for the countdown
  const countdownAnimation = {
    v: "5.7.1",
    fr: 30,
    ip: 0,
    op: 90,
    w: 300,
    h: 300,
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Circle",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { t: 0, s: [0], h: 1 },
              { t: 90, s: [360], h: 1 }
            ]
          },
          p: { a: 0, k: [150, 150, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [120, 120] },
                p: { a: 0, k: [0, 0] }
              },
              {
                ty: "st",
                c: { a: 0, k: [0, 0, 0, 1] },
                o: { a: 0, k: 100 },
                w: { a: 0, k: 8 },
                lc: 2,
                lj: 1,
                ml: 4,
                d: [
                  { n: "d", v: { a: 0, k: 20 } },
                  { n: "g", v: { a: 0, k: 20 } }
                ]
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ]
      }
    ],
    assets: []
  };

  // Apply animations when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in");
              entry.target.classList.remove("opacity-0");
            }, 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700", "ease-out");
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    console.log("Subscription email:", email);
    setSubmitted(true);
    setEmail("");
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28">
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="lg:w-1/2 animate-on-scroll opacity-0">
                <div className="mb-6">
                  <span className="bg-black text-white rounded-full px-4 py-1 text-sm font-medium">Coming Soon</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Hibiscus is Blossoming
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  We're putting the finishing touches on Hibiscus, our revolutionary AI agent communication platform. 
                  Be the first to know when we launch.
                </p>
                
                <div className="mb-8">
                  <div className="flex items-center gap-8 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-black"></div>
                      <span className="text-lg font-medium">Advanced AI Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-black"></div>
                      <span className="text-lg font-medium">Secure Protocol</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-black"></div>
                      <span className="text-lg font-medium">Agent Registry</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-black"></div>
                      <span className="text-lg font-medium">Seamless Integration</span>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="max-w-md">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-gray-700 to-zinc-900 text-white rounded-md"
                    >
                      Notify Me
                    </Button>
                  </div>
                  {submitted && (
                    <p className="text-green-600 mt-2">Thank you! We'll notify you when we launch.</p>
                  )}
                </form>
              </div>
              
              <div className="lg:w-1/2 animate-on-scroll opacity-0">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LottieAnimation 
                      animationPath={countdownAnimation}
                      className="w-64 h-64"
                    />
                  </div>
                  <img 
                    src="https://res.cloudinary.com/dhjzu51mb/image/upload/v1747426786/fajr9stliyz17xsez5nt.png"
                    alt="Hibiscus Preview"
                    className="rounded-xl shadow-2xl mx-auto"
                  />
                </div>
                
                <div className="mt-8 bg-gray-50 rounded-xl p-6 max-w-sm mx-auto">
                  <h3 className="font-bold text-lg mb-2">Launch Timeline</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-sm flex-shrink-0">✓</div>
                      <div>
                        <p className="font-medium">Alpha Testing</p>
                        <p className="text-gray-600 text-sm">Completed March 2025</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-black text-white flex items-center justify-center text-sm flex-shrink-0">✓</div>
                      <div>
                        <p className="font-medium">Beta Program</p>
                        <p className="text-gray-600 text-sm">Completed April 2025</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full border-2 border-black flex items-center justify-center text-sm flex-shrink-0">3</div>
                      <div>
                        <p className="font-medium">Public Launch</p>
                        <p className="text-gray-600 text-sm">Coming June 2025</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoonPage;
