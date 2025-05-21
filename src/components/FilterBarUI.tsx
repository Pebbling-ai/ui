
import React, { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  BarChart,
  Eye,
  AlertTriangle,
  MessageCircle,
  Lock,
  Search,
  Zap,
  BookOpen,
  PlayCircle,
  Repeat,
  Shuffle,
  FileText,
  Grid3X3,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

const filters = [
  "Data processing",
  "Statistical analysis",
  "Visualization",
  "Threat detection",
  "Traffic analysis",
  "Authentication",
  "Resource tracking",
  "Performance optimization",
  "Anomaly detection",
  "Query response",
  "Knowledge retrieval",
  "Task automation",
  "Energy management",
  "Load balancing",
  "Consumption analysis",
  "Data synchronization",
  "Format conversion",
  "Schema mapping"
];

const filterIcons: { [key: string]: React.ReactNode } = {
  "Data processing": <Cpu size={20} />,
  "Statistical analysis": <BarChart size={20} />,
  "Visualization": <Eye size={20} />,
  "Threat detection": <AlertTriangle size={20} />,
  "Traffic analysis": <MessageCircle size={20} />,
  "Authentication": <Lock size={20} />,
  "Resource tracking": <Search size={20} />,
  "Performance optimization": <Zap size={20} />,
  "Anomaly detection": <AlertTriangle size={20} />,
  "Query response": <MessageCircle size={20} />,
  "Knowledge retrieval": <BookOpen size={20} />,
  "Task automation": <PlayCircle size={20} />,
  "Energy management": <Zap size={20} />,
  "Load balancing": <Shuffle size={20} />,
  "Consumption analysis": <BarChart size={20} />,
  "Data synchronization": <Repeat size={20} />,
  "Format conversion": <FileText size={20} />,
  "Schema mapping": <Grid3X3 size={20} />
};
type SortOption = 'name' | 'status' | 'date' | 'popularity';
export default function FilterBarUI({
  selectedFilters,
  onFilterClick,
  onSortChange,
  onClearFilters
}: {
  selectedFilters: string[];
  onFilterClick: (filter: string) => void;
  onSortChange: (option: SortOption) => void;
  onClearFilters: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth"
      });
    }
  };

  const handleClearFilter = (filter: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onFilterClick(filter);
  };

  return (
    <div className="w-full">
      <div className="relative px-4 py-1 scrollbar-hide w-full max-w-[100vw] overflow-hidden">
        <div className="relative flex items-center">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="z-10 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md mr-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-black dark:text-white" />
          </button>

          {/* Scrollable Filter List */}
          <div
            ref={scrollRef}
            className="flex items-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => onFilterClick(item)}
                className={`group flex flex-col items-center justify-center text-center min-w-[80px] sm:min-w-[90px] h-[60px] sm:h-[70px] px-3 py-2 rounded-lg transition-all transform hover:scale-105 relative
                  ${
                    selectedFilters.includes(item)
                      ? "bg-black dark:bg-gray-800 text-white shadow-md border border-transparent"
                      : "bg-white dark:bg-transparent dark:border-gray-700/50 border-gray-200 hover:border-gray-300 dark:hover:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50"
                  }`}
              >
                {selectedFilters.includes(item) && (
                  <button
                    onClick={(e) => handleClearFilter(item, e)}
                    className="absolute -top-1 -right-1 bg-gray-800 dark:bg-gray-700 text-white rounded-full p-0.5 opacity-90 hover:opacity-100 transition-opacity"
                    aria-label={`Remove ${item} filter`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
                <div className={`mb-1 transition-colors ${selectedFilters.includes(item) ? "text-white" : "text-black dark:text-white"}`}>
                  {filterIcons[item]}
                </div>
                <span className="text-xs font-medium line-clamp-2">{item}</span>
              </button>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="z-10 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md ml-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-black dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
