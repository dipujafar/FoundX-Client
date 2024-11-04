import { Button } from "@nextui-org/button";
import Container from "../../ui/Container";
import Link from "next/link";
import { getResentPosts } from "@/src/services/recentPosts";

const RecentPosts = async () => {
  const data = await getResentPosts();

  console.log("data", data);
  return (
    <Container>
      <div className="lg:my-8 my-4">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported
        </p>
      </div>
      <div className="lg:my-8 my-4 grid justify-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <h1>Recent Posts</h1>
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href={"/found-items"}>See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPosts;
