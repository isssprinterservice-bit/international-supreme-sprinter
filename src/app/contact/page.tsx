import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <section className="min-h-[75vh] bg-black pb-20 pt-40 text-white">
          <div className="container-iss">
            <p className="eyebrow mb-5 text-[#d9ff43]">
              Contact
            </p>

            <h1 className="max-w-5xl text-6xl font-black tracking-[-0.06em] md:text-8xl">
              LET'S TALK
              <br />
              ABOUT THE RIDE.
            </h1>

            <div className="mt-14 grid gap-6 border-t border-white/15 pt-10 md:grid-cols-2">
              <a
                href="mailto:isssprinterservice@gmail.com"
                className="border border-white/15 p-7"
              >
                <Mail className="text-[#d9ff43]" />

                <p className="mt-10 text-xs font-bold uppercase tracking-widest text-white/40">
                  Email
                </p>

                <p className="mt-2 text-lg font-bold">
                  isssprinterservice@gmail.com
                </p>
              </a>

              <div className="border border-white/15 p-7">
                <MapPin className="text-[#d9ff43]" />

                <p className="mt-10 text-xs font-bold uppercase tracking-widest text-white/40">
                  Based In
                </p>

                <p className="mt-2 text-lg font-bold">
                  Atlanta, Georgia
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="mb-5 text-white/55">
                Ready to request transportation?
              </p>

              <Link href="/book" className="btn-primary">
                Book Your Ride
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
