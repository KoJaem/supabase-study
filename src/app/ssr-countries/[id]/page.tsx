import useCountryQuery from "@/app/hooks/react-query/useCountryQuery";
import useSupabaseServer from "@/utils/supabase-server";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import Country from "../country";

interface Params {
  params: {
    id: number;
  };
}
export default async function CountryPage({ params: { id } }: Params) {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);

  await queryClient.prefetchQuery(useCountryQuery({ id, client: supabase }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Country id={id} />
    </HydrationBoundary>
  );
}
