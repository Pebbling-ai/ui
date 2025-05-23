import { ClerkProvider } from "@clerk/clerk-react";
// import { dark } from "@clerk/themes"; // No longer using dark theme explicitly
import { ReactNode } from "react";

// Try to get key from environment variables
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Check if we're in development mode
const isDevelopment = import.meta.env.MODE === 'development';

// Use a temporary fallback for development if no key is available
// NOTE: This is only for local development and testing the UI
// For production, always set the proper environment variable
if (!publishableKey && !isDevelopment) {
  throw new Error("Missing Clerk publishable key");
}

// This allows local development even without a key
// Components requiring authentication will still fail, but the UI will render
const effectiveKey = publishableKey || (isDevelopment ? 'pk_test_development_placeholder' : '');

export function ClerkProviderWithTheme({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={effectiveKey}
      appearance={{
        // baseTheme: dark, // Using default light theme or explicitly set to light if available

        elements: {
          formButtonPrimary: 
            "bg-gradient-to-r from-gray-700 to-zinc-900 hover:from-gray-800 hover:to-black",
          card: "bg-white",
          headerTitle: "text-black",
          headerSubtitle: "text-gray-600",
          socialButtonsBlockButton: "border-gray-300",
          socialButtonsBlockButtonText: "text-gray-600",
          formFieldLabel: "text-gray-700",
          formFieldInput: "border-gray-300 focus:border-gray-500 focus:ring-gray-500",
          footerActionText: "text-gray-600",
          footerActionLink: "text-gray-900 hover:text-gray-700",
        }
      }}
    >
      {children}
    </ClerkProvider>
  );
}
