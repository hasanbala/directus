import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_APP_SUPABASE_URL!;
// const supabaseKey = process.env.NEXT_PUBLIC_APP_SUPABASE_ANON_KEY!;
// const supabaseAdminKey = process.env.NEXT_PUBLIC_APP_SERVICE_ROLE_KEY!;

// export const supabase = createClient(supabaseUrl, supabaseKey);
// export const supabaseAdmin = createClient(supabaseUrl, supabaseAdminKey);

export const supabase = createClientComponentClient();