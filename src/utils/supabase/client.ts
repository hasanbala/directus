import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_APP_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_APP_SUPABASE_ANON_KEY!
  );
