import { createFileRoute } from "@tanstack/react-router";
import { ChapterPage } from "@/components/portfolio/chapter-page";
import { pageHead } from "@/lib/portfolio/content";
export const Route = createFileRoute("/favorites")({
  head: () => pageHead("Favourites", "My love of animation, drama and thoughtful stories."),
  component: Page,
});
function Page() {
  return <ChapterPage path="/favorites" />;
}
