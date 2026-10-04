import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function FleetPage() {
  return (
    <>
      <Header />

      <main>
        <section className="min-h-[70vh] bg-black pb-20 pt-40 text-white">
          <div className="container-iss">
            <p className="eyebrow mb-5 text-[#d9ff43]">
              The Sprinter
            </p>

            <h1 className="max-w-5xl text-6xl font-black tracking-[-0.06em] md:text-8xl">
              PRIVATE.
              <br />
              COMFORTABLE.
              <br />
              YOURS.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              Our Mercedes-Benz Sprinter gives your group one private
              transportation experience from pickup to destination.
            </p>

            <Link href="/book" className="btn-primary mt-9">
              Request The Sprinter
            </Link>
          </div>
        </section>

        <section className="bg-[#f5f3ef] py-20 text-black">
          <div className="container-iss">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow text-black/45">
                  One Vehicle. More Possibilities.
                </p>

                <h2 className="mt-5 text-5xl font-black tracking-[-0.05em]">
                  BUILT AROUND
                  <br />
                  YOUR PLANS.
                </h2>
              </div>

              <div className="text-lg leading-8 text-black/60">
                <p>
                  Whether you're planning a celebration, airport transfer,
                  corporate outing, concert, wedding or trip, ISS provides
                  private transportation designed around your itinerary.
                </p>

                <p className="mt-6">
                  Tell us where you're going, when you need transportation
                  and who's coming. We'll review your request and help
                  coordinate the ride.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
