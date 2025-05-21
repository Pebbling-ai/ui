
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Star, Users } from "lucide-react";

const GitHubSection = () => {
  const [pebbleStars, setPebbleStars] = useState<number | null>(null);
  const [pebbleContributors, setPebbleContributors] = useState<number | null>(null);
  const [hibiscusStars, setHibiscusStars] = useState<number | null>(null);
  const [hibiscusContributors, setHibiscusContributors] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async (repoOwner: string, repoName: string, setStars: Function, setContributors: Function) => {
      try {
        // Fetch repository details (for stars)
        const repoRes = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`);
        if (repoRes.ok) {
          const repoData = await repoRes.json();
          setStars(repoData.stargazers_count);
        } else {
          console.error(`Failed to fetch ${repoName} repo details:`, repoRes.status);
          setStars(0); // Default to 0 on error
        }

        // Fetch contributors
        let contributorCount = 0;
        // Try to get count from Link header first (more efficient for many contributors)
        const contributorsResPerPage1 = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors?per_page=1&anon=true`);
        if (contributorsResPerPage1.ok) {
          const linkHeader = contributorsResPerPage1.headers.get('Link');
          if (linkHeader) {
            const match = linkHeader.match(/<[^>]+[?&]page=(\d+)>;\s*rel="last"/);
            if (match) {
              contributorCount = parseInt(match[1], 10);
            }
          }
        }

        if (contributorCount > 0) {
          setContributors(contributorCount);
        } else {
          // Fallback: if Link header trick didn't work or repo has few contributors, fetch all and count
          const allContributorsRes = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors?anon=true`);
          if (allContributorsRes.ok) {
            const allContributorsData = await allContributorsRes.json();
            setContributors(allContributorsData.length);
          } else {
            console.error(`Failed to fetch all contributors for ${repoName}:`, allContributorsRes.status);
            setContributors(0); // Default to 0 on error
          }
        }
      } catch (error) {
        console.error(`Error fetching data for ${repoName}:`, error);
        setStars(0);
        setContributors(0);
      }
    };

    fetchData("pebbling-ai", "pebble", setPebbleStars, setPebbleContributors);
    fetchData("pebbling-ai", "hibiscus", setHibiscusStars, setHibiscusContributors);
  }, []);
  return (
    <section className="animate-on-scroll ">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title mb-2">Proudly Open Source</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our projects are built with transparency and collaboration in mind. Join our growing community of contributors on GitHub.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Pebble Repository Card */}
          <Card className="overflow-hidden border-2 border-gray-200 hover:border-pulse-300 transition-all duration-300 bg-white">
            <CardContent className="p-0">
              <div className="flex flex-col items-center h-full">
                <div className="p-6 w-full flex justify-center items-center border-b border-gray-100">
                  <Github className="h-16 w-16 text-gray-800" />
                </div>
                <div className="p-6 w-full flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-left">Pebble Protocol</h3>
                  <p className="text-gray-600 mb-6 text-left">
                    An advanced agent communication protocol for the next generation of AI applications.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50">
                      <Star className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">{pebbleStars !== null ? `${pebbleStars} Stars` : 'Loading...'}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50">
                      <Users className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">{pebbleContributors !== null ? `${pebbleContributors} Contributors` : 'Loading...'}</span>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <a 
                      href="https://github.com/pebbling-ai/pebble" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="button-primary inline-flex items-center"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      View Repository
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Hibiscus Repository Card */}
          <Card className="overflow-hidden border-2 border-gray-200 hover:border-pulse-300 transition-all duration-300 bg-white">
            <CardContent className="p-0">
              <div className="flex flex-col items-center h-full">
                <div className="p-6 w-full flex justify-center items-center border-b border-gray-100">
                  <Github className="h-16 w-16 text-gray-800" />
                </div>
                <div className="p-6 w-full flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-left">Hibiscus</h3>
                  <p className="text-gray-600 mb-6 text-left">
                    A platform enabling thousands of AI agents to communicate and provide assistance to users.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50">
                      <Star className="h-5 w-5 text-amber-500" />
                      <span className="font-medium">{hibiscusStars !== null ? `${hibiscusStars} Stars` : 'Loading...'}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50">
                      <Users className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">{hibiscusContributors !== null ? `${hibiscusContributors} Contributors` : 'Loading...'}</span>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <a 
                      href="https://github.com/pebbling-ai/hibiscus" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="button-primary inline-flex items-center"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      View Repository
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
