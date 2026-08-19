"use client";

import { useState } from "react";
import { Loader2, Send, Check } from "lucide-react";
import { CATEGORIES } from "@/lib/treatments";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const valid =
    name.trim().length > 1 &&
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) &&
    message.trim().length > 4;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, interest, message }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok)
        throw new Error(data.error || "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="card-surface rounded-[var(--radius-xl2)] p-8 text-center sm:p-10">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brown-50 text-brown-600">
          <Check size={26} strokeWidth={1.6} />
        </span>
        <h3 className="mt-5 font-display text-2xl text-brown-800">
          Message sent
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-stone text-pretty">
          Thank you, {name.split(" ")[0]}. We have your message and will reply to{" "}
          <span className="text-brown-700">{email}</span> as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card-surface rounded-[var(--radius-xl2)] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
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

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field
          label="Phone or WhatsApp"
          type="tel"
          value={phone}
          onChange={setPhone}
          placeholder="+263 …"
          autoComplete="tel"
        />
        <div>
          <label
            htmlFor="interest"
            className="block text-sm font-medium text-brown-700"
          >
            What is it about?
          </label>
          <select
            id="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="mt-2 w-full rounded-xl border border-brown-700/15 bg-cream/60 px-4 py-3 text-charcoal outline-none transition focus:border-brown-500 focus:ring-2 focus:ring-brown-500/20"
          >
            <option value="">General enquiry</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Gift voucher">Gift voucher</option>
            <option value="Group or event booking">
              Group or event booking
            </option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brown-700"
        >
          Message <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
          placeholder="Tell us what you're looking for and we'll point you in the right direction."
          className="mt-2 w-full resize-y rounded-xl border border-brown-700/15 bg-cream/60 px-4 py-3 text-charcoal outline-none transition placeholder:text-mist focus:border-brown-500 focus:ring-2 focus:ring-brown-500/20"
        />
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {errorMsg}
        </p>
      ) : null}

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={!valid || status === "sending"}
          className="btn btn-primary disabled:opacity-50"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send message <Send size={17} />
            </>
          )}
        </button>
        <p className="text-xs leading-relaxed text-mist">
          We reply by email. Please avoid sending sensitive medical detail here.
        </p>
      </div>
    </form>
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
  const id = `contact-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-brown-700">
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
        className="mt-2 w-full rounded-xl border border-brown-700/15 bg-cream/60 px-4 py-3 text-charcoal outline-none transition placeholder:text-mist focus:border-brown-500 focus:ring-2 focus:ring-brown-500/20"
      />
    </div>
  );
}
