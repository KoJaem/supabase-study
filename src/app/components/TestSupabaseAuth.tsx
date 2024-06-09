"use client";
import { createClient } from "@supabase/supabase-js";

export default function TestSupabaseAuth() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";

  const client = createClient(supabaseUrl, supabaseKey);

  const signInWithGithub = async () => {
    await client?.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000",
      },
    });
  };

  const testToken = async () => {
    const authInfo = await client.auth.getSession();
    console.log(authInfo.data.session);
  };

  testToken();

  return (
    <div className="flex flex-col gap-[20px] items-center justify-center">
      <h1>Supabase Auth</h1>
      <button onClick={signInWithGithub}>login</button>
    </div>
  );
}
