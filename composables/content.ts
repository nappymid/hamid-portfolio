export const useContent = async () => {
  const { $client } = useNuxtApp();
  const data = await $client.getEntries();
  console.log(data);
  return useState("content", () => data);
};
