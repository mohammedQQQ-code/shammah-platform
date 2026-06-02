import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase configuration');
}

// Client for browser/API routes
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client with service role
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    persistSession: false,
  },
});

export default supabase;
