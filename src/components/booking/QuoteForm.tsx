"use client";

import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  MapPin,
} from "lucide-react";

type FormData = {
  occasion: string;
  customOccasion: string;
  tripType: string;
  date: string;
  pickupTime: string;
  returnTime: string;
  pickup: string;
  destination: string;
  stops: string;
  passengers: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
};

const initialForm: FormData = {
  occasion: "",
  customOccasion: "",
  tripType: "",
  date: "",
  pickupTime: "",
  returnTime: "",
  pickup: "",
  destination: "",
  stops: "",
  passengers: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  notes: "",
};

const occasions = [
  "Airport",
  "Birthday",
  "Wedding",
  "Corporate",
  "Concert / Nightlife",
  "Sporting Event",
  "Prom / Graduation",
  "Group Trip",
  "Other",
];

const tripTypes = [
  "One Way",
  "Round Trip",
  "Hourly / As Directed",
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function update(field: keyof FormData, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
    setError("");
  }

  function next() {
    if (step === 1 && !form.occasion) {
      setError("Choose an occasion to continue.");
      return;
    }

    if (step === 1 && form.occasion === "Other" && !form.customOccasion.trim()) {
      setError("Tell us what you're planning.");
      return;
    }

    if (step === 2 && (!form.tripType || !form.date || !form.pickupTime)) {
      setError("Complete the required trip details.");
      return;
    }

    if (step === 3 && (!form.pickup.trim() || !form.destination.trim() || !form.passengers)) {
      setError("Add your pickup, destination and passenger count.");
      return;
    }

    setError("");
    setStep((current) => Math.min(current + 1, 4));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setError("");
    setStep((current) => Math.max(current - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.phone.trim()
    ) {
      setError("Complete your contact information.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to submit your request.");
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-white/15 bg-white/[0.04] p-8 md:p-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d9ff43] text-black">
          <Check size={26} strokeWidth={3} />
        </div>

        <p className="eyebrow mt-10 text-[#d9ff43]">
          Request Received
        </p>

        <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
          WE HAVE YOUR TRIP.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Thank you, {form.firstName}. Your transportation request has
          been submitted to International Supreme Sprinters. We&apos;ll
          review the details and contact you about availability and next
          steps.
        </p>

        <div className="mt-10 border-t border-white/15 pt-7 text-sm text-white/45">
          Submitting a request does not confirm a reservation.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit}>
      <div className="mb-10">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className={`h-1 flex-1 ${
                item <= step ? "bg-[#d9ff43]" : "bg-white/15"
              }`}
            />
          ))}
        </div>

        <div className="mt-4 flex justify-between text-[10px] font-black uppercase tracking-[0.16em] text-white/35">
          <span>Occasion</span>
          <span>Trip</span>
          <span>Route</span>
          <span>Contact</span>
        </div>
      </div>

      {step === 1 && (
        <div>
          <p className="eyebrow text-[#d9ff43]">Step 01</p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
            WHAT&apos;S THE OCCASION?
          </h2>

          <p className="mt-4 text-white/50">
            Tell us what you&apos;re planning.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {occasions.map((occasion) => (
              <button
                key={occasion}
                type="button"
                onClick={() => update("occasion", occasion)}
                className={`min-h-20 border p-5 text-left font-bold transition ${
                  form.occasion === occasion
                    ? "border-[#d9ff43] bg-[#d9ff43] text-black"
                    : "border-white/15 bg-white/[0.03] hover:border-white/40"
                }`}
              >
                {occasion}
              </button>
            ))}
          </div>

          {form.occasion === "Other" && (
            <div className="mt-6">
              <label className="mb-2 block text-xs font-black uppercase tracking-wider text-white/50">
                What are you planning?
              </label>

              <input
                value={form.customOccasion}
                onChange={(e) => update("customOccasion", e.target.value)}
                placeholder="Tell us about the occasion"
                className="w-full border border-white/15 bg-white/[0.04] p-4 outline-none focus:border-[#d9ff43]"
              />
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="eyebrow text-[#d9ff43]">Step 02</p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
            WHEN DO YOU NEED US?
          </h2>

          <div className="mt-9">
            <label className="mb-3 block text-xs font-black uppercase tracking-wider text-white/50">
              Trip Type *
            </label>

            <div className="grid gap-3 md:grid-cols-3">
              {tripTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => update("tripType", type)}
                  className={`min-h-20 border p-5 text-left font-bold ${
                    form.tripType === type
                      ? "border-[#d9ff43] bg-[#d9ff43] text-black"
                      : "border-white/15 bg-white/[0.03]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <Field label="Date *">
              <input
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="input-iss"
              />
            </Field>

            <Field label="Pickup Time *">
              <input
                type="time"
                value={form.pickupTime}
                onChange={(e) => update("pickupTime", e.target.value)}
                className="input-iss"
              />
            </Field>
          </div>

          {form.tripType === "Round Trip" && (
            <div className="mt-5">
              <Field label="Estimated Return Time">
                <input
                  type="time"
                  value={form.returnTime}
                  onChange={(e) => update("returnTime", e.target.value)}
                  className="input-iss"
                />
              </Field>
            </div>
          )}
        </div>
      )}

      {step === 3 && (
        <div>
          <p className="eyebrow text-[#d9ff43]">Step 03</p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
            WHERE ARE WE GOING?
          </h2>

          <div className="mt-9 grid gap-5">
            <Field label="Pickup Location *">
              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
                />

                <input
                  value={form.pickup}
                  onChange={(e) => update("pickup", e.target.value)}
                  placeholder="Address, hotel, airport or location"
                  className="input-iss pl-12"
                />
              </div>
            </Field>

            <Field label="Destination *">
              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
                />

                <input
                  value={form.destination}
                  onChange={(e) => update("destination", e.target.value)}
                  placeholder="Where are you headed?"
                  className="input-iss pl-12"
                />
              </div>
            </Field>

            <Field label="Additional Stops">
              <textarea
                value={form.stops}
                onChange={(e) => update("stops", e.target.value)}
                placeholder="Add any planned stops or itinerary details"
                rows={3}
                className="input-iss resize-none"
              />
            </Field>

            <Field label="Number of Passengers *">
              <input
                type="number"
                min="1"
                value={form.passengers}
                onChange={(e) => update("passengers", e.target.value)}
                placeholder="Number of passengers"
                className="input-iss"
              />
            </Field>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <p className="eyebrow text-[#d9ff43]">Step 04</p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">
            WHO&apos;S RIDING?
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <Field label="First Name *">
              <input
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                autoComplete="given-name"
                className="input-iss"
              />
            </Field>

            <Field label="Last Name *">
              <input
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                autoComplete="family-name"
                className="input-iss"
              />
            </Field>

            <Field label="Email *">
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                autoComplete="email"
                className="input-iss"
              />
            </Field>

            <Field label="Phone *">
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                autoComplete="tel"
                className="input-iss"
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Anything Else We Should Know?">
              <textarea
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Schedule details, special requests, luggage, itinerary notes, etc."
                rows={5}
                className="input-iss resize-none"
              />
            </Field>
          </div>

          <div className="mt-7 border border-white/15 p-5 text-sm leading-6 text-white/45">
            By submitting this form, you are requesting transportation.
            Your reservation is not confirmed until International Supreme
            Sprinters reviews and confirms the request.
          </div>
        </div>
      )}

      {error && (
        <div className="mt-7 border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200">
          {error}
        </div>
      )}

      <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/15 pt-7">
        {step > 1 ? (
          <button
            type="button"
            onClick={back}
            className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/60"
          >
            <ArrowLeft size={17} />
            Back
          </button>
        ) : (
          <div />
        )}

        {step < 4 ? (
          <button
            type="button"
            onClick={next}
            className="btn-primary gap-3"
          >
            Continue
            <ArrowRight size={17} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary gap-3 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? (
              <>
                <Loader2 size={17} className="animate-spin" />
                Sending
              </>
            ) : (
              <>
                Submit Request
                <ArrowRight size={17} />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-black uppercase tracking-wider text-white/50">
        {label}
      </span>
      {children}
    </label>
  );
}
