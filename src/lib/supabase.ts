import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://fbwisfrfoimqdojbsxcg.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZid2lzZnJmb2ltcWRvamJzeGNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5MDgyMjYsImV4cCI6MjEwMTQ4NDIyNn0.LdCiBGwV-Dr1YqFrH4-4gOBE0tUWdok9mu0bs3CneVk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
