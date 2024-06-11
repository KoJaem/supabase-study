"use client";

import { useTemplate } from "../hooks/react-query/useTemplate";

export default function TestTanstackQuery() {
  const { data, isFetching, isFetched, isLoading, refetch } = useTemplate();

  return (
    <div>
      <h1>Welcome to Tanstack</h1>
      <button onClick={() => refetch()}>Refetch</button>
    </div>
  );
}
