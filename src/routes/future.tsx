import { createFileRoute } from "@tanstack/react-router";
import { ChapterPage } from "@/components/portfolio/chapter-page";
import { pageHead } from "@/lib/portfolio/content";
export const Route = createFileRoute("/future")({
  head: () => pageHead("My Aspirations", "My goals in education, creativity and technology."),
  component: Page,
});
function Page() {
  return <ChapterPage path="/future" />;
}
