import { createFileRoute } from "@tanstack/react-router";
import { ChapterPage } from "@/components/portfolio/chapter-page";
import { pageHead } from "@/lib/portfolio/content";
export const Route = createFileRoute("/experience")({
  head: () => pageHead("My Experience", "My academic, language and performance experiences."),
  component: Page,
});
function Page() {
  return <ChapterPage path="/experience" />;
}
