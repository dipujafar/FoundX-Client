import { Navbar } from "@/src/components/navbar";
import { ReactNode } from "react";

export default function ParallelLayout({
  children,
  posts,
  profile
}: {
  children: ReactNode;
  posts: ReactNode;
  profile: ReactNode
}) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      {posts}
      {profile}
    </div>
  );
}
