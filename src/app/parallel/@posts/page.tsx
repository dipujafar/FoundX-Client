import { delay } from "@/src/utils/delay";

export default async function PostsPage() {
  await delay(3000);


  return (
    <div className="max-w-6xl mx-auto flex justify-center items-center h-96 bg-teal-300">
      <h1 className="text-xl font-semibold">Dynamic Page</h1>
    </div>
  );
}
