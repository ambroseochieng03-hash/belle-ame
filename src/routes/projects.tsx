import { createFileRoute } from "@tanstack/react-router";
import { ChapterPage } from "@/components/portfolio/chapter-page";
import { pageHead } from "@/lib/portfolio/content";
export const Route = createFileRoute("/projects")({
  head: () => pageHead("My Projects", "My creative projects and ideas for what comes next."),
  component: Page,
});
function Page() {
  return <ChapterPage path="/projects" />;
}
