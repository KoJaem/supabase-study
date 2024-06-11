import { getCountryById } from "@/queries/getCountryById";
import { useQuery } from "@tanstack/react-query";
import useSupabase from "../useSupabase";

function useCountryQuery(countryId: number) {
  const client = useSupabase();
  const queryKey = ["organization", countryId];

  const queryFn = async () => {
    return getCountryById(client, countryId).then(result => result.data);
  };

  return useQuery({ queryKey, queryFn });
}

export default useCountryQuery;
