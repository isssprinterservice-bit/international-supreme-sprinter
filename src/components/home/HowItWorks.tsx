const steps = [
  {
    number: "01",
    title: "Tell us the plan",
    text: "Choose your occasion, date, pickup, destination and group size.",
  },
  {
    number: "02",
    title: "Confirm your ride",
    text: "We'll review your trip details and confirm your transportation.",
  },
  {
    number: "03",
    title: "Ride Supreme",
    text: "Your driver arrives and your experience begins.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-iss bg-[#080808]">
      <div className="container-iss">
        <p className="eyebrow mb-5 text-[#d9ff43]">
          Simple By Design
        </p>

        <h2 className="max-w-4xl text-5xl font-black tracking-[-0.055em] md:text-7xl">
          BOOKING SHOULDN&apos;T
          <br />
          FEEL LIKE WORK.
        </h2>

        <div className="mt-16 grid border-t border-white/20 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-b border-white/20 py-9 md:border-b-0 md:border-r md:px-8 first:pl-0"
            >
              <span className="text-sm font-black text-[#d9ff43]">
                {step.number}
              </span>

              <h3 className="mt-16 text-2xl font-black">
                {step.title}
              </h3>

              <p className="mt-4 max-w-sm leading-7 text-white/55">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
