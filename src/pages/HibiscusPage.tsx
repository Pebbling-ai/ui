import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Search, Filter, Bot, ChevronLeft, ChevronRight, TagIcon, SlidersHorizontal, X, XCircle, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import FilterBarUI from "@/components/FilterBarUI";
import Navbar from "@/components/Navbar";
import CreateAgentForm from "@/components/CreateAgentForm";
import { agents } from "@/data/agents.tsx";
import { 
  Mail, 
  Lock, 
  LogIn, 
  UserPlus,
  ArrowUpDown
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// Tags data for the new section
const popularTags = [
  "Analytics", "Machine Learning", "Data Processing", "Visualization", 
  "NLP", "Security", "Performance", "API Integration", "Automation",
  "Blockchain", "AI Assistant", "Data Mining", "Neural Networks",
  "Cloud Computing", "Edge Computing", "Database", "Monitoring"
];

const page = () => {
  type SortOption = 'name' | 'status' | 'date' | 'popularity';
  const [searchTerm, setSearchTerm] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null);
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showCreateAgentDialog, setShowCreateAgentDialog] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('name');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [selectedQuickFilter, setSelectedQuickFilter] = useState<string | null>(null);
  
  const handleFilterClick = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleRemoveTag = (tag: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setSelectedTags([]);
    setSelectedQuickFilter(null);
    setNameFilter("");
    setSortOption('name'); // Reset sort option to default
  };

  const filteredAgents = agents
  .filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNameFilter = nameFilter === "" || agent.name.toLowerCase().includes(nameFilter.toLowerCase());
    const matchesFilters =
      selectedFilters.length === 0 ||
      selectedFilters.some(filter => agent.capabilities.some(cap => cap.name === filter));
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some(tag => agent.domains.includes(tag));
    return matchesSearch && matchesFilters && matchesTags && matchesNameFilter;
  })
  .sort((a, b) => {
    switch (sortOption) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'status':
        return a.status.localeCompare(b.status);
      case 'date':
        return new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime();
      case 'popularity':
        return b.usageCount - a.usageCount;
      default:
        return 0;
    }
  });
  
  const handleAgentClick = (agent: typeof agents[0]) => {
    setSelectedAgent(agent);
  };
  
  const quickFilterTags = [
    { label: "Most Popular", value: "popular" },
    { label: "Recently Added", value: "recent" },
    { label: "Active Now", value: "active" },
    { label: "High Performance", value: "performance" },
    { label: "Integration Ready", value: "integration" },
    { label: "Learning Capable", value: "learning" },
  ];
  
  const focusSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  
  // Update the handleQuickFilter function
const handleQuickFilter = (value: string) => {
  // If we're clearing the filter (clicking X), reset everything related to this filter
  if (selectedQuickFilter === value) {
    setSelectedQuickFilter(null);
    // Reset the specific filter's effects
    switch (value) {
      case 'popular':
        setSortOption('name');
        break;
      case 'recent':
        setSortOption('name');
        break;
      case 'active':
        setSelectedFilters(prev => prev.filter(f => f !== 'Active'));
        break;
      case 'performance':
        setSelectedTags(prev => prev.filter(t => t !== 'Performance'));
        break;
      case 'integration':
        setSelectedTags(prev => prev.filter(t => t !== 'API Integration'));
        break;
      case 'learning':
        setSelectedTags(prev => prev.filter(t => t !== 'Machine Learning'));
        break;
    }
    return;
  }

  // If setting a new filter
  setSelectedQuickFilter(value);
  switch (value) {
    case 'popular':
      setSortOption('popularity');
      break;
    case 'recent':
      setSortOption('date');
      break;
    case 'active':
      setSelectedFilters(prev => 
        prev.includes('Active') ? prev : [...prev, 'Active']
      );
      break;
    case 'performance':
      setSelectedTags(prev =>
        prev.includes('Performance') ? prev : [...prev, 'Performance']
      );
      break;
    case 'integration':
      setSelectedTags(prev =>
        prev.includes('API Integration') ? prev : [...prev, 'API Integration']
      );
      break;
    case 'learning':
      setSelectedTags(prev =>
        prev.includes('Machine Learning') ? prev : [...prev, 'Machine Learning']
      );
      break;
  }
};
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.sort-dropdown')) {
        setIsSortOpen(false);
      }
      if (!target.closest('.filter-dropdown')) {
        setIsFilterDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <div className="min-h-screen">
      
      <Navbar/>
      <section className="pt-28 py-2 relative animate-on-scroll">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          
          <div className="flex justify-between items-center w-full">
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight text-black font-[var(--font-heading)]">
                Hibiscus Registry
              </h1>
              <p className="mt-2 text-lg text-gray-600 font-[var(--font-body)] text-nowrap mb-3">
                Discover and connect with powerful AI agents across the Pebble network ecosystem.
              </p>
            </div>
            
            {/* <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-black text-white hover:bg-black/90 border-black flex items-center h-10 px-4"
                onClick={() => window.open('https://pebbling.com/server', '_blank')}
              >
                <Server className="mr-1.5 h-4 w-4" />
                Launch your MCP Server
              </Button>
              
              <Button
                variant="outline"
                className="bg-black hover:bg-black/90 text-white font-medium shadow-sm transition-all duration-200 px-6 py-2.5 rounded-md"
                onClick={() => setShowCreateAgentDialog(true)}
              >
                <Bot className="mr-2 h-5 w-5" />
                Create Agent
              </Button>
            </div> */}
          </div>
          
          <div className="w-full flex flex-col items-center">
            <div className="w-full relative group" onClick={focusSearch}>
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" 
              />
              <Input
                ref={searchInputRef}
                type="text"
                placeholder="Search by agent name, type, or capabilities..."
                className="pl-10 py-6 text-base border-gray-200 hover:border-gray-300 focus:border-gray-400 focus:ring focus:ring-gray-100 transition-all duration-300 rounded-lg shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <FilterBarUI 
            onSortChange={setSortOption} 
            selectedFilters={selectedFilters} 
            onFilterClick={handleFilterClick} 
            onClearFilters={clearAllFilters}
          />
          
          {/* Tags Section with X buttons for clearing */}
          <div className="w-full px-4 pb-6 mb-5">
            <div className="mx-auto">
              <div className="flex flex-wrap items-center justify-between">
                {/* Left side - Quick filter tags */}
                <div className="flex items-center gap-2 flex-wrap">
                  {quickFilterTags.map((tag) => (
                    <button
                      key={tag.value}
                      onClick={() => handleQuickFilter(tag.value)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative
                        ${selectedQuickFilter === tag.value
                          ? "bg-black text-white dark:bg-gray-800"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800/40 dark:text-gray-300 dark:hover:bg-gray-700/60"
                        }`}
                    >
                      {tag.label}
                      {selectedQuickFilter === tag.value && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuickFilter(tag.value);
                          }}
                          className="absolute -top-1 -right-1 bg-gray-800 text-white rounded-full p-0.5 opacity-90 hover:opacity-100 transition-opacity"
                          aria-label={`Clear ${tag.label} filter`}
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Right side - Controls */}
                <div className="flex items-center gap-3 ml-auto mt-3 sm:mt-0">
                  {/* Name filter input */}
                  <div className="relative mr-2">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Filter by name"
                      className="pl-8 h-7 text-xs w-[120px] sm:w-[180px] rounded-full border border-gray-200"
                      value={nameFilter}
                      onChange={(e) => setNameFilter(e.target.value)}
                    />
                    {nameFilter && (
                      <button
                        onClick={() => setNameFilter("")}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  {/* Sort dropdown */}
                  <div className="relative sort-dropdown">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-1.5 border-gray-200 text-gray-700 h-7 text-xs"
                      onClick={() => setIsSortOpen(!isSortOpen)}
                    >
                      <ArrowUpDown className="w-3 h-3" />
                    </Button>

                    {isSortOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                        <div className="py-1">
                          {[
                            { value: 'name', label: 'Name (A-Z)' },
                            { value: 'status', label: 'Status' },
                            { value: 'date', label: 'Date Added' },
                            { value: 'popularity', label: 'Popularity' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 
                                ${sortOption === option.value ? 'bg-gray-50 text-black font-medium' : 'text-gray-700'}`}
                              onClick={() => {
                                setSortOption(option.value as SortOption);
                                setIsSortOpen(false);
                              }}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Filter Controls */}
                  <div className="relative filter-dropdown">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center space-x-1.5 border-gray-200 text-gray-700 h-7"
                      onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                    </Button>

                    {isFilterDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                        <div className="p-4">
                          <h3 className="font-medium text-sm text-gray-900 mb-3">Filter by Status</h3>
                          <div className="space-y-2">
                            {["Active", "Idle", "Offline"].map((status) => (
                              <div key={status} className="flex items-center">
                                <Checkbox 
                                  id={`status-${status}`}
                                  checked={selectedFilters.includes(status)}
                                  onCheckedChange={() => handleFilterClick(status)}
                                />
                                <label 
                                  htmlFor={`status-${status}`}
                                  className="ml-2 text-sm text-gray-600"
                                >
                                  {status}
                                </label>
                              </div>
                            ))}
                          </div>

                          <hr className="my-3" />

                          <h3 className="font-medium text-sm text-gray-900 mb-3">Filter by Type</h3>
                          <div className="space-y-2">
                            {["Processing", "Analytics", "Assistant", "Integration"].map((type) => (
                              <div key={type} className="flex items-center">
                                <Checkbox 
                                  id={`type-${type}`}
                                  checked={selectedFilters.includes(type)}
                                  onCheckedChange={() => handleFilterClick(type)}
                                />
                                <label 
                                  htmlFor={`type-${type}`}
                                  className="ml-2 text-sm text-gray-600"
                                >
                                  {type}
                                </label>
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 flex justify-end space-x-2">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => {
                                setSelectedFilters([]);
                                setIsFilterDropdownOpen(false);
                              }}
                            >
                              Clear
                            </Button>
                            <Button 
                              size="sm"
                              onClick={() => setIsFilterDropdownOpen(false)}
                            >
                              Apply
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Clear all filters button */}
                  {(selectedFilters.length > 0 || selectedTags.length > 0 || selectedQuickFilter !== null || nameFilter !== "") && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearAllFilters}
                      className="h-7 text-xs px-2 text-gray-600 hover:text-gray-800"
                    >
                      <X className="w-3 h-3 mr-1" />
                      Clear all
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {filteredAgents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-5 w-full">
              {filteredAgents.map(agent => (
                <Card 
                  key={agent.id}
                  className={`border cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-gray-400 relative overflow-hidden
                    ${hoveredAgent === agent.id ? 'transform scale-[1.04] shadow-lg z-10' : 'hover:shadow-md'}
                  `}
                  onClick={() => handleAgentClick(agent)}
                  onMouseEnter={() => setHoveredAgent(agent.id)}
                  onMouseLeave={() => setHoveredAgent(null)}
                >
                  <div className="absolute inset-0 bg-white dark:bg-gray-900 pointer-events-none"/>
                  <CardHeader className="flex flex-row items-center gap-3 pb-2 relative z-10">
                    <div className={`p-2 rounded-lg transition-all duration-300 ${hoveredAgent === agent.id ? 'bg-gray-100 dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-800/70'}`}>
                      {agent.icon}
                    </div>
                    <div>
                      <CardTitle className="text-base text-black dark:text-white font-[var(--font-heading)]">{agent.name}</CardTitle>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-[var(--font-body)]">{agent.type}</p>
                    </div>
                    <div className={`ml-auto px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 
                      ${agent.status === "Active" ? "bg-green-500/20 text-green-800 dark:bg-green-500/30 dark:text-green-400" : 
                        agent.status === "Idle" ? "bg-amber-500/20 text-amber-800 dark:bg-amber-500/30 dark:text-amber-400" : 
                        "bg-gray-500/20 text-gray-800 dark:bg-gray-500/30 dark:text-gray-400"}
                    `}>
                      {agent.status}
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-2">
                      <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 font-[var(--font-body)]">{agent.description}</p>
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 font-[var(--font-body)]">Capabilities:</p>
                        <div className="flex flex-wrap gap-1">
                          {agent.capabilities.slice(0, 3).map((capability, idx) => (
                            <span 
                              key={idx} 
                              className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                              title={capability.description}
                            >
                              {capability.name}
                            </span>
                          ))}
                          {agent.capabilities.length > 3 && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                              +{agent.capabilities.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-1 font-[var(--font-heading)]">
                No agents found
              </h3>
              <p className="text-gray-500 max-w-md mx-auto font-[var(--font-body)]">
                No agents match your search for "{searchTerm}"{selectedFilters.length > 0 && " with the selected filters"}. Try adjusting your search terms or filters.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center font-[var(--font-heading)]">Welcome to Hibiscus</DialogTitle>
            <DialogDescription className="text-center">
              Login to your account to continue
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-4 p-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-black" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-black" />
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Enter your password"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <Button variant="link" className="text-sm text-pulse-600">
                    Forgot password?
                  </Button>
                </div>

                <Button 
                  className="w-full bg-black"
                  onClick={() => {
                    setShowLoginDialog(false);
                  }}
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Create Agent Dialog */}
      <Dialog open={showCreateAgentDialog} onOpenChange={setShowCreateAgentDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-[var(--font-heading)]">Create a New Agent</DialogTitle>
            <DialogDescription>
              Fill in the details to create a new AI agent
            </DialogDescription>
          </DialogHeader>
          
          <CreateAgentForm onClose={() => setShowCreateAgentDialog(false)} />
        </DialogContent>
      </Dialog>
      
      {/* Agent Details Sheet */}
      <Sheet open={selectedAgent !== null} onOpenChange={() => setSelectedAgent(null)}>
        <SheetContent side="right-large" className="overflow-y-auto bg-white h-full">
          {selectedAgent && (
            <div className="pl-7 space-y-6">
              <SheetHeader className="space-y-2 sticky top-0 bg-white z-30 py-3 pl-5">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setSelectedAgent(null)} 
                    className="absolute right-4 top-4 z-40 rounded-full bg-white p-1.5 shadow-sm border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-lg">
                    {selectedAgent.icon}
                  </div>
                  <div className="flex-1">
                    <SheetTitle className="pt-3 text-2xl font-bold text-black font-[var(--font-heading)]">{selectedAgent.name}</SheetTitle>
                    <div className="flex items-center gap-3 mt-1">
                      <Badge className={
                        `${selectedAgent.status === "Active" ? "bg-green-100 text-green-800" : 
                        selectedAgent.status === "Idle" ? "bg-amber-100 text-amber-800" : 
                        "bg-gray-100 text-gray-800"}`
                      }>
                        {selectedAgent.status}
                      </Badge>
                      <span className="text-sm text-gray-500">v{selectedAgent.version}</span>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
              </SheetHeader>

              <div className="grid gap-6 pb-20">
                <div className="space-y-1.5">
                  <h3 className="font-bold text-sm text-black uppercase font-[var(--font-heading)]">DESCRIPTION</h3>
                  <p className="text-gray-700 leading-relaxed font-[var(--font-body)]">{selectedAgent.description}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-sm text-black uppercase font-[var(--font-heading)]">CAPABILITIES</h3>
                  <div className="space-y-2">
                    {selectedAgent.capabilities.map((capability, idx) => (
                      <div key={idx} className="bg-gray-50 p-2 rounded-md">
                        <p className="font-medium text-gray-800 font-[var(--font-heading)]">{capability.name}</p>
                        <p className="text-sm text-gray-600 font-[var(--font-body)]">{capability.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-sm text-black uppercase font-[var(--font-heading)]">DOMAINS</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedAgent.domains.map((domain, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline" 
                        className="bg-gray-50 text-gray-700 hover:bg-gray-100"
                      >
                        {domain}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-sm text-black uppercase font-[var(--font-heading)]">COMPATIBLE SYSTEMS</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedAgent.compatibleSystems.map((system, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary" 
                        className="bg-gray-100 text-gray-600 hover:bg-gray-200"
                      >
                        {system}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Card className="border border-gray-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-gray-700 font-bold font-[var(--font-heading)]">Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 font-[var(--font-body)]">Performance Score</span>
                        <span className="font-medium text-gray-900">{selectedAgent.performanceScore}%</span>
                      </div>
                      <Progress value={selectedAgent.performanceScore} className="h-2 bg-gray-100" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 font-[var(--font-body)]">Usage Count</span>
                        <span className="font-medium text-gray-900">{selectedAgent.usageCount.toLocaleString()}</span>
                      </div>
                      <Progress 
                        value={(selectedAgent.usageCount / 10000) * 100} 
                        className="h-2 bg-gray-100" 
                      />
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-3">
                  <h3 className="font-bold text-sm text-black uppercase font-[var(--font-heading)]">METADATA</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-xs font-bold text-black uppercase mb-1">FRAMEWORK</p>
                      <p className="font-medium">{selectedAgent.metadata.framework}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-xs font-bold text-black uppercase mb-1">PROGRAMMING LANGUAGE</p>
                      <p className="font-medium">{selectedAgent.metadata.programming_language}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-xs font-bold text-black uppercase mb-1">SUPPORTED LANGUAGES</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedAgent.metadata.supported_languages.map((lang, idx) => (
                          <Badge key={idx} variant="outline" className="bg-white">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-xs font-bold text-black uppercase mb-1">DEPLOYMENT</p>
                      <p className="font-medium capitalize">{selectedAgent.deployment_type}</p>
                      <p className="text-sm text-gray-500">{selectedAgent.deployment_region}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-sm text-black uppercase font-[var(--font-heading)]">LINKS</h3>
                  <div className="space-y-2">
                    {selectedAgent.links.map((link, idx) => (
                      <a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <Badge className="capitalize mr-2">{link.type}</Badge>
                        <span className="text-blue-600 hover:underline">{link.url}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border border-gray-200 bg-gray-50">
                    <CardContent className="p-4 space-y-1">
                      <p className="text-xs font-bold text-black uppercase mb-1">CREATED BY</p>
                      <p className="text-sm font-medium text-gray-700 font-[var(--font-body)]">{selectedAgent.createdBy}</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-gray-200 bg-gray-50">
                    <CardContent className="p-4 space-y-1">
                      <p className="text-xs font-bold text-black uppercase mb-1">DATE CREATED</p>
                      <p className="text-sm font-medium text-gray-700 font-[var(--font-body)]">{selectedAgent.dateCreated}</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-gray-200 bg-gray-50">
                    <CardContent className="p-4 space-y-1">
                      <p className="text-xs font-bold text-black uppercase mb-1">LAST UPDATED</p>
                      <p className="text-sm font-medium text-gray-700 font-[var(--font-body)]">{selectedAgent.lastUpdated}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="pt-4">
                  <Button 
                    className="w-full bg-gray-900 hover:bg-black text-white shadow-sm"
                    asChild
                  >
                    <a href={selectedAgent.documentationUrl} target="_blank" rel="noopener noreferrer">
                      Connect with Agent
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default page;
