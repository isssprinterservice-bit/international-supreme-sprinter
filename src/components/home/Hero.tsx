import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#080808]">

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,#262626_0%,#080808_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />
      </div>

      <div className="container-iss relative z-10 pb-16 pt-40 md:pb-24">

        <div className="mb-7 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#d9ff43]" />
          <p className="eyebrow text-white/70">
            Atlanta, Georgia
          </p>
        </div>

        <h1 className="display max-w-6xl">
          MOVE
          <br />
          <span className="text-[#d9ff43]">SUPREME.</span>
        </h1>

        <div className="mt-10 grid gap-8 border-t border-white/20 pt-8 lg:grid-cols-[1fr_1fr]">

          <p className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
            Private luxury Sprinter transportation for the moments,
            destinations and people that matter.
          </p>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/book" className="btn-primary gap-3">
              Book Your Ride
              <ArrowUpRight size={18} />
            </Link>

            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
