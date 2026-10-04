import Link from "next/link";

const services = [
  "Airport Transportation",
  "Birthdays & Celebrations",
  "Weddings",
  "Corporate Transportation",
  "Concerts & Nightlife",
  "Trips & Custom Transportation",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container-iss py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">

          <div>
            <p className="text-2xl font-black tracking-[-0.04em]">
              INTERNATIONAL
            </p>
            <p className="text-xs font-bold tracking-[0.3em] text-white/50">
              SUPREME SPRINTERS
            </p>

            <p className="mt-6 max-w-md leading-7 text-white/55">
              Private luxury Sprinter transportation for Atlanta,
              special occasions, events, group travel and more.
            </p>

            <Link
              href="/book"
              className="btn-primary mt-8"
            >
              Book Your Ride
            </Link>
          </div>

          <div>
            <p className="eyebrow mb-5 text-white/40">
              Explore
            </p>

            <div className="flex flex-col gap-3 text-sm">
              <Link href="/services">Services</Link>
              <Link href="/fleet">The Sprinter</Link>
              <Link href="/about">About</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5 text-white/40">
              Popular Services
            </p>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              {services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/35 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} International Supreme Sprinters.
          </p>

          <p>Atlanta, Georgia</p>
        </div>
      </div>
    </footer>
  );
}
