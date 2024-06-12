import { getCountryById } from "@/queries/getCountryById";
import { TypedSupabaseClient } from "@/utils/supabase";

interface Params {
  id: number;
  client: TypedSupabaseClient;
}
function useCountryQuery({ id, client }: Params) {
  const queryKey = ["organization", id];

  const queryFn = async () => {
    return getCountryById(client, id).then(result => result.data);
  };

  return { queryKey, queryFn };
}

export default useCountryQuery;
