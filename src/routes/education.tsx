import { createFileRoute } from "@tanstack/react-router";
import { ChapterPage } from "@/components/portfolio/chapter-page";
import { pageHead } from "@/lib/portfolio/content";
export const Route = createFileRoute("/education")({
  head: () => pageHead("My Education", "My Bachelor of Education Arts learning journey."),
  component: Page,
});
function Page() {
  return <ChapterPage path="/education" />;
}
