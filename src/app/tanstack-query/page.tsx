import { Metadata } from "next";
import TestTanstackQuery from "../components/TestTanstackQuery";

export const metadata: Metadata = {
  title: "TanstackQuery",
  description: "TanstackQuery Example",
};

export default function TanstackQuery() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TestTanstackQuery />
    </main>
  );
}
