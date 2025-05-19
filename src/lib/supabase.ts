import { createClient } from '@supabase/supabase-js';

// Get the Supabase URL and key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL || 'https://zirkbuzgqxdmvmhtlaul.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppcmtidXpncXhkbXZtaHRsYXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMzk4ODAsImV4cCI6MjA2MTYxNTg4MH0.hgBr7hCBOsqEtvb-PhuZjRYC8clevfYa-DI0heIdvCo';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials');
}

// Initialize the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
