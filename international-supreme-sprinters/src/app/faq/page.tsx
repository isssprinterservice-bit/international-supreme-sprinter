import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const faqs = [
  {
    q: "What types of trips can I book?",
    a: "ISS accepts requests for birthdays, weddings, airport transportation, corporate travel, concerts, sporting events, nightlife, group trips and other private transportation needs.",
  },
  {
    q: "How do I request a ride?",
    a: "Use our booking form to send your trip details. We review the request and contact you to confirm availability and next steps.",
  },
  {
    q: "Can I book round-trip transportation?",
    a: "Yes. You can request one-way, round-trip or hourly transportation depending on your plans.",
  },
  {
    q: "Can I request multiple stops?",
    a: "Yes. Include the stops or itinerary details in your booking request so we can review the full trip.",
  },
  {
    q: "Do you provide transportation outside Atlanta?",
    a: "You can submit requests for destinations outside Atlanta. Availability depends on the trip details and schedule.",
  },
  {
    q: "Is submitting a request the same as confirming a reservation?",
    a: "No. A booking request is not confirmed until International Supreme Sprinters reviews the details and provides confirmation.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-black pb-20 pt-40 text-white">
          <div className="container-iss">
            <p className="eyebrow mb-5 text-[#d9ff43]">
              FAQ
            </p>

            <h1 className="text-6xl font-black tracking-[-0.06em] md:text-8xl">
              GOOD TO KNOW.
            </h1>
          </div>
        </section>

        <section className="bg-[#f5f3ef] py-20 text-black">
          <div className="container-iss max-w-5xl">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border-b border-black/20 py-7"
              >
                <summary className="cursor-pointer list-none text-xl font-black">
                  <span className="flex items-center justify-between gap-6">
                    {faq.q}
                    <span className="text-2xl group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <p className="max-w-3xl pt-5 leading-7 text-black/60">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
