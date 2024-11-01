import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/src/config/site";
import { title, subtitle } from "@/src/components/primitives";
import { GithubIcon } from "@/src/components/icons";

export default function Home() {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/glass.jpg')] bg-cover bg-center">
      <h1>Found X</h1>
    </div>
  );
}
