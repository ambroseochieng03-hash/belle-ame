import { createFileRoute } from "@tanstack/react-router";
import { ChapterPage } from "@/components/portfolio/chapter-page";
import { pageHead } from "@/lib/portfolio/content";
export const Route = createFileRoute("/about")({
  head: () => pageHead("About Me", "My story, values and interests — in my own words."),
  component: Page,
});
function Page() {
  return <ChapterPage path="/about" />;
}
