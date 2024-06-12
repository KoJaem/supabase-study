"use client";

import useCountryQuery from "@/app/hooks/react-query/useCountryQuery";
import useSupabase from "@/app/hooks/useSupabase";
import { useQuery } from "@tanstack/react-query";

interface Params {
  params: {
    id: number;
  };
}

export default function CountryPage({ params: { id } }: Params) {
  const supabase = useSupabase();

  const {
    data: country,
    isLoading,
    isError,
  } = useQuery(useCountryQuery({ id, client: supabase }));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !country) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>{country.name}</h1>
    </div>
  );
}
