import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  Plane,
  BriefcaseBusiness,
  PartyPopper,
  Heart,
  Music,
  Map,
  Trophy,
  Sparkles,
  ArrowUpRight,
  Clock3,
  Users,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transportation",
    text: "Private airport transportation for individuals, families and groups traveling to or from Atlanta-area airports.",
    detail: "Departures • Arrivals • Group airport travel",
  },
  {
    icon: PartyPopper,
    title: "Birthdays & Celebrations",
    text: "Keep everyone together from the first pickup to the final destination and make the ride part of the celebration.",
    detail: "Birthdays • Anniversaries • Celebrations",
  },
  {
    icon: Heart,
    title: "Weddings",
    text: "Private transportation for couples, wedding parties, family members and guests throughout the wedding day.",
    detail: "Wedding parties • Guests • Venue transportation",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Transportation",
    text: "Professional private transportation for executives, teams, clients, meetings, conferences and company events.",
    detail: "Executives • Teams • Corporate events",
  },
  {
    icon: Music,
    title: "Concerts & Nightlife",
    text: "Keep your group together while avoiding parking, coordinating multiple cars and arranging separate rides home.",
    detail: "Concerts • Nightlife • Entertainment",
  },
  {
    icon: Trophy,
    title: "Sports & Events",
    text: "Group transportation for games, tournaments, festivals and major events throughout the Atlanta area.",
    detail: "Games • Tournaments • Festivals",
  },
  {
    icon: Map,
    title: "Private Trips",
    text: "Private transportation for day trips, group outings and destinations beyond Atlanta when the journey is part of the plan.",
    detail: "Day trips • Group travel • Private outings",
  },
  {
    icon: Sparkles,
    title: "Custom Transportation",
    text: "Have something different planned? Tell us where you're going, who's coming and what the day looks like.",
    detail: "Your occasion • Your group • Your itinerary",
  },
];

const planning = [
  {
    icon: MapPin,
    number: "01",
    title: "Tell Us Where",
    text: "Share your pickup location, destination and itinerary.",
  },
  {
    icon: Clock3,
    number: "02",
    title: "Tell Us When",
    text: "Choose your date, pickup time and the type of transportation you need.",
  },
  {
    icon: Users,
    number: "03",
    title: "Tell Us Who",
    text: "Let us know your group size and anything important about your occasion.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-black pb-24 pt-44 text-white md:pb-32 md:pt-52">
          <div className="container-iss">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#d9ff43]" />
              <p className="eyebrow text-white/60">Transportation Services</p>
            </div>

            <h1 className="max-w-6xl text-6xl font-black leading-[0.9] tracking-[-0.065em] md:text-8xl lg:text-[7rem]">
              YOUR PLANS.
              <br />
              <span className="text-[#d9ff43]">ONE RIDE.</span>
            </h1>

            <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-2">
              <p className="max-w-2xl text-lg leading-8 text-white/60 md:text-xl">
                Private group transportation for celebrations, business,
                travel, events and the moments that bring people together.
              </p>

              <div className="lg:flex lg:justify-end">
                <Link href="/book" className="btn-primary gap-3">
                  Book Your Ride
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f3ef] py-20 text-black md:py-28">
          <div className="container-iss">
            <div className="mb-14 max-w-3xl">
              <p className="eyebrow mb-5 text-black/45">Choose Your Occasion</p>

              <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl">
                WHERE ARE
                <br />
                WE GOING?
              </h2>
            </div>

            <div className="grid border-l border-t border-black/15 md:grid-cols-2">
              {services.map(({ icon: Icon, title, text, detail }) => (
                <Link
                  href="/book"
                  key={title}
                  className="group min-h-[340px] border-b border-r border-black/15 p-7 transition-colors duration-300 hover:bg-black hover:text-white md:p-9"
                >
                  <div className="flex items-start justify-between">
                    <Icon size={28} strokeWidth={1.6} />
                    <ArrowUpRight
                      size={21}
                      className="opacity-30 transition group-hover:opacity-100"
                    />
                  </div>

                  <div className="mt-20">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] opacity-40">
                      {detail}
                    </p>

                    <h2 className="text-2xl font-black tracking-[-0.03em] md:text-3xl">
                      {title}
                    </h2>

                    <p className="mt-4 max-w-xl leading-7 opacity-60">
                      {text}
                    </p>

                    <p className="mt-7 text-xs font-black uppercase tracking-[0.12em]">
                      Request This Ride →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#111] py-20 text-white md:py-28">
          <div className="container-iss">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow mb-5 text-[#d9ff43]">Built Around Your Plans</p>

                <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] md:text-6xl">
                  YOU SET
                  <br />
                  THE PLAN.
                </h2>

                <p className="mt-7 max-w-md leading-7 text-white/55">
                  Every ride starts with your itinerary. Give us the details
                  and we'll use them to review your transportation request.
                </p>
              </div>

              <div className="border-t border-white/15">
                {planning.map(({ icon: Icon, number, title, text }) => (
                  <div
                    key={number}
                    className="grid gap-5 border-b border-white/15 py-8 md:grid-cols-[70px_1fr_1fr] md:items-center"
                  >
                    <div className="flex items-center gap-4">
                      <Icon size={21} className="text-[#d9ff43]" />
                      <span className="text-xs font-black text-white/30">
                        {number}
                      </span>
                    </div>

                    <h3 className="text-xl font-black">{title}</h3>

                    <p className="text-sm leading-6 text-white/50">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#d9ff43] py-20 text-black md:py-24">
          <div className="container-iss">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="eyebrow mb-5 text-black/50">
                  International Supreme Sprinters
                </p>

                <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
                  WHERE TO NEXT?
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-7 text-black/65">
                  Tell us about your upcoming ride and we'll take it from there.
                </p>
              </div>

              <Link
                href="/book"
                className="inline-flex min-h-14 items-center justify-center gap-3 bg-black px-8 text-sm font-black uppercase tracking-[0.08em] text-white"
              >
                Book Your Ride
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
