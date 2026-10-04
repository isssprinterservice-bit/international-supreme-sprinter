import Link from "next/link";
import {
  Plane,
  BriefcaseBusiness,
  PartyPopper,
  Heart,
  Music,
  Map,
  Trophy,
  Sparkles
} from "lucide-react";

const services = [
  {
    title: "Airport",
    description: "Private arrivals and departures throughout Atlanta.",
    icon: Plane
  },
  {
    title: "Corporate",
    description: "Professional transportation for executives, teams and clients.",
    icon: BriefcaseBusiness
  },
  {
    title: "Birthdays",
    description: "Your celebration starts before you reach the destination.",
    icon: PartyPopper
  },
  {
    title: "Weddings",
    description: "Elevated transportation for couples and wedding parties.",
    icon: Heart
  },
  {
    title: "Concerts & Nightlife",
    description: "Skip parking, rideshare chaos and splitting up the group.",
    icon: Music
  },
  {
    title: "Trips",
    description: "Private transportation for day trips and longer journeys.",
    icon: Map
  },
  {
    title: "Sports & Events",
    description: "Game days, tournaments and major Atlanta events.",
    icon: Trophy
  },
  {
    title: "Your Occasion",
    description: "Have something different planned? We'll build around it.",
    icon: Sparkles
  }
];

export default function Services() {
  return (
    <section className="section-iss bg-[#f5f3ef] text-black">
      <div className="container-iss">

        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-5 text-black/50">
            Wherever You're Going
          </p>

          <h2 className="text-5xl font-black tracking-[-0.055em] md:text-7xl">
            ONE RIDE.
            <br />
            EVERY OCCASION.
          </h2>
        </div>

        <div className="grid border-l border-t border-black/15 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <Link
              href="/book"
              key={title}
              className="group min-h-[270px] border-b border-r border-black/15 p-7 transition hover:bg-black hover:text-white"
            >
              <Icon size={25} strokeWidth={1.7} />

              <div className="mt-24">
                <h3 className="text-xl font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 opacity-60">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
