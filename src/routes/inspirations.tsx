import { createFileRoute } from "@tanstack/react-router";
import { ChapterPage } from "@/components/portfolio/chapter-page";
import { pageHead } from "@/lib/portfolio/content";
export const Route = createFileRoute("/inspirations")({
  head: () => pageHead("Inspirations", "People, stories and ideas that inspire me."),
  component: Page,
});
function Page() {
  return <ChapterPage path="/inspirations" />;
}
