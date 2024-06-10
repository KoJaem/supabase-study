"use client";
import { Database, Tables } from "@/types/supabase";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

type PageTableType = Tables<"page">;

export default function TestSupabaseAuth() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";

  const client: SupabaseClient<Database> = createClient(
    supabaseUrl,
    supabaseKey
  );

  const [data, setData] = useState<Array<PageTableType>>();

  const signInWithGithub = async () => {
    await client?.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000",
      },
    });
  };

  const signOutWithGithub = async () => {
    await client.auth.signOut();
  };

  const getPage = async () => {
    const { data } = await client.from("page").select("*");
    if (data) setData(data);
  };

  useEffect(() => {
    getPage();
  }, []);

  const createPage = async () => {
    const {} = await client
      .from("page")
      .insert([{ title: prompt("title?"), body: prompt("body?") }]);
    await getPage();
  };

  return (
    <div className="flex flex-col gap-[20px] items-center justify-center">
      <h1>Supabase Auth</h1>
      <button onClick={signInWithGithub}>login</button>
      <button onClick={signOutWithGithub}>logout</button>
      <button onClick={createPage}>Create</button>
      {data?.map(data => (
        <p key={data.id}>{data.title}</p>
      ))}
    </div>
  );
}
