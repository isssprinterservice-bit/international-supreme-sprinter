import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/booking/QuoteForm";

export const metadata = {
  title: "Request a Ride | International Supreme Sprinters",
  description:
    "Request private Sprinter transportation in Atlanta for events, celebrations, airport transfers, corporate travel and group trips.",
};

export default function BookPage() {
  return (
    <>
      <Header />

      <main className="bg-black pb-24 pt-40 text-white">
        <section className="container-iss">
          <p className="eyebrow text-[#d9ff43]">
            Request Transportation
          </p>

          <h1 className="mt-5 max-w-5xl text-6xl font-black tracking-[-0.06em] md:text-8xl">
            TELL US
            <br />
            THE PLAN.
          </h1>

          <div className="mt-8 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-2">
            <p className="max-w-xl text-lg leading-8 text-white/65">
              Give us the details. We&apos;ll review your trip,
              availability and transportation needs.
            </p>

            <div className="lg:text-right">
              <p className="text-sm font-bold text-white/70">
                Atlanta, Georgia
              </p>
              <p className="mt-1 text-sm text-white/35">
                Private Sprinter Transportation
              </p>
            </div>
          </div>
        </section>

        <section className="container-iss mt-16">
          <div className="mx-auto max-w-5xl">
            <QuoteForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
