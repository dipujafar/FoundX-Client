import envConfig from "@/src/config/envConfig";
import { delay } from "@/src/utils/delay";

export const getResentPosts = async () => {
  const res = await fetch(
    `${envConfig?.baseApi}/items?sortBy=-createdAt&limit=9`
  );
  await delay(50);
  return res.json() || [];
};
