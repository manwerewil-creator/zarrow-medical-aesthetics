"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Clock3,
  Loader2,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  CATEGORIES,
  TREATMENTS,
  formatPrice,
  getCategory,
  getTreatment,
} from "@/lib/treatments";
import { BRANCHES, CONSULT_NOTE, SITE } from "@/lib/site";

type Step = 0 | 1 | 2;

const STEPS = ["Your treatment", "Your details", "Review"];

// No opening hours were supplied by the business, so the wizard asks for a
// preferred part of the day rather than inventing bookable time slots.
const TIME_PREFERENCES = [
  { id: "morning", label: "Morning" },
  { id: "midday", label: "Midday" },
  { id: "afternoon", label: "Afternoon" },
  { id: "flexible", label: "I'm flexible" },
];

function todayISO() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

function addDaysISO(iso: string, days: number) {
  const d = new Date(iso);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function prettyDate(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BookingFlow() {
  const params = useSearchParams();
  const requested = params.get("treatment");

  const [step, setStep] = useState<Step>(0);
  const [treatmentSlug, setTreatmentSlug] = useState(
    getTreatment(requested ?? "")?.slug ?? TREATMENTS[0].slug
  );
  const [branchSlug, setBranchSlug] = useState(BRANCHES[0].slug);

  const today = todayISO();
  const [preferredDate, setPreferredDate] = useState(addDaysISO(today, 3));
  const [timePreference, setTimePreference] = useState("morning");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstVisit, setFirstVisit] = useState(true);
  const [notes, setNotes] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [reference, setReference] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const treatment = useMemo(() => getTreatment(treatmentSlug)!, [treatmentSlug]);
  const category = getCategory(treatment.category)!;
  const branch = BRANCHES.find((b) => b.slug === branchSlug)!;

  const scheduleValid = Boolean(preferredDate) && preferredDate >= today;
  const detailsValid =
    name.trim().length > 1 &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) &&
    phone.trim().length > 5;

  async function submit() {
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          treatmentSlug,
          branchSlug,
          preferredDate,
          timePreference,
          name,
          email,
          phone,
          firstVisit,
          notes,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok)
        throw new Error(data.error || "Something went wrong.");
      setReference(data.reference);
      setStatus("done");
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="card-surface mx-auto max-w-2xl rounded-[var(--radius-xl2)] p-8 text-center sm:p-12">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
          <Sparkles size={28} strokeWidth={1.5} />
        </span>
        <h2 className="mt-6 font-display text-3xl text-teal-800">
          Request received
        </h2>
        <p className="mt-3 text-stone text-pretty">
          Thank you, {name.split(" ")[0]}. Your request has reached the Zarrow
          team — we will be in touch to confirm your consultation, the time and
          anything you need to know beforehand. Nothing is charged now.
        </p>

        <div className="mt-8 rounded-2xl bg-ivory p-6 text-left">
          <div className="flex items-center justify-between">
            <span className="text-sm text-stone">Reference</span>
            <span className="font-mono font-semibold text-teal-700">
              {reference}
            </span>
          </div>
          <hr className="my-4 border-teal-700/10" />
          <SummaryRow label="Treatment" value={treatment.name} />
          <SummaryRow label="Studio" value={`${branch.city} · ${branch.name}`} />
          <SummaryRow label="Preferred date" value={prettyDate(preferredDate)} />
          <SummaryRow
            label="Preferred time"
            value={
              TIME_PREFERENCES.find((t) => t.id === timePreference)?.label ?? "—"
            }
          />
          <hr className="my-4 border-teal-700/10" />
          <div className="flex items-center justify-between">
            <span className="font-medium text-teal-800">Guide price</span>
            <span className="font-display text-2xl text-teal-700">
              {formatPrice(treatment)}
            </span>
          </div>
        </div>

        <p className="mt-6 text-sm text-stone text-pretty">
          A confirmation will be sent to{" "}
          <span className="text-teal-700">{email}</span>. If you would rather
          talk it through, call{" "}
          <a
            href={`tel:${SITE.phoneHref}`}
            className="link-underline text-teal-700"
          >
            {SITE.phone}
          </a>
          .
        </p>
        <Link href="/" className="btn btn-outline mt-8">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-12">
      <div>
        {/* Stepper */}
        <ol className="flex items-center gap-2 sm:gap-4">
          {STEPS.map((label, i) => {
            const active = i === step;
            const done = i < step;
            return (
              <li
                key={label}
                className="flex flex-1 items-center gap-2 sm:gap-3"
              >
                <span
                  className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-all duration-500 ${
                    done
                      ? "bg-teal-600 text-cream"
                      : active
                        ? "bg-gold-500 text-teal-900"
                        : "bg-teal-700/10 text-stone"
                  }`}
                >
                  {done ? <Check size={16} /> : i + 1}
                </span>
                <span
                  className={`hidden text-sm sm:block ${
                    active ? "font-medium text-teal-800" : "text-stone"
                  }`}
                >
                  {label}
                </span>
                {i < STEPS.length - 1 ? (
                  <span className="h-px flex-1 bg-teal-700/10" />
                ) : null}
              </li>
            );
          })}
        </ol>

        <div className="card-surface mt-8 rounded-[var(--radius-xl2)] p-6 sm:p-8">
          {/* ---------- STEP 0 ---------- */}
          {step === 0 ? (
            <div>
              <h2 className="font-display text-2xl text-teal-800">
                What would you like to book?
              </h2>

              <div className="mt-6">
                <label
                  htmlFor="treatment"
                  className="block text-sm font-medium text-teal-700"
                >
                  Treatment
                </label>
                <select
                  id="treatment"
                  value={treatmentSlug}
                  onChange={(e) => setTreatmentSlug(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-teal-700/15 bg-cream/60 px-4 py-3 text-charcoal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                >
                  {CATEGORIES.map((c) => (
                    <optgroup key={c.id} label={c.name}>
                      {TREATMENTS.filter((t) => t.category === c.id).map((t) => (
                        <option key={t.slug} value={t.slug}>
                          {t.name} — {formatPrice(t)}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <p className="mt-2 text-xs leading-relaxed text-mist text-pretty">
                  Not sure which is right for you? Choose the closest option —
                  your consultation will confirm the plan.
                </p>
              </div>

              <div className="mt-7">
                <p className="text-sm font-medium text-teal-700">Studio</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {BRANCHES.map((b) => {
                    const selected = b.slug === branchSlug;
                    return (
                      <button
                        key={b.slug}
                        type="button"
                        onClick={() => setBranchSlug(b.slug)}
                        className={`rounded-2xl border p-4 text-left transition-all duration-500 ${
                          selected
                            ? "border-gold-500 bg-gold-200/20 ring-2 ring-gold-500/25"
                            : "border-teal-700/12 hover:border-teal-700/30"
                        }`}
                        style={{
                          transitionTimingFunction:
                            "cubic-bezier(0.22,1,0.36,1)",
                        }}
                      >
                        <span className="flex items-center gap-2 text-sm font-medium text-teal-800">
                          <MapPin size={15} className="text-gold-500" />
                          {b.city}
                        </span>
                        <span className="mt-1.5 block text-xs leading-relaxed text-stone">
                          {b.line1}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-teal-700"
                  >
                    Preferred date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={preferredDate}
                    min={today}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-teal-700/15 bg-cream/60 px-4 py-3 text-charcoal outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-teal-700">
                    Preferred time
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {TIME_PREFERENCES.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTimePreference(t.id)}
                        className={`rounded-full border px-3.5 py-2 text-sm transition-all duration-500 ${
                          timePreference === t.id
                            ? "border-teal-700 bg-teal-700 text-cream"
                            : "border-teal-700/15 text-stone hover:border-teal-700/40"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-9 flex justify-end">
                <button
                  type="button"
                  disabled={!scheduleValid}
                  onClick={() => setStep(1)}
                  className="btn btn-primary disabled:opacity-50"
                >
                  Continue <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ) : null}

          {/* ---------- STEP 1 ---------- */}
          {step === 1 ? (
            <div>
              <h2 className="font-display text-2xl text-teal-800">
                Your details
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full name"
                  value={name}
                  onChange={setName}
                  required
                  placeholder="Your name"
                  autoComplete="name"
                />
                <Field
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  required
                  placeholder="you@email.com"
                  autoComplete="email"
                />
              </div>
              <div className="mt-5">
                <Field
                  label="Phone or WhatsApp"
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                  required
                  placeholder="+263 …"
                  autoComplete="tel"
                />
              </div>

              <fieldset className="mt-6">
                <legend className="text-sm font-medium text-teal-700">
                  Have you visited Zarrow before?
                </legend>
                <div className="mt-3 flex gap-2">
                  {[
                    { id: true, label: "First visit" },
                    { id: false, label: "I've been before" },
                  ].map((o) => (
                    <button
                      key={String(o.id)}
                      type="button"
                      onClick={() => setFirstVisit(o.id)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all duration-500 ${
                        firstVisit === o.id
                          ? "border-teal-700 bg-teal-700 text-cream"
                          : "border-teal-700/15 text-stone hover:border-teal-700/40"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-6">
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-teal-700"
                >
                  Anything we should know? (optional)
                </label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                  placeholder="Skin concerns, allergies, pregnancy, medication, recent treatments, an occasion you're preparing for…"
                  className="mt-2 w-full resize-y rounded-xl border border-teal-700/15 bg-cream/60 px-4 py-3 text-charcoal outline-none transition placeholder:text-mist focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                />
                <p className="mt-2 text-xs leading-relaxed text-mist text-pretty">
                  Share only what you are comfortable sending by email. Anything
                  clinical is discussed privately at your consultation.
                </p>
              </div>

              <div className="mt-9 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="btn btn-outline"
                >
                  <ChevronLeft size={18} /> Back
                </button>
                <button
                  type="button"
                  disabled={!detailsValid}
                  onClick={() => setStep(2)}
                  className="btn btn-primary disabled:opacity-50"
                >
                  Review <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ) : null}

          {/* ---------- STEP 2 ---------- */}
          {step === 2 ? (
            <div>
              <h2 className="font-display text-2xl text-teal-800">
                Review &amp; confirm
              </h2>
              <p className="mt-2 text-sm text-stone text-pretty">
                Check the details below. This sends a request, not a confirmed
                appointment — the team will come back to you to agree a time. No
                payment is taken now.
              </p>

              <dl className="mt-6 divide-y divide-teal-700/10 rounded-2xl bg-ivory px-5">
                <ReviewRow label="Name" value={name} />
                <ReviewRow label="Email" value={email} />
                <ReviewRow label="Phone" value={phone} />
                <ReviewRow label="Treatment" value={treatment.name} />
                <ReviewRow
                  label="Studio"
                  value={`${branch.city} · ${branch.line1}`}
                />
                <ReviewRow
                  label="Preferred date"
                  value={prettyDate(preferredDate)}
                />
                <ReviewRow
                  label="Preferred time"
                  value={
                    TIME_PREFERENCES.find((t) => t.id === timePreference)
                      ?.label ?? "—"
                  }
                />
                <ReviewRow
                  label="Visited before"
                  value={firstVisit ? "First visit" : "Returning client"}
                />
                {notes ? <ReviewRow label="Notes" value={notes} /> : null}
              </dl>

              {status === "error" ? (
                <p
                  role="alert"
                  className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {errorMsg}
                </p>
              ) : null}

              <div className="mt-9 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn btn-outline"
                >
                  <ChevronLeft size={18} /> Back
                </button>
                <button
                  type="button"
                  onClick={submit}
                  disabled={status === "sending"}
                  className="btn btn-gold disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>Send request</>
                  )}
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Live summary */}
      <aside className="self-start lg:sticky lg:top-24">
        <div className="card-surface overflow-hidden rounded-[var(--radius-xl2)]">
          <div className="relative aspect-[16/10]">
            <Image
              src={category.image.src}
              alt={category.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent" />
            <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-teal-700">
              {category.shortName}
            </span>
          </div>

          <div className="p-6">
            <h3 className="font-display text-2xl text-teal-800">
              {treatment.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone text-pretty">
              {treatment.short}
            </p>

            <ul className="mt-5 space-y-3 text-sm text-stone">
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="shrink-0 text-gold-500" />
                {branch.city} · {branch.name}
              </li>
              <li className="flex items-center gap-2.5">
                <CalendarDays size={16} className="shrink-0 text-gold-500" />
                {prettyDate(preferredDate)}
              </li>
              <li className="flex items-center gap-2.5">
                <Clock3 size={16} className="shrink-0 text-gold-500" />
                {TIME_PREFERENCES.find((t) => t.id === timePreference)?.label}
              </li>
            </ul>

            <div className="mt-6 border-t border-teal-700/10 pt-5">
              <div className="flex items-baseline justify-between">
                <span className="font-medium text-teal-800">Guide price</span>
                <span className="font-display text-2xl text-teal-700">
                  {formatPrice(treatment)}
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-mist text-pretty">
                {CONSULT_NOTE}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-stone">{label}</span>
      <span className="font-medium text-teal-800">{value}</span>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 py-3.5 text-sm">
      <span className="shrink-0 text-stone">{label}</span>
      <span className="text-right text-teal-800">{value}</span>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-teal-700">
        {label} {required ? <span className="text-gold-600">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-teal-700/15 bg-cream/60 px-4 py-3 text-charcoal outline-none transition placeholder:text-mist focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
      />
    </div>
  );
}
