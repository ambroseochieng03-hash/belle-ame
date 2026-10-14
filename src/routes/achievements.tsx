import { createFileRoute } from "@tanstack/react-router";
import { ChapterPage } from "@/components/portfolio/chapter-page";
import { pageHead } from "@/lib/portfolio/content";
export const Route = createFileRoute("/achievements")({
  head: () => pageHead("Achievements", "My French language and performance milestones."),
  component: Page,
});
function Page() {
  return <ChapterPage path="/achievements" />;
}
