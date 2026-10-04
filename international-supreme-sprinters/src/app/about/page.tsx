import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-black pb-24 pt-40 text-white">
          <div className="container-iss">
            <p className="eyebrow mb-5 text-[#d9ff43]">
              About ISS
            </p>

            <h1 className="max-w-5xl text-6xl font-black tracking-[-0.06em] md:text-8xl">
              THE RIDE IS PART OF THE EXPERIENCE.
            </h1>

            <div className="mt-12 grid gap-10 border-t border-white/15 pt-10 lg:grid-cols-2">
              <p className="text-xl leading-8 text-white/75">
                International Supreme Sprinters is an Atlanta-based
                private transportation company built for people who
                want their group travel to feel organized, comfortable
                and memorable.
              </p>

              <p className="leading-8 text-white/50">
                From celebrations and special events to airport
                transportation, business travel and group trips, our
                goal is simple: make getting there one of the easiest
                parts of your plans.
              </p>
            </div>

            <Link href="/book" className="btn-primary mt-12">
              Plan Your Ride
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
