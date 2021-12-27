import { useLoaderData } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post"

export const loader = (): Post[] => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}
