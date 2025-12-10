import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseUrl = 'https://lmaucwvjnyxsjbzqmvwu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtYXVjd3Zqbnl4c2pienFtdnd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4MjI3NDgsImV4cCI6MjA3OTM5ODc0OH0.avrCq1DCv_WPS6D8OGFqAXQSFiFhbm_eY6WNuDCQh5M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
