"use client";

import useCountryQuery from "@/app/hooks/react-query/useCountryQuery";

interface Params {
  params: {
    id: number;
  };
}

export default function CountryPage({ params: { id } }: Params) {
  const { data: country, isLoading, isError } = useCountryQuery(id);

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
