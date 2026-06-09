import { useState } from "react";
import { GradCalendar } from "./components/GradCalendar";
import { GraduationCap, Camera, ChevronDown } from "lucide-react";

{/* MARKER-MAKE-KIT-INVOKED */}

const GRAD_PHOTO = new URL("../../TruVUE_MelanieMarsh_Final-49.jpeg", import.meta.url).href;
const ROWAN_PHOTO = new URL("../../IMG_9389.JPG", import.meta.url).href;

export default function App() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Subtle paper texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero — Bio + Photo */}
      <section id="bio" className="relative z-10 px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-16 items-center">

            {/* Text column */}
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-accent mb-6" style={{ fontFamily: "'Nunito', sans-serif", color: "var(--accent)" }}>
                Graduation Weekend · June 12th - 14th 2026
              </p>
              <h1
                className="text-foreground mb-6 leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                }}
              >
                Alanis Felina Marsh<br />
                <em style={{ fontStyle: "italic", fontWeight: 400 }}>
                  is graduating!
                </em>
              </h1>
              <p
                className="text-muted-foreground leading-relaxed mb-8 max-w-lg"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300, fontSize: "1.05rem" }}
              >
                After four years studying Computer Science at California Polytechnic University - San Luis Obispo, I'm thrilled to be graduating this June. It's been an incredible journey filled with late-night coding sessions, unforgettable friendships, and countless memories.
                I'm beyond grateful to be celebrating this milestone with the people who matter most.
                This site has everything you need to join in the festivities, I can't wait to
                share this weekend with all of you!
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground" style={{ fontFamily: "'Nunito', sans-serif" }}>
                <div className="flex flex-col">
                  <span className="text-foreground" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 400 }}>
                    California Polytechnic University - San Luis Obispo
                  </span>
                  <span className="text-xs tracking-widest uppercase opacity-60">Institution</span>
                </div>
                <div className="w-px bg-border self-stretch" />
                <div className="flex flex-col">
                  <span className="text-foreground" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 400 }}>
                    B.S. Computer Science
                  </span>
                  <span className="text-xs tracking-widest uppercase opacity-60">Degree</span>
                </div>
                <div className="w-px bg-border self-stretch hidden md:block" />
              </div>
            </div>

            {/* Photo column */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                {/* Decorative offset border */}
                <div
                  className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                  style={{ background: "var(--accent)", opacity: 0.25 }}
                />
                <div
                  className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-border shadow-xl bg-muted"
                >
                  {!photoError ? (
                    <img
                      src={GRAD_PHOTO}
                      alt="Lani in graduation cap and gown"
                      className="w-full h-full object-cover object-top"
                      onError={() => setPhotoError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-secondary">
                      <Camera size={32} className="text-muted-foreground" strokeWidth={1} />
                      <span className="text-xs text-muted-foreground tracking-widest uppercase" style={{ fontFamily: "'Nunito', sans-serif" }}>
                        Your photo here
                      </span>
                    </div>
                  )}
                </div>
                {/* Caption badge */}
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-4 py-1.5 shadow-md whitespace-nowrap text-xs text-muted-foreground"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  🎓 June 13, 2026
                </div>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="flex justify-center mt-20">
            <a href="#schedule" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group">
              <span className="text-xs tracking-widest uppercase" style={{ letterSpacing: "0.2em" }}>View Schedule</span>
              <ChevronDown size={16} className="animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <GraduationCap size={16} className="text-accent" strokeWidth={1.5} />
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>

      {/* Calendar Section */}
      <div className="relative z-10">
        <GradCalendar />
      </div>

      {/* RSVP / Contact Section */}
      <section id="rsvp" className="relative z-10 py-20 px-6 bg-secondary/40 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Let Me Know
          </p>
          <h2
            className="text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            Will you be joining us?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
            Please let me know which events you'll be attending so we can plan accordingly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="sms:+18588694360"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm transition-all hover:opacity-90 active:scale-95 cursor-pointer"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Send a Text
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border px-6 py-8 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <div className="w-32 h-40 rounded-lg overflow-hidden shadow-md">
            <img
              src={ROWAN_PHOTO}
              alt="Rowan graduation photo"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
              This degree was brought to me by Rowan
            </p>
            <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
              Lani Marsh · Class of 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
