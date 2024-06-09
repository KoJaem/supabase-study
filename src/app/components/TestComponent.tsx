"use client";

import { useTemplate } from "../hooks/useTemplate";

export default function TestComponent() {
  const { data, isFetching, isFetched, isLoading, refetch } = useTemplate();

  console.log("data", data);
  return (
    <div>
      <h1>Welcome to Tanstack</h1>
      <button onClick={() => refetch()}>Refetch</button>
    </div>
  );
}
