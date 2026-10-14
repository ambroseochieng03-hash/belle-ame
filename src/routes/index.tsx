import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/portfolio/shell";
import { chapters, pageHead } from "@/lib/portfolio/content";
import journal from "@/assets/belle-ame-journal.jpg";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Fadhili · Belle Ame",
      "I’m Fadhili Wendoh, an Education Arts student exploring creativity, language and technology. Welcome to my world.",
    ),
  component: Index,
});
function Index() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-g">
          <div className="hero-t">
            <p className="kicker">Bachelor of Education Arts student</p>
            <h1>
              <span className="r1">Fadhili</span>
              <em className="r2">Belle Ame</em>
            </h1>
            <p className="lede">
              A curious mind, a creative spirit, and a love for learning. I’m exploring the places
              where education, storytelling and technology meet.
            </p>
            <div className="cta">
              <Button asChild className="btn solid">
                <Link to="/about">
                  Explore my story
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn">
                <Link to="/projects">See my projects</Link>
              </Button>
            </div>
            <SocialLinks />
          </div>
          <figure className="portrait">
            <div className="arch">
              <img
                src={journal}
                alt="An open journal, a plum flower and a fountain pen in soft afternoon light"
                width={1024}
                height={1280}
                fetchPriority="high"
              />
            </div>
            <figcaption>Belle Ame</figcaption>
          </figure>
        </div>
        <div className="wrap home-note">
          <span>A beautiful spirit. An unfolding story.</span>
          <span>Welcome to my world</span>
        </div>
        <div className="marq" aria-hidden="true">
          <div>
            {Array.from({ length: 8 }, (_, i) => (
              <span key={i}>Belle Ame</span>
            ))}
          </div>
        </div>
      </section>
      <section className="home-intro">
        <div className="wrap">
          <div className="home-intro-head">
            <h2>Little chapters of my world</h2>
            <Link to="/about" className="text-link">
              Get to know me ↗
            </Link>
          </div>
          <div className="chapter-links">
            {chapters.map((c, i) => (
              <Link to={c.path} key={c.path} className="chapter-link">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{c.label}</strong>
                <ArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
