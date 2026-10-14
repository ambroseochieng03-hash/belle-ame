import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Code,
  Heart,
  Languages,
  Lightbulb,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { chapters, type ChapterPath } from "@/lib/portfolio/content";
import { SocialLinks } from "./shell";
function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
function Group({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="label">{label}</p>
      <Tags items={items} />
    </div>
  );
}
function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      {children}
    </article>
  );
}
const projectItems = [
  {
    title: "Belle Ame",
    status: "completed",
    description:
      "My personal corner of the web — a place for my story, interests and the things I am learning.",
    tech: ["Personal website", "Creative direction"],
  },
  {
    title: "A learning journal",
    status: "progress",
    description:
      "An idea for collecting my reflections, French vocabulary and small discoveries in one thoughtful place.",
    tech: ["Concept study", "Writing"],
  },
  {
    title: "Learning through stories",
    status: "planned",
    description:
      "I want to explore a collection of simple, story-led learning resources that bring education and creativity together.",
    tech: ["Education", "Storytelling"],
  },
  {
    title: "My first web experiments",
    status: "planned",
    description:
      "A collection of small practice pages as I explore layout, typography and the basics of web design.",
    tech: ["Web design", "Practice"],
  },
];
function Projects() {
  const [status, setStatus] = useState("completed");
  const choices = [
    ["completed", "Completed"],
    ["progress", "In progress"],
    ["planned", "Planned"],
  ] as const;
  return (
    <>
      <div className="tabs" role="tablist" aria-label="Project status">
        {choices.map(([id, label], index) => (
          <Button
            variant="ghost"
            role="tab"
            id={`tab-${id}`}
            key={id}
            aria-selected={status === id}
            aria-controls={`panel-${id}`}
            tabIndex={status === id ? 0 : -1}
            onClick={() => setStatus(id)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                e.preventDefault();
                const next = choices[(index + (e.key === "ArrowRight" ? 1 : 2)) % 3];
                if (!next) return;
                setStatus(next[0]);
                document.getElementById(`tab-${next[0]}`)?.focus();
              }
            }}
          >
            {label}
          </Button>
        ))}
      </div>
      {choices.map(([id]) => (
        <div
          key={id}
          id={`panel-${id}`}
          role="tabpanel"
          aria-labelledby={`tab-${id}`}
          hidden={id !== status}
          className="panel"
        >
          <div className="grid">
            {projectItems
              .filter((p) => p.status === id)
              .map((p) => (
                <Card key={p.title} title={p.title}>
                  <p>{p.description}</p>
                  <Tags items={p.tech} />
                </Card>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}
function Content({ path }: { path: ChapterPath }) {
  switch (path) {
    case "/about":
      return (
        <>
          <p className="big intro-quote">
            I am still becoming — and I think that is a beautiful thing.
          </p>
          <p>
            I’m Fadhili Wendoh, a Bachelor of Education Arts student with a growing curiosity for
            creativity and technology. I love the space where learning, language and imagination
            meet.
          </p>
          <p>
            To me, Belle Ame is a reminder to approach life with a beautiful spirit: stay curious,
            be kind, and make room for growth. This is my little collection of the things that make
            me, me.
          </p>
          <Group
            label="What matters to me"
            items={["Kindness", "Curiosity", "Authenticity", "Growth"]}
          />
          <Group
            label="A few of my interests"
            items={["Education", "French", "Storytelling", "Animation & drama", "Web design"]}
          />
          <div>
            <p className="label">What I’m discovering</p>
            <p>
              I don’t need to have everything figured out to begin. Each new experience helps me
              find my voice, understand my strengths, and imagine what comes next.
            </p>
          </div>
        </>
      );
    case "/achievements":
      return (
        <>
          <p className="big">Every step forward has a story.</p>
          <ol className="tl">
            <li>
              <h3>French choral verse</h3>
              <p>
                I took part in a French choral verse at a national-level music festival. It brought
                language and performance together, and gave me the chance to be part of something
                bigger than myself.
              </p>
              <Tags items={["French", "Performance", "Teamwork"]} />
            </li>
            <li>
              <h3>French, level A2</h3>
              <p>
                I attained A2 level in an international French examination — a meaningful step in my
                language-learning journey and a reason to keep exploring.
              </p>
              <Tags items={["Language learning", "A2 level"]} />
            </li>
          </ol>
        </>
      );
    case "/inspirations":
      return (
        <>
          <p className="big">I find inspiration in the ordinary, as much as the extraordinary.</p>
          <div className="grid">
            <Card title="Teachers who care">
              <p>
                I am inspired by the patience, encouragement and quiet dedication that can make
                someone believe in their own potential.
              </p>
            </Card>
            <Card title="The courage to begin">
              <p>
                I admire people who try something new before they feel ready. Their curiosity
                reminds me to take my own first steps.
              </p>
            </Card>
            <Card title="Stories that stay">
              <p>
                A thoughtful film, a moving performance, or a beautifully told story can change the
                way I see the world.
              </p>
            </Card>
            <Card title="Everyday kindness">
              <p>The small ways we show up for one another remind me of the person I want to be.</p>
            </Card>
          </div>
          <blockquote>
            There is always something new to learn, and a new way to grow.
            <cite>My little reminder to myself</cite>
          </blockquote>
        </>
      );
    case "/favorites":
      return (
        <>
          <ul className="tags lg">
            <li>Animation movies</li>
            <li>Drama movies</li>
          </ul>
          <p>
            I’m drawn to stories with heart — the kind that make me laugh, feel deeply, or see life
            from a different perspective.
          </p>
          <div className="grid">
            <Card title="A world of imagination">
              <p>
                Animation is where imagination has no limits. I enjoy expressive characters,
                beautiful worlds and the little lessons hidden in an adventure.
              </p>
            </Card>
            <Card title="A little more feeling">
              <p>
                Drama gives me space to connect with complicated characters and the choices that
                shape their lives.
              </p>
            </Card>
            <Card title="The characters I love">
              <p>
                I find myself rooting for characters who are kind, curious and brave enough to grow
                — even when the journey is messy.
              </p>
            </Card>
          </div>
          <Group
            label="The ingredients of a good story"
            items={[
              "A little humour",
              "Memorable characters",
              "Beautiful visuals",
              "An honest emotion",
            ]}
          />
        </>
      );
    case "/projects":
      return <Projects />;
    case "/education":
      return (
        <>
          <p className="big">Bachelor of Education Arts</p>
          <p>
            My studies are helping me understand how people learn, how ideas are communicated, and
            how education can open possibilities.
          </p>
          <dl className="dl">
            <div>
              <dt>My direction</dt>
              <dd>Education, language and the arts</dd>
            </div>
            <div>
              <dt>My focus</dt>
              <dd>
                <Tags items={["Teaching & learning", "Communication", "Creative expression"]} />
              </dd>
            </div>
            <div>
              <dt>Beyond my studies</dt>
              <dd>Exploring French, performance and my growing interest in technology.</dd>
            </div>
            <div>
              <dt>My intention</dt>
              <dd>To become a thoughtful educator who encourages curiosity and confidence.</dd>
            </div>
          </dl>
          <blockquote>
            I want to keep learning, so I can help others discover what is possible.
          </blockquote>
        </>
      );
    case "/experience":
      return (
        <>
          <p className="big">Learning happens outside the classroom, too.</p>
          <ol className="tl">
            <li>
              <h3>Learning together</h3>
              <p>
                My academic journey gives me opportunities to exchange ideas, listen to different
                perspectives and develop my own voice.
              </p>
            </li>
            <li>
              <h3>Taking the stage</h3>
              <p>
                Participating in French choral verse introduced me to the shared effort behind a
                performance — preparation, collaboration and the courage to be heard.
              </p>
            </li>
            <li>
              <h3>Exploring a new language</h3>
              <p>
                Working towards French A2 taught me the value of consistent practice and celebrating
                small improvements.
              </p>
            </li>
            <li>
              <h3>Making space for creativity</h3>
              <p>
                I am beginning to explore how my interest in web design could connect with
                storytelling and education.
              </p>
            </li>
          </ol>
        </>
      );
    case "/skills":
      return (
        <>
          <p>
            I think of skills as a journey, not a finish line. This is where my experiences meet the
            things I want to explore.
          </p>
          <div className="grid">
            <Card title="Language">
              <Languages className="ic" />
              <Group label="My milestone" items={["French · A2"]} />
              <Group label="Next to explore" items={["Everyday conversation", "Vocabulary"]} />
            </Card>
            <Card title="Creativity">
              <Heart className="ic" />
              <Group label="My experience" items={["Choral verse", "Performance"]} />
              <Group label="Next to explore" items={["Creative writing", "Visual storytelling"]} />
            </Card>
            <Card title="Education">
              <GraduationCap className="ic" />
              <Group label="Learning now" items={["Education arts"]} />
              <Group label="Next to explore" items={["Engaging learning resources"]} />
            </Card>
            <Card title="Technology">
              <Code className="ic" />
              <Group
                label="I want to explore"
                items={["Web design", "HTML & CSS", "Digital creativity"]}
              />
            </Card>
          </div>
        </>
      );
    case "/future":
      return (
        <>
          <p className="big">
            I want to build a well-rounded career and grow my technology skills.
          </p>
          <div className="journey">
            <b>Education</b>
            <i />
            <b>Creativity</b>
            <i />
            <b>Technology</b>
          </div>
          <Group
            label="My next steps"
            items={["Keep growing in French", "Explore web design", "Build a creative practice"]}
          />
          <Group
            label="The bigger picture"
            items={[
              "Become a thoughtful educator",
              "Connect creativity & learning",
              "Keep trying new things",
            ]}
          />
          <div className="grid">
            <Card title="A little more courage">
              <Lightbulb className="ic" />
              <p>
                I want to say yes to opportunities that challenge me, even when I have to learn as I
                go.
              </p>
            </Card>
            <Card title="A lifelong learner">
              <BookOpen className="ic" />
              <p>
                I hope to build a life where curiosity stays with me — in my work, my creative
                projects and the way I meet the world.
              </p>
            </Card>
          </div>
          <blockquote>
            I don’t need a perfect plan. I need curiosity, patience and the willingness to begin.
          </blockquote>
        </>
      );
    case "/contact":
      return (
        <>
          <p className="big">I’d love to hear from you.</p>
          <p className="contact-note">
            Whether it’s a shared interest, a creative idea, or simply a hello — my inbox is open.
          </p>
          <div>
            <p className="label">Write to me</p>
            <a className="mail" href="mailto:fadhili98.com@gmail.com">
              fadhili98.com@gmail.com
            </a>
          </div>
          <div>
            <p className="label">Find me on Instagram</p>
            <a
              className="text-link"
              href="https://www.instagram.com/eunoia.9632/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @eunoia.9632 ↗
            </a>
          </div>
          <SocialLinks />
        </>
      );
  }
}
export function ChapterPage({ path }: { path: ChapterPath }) {
  const index = chapters.findIndex((c) => c.path === path);
  const chapter = chapters[index];
  const next = chapters[(index + 1) % chapters.length];
  if (!chapter || !next) return null;
  return (
    <article className="content-page" key={path}>
      <header className="page-heading">
        <div className="wrap rv">
          <p className="kicker">Belle Ame · My world</p>
          <h1>{chapter.title}</h1>
          <p>{chapter.subtitle}</p>
        </div>
      </header>
      <section className="sec">
        <div className="wrap sec-g">
          <header className="sh rv">
            <p className="section-number">{String(index + 1).padStart(2, "0")}</p>
            <h2>
              {path === "/about"
                ? "Hello, I’m Fadhili."
                : chapter.label === "Future"
                  ? "Looking ahead"
                  : chapter.title}
            </h2>
            <p>{chapter.subtitle}</p>
          </header>
          <div className="body rv">
            <Content path={path} />
            <div className="page-bottom">
              <Link to="/">
                <ArrowLeft />
                Back home
              </Link>
              <Link to={next.path}>
                {next.label}
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
