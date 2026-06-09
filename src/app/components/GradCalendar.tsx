import { useState } from "react";
import { Clock, MapPin, Users, Star, Lock } from "lucide-react";

type EventCategory = "required" | "optional" | "family" | "party people";

interface GradEvent {
  id: string;
  title: string;
  day: "Friday" | "Saturday" | "Sunday";
  time: string;
  location: string;
  duration: string;
  categories: EventCategory[];
  description: string;
}

const events: GradEvent[] = [
  {
    id: "9",
    title: "Mom needs coffee",
    day: "Friday",
    time: "9:00 AM",
    location: "Nautical Bean in SLO",
    duration: "1 hr",
    categories: ["optional", "family"],
    description: "This is Lani's favorite coffee shop because of their Mexican Mocha",
  },
  {
    id: "1",
    title: "Olive Oil Tasting",
    day: "Friday",
    time: "11:00 AM",
    location: "Kiler Ridge Olive Farm",
    duration: "2 hr",
    categories: ["optional", "family"],
    description: "Enjoy a tasting of local olive oils",
  },
  {
    id: "2",
    title: "Dinner at Tin City",
    day: "Friday",
    time: "7:45 PM",
    location: "Etto Pasta @ Tin City",
    duration: "2.5 hrs",
    categories: ["optional", "family"],
    description: "Dinner reservation is at 7:45 PM at Etto Pasta in Tin City. We plan to get there a bit earlier so we can explore the other shops there.",
  },
  {
    id: "3",
    title: "Graduation Morning Bar Crawl",
    day: "Saturday",
    time: "6:00 AM",
    location: "The Mark",
    duration: "Till we drop",
    categories: ["party people"],
    description: "As Cal Poly tradition goes, we'll be hitting up the bars early Saturday morning. First stop is The Mark at 6:00 AM",
  },
  {
    id: "4",
    title: "Homemade Breakfast at Mom & Dad's Airbnb",
    day: "Saturday",
    time: "9:00 AM",
    location: "the Airbnb",
    duration: "1.5 hrs",
    categories: ["optional", "family"],
    description: "Dad will be cooking us breakfast so we can revive after the bar crawl. All are welcome, but let us know if you want to join so we can plan food accordingly.",
  },
  {
    id: "5",
    title: "Graduation Ceremony",
    day: "Saturday",
    time: "3:00 PM",
    location: "Spanos Stadium",
    duration: "4 hrs",
    categories: ["required", "family"],
    description: "The main event! The ceremony will be held at Spanos Stadium. Doors open at 3:00 PM, and the ceremony starts at 4:30 PM sharp. Please arrive early to find seating together and in the shade. Graduates can leave as soon as their name is called so meet me outside after I walk the stage.",
  },
  {
    id: "6",
    title: "Family Celebration Dinner",
    day: "Saturday",
    time: "8:00 PM",
    location: "Cool Hand Luke's in Santa Maria",
    duration: "2.5 hrs",
    categories: ["family"],
    description: "Private reservation for family.",
  },
  {
    id: "7",
    title: "Breakfast",
    day: "Sunday",
    time: "9:30 AM",
    location: "Margies Dinner in Paso Robles",
    duration: "1.5 hrs",
    categories: ["optional", "family"],
    description: "Time to eat!",
  },
  {
    id: "8",
    title: "Grad Party!",
    day: "Sunday",
    time: "4:00 PM",
    location: "Croma Vera Wines",
    duration: "5 hrs",
    categories: ["required", "party people"],
    description: "Lets celebrate! Come by for wines, food, and dancing. RSVP here: https://partiful.com/e/PzLCmxsp1pRUcugMlXk7?",
  },
];

const categoryConfig = {
  required: {
    label: "Required",
    icon: Star,
    bg: "bg-[#2c5f2e]",
    text: "text-[#f9f5ee]",
    dot: "bg-[#2c5f2e]",
    pill: "bg-[#2c5f2e]/10 text-[#2c5f2e] border border-[#2c5f2e]/20",
    border: "border-l-[#2c5f2e]",
  },
  optional: {
    label: "Optional",
    icon: Clock,
    bg: "bg-[#c8a84b]",
    text: "text-[#2c2416]",
    dot: "bg-[#c8a84b]",
    pill: "bg-[#c8a84b]/15 text-[#7a5e10] border border-[#c8a84b]/30",
    border: "border-l-[#c8a84b]",
  },
  family: {
    label: "Family Only",
    icon: Lock,
    bg: "bg-[#8b5e52]",
    text: "text-[#f9f5ee]",
    dot: "bg-[#8b5e52]",
    pill: "bg-[#8b5e52]/10 text-[#8b5e52] border border-[#8b5e52]/20",
    border: "border-l-[#8b5e52]",
  },
  "party people": {
    label: "Party People",
    icon: Users,
    bg: "bg-[#6b4f8b]",
    text: "text-[#f9f5ee]",
    dot: "bg-[#6b4f8b]",
    pill: "bg-[#6b4f8b]/15 text-[#6b4f8b] border border-[#6b4f8b]/20",
    border: "border-l-[#6b4f8b]",
  },
};

const days = ["Friday", "Saturday", "Sunday"] as const;

function formatDescription(text: string) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noreferrer noopener"
          className="underline hover:text-foreground"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export function GradCalendar() {
  const [activeDay, setActiveDay] = useState<"Friday" | "Saturday" | "Sunday">("Friday");
  const [activeFilter, setActiveFilter] = useState<EventCategory | "all">("all");

  const filtered = events.filter(
    (e) => e.day === activeDay && (activeFilter === "all" || e.categories.includes(activeFilter))
  );

  return (
    <section id="schedule" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-accent-foreground/70 mb-3" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Weekend Schedule
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-foreground mb-4">
            Graduation Weekend Events
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Three days of celebration — here's everything planned. Use the filters to find what applies to you.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {(["all", "required", "optional", "family", "party people"] as const).map((f) => {
            const isActive = activeFilter === f;
            if (f === "all") {
              return (
                <button
                  key="all"
                  onClick={() => setActiveFilter("all")}
                  className={`px-4 py-1.5 rounded-full text-sm transition-all cursor-pointer ${
                    isActive
                      ? "bg-foreground text-background"
                      : "bg-card border border-border text-muted-foreground hover:border-foreground/30"
                  }`}
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  All Events
                </button>
              );
            }
            const cfg = categoryConfig[f];
            const Icon = cfg.icon;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm transition-all cursor-pointer ${
                  isActive ? cfg.pill + " ring-2 ring-offset-1" : cfg.pill + " opacity-70 hover:opacity-100"
                }`}
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                <Icon size={13} />
                {cfg.label}
              </button>
            );
          })}
        </div>

        {/* Day tabs */}
        <div className="flex border-b border-border mb-8">
          {days.map((day) => {
            const count = events.filter((e) => e.day === day).length;
            return (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`flex-1 py-3 text-sm transition-all cursor-pointer relative ${
                  activeDay === day
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                <span>{day}</span>
                <span className="ml-2 text-xs opacity-60">({count})</span>
                {activeDay === day && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                )}
              </button>
            );
          })}
        </div>

        {/* Events list */}
        <div className="space-y-4">
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12" style={{ fontFamily: "'Nunito', sans-serif" }}>
              No events match this filter on {activeDay}.
            </p>
          )}
          {filtered.map((event) => {
            const firstCfg = categoryConfig[event.categories[0]];
            return (
              <div
                key={event.id}
                className={`bg-card rounded-xl border-l-4 ${firstCfg.border} border border-border p-5 transition-shadow hover:shadow-md`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      {event.categories.map((cat) => {
                        const cfg = categoryConfig[cat];
                        const Icon = cfg.icon;
                        return (
                          <span key={cat} className={`inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full ${cfg.pill}`} style={{ fontFamily: "'Nunito', sans-serif" }}>
                            <Icon size={11} />
                            {cfg.label}
                          </span>
                        );
                      })}
                    </div>
                    <h3 className="text-foreground mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      {formatDescription(event.description)}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} />
                        {event.time} · {event.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
