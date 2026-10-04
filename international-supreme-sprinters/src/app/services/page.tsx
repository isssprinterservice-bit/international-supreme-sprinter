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
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transportation",
    text: "Private transportation to and from Atlanta-area airports for individuals, families and groups.",
  },
  {
    icon: PartyPopper,
    title: "Birthdays & Celebrations",
    text: "Keep your group together and make transportation part of the celebration.",
  },
  {
    icon: Heart,
    title: "Weddings",
    text: "Transportation for wedding parties, couples, guests and special wedding-day movements.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate",
    text: "Professional private transportation for executives, teams, clients, meetings and company events.",
  },
  {
    icon: Music,
    title: "Concerts & Nightlife",
    text: "Arrive together and leave together without coordinating multiple vehicles.",
  },
  {
    icon: Trophy,
    title: "Sports & Events",
    text: "Private group transportation for games, tournaments, festivals and major Atlanta events.",
  },
  {
    icon: Map,
    title: "Trips",
    text: "Private transportation for day trips, group travel and destinations beyond Atlanta.",
  },
  {
    icon: Sparkles,
    title: "Custom Transportation",
    text: "Have another occasion in mind? Tell us the plan and we'll review your transportation needs.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-black pb-20 pt-40 text-white">
          <div className="container-iss">
            <p className="eyebrow mb-5 text-[#d9ff43]">
              Services
            </p>

            <h1 className="max-w-5xl text-6xl font-black tracking-[-0.06em] md:text-8xl">
              WHEREVER THE DAY TAKES YOU.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              International Supreme Sprinters provides private group
              transportation for everyday plans, major celebrations,
              business travel and everything between.
            </p>
          </div>
        </section>

        <section className="bg-[#f5f3ef] py-20 text-black">
          <div className="container-iss">
            <div className="grid border-l border-t border-black/15 md:grid-cols-2">
              {services.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="min-h-[280px] border-b border-r border-black/15 p-8"
                >
                  <Icon size={28} strokeWidth={1.6} />

                  <h2 className="mt-16 text-2xl font-black">
                    {title}
                  </h2>

                  <p className="mt-4 max-w-lg leading-7 text-black/60">
                    {text}
                  </p>

                  <Link
                    href="/book"
                    className="mt-7 inline-block text-sm font-black uppercase"
                  >
                    Request this ride →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
