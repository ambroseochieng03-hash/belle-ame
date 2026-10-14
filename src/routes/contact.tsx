import { createFileRoute } from "@tanstack/react-router";
import { ChapterPage } from "@/components/portfolio/chapter-page";
import { pageHead } from "@/lib/portfolio/content";
export const Route = createFileRoute("/contact")({
  head: () => pageHead("Say Hello", "Get in touch with me by email or Instagram."),
  component: Page,
});
function Page() {
  return <ChapterPage path="/contact" />;
}
