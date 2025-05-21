import { ClerkProvider } from "@clerk/clerk-react";
// import { dark } from "@clerk/themes"; // No longer using dark theme explicitly
import { ReactNode } from "react";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("Missing Clerk publishable key");
}

export function ClerkProviderWithTheme({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={publishableKey}
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
