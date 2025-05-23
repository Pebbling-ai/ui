import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, RefreshCw, X, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock function for token generation - in production, this would be an API call
const generateToken = async (name: string, expiryDays: number) => {
  // This is a mockup - in production, this would be a real API call
  // that would generate and store the token securely on the backend
  return {
    token: `pebble_pat_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
    name,
    created: new Date(),
    expires: new Date(Date.now() + expiryDays * 24 * 60 * 60 * 1000),
  };
};

interface Token {
  id: string;
  token: string;
  name: string;
  created: Date;
  expires: Date;
}

const TokensPage = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const [tokens, setTokens] = useState<Token[]>([]);
  const [newTokenName, setNewTokenName] = useState("");
  const [tokenExpiryDays, setTokenExpiryDays] = useState(30);
  const [newlyCreatedToken, setNewlyCreatedToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // This would be replaced with an actual API call in production
  useEffect(() => {
    // Mock data
    setTokens([
      {
        id: "1",
        token: "hidden", // Token values are never stored/displayed in full after creation
        name: "Development Token",
        created: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      },
    ]);
  }, []);

  const handleCreateToken = async () => {
    if (!newTokenName.trim()) {
      toast({
        title: "Error",
        description: "Please provide a name for your token",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const newToken = await generateToken(newTokenName, tokenExpiryDays);
      
      // In production, the backend would store the hashed token
      setTokens([
        ...tokens,
        {
          id: Date.now().toString(),
          token: "hidden",
          name: newToken.name,
          created: newToken.created,
          expires: newToken.expires,
        },
      ]);
      
      // Only show the full token once upon creation
      setNewlyCreatedToken(newToken.token);
      setNewTokenName("");
      
      toast({
        title: "Token created",
        description: "Your personal access token has been created successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create token. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToken = () => {
    if (newlyCreatedToken) {
      navigator.clipboard.writeText(newlyCreatedToken);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      toast({
        title: "Copied!",
        description: "Token copied to clipboard",
      });
    }
  };

  const handleDismissNewToken = () => {
    setNewlyCreatedToken(null);
  };

  const handleDeleteToken = (id: string) => {
    // In production, this would make an API call to revoke the token
    setTokens(tokens.filter(token => token.id !== id));
    
    toast({
      title: "Token revoked",
      description: "Your personal access token has been revoked.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 overflow-hidden relative">
      <Helmet>
        <title>Personal Access Tokens | Pebbling</title>
        <meta name="description" content="Manage your Pebbling API access tokens" />
      </Helmet>
      
      {/* Main content with z-index to appear above background */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-24 pb-12 px-4">
          <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Personal Access Tokens</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Create and manage API tokens for the Pebbling platform.
            </p>
          </div>

          {/* Create token form */}
          <div className="mb-8 p-4 border rounded-md">
            <h2 className="text-lg font-medium mb-4">Create New Token</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="token-name">Token Name</Label>
                <Input
                  id="token-name"
                  placeholder="e.g., Development, CI/CD"
                  value={newTokenName}
                  onChange={(e) => setNewTokenName(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="token-expiry">Expiration (days)</Label>
                <Input
                  id="token-expiry"
                  type="number"
                  min="1"
                  max="365"
                  value={tokenExpiryDays}
                  onChange={(e) => setTokenExpiryDays(parseInt(e.target.value) || 30)}
                  className="mt-1"
                />
              </div>

              <Button
                onClick={handleCreateToken}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Token"
                )}
              </Button>
            </div>
          </div>

          {/* Newly created token */}
          {newlyCreatedToken && (
            <div className="mb-8 p-4 border border-yellow-200 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20 rounded-md">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />
                <div>
                  <h3 className="font-medium">New token created</h3>
                  <p className="text-sm mt-1 mb-2">
                    This token will only be displayed once. Copy it now and store it securely.
                  </p>
                  <div className="flex items-center justify-between p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded border border-yellow-300 dark:border-yellow-700">
                    <code className="font-mono text-xs break-all">{newlyCreatedToken}</code>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="ml-2 flex-shrink-0 h-8 w-8 p-0"
                      onClick={handleCopyToken}
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <div className="mt-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={handleDismissNewToken}
                    >
                      I've saved my token
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Token list */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Your Tokens</h2>
            {tokens.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 p-4 border rounded-md text-center">
                You don't have any active tokens yet.
              </p>
            ) : (
              <div className="space-y-3">
                {tokens.map((token) => (
                  <div
                    key={token.id}
                    className="flex flex-row items-center justify-between p-3 border rounded-md"
                  >
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium">{token.name}</span>
                        <Badge className="ml-2" variant="outline">Active</Badge>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Created: {token.created.toLocaleDateString()} • 
                        Expires: {token.expires.toLocaleDateString()}
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteToken(token.id)}
                    >
                      Revoke
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Security tips */}
          <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800/30">
            <div className="flex items-center mb-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              <h2 className="text-lg font-medium">Security Tips</h2>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li>Never share your tokens with anyone</li>
              <li>Store tokens securely and use environment variables</li>
              <li>Revoke tokens immediately if they are compromised</li>
              <li>Create separate tokens for different applications</li>
            </ul>
          </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default TokensPage;
