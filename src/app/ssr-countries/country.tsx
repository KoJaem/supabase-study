"use client";

import { useQuery } from "@tanstack/react-query";
import useCountryQuery from "../hooks/react-query/useCountryQuery";
import useSupabase from "../hooks/useSupabase";

interface Params {
  id: number;
}
export default function Country({ id }: Params) {
  const supabase = useSupabase();
  const { data } = useQuery(useCountryQuery({ id, client: supabase }));

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
