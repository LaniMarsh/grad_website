import { useState } from "react";
import { GradCalendar } from "./components/GradCalendar";
import { GraduationCap, Camera, ChevronDown } from "lucide-react";

{/* MARKER-MAKE-KIT-INVOKED */}

const GRAD_PHOTO = new URL("../../TruVUE_MelanieMarsh_Final-49.jpeg", import.meta.url).href;
const ROWAN_PHOTO = new URL("../../IMG_9389.JPG", import.meta.url).href;

export default function App() {
  const [photoError, setPhotoError] = useState(false);
  const [activePage, setActivePage] = useState<"home" | "grad-info">("home");

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

      {/* Page header */}
      <header className="relative z-10 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-muted-foreground" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Graduation Weekend
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActivePage("home")}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                activePage === "home"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:bg-muted"
              }`}
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Home
            </button>
            <button
              onClick={() => setActivePage("grad-info")}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                activePage === "grad-info"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:bg-muted"
              }`}
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Graduation Info
            </button>
            <a
              href="https://photos.app.goo.gl/RQ9Ee6q7JRvL1s146"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full px-4 py-2 text-sm transition-all bg-primary text-primary-foreground"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Upload Photos
            </a>
          </div>
        </div>
      </header>

      {activePage === "home" ? (
        <>
          <section id="hero" className="relative z-10 py-20 px-6 bg-background">
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

      {/* Photo Upload Section */}
      <section id="photos" className="relative z-10 py-20 px-6 bg-background border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Share Photos
          </p>
          <h2
            className="text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            Upload your graduation photos
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
            Please add any photos you'd like to share to our Google Photos album.
          </p>
          <a
            href="https://photos.app.goo.gl/RQ9Ee6q7JRvL1s146"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm transition-all hover:opacity-90 active:scale-95 cursor-pointer"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Upload Photos
          </a>
        </div>
      </section>
        </>
      ) : (
        <section id="grad-info" className="relative z-10 py-20 px-6 bg-background border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Graduation Info
              </p>
              <h2 className="text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>
                All the details you need for the weekend
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
                Read the schedule, location details, and important graduation day notes in one place.
              </p>
              <p className="text-muted-foreground max-w-3xl mx-auto mt-4" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
                For more information, see <a href="https://commencement.calpoly.edu/" target="_blank" rel="noreferrer noopener" className="underline hover:text-foreground">Cal Poly commencement</a>.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ceremony Details
                </h3>
                <p className="text-muted-foreground mb-2" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
                  Date: June 13, 2026
                </p>
                <p className="text-muted-foreground mb-2" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
                  Location: Spanos Stadium, Cal Poly San Luis Obispo
                </p>
                <p className="text-muted-foreground" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
                  Doors open at 3:00 PM and the ceremony begins at 4:30 PM. Please arrive early to secure seating with the group.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  What to bring
                </h3>
                <p className="text-muted-foreground mb-2" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
                  Water, sun protection, and a small bag for essentials.
                </p>
                <p className="text-muted-foreground" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
                  Reusable water bottles are permitted but must be emptied before entering the stadium. Unopened, factory-sealed water bottles are also allowed.
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Graduation Weekend Notes
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
                <li>Arrive early for group seating and shade.</li>
                <li>Graduates will meet outside after the ceremony once names are called.</li>
                <li>RSVP by June 10th so we can organize dinner and family plans.</li>
                <li>Share your photos through the upload page to keep memories together.</li>
              </ul>
            </div>
            <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Parking & Accessibility
              </h3>
              <p className="text-muted-foreground mb-4" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
                Accessible parking is available in the following locations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
                <li>
                  <a href="https://emclick.imodules.com/ls/click?upn=u001.QrelzM8UB-2FBr6BAKvaFN8ixeVdvoXRomaox9RZ5JFrJBHBsyT6obIZvdMkSjnjNoHykFBoGH7vXvVwInrt431sVm8MBNXI3mGeFaitSE9tRLW0senk-2Fa2KRbSBPQnoUlGIg8-2Bs1u-2BNk-2Fip9GLhrtyg-3D-3D09K8_PKcFXsnzduNOkTk1M1BuFUByZHHWU-2F54tbuTgKrwms16O6ir3ygwsBykWywpYdPnlDwoTxwmsUUCSDVttSaevk9FZCkNNE-2Bhf1XNhC-2BaQ1J00Zhlh5N-2BNe8mHw-2F-2FDTLeQRuExWtNHvRFkq5TEwF-2Bgu0EDyhaULm5v53kcxR0TTXupTS1UrYsKN-2BHDrr57uDEavcqlMkFCRSqdb6GKDDEjIXrz9Csjg-2FwqzWNSlnLmKVPTSOyHEpC5amvvz3-2FmTbThT1pxoD8NIVNE2F8SOr60IxC86OKRGNXNnVTVk7As72kK-2B4fKQ9t3ZJReR8F7mXAKBWQBBKmCHil6X-2BHnd47CWcZULN526tNTB2sgl8bAvoxkMzKDU7-2FhO374-2BtcChidIYGrIRzIYN-2B0zEFELduP2rZ-2BMXZtzr2K4xqgRqqMxZPrlt3hE58LBhE1ossG8forIAW4Nkx93bRPGZ-2BhnNh4wmh4RxxjtRGGx7NHitUnclKMMd9VR5FSZxZ6fFuSmQNY" target="_blank" rel="noreferrer noopener" className="underline hover:text-foreground">
                    Lot H2a
                  </a>
                </li>
                <li>
                  <a href="https://emclick.imodules.com/ls/click?upn=u001.QrelzM8UB-2FBr6BAKvaFN8ixeVdvoXRomaox9RZ5JFrJBHBsyT6obIZvdMkSjnjNoHykFBoGH7vXvVwInrt431r2nhxOI8-2FF7Xfkqqxudr9WA-2FBPU-2FlKPwYsAXeST8JuFqTlFYTy7SS0XGDxHd8f5TA-3D-3D0Wea_PKcFXsnzduNOkTk1M1BuFUByZHHWU-2F54tbuTgKrwms16O6ir3ygwsBykWywpYdPnlDwoTxwmsUUCSDVttSaevk9FZCkNNE-2Bhf1XNhC-2BaQ1J00Zhlh5N-2BNe8mHw-2F-2FDTLeQRuExWtNHvRFkq5TEwF-2Bgu0EDyhaULm5v53kcxR0TTXupTS1UrYsKN-2BHDrr57uDEavcqlMkFCRSqdb6GKDDEjIXrz9Csjg-2FwqzWNSlnLmKVPTSOyHEpC5amvvz3-2FmTbThT1pxoD8NIVNE2F8SOr60IxC86OKRGNXNnVTVk7As72kK-2B4fKQ9t3ZJReR8F7mXAKBWQBBKmCHil6X-2BHnd47CWcZULN526tNTB2sgl8bAvoxkMzKDU7-2FhO374-2BtcChidk-2FMDhptem5RO2VQ967Ml2a7qoxBQlFLv2XObHu1haBQQkN8T13Ew3x37yRKRbKwedtj6d2dABSMGyN7ZCwbmyOP-2B4W0yjri96UKodSi5Ny264J-2BZKRBWAo9rSXp-2Bv-2Fbf" target="_blank" rel="noreferrer noopener" className="underline hover:text-foreground">
                    Lot C7
                  </a>
                </li>
                <li>
                  <a href="https://emclick.imodules.com/ls/click?upn=u001.QrelzM8UB-2FBr6BAKvaFN8ixeVdvoXRomaox9RZ5JFrJBHBsyT6obIZvdMkSjnjNoHykFBoGH7vXvVwInrt431jl0WvB9FfXukiKbO-2B2kVn-2FgrkCIyB6kwHmH70wo-2BzLMJTSL8a-2F2CY-2BVEhsEcyh6Rg-3D-3Dlomv_PKcFXsnzduNOkTk1M1BuFUByZHHWU-2F54tbuTgKrwms16O6ir3ygwsBykWywpYdPnlDwoTxwmsUUCSDVttSaevk9FZCkNNE-2Bhf1XNhC-2BaQ1J00Zhlh5N-2BNe8mHw-2F-2FDTLeQRuExWtNHvRFkq5TEwF-2Bgu0EDyhaULm5v53kcxR0TTXupTS1UrYsKN-2BHDrr57uDEavcqlMkFCRSqdb6GKDDEjIXrz9Csjg-2FwqzWNSlnLmKVPTSOyHEpC5amvvz3-2FmTbThT1pxoD8NIVNE2F8SOr60IxC86OKRGNXNnVTVk7As72kK-2B4fKQ9t3ZJReR8F7mXAKBWQBBKmCHil6X-2BHnd47CWcZULN526tNTB2sgl8bAvoxkMzKDU7-2FhO374-2BtcChidH5cQXTxKn-2FlclK4bU8LLWu8CPWV2drs1-2FqNujEaxm-2F7Aq8ABYdXom8m-2FFdm2L1bT6TITN-2BESouxuyZtr7GnPM7mJDZJsG-2Fieq1SZmH30qNg0BT-2BoacZQ2OEQ6-2FllnPS-2F" target="_blank" rel="noreferrer noopener" className="underline hover:text-foreground">
                    Grand Avenue Parking Structure
                  </a>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
                We recommend the Grand Avenue Parking Structure for its ample parking and convenient shuttle access.
              </p>
              <p className="text-muted-foreground mt-3" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300 }}>
                Guests should bring wheelchairs or other mobility assistance devices if needed. Valid ADA placards are required for designated ADA parking spaces in mobility-impaired parking areas.
              </p>
            </div>
          </div>
        </section>
      )}

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
