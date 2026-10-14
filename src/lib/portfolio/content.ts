export const chapters = [
  {
    path: "/about",
    label: "About",
    title: "About Me",
    subtitle: "A little more about the person behind Belle Ame.",
  },
  {
    path: "/achievements",
    label: "Achievements",
    title: "Achievements",
    subtitle: "Small milestones. Meaningful memories.",
  },
  {
    path: "/inspirations",
    label: "Inspirations",
    title: "Inspirations",
    subtitle: "The people, moments and ideas that shape me.",
  },
  {
    path: "/favorites",
    label: "Favourites",
    title: "Favourites",
    subtitle: "Stories, little joys and things I return to.",
  },
  {
    path: "/projects",
    label: "Projects",
    title: "My Projects",
    subtitle: "From a curious first idea to something of my own.",
  },
  {
    path: "/education",
    label: "Education",
    title: "My Education",
    subtitle: "Learning today. Making a difference tomorrow.",
  },
  {
    path: "/experience",
    label: "Experience",
    title: "My Experience",
    subtitle: "What I carry with me from every experience.",
  },
  {
    path: "/skills",
    label: "Skills",
    title: "Learning Journey",
    subtitle: "What I know, what I am learning, and what comes next.",
  },
  {
    path: "/future",
    label: "Future",
    title: "My Aspirations",
    subtitle: "An evolving journey, with room for possibility.",
  },
  {
    path: "/contact",
    label: "Contact",
    title: "Say Hello",
    subtitle: "A conversation is always a lovely place to begin.",
  },
] as const;
export type ChapterPath = (typeof chapters)[number]["path"];
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} — Fadhili Wendoh · Belle Ame` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — Fadhili Wendoh` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
export const themes = [
  ["ivory", "Ivory and plum"],
  ["midnight", "Midnight lilac"],
  ["sage", "Sage garden"],
  ["rose", "Dusty rose"],
  ["noir", "Noir and gold"],
  ["ocean", "Quiet ocean"],
] as const;
