import { useQuery } from "@tanstack/react-query";

async function fetchTemplate() {
  try {
    // const response = await axios.get("https://");
    return [10, 20, 30];
  } catch (error) {
    return error;
  }
}

export const useTemplate = () => {
  return useQuery({
    queryKey: ["get-template"],
    queryFn: () => fetchTemplate(),
  });
};
