import { TypedSupabaseClient } from '@/utils/supabase';

export function getCountryById(client: TypedSupabaseClient, organizationId: number) {
  return client
    .from("countries")
    .select(
      `
      id,
      name
    `
    )
    .eq("id", organizationId)
    .throwOnError()
    .single();
}
