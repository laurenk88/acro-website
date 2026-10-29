import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import laurenHeadshot from "@/assets/lauren-headshot.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lauren Kasten | Your business runs on you" },
      { name: "description", content: "Lauren Kasten helps small business owners shape their business around the life they want to live." },
      { property: "og:title", content: "Lauren Kasten | Your business runs on you" },
      { property: "og:description", content: "Lauren Kasten helps small business owners shape their business around the life they want to live." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://acro-consulting.com/" },
    ],
    links: [{ rel: "canonical", href: "https://acro-consulting.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Lauren Kasten",
          legalName: "ACRO Consulting LLC",
          description:
            "Lauren Kasten helps small business owners shape their business around the life they want to live.",
          url: "https://acro-consulting.com/",
          founder: {
            "@type": "Person",
            name: "Lauren Kasten",
            jobTitle: "Founder",
            url: "https://www.linkedin.com/in/lauren-kasten0807",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function ArrowRight({ className = "shrink-0", size = 22 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function useActiveSection(ids: string[], fallback: string = ids[0] || "") {
  const [active, setActive] = useState(fallback);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const visible = new Map<string, number>();
    const ratios = new Map<string, number>();

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
          ratios.set(entry.target.id, entry.intersectionRatio);
        });

        if (visible.size > 0) {
          let best = [...visible.entries()].reduce((a, b) =>
            a[1] >= b[1] ? a : b
          )[0];
          if (best === "top") {
            best = ids.find((id) => id !== "top") || best;
          }
          setActive(best);
        } else {
          const stillOnPage = ids.filter((id) => {
            const el = document.getElementById(id);
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return rect.top <= window.innerHeight && rect.bottom >= 0;
          });
          if (stillOnPage.length > 0) {
            setActive(stillOnPage[0]);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.1, 0.25, 0.5, 1] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [ids.join(",")]);

  return active;
}

function openCalendlyPopup(e?: React.MouseEvent) {
  e?.preventDefault();
  if (typeof window !== "undefined" && (window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({ url: "https://calendly.com/acro-consulting/intro" });
  }
  return false;
}



function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(["top", "how", "work", "about", "contact"]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  const navLinks = [
    { label: "Work", id: "work" },
    { label: "About", id: "about" },
  ];

  const linkClass = (id: string) =>
    [
      "transition-colors",
      activeSection === id
        ? "text-foreground font-medium"
        : "text-muted-foreground hover:text-foreground",
    ].join(" ");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" onClick={(e) => { e.preventDefault(); scrollToSection("top"); }} className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm">
          <span className="font-serif text-xl font-medium tracking-tight text-foreground">Lauren Kasten</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
              className={linkClass(link.id)}
              aria-current={activeSection === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-background text-sm font-semibold hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:-translate-y-0.5 focus-visible:shadow-md transition-all duration-200"
          >
Let's talk
            <ArrowRight size={16} />
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full bg-navy text-background hover:bg-navy/90 active:bg-navy/80 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-200"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`block w-4 h-0.5 bg-current transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-4 h-0.5 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-4 h-0.5 bg-current transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className={`py-2 ${linkClass(link.id)}`}
                aria-current={activeSection === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
              className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-navy text-background text-sm font-semibold hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:-translate-y-0.5 focus-visible:shadow-md transition-all duration-200"
            >
              Let's talk
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

const ctaClass =
  "inline-flex items-center gap-3 px-8 py-4 rounded-full bg-navy text-background text-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:-translate-y-0.5 focus-visible:shadow-lg transition-all duration-200 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]";

function Hero() {
  return (
    <section id="top" className="pt-40 pb-20 md:pt-48 md:pb-28 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] text-foreground">
          Your business runs on you.
          <br />
          <span className="text-[color:var(--navy)]">That's </span>
          <span className="text-[color:var(--navy)] highlight-gold">the problem I fix.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-[1.5]">
          I help small business owners shape their business around the life they want to live.
        </p>
        <div className="mt-10 flex flex-col items-start gap-3">
          <button type="button" onClick={openCalendlyPopup} className={ctaClass}>
            Let's talk
            <ArrowRight size={22} />
          </button>
          <p className="text-base text-muted-foreground">15 minutes, no cost, no pitch.</p>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
      <span className="gold-rule" />
      <span>{children}</span>
    </div>
  );
}

function TheQuestion() {
  return (
    <section className="py-24 md:py-36 bg-cream">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>I start with one question</SectionLabel>
        <p className="font-serif text-3xl md:text-5xl font-medium leading-tight text-foreground max-w-4xl">
          "What do you want that your business keeps getting in the way of?"
        </p>
        <p className="mt-10 text-lg md:text-xl text-muted-foreground leading-[1.5] max-w-3xl">
          Most people start with the business. I start with you. Once I know what you're after, we look at what's eating your time and build around that.
        </p>
      </div>
    </section>
  );
}

function HowIWork() {
  const steps = [
    { title: "Listen", body: "The first conversation is about you, not just the business." },
    { title: "Fit", body: "Everything gets built around how you actually work and live." },
    { title: "Teach", body: "You leave able to run it without me." },
  ];
  return (
    <section id="how" className="py-24 md:py-36 bg-paper scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>How I work</SectionLabel>
        <div className="mt-6 grid md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.title} className="bg-background p-8 md:p-10">
              <h3 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-4 text-foreground">{s.title}</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-[1.5]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const stories = [
    {
      who: "A youth sports company",
      body: "Everything lived in the owner's head. There were no systems and no processes. I built a dashboard the whole leadership team can use, a new website, and one connected home for their systems, set up so the company can grow into it. Cutting the extra apps and services saved them money.",
    },
    {
      who: "A property services company",
      body: "The owner was juggling invoicing and proposals across a pile of separate systems, and requests came in by text all day. I built an app that tracks revenue for every service and handles invoicing and proposals, so requests come through the app instead of his phone. I designed the logo too.",
    },
    {
      who: "A childcare director",
      body: "She wanted to feel her healthiest by her daughter's wedding. Accountability was the piece missing from every health and fitness program she'd tried before. I built her a personal app with a daily check-in and everything she needs in one place. She has checked in every day.",
    },
  ];
  return (
    <section id="work" className="py-24 md:py-36 bg-cream scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>Work</SectionLabel>
        <div className="mt-6 space-y-px bg-border border border-border rounded-2xl overflow-hidden">
          {stories.map((s) => (
            <div key={s.who} className="bg-paper px-8 md:px-10 py-8 md:py-10">
              <h3 className="text-xl md:text-2xl font-medium leading-tight mb-4 text-foreground">{s.who}</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-[1.6] max-w-3xl">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-paper scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
        <div className="md:sticky md:top-28">
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
            <img
              src={laurenHeadshot}
              alt="Lauren Kasten"
              className="w-full h-full object-cover grayscale"
              loading="lazy"
            />
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            <span className="text-foreground font-medium">Lauren Kasten</span>
          </p>
        </div>
        <div>
          <SectionLabel>I never left teaching</SectionLabel>
          <div className="space-y-8 text-lg md:text-xl leading-[1.5] text-foreground">
            <p>
              I got my master's thinking I'd spend my career as an elementary teacher. That's not how it went. The next 11 years zigzagged: teaching, then coaching and managing in fitness, back to teaching, then corporate recruiting.
            </p>
            <p>
              The same thing kept happening in every job. Fly Feet members asked me to coach them one on one on their health and nutrition. Candidates told me they loved working with me because I listened, and the jobs I brought them fit what they wanted. I was teaching, and I was building trust.
            </p>
            <p>
              Now I do it with small business owners. I see people working around the clock with apps and tools scattered everywhere, none of it set up for how they work. There's a better way. I help you find it, build it, and run it without me.
            </p>
            <p className="font-medium">
              I work with owners who are great at what they do and tired of carrying all of it alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

type FormErrors = {
  name?: string;
  email?: string;
  business?: string;
  message?: string;
};

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [values, setValues] = useState({ name: "", email: "", business: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, business: false, message: false });
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (next: typeof values): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!next.name.trim()) {
      nextErrors.name = "Name is required.";
    } else if (next.name.length > 100) {
      nextErrors.name = "Name must be less than 100 characters.";
    }

    if (!next.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (next.email.length > 255) {
      nextErrors.email = "Email must be less than 255 characters.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (next.business.length > 100) {
      nextErrors.business = "Business name must be less than 100 characters.";
    }

    if (!next.message.trim()) {
      nextErrors.message = "Tell me what's going on so I can help.";
    } else if (next.message.length > 1000) {
      nextErrors.message = "Message must be less than 1000 characters.";
    }

    return nextErrors;
  };

  const updateField = (name: keyof typeof values, value: string) => {
    const next = { ...values, [name]: value };
    setValues(next);
    setErrors(validate(next));
  };

  const handleBlur = (name: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const allTouched = { name: true, email: true, business: true, message: true };
    setTouched(allTouched);

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstInvalid = form.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/xnjkprrd", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.status !== 200) {
        throw new Error("Formspree submission failed");
      }

      setSucceeded(true);
    } catch {
      setSubmitError("Something went wrong. Email me directly at hello@acro-consulting.com.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (invalid: boolean) =>
    [
      "w-full bg-transparent border-0 border-b py-3 text-base text-foreground transition-colors focus:outline-none focus:border-foreground placeholder:text-muted-foreground/40",
      invalid ? "border-[color:var(--destructive)]" : "border-border",
    ].join(" ");
  const labelClass = "block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2";
  const errorClass = "mt-2 text-sm text-[color:var(--destructive)]";

  if (succeeded) {
    return (
      <div className="rounded-2xl border border-border bg-[color:var(--cream)] p-8 md:p-10">
        <div className="flex items-center gap-3 mb-4 text-xs uppercase tracking-[0.22em] text-[color:var(--gold)]">
          <span className="inline-block w-6 h-px bg-[color:var(--gold)]" />
          <span>Message sent</span>
        </div>
        <p className="font-serif text-xl md:text-2xl font-medium leading-relaxed text-foreground">
          Got it. I'll get back to you within one business day with a couple of times to talk.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input type="hidden" name="_subject" value="New intro inquiry from acro-consulting.com" />
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          value={values.email}
          onChange={(e) => updateField("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          className={inputClass(!!(touched.email && errors.email))}
          aria-invalid={touched.email && errors.email ? "true" : "false"}
          aria-describedby={touched.email && errors.email ? "email-error" : undefined}
        />
        {touched.email && errors.email && (
          <p id="email-error" className={errorClass} role="alert">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Your name"
          value={values.name}
          onChange={(e) => updateField("name", e.target.value)}
          onBlur={() => handleBlur("name")}
          className={inputClass(!!(touched.name && errors.name))}
          aria-invalid={touched.name && errors.name ? "true" : "false"}
          aria-describedby={touched.name && errors.name ? "name-error" : undefined}
        />
        {touched.name && errors.name && (
          <p id="name-error" className={errorClass} role="alert">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="business" className={labelClass}>Business name (optional)</label>
        <input
          id="business"
          type="text"
          name="business"
          placeholder="Your business"
          value={values.business}
          onChange={(e) => updateField("business", e.target.value)}
          onBlur={() => handleBlur("business")}
          className={inputClass(!!(touched.business && errors.business))}
          aria-invalid={touched.business && errors.business ? "true" : "false"}
          aria-describedby={touched.business && errors.business ? "business-error" : undefined}
        />
        {touched.business && errors.business && (
          <p id="business-error" className={errorClass} role="alert">{errors.business}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>What do you want that your business keeps getting in the way of?</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Write as much or as little as you want."
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          className={`${inputClass(!!(touched.message && errors.message))} resize-none`}
          aria-invalid={touched.message && errors.message ? "true" : "false"}
          aria-describedby={touched.message && errors.message ? "message-error" : undefined}
        />
        {touched.message && errors.message && (
          <p id="message-error" className={errorClass} role="alert">{errors.message}</p>
        )}
      </div>

      <div className="pt-4">
        <div>
          {submitError && (
            <p className="mb-4 text-sm text-[color:var(--destructive)]" role="alert">
              {submitError}
            </p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className={`${ctaClass} disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0`}
          >
            {submitting ? "Sending..." : "Send"}
            {!submitting && <ArrowRight size={22} />}
          </button>
        </div>
      </div>
    </form>
  );
}


function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-paper scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-16">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight text-foreground">
            Let's talk.
          </h2>
        </div>
        <div className="md:pt-14">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="font-serif text-base font-medium text-foreground">Lauren Kasten</div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <a
            href="mailto:hello@acro-consulting.com"
            className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            hello@acro-consulting.com
          </a>
          <a
            href="https://www.linkedin.com/in/lauren-kasten0807"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            Contact
          </a>
        </div>
        <div>© {new Date().getFullYear()} Lauren Kasten · ACRO Consulting LLC</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="flex flex-col gap-6 md:gap-8">
        <Hero />
        <TheQuestion />
        <HowIWork />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
