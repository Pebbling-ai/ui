
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Capability {
  name: string;
  description: string;
}

interface Link {
  type: string;
  url: string;
}

interface CreateAgentFormProps {
  onClose: () => void;
}

const CreateAgentForm: React.FC<CreateAgentFormProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [documentationUrl, setDocumentationUrl] = useState("");
  const [capabilities, setCapabilities] = useState<Capability[]>([]);
  const [newCapabilityName, setNewCapabilityName] = useState("");
  const [newCapabilityDescription, setNewCapabilityDescription] = useState("");
  const [domains, setDomains] = useState<string[]>([]);
  const [newDomain, setNewDomain] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [deploymentType, setDeploymentType] = useState("cloud");
  const [deploymentUrl, setDeploymentUrl] = useState("");
  const [deploymentRegion, setDeploymentRegion] = useState("global");
  const [links, setLinks] = useState<Link[]>([]);
  const [newLinkType, setNewLinkType] = useState("website");
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [metadata, setMetadata] = useState({
    framework: "",
    programming_language: "",
    version: "",
    supported_languages: ["English"]
  });

  const addCapability = () => {
    if (newCapabilityName && newCapabilityDescription) {
      setCapabilities([
        ...capabilities,
        { name: newCapabilityName, description: newCapabilityDescription }
      ]);
      setNewCapabilityName("");
      setNewCapabilityDescription("");
    }
  };

  const removeCapability = (index: number) => {
    const updatedCapabilities = [...capabilities];
    updatedCapabilities.splice(index, 1);
    setCapabilities(updatedCapabilities);
  };

  const addDomain = () => {
    if (newDomain && !domains.includes(newDomain)) {
      setDomains([...domains, newDomain]);
      setNewDomain("");
    }
  };

  const removeDomain = (domain: string) => {
    setDomains(domains.filter(d => d !== domain));
  };

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const addLink = () => {
    if (newLinkType && newLinkUrl) {
      setLinks([...links, { type: newLinkType, url: newLinkUrl }]);
      setNewLinkType("website");
      setNewLinkUrl("");
    }
  };

  const removeLink = (index: number) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create agent object from form data
    const agent = {
      name,
      description,
      documentationUrl,
      capabilities,
      domains,
      tags,
      metadata,
      deployment_type: deploymentType,
      deployment_url: deploymentUrl,
      deployment_region: deploymentRegion,
      links
    };
    
    console.log("Created agent:", agent);
    toast.success("Agent created successfully!");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 overflow-y-auto max-h-[70vh]">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Agent Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter agent name"
            required
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your agent's purpose and features"
            required
            className="min-h-24"
          />
        </div>

        <div>
          <Label htmlFor="documentationUrl">Documentation URL</Label>
          <Input
            id="documentationUrl"
            value={documentationUrl}
            onChange={(e) => setDocumentationUrl(e.target.value)}
            placeholder="https://docs.example.com"
            type="url"
          />
        </div>

        <div className="space-y-2">
          <Label>Capabilities</Label>
          <div className="flex flex-col space-y-2">
            <div className="flex gap-2">
              <Input
                value={newCapabilityName}
                onChange={(e) => setNewCapabilityName(e.target.value)}
                placeholder="Capability name"
              />
              <Input
                value={newCapabilityDescription}
                onChange={(e) => setNewCapabilityDescription(e.target.value)}
                placeholder="Description"
              />
              <Button type="button" onClick={addCapability} className="shrink-0">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <div>
                    <p className="font-medium">{capability.name}</p>
                    <p className="text-sm text-gray-500">{capability.description}</p>
                  </div>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => removeCapability(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Domains</Label>
            <div className="flex gap-2">
              <Input
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
                placeholder="Add domain"
              />
              <Button type="button" onClick={addDomain} className="shrink-0">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {domains.map((domain) => (
                <Badge key={domain} variant="outline" className="flex items-center gap-1">
                  {domain}
                  <button type="button" onClick={() => removeDomain(domain)}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex gap-2">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add tag"
              />
              <Button type="button" onClick={addTag} className="shrink-0">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                  {tag}
                  <button type="button" onClick={() => removeTag(tag)}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="framework">Framework</Label>
            <Input
              id="framework"
              value={metadata.framework}
              onChange={(e) => setMetadata({...metadata, framework: e.target.value})}
              placeholder="e.g., OpenAI GPT"
            />
          </div>
          
          <div>
            <Label htmlFor="programming_language">Programming Language</Label>
            <Input
              id="programming_language"
              value={metadata.programming_language}
              onChange={(e) => setMetadata({...metadata, programming_language: e.target.value})}
              placeholder="e.g., Python"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="version">Version</Label>
            <Input
              id="version"
              value={metadata.version}
              onChange={(e) => setMetadata({...metadata, version: e.target.value})}
              placeholder="e.g., 1.0"
            />
          </div>
          
          <div>
            <Label htmlFor="deployment_type">Deployment Type</Label>
            <Select value={deploymentType} onValueChange={setDeploymentType}>
              <SelectTrigger>
                <SelectValue placeholder="Select deployment type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cloud">Cloud</SelectItem>
                <SelectItem value="on-premise">On-Premise</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="deployment_url">Deployment URL</Label>
            <Input
              id="deployment_url"
              value={deploymentUrl}
              onChange={(e) => setDeploymentUrl(e.target.value)}
              placeholder="https://api.example.com"
              type="url"
            />
          </div>
          
          <div>
            <Label htmlFor="deployment_region">Deployment Region</Label>
            <Input
              id="deployment_region"
              value={deploymentRegion}
              onChange={(e) => setDeploymentRegion(e.target.value)}
              placeholder="e.g., US-East, EU-West"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Links</Label>
          <div className="flex flex-col space-y-2">
            <div className="flex gap-2">
              <Select value={newLinkType} onValueChange={setNewLinkType}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="github">GitHub</SelectItem>
                  <SelectItem value="docs">Docs</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                </SelectContent>
              </Select>
              <Input
                value={newLinkUrl}
                onChange={(e) => setNewLinkUrl(e.target.value)}
                placeholder="URL"
                type="url"
              />
              <Button type="button" onClick={addLink} className="shrink-0">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              {links.map((link, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <div className="flex items-center">
                    <Badge variant="outline" className="mr-2">{link.type}</Badge>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate max-w-[250px]">
                      {link.url}
                    </a>
                  </div>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => removeLink(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2 pt-4 border-t">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Create Agent</Button>
      </div>
    </form>
  );
};

export default CreateAgentForm;
