
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

// Sample article data
const articles = [
  {
    id: 1,
    title: "The Future of AI Agent Communication Protocols",
    excerpt: "Exploring how standardized protocols are reshaping the way AI agents interact with each other and humans.",
    date: "May 12, 2025",
    author: "Dr. Sarah Chen",
    category: "Technology",
    image: "https://res.cloudinary.com/dhjzu51mb/image/upload/v1747426786/rjxn4q81e0mjukr6wjfr.png",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "How Pebbling Protocol Enhances AI Security",
    excerpt: "A deep dive into the security features of the Pebbling Protocol and how it protects agent communications.",
    date: "May 8, 2025",
    author: "Michael Thornton",
    category: "Security",
    image: "https://res.cloudinary.com/dhjzu51mb/image/upload/v1747426786/fajr9stliyz17xsez5nt.png",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Case Study: Implementing Pebbling in Enterprise Systems",
    excerpt: "Learn how Fortune 500 companies are integrating Pebbling Protocol into their existing AI infrastructure.",
    date: "May 5, 2025",
    author: "Jasmine Wong",
    category: "Case Study",
    image: "https://res.cloudinary.com/dhjzu51mb/image/upload/v1747426786/rjxn4q81e0mjukr6wjfr.png",
    readTime: "12 min read"
  },
  {
    id: 4,
    title: "The Technical Architecture of Hibiscus",
    excerpt: "An insider look at the revolutionary technology stack powering the next generation of AI communication.",
    date: "Apr 30, 2025",
    author: "Alex Rivera",
    category: "Technical",
    image: "https://res.cloudinary.com/dhjzu51mb/image/upload/v1747426786/fajr9stliyz17xsez5nt.png",
    readTime: "10 min read"
  },
  {
    id: 5,
    title: "Ethics in AI Communication: Guardrails and Guidelines",
    excerpt: "Examining the ethical considerations in designing protocols for autonomous AI agent interactions.",
    date: "Apr 25, 2025",
    author: "Dr. Maya Johnson",
    category: "Ethics",
    image: "https://res.cloudinary.com/dhjzu51mb/image/upload/v1747426786/rjxn4q81e0mjukr6wjfr.png",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "What's Next for the Pebbling Protocol Ecosystem",
    excerpt: "A roadmap outlining the future developments and integrations planned for the growing protocol.",
    date: "Apr 20, 2025",
    author: "Thomas Nguyen",
    category: "Roadmap",
    image: "https://res.cloudinary.com/dhjzu51mb/image/upload/v1747426786/fajr9stliyz17xsez5nt.png",
    readTime: "6 min read"
  }
];

// Categories for filtering
const categories = ["All", "Technology", "Security", "Case Study", "Technical", "Ethics", "Roadmap"];

const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter articles based on search term and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28">
        <section className="py-16">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-on-scroll opacity-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Articles & Insights
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay up to date with the latest developments, best practices, and insights about the Pebbling Protocol ecosystem.
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className="mb-12 animate-on-scroll opacity-0">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-64 lg:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                
                <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-md text-sm whitespace-nowrap transition-colors ${
                        activeCategory === category 
                          ? "bg-black text-white" 
                          : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Featured Article */}
            <div className="mb-16 animate-on-scroll opacity-0">
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-7/12">
                    <img
                      src={articles[0].image}
                      alt={articles[0].title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="bg-black text-white rounded-full px-3 py-1 text-xs font-medium">
                        {articles[0].category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{articles[0].title}</h2>
                    <p className="text-gray-600 mb-6">{articles[0].excerpt}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <Calendar size={16} className="mr-1" />
                      <span className="mr-4">{articles[0].date}</span>
                      <User size={16} className="mr-1" />
                      <span>{articles[0].author}</span>
                    </div>
                    
                    <Button className="bg-black text-white hover:bg-gray-800 w-fit">
                      Read Article <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Article Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article, index) => (
                  <div key={article.id} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0" style={{animationDelay: `${index * 100}ms`}}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="mb-3 flex justify-between items-center">
                        <span className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-xs">{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-1" />
                        <span className="mr-4">{article.date}</span>
                        <User size={16} className="mr-1" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-xl text-gray-600">No articles found matching your search criteria.</p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {filteredArticles.length > 0 && (
              <div className="mt-16 flex justify-center animate-on-scroll opacity-0">
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-md bg-black text-white">1</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100">2</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100">3</button>
                  <span className="w-10 h-10 flex items-center justify-center">...</span>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100">10</button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlesPage;
