import { createFileRoute } from "@tanstack/react-router";
import { ChapterPage } from "@/components/portfolio/chapter-page";
import { pageHead } from "@/lib/portfolio/content";
export const Route = createFileRoute("/skills")({
  head: () => pageHead("Learning Journey", "The skills I am learning and want to explore."),
  component: Page,
});
function Page() {
  return <ChapterPage path="/skills" />;
}
