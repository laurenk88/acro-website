import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/guides/operational-efficiency")({
  head: () => ({
    meta: [
      { title: "Operational Efficiency Metrics for Small Service Businesses | ACRO Consulting" },
      { name: "description", content: "A practical guide to operational efficiency metrics, KPIs, and systems for small service businesses. Learn how to build a foundation that lets your business run without you." },
      { property: "og:title", content: "Operational Efficiency Metrics for Small Service Businesses | ACRO Consulting" },
      { property: "og:description", content: "A practical guide to operational efficiency metrics, KPIs, and systems for small service businesses." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://acro-consulting.com/guides/operational-efficiency" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Operational Efficiency Metrics for Small Service Businesses" },
      { name: "twitter:description", content: "Learn the KPIs and systems that help small service businesses run without the owner's constant intervention." },
    ],
    links: [
      { rel: "canonical", href: "https://acro-consulting.com/guides/operational-efficiency" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Operational Efficiency Metrics for Small Service Businesses",
          author: { "@type": "Person", name: "Lauren Kasten" },
          publisher: {
            "@type": "Organization",
            name: "ACRO Consulting",
            url: "https://acro-consulting.com/",
          },
          description:
            "A practical guide to operational efficiency metrics, KPIs, and systems for small service businesses.",
          url: "https://acro-consulting.com/guides/operational-efficiency",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://acro-consulting.com/guides/operational-efficiency",
          },
        }),
      },
    ],
  }),
  component: OperationalEfficiencyGuide,
});

function OperationalEfficiencyGuide() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-sans font-semibold tracking-[0.18em] text-sm text-foreground">
            ACRO <span className="text-muted-foreground font-normal">CONSULTING</span>
          </Link>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-background text-sm font-semibold hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:-translate-y-0.5 focus-visible:shadow-md transition-all duration-200"
          >
            Book an Intro Call
          </a>
        </div>
      </header>

      <article className="pt-32 pb-28 md:pt-40 md:pb-40">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="gold-rule" />
            <span>Guide</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-foreground mb-8">
            Operational efficiency metrics for small service businesses
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-[1.5] mb-12">
            Let's be real: most small business owners don't need another dashboard. They need a few clear numbers that tell them whether the business is running on a foundation—or running on their own nervous system.
          </p>

          <div className="bg-cream rounded-2xl p-8 md:p-10 mb-12 border border-border">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
              What this guide covers
            </h2>
            <ul className="space-y-2 text-foreground">
              <li>What operational efficiency actually means for a small service business</li>
              <li>The metrics worth tracking (and the ones you can ignore)</li>
              <li>Simple processes to capture and review those metrics</li>
              <li>How to turn numbers into action—without drowning in spreadsheets</li>
            </ul>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mt-16 mb-6">
            What operational efficiency really means
          </h2>

          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-6">
            Operational efficiency is not about doing more. It's about removing the friction that makes simple work feel hard. For a small service business, that usually means:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-foreground leading-[1.6] mb-8">
            <li>Work moves from one person to the next without chaos.</li>
            <li>Owners are not the only ones who know what's happening.</li>
            <li>Decisions are made from patterns, not panic.</li>
            <li>Revenue isn't leaking out through dropped balls, missed follow-ups, or redone work.</li>
          </ul>

          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-12">
            When your business has a real foundation, the metrics start to tell a clear story. Without that foundation, the numbers are just more noise.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mt-16 mb-6">
            The operational efficiency metrics that matter most
          </h2>

          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-8">
            You don't need twenty KPIs. You need a handful that connect to money, time, and peace of mind. Here are the ones I return to with almost every owner I work with.
          </p>

          <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mt-10 mb-3">
            1. Revenue leakage rate
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-2">
            This is the money you should have collected but didn't because of missed follow-ups, unclear scopes, delayed invoicing, or forgotten renewals.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-[1.6] mb-8">
            <strong className="text-foreground">How to track it:</strong> Review your CRM, project board, or accounting setup weekly for quotes that never closed, invoices that went unpaid, or scope creep that didn't get billed.
          </p>

          <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mt-10 mb-3">
            2. Owner dependency score
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-2">
            Ask: how many decisions, approvals, or handoffs get stuck waiting on the owner? This is not a number on a spreadsheet—it's a pattern you can count.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-[1.6] mb-8">
            <strong className="text-foreground">How to track it:</strong> For one week, have your team flag every time they have to wait on you. Count the instances. That number is your baseline.
          </p>

          <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mt-10 mb-3">
            3. Client acquisition cost (CAC)
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-2">
            Add up what you spend to get one new client: marketing, sales time, referrals, networking, software, and any administrative overhead tied to bringing them in.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-[1.6] mb-8">
            <strong className="text-foreground">Why it matters:</strong> If it costs more to acquire a client than you make in their first few months, your growth is actually costing you money.
          </p>

          <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mt-10 mb-3">
            4. Project or job profitability
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-2">
            Revenue minus the actual time and cost it took to deliver. Not your hourly rate multiplied by hours—your real cost, including rework, communication, and owner time.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-[1.6] mb-8">
            <strong className="text-foreground">How to track it:</strong> At the end of each project, compare estimated hours to actual hours, and look at what was redone or rushed.
          </p>

          <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mt-10 mb-3">
            5. On-time delivery rate
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-2">
            The percentage of client work delivered on or before the promised date. This one metric tells you a lot about your planning, communication, and capacity.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-[1.6] mb-8">
            <strong className="text-foreground">How to track it:</strong> Pick a simple yes/no standard. At the end of each project, record whether it was on time. Average it monthly.
          </p>

          <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mt-10 mb-3">
            6. Team utilization and capacity
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-2">
            Are the people you pay for billable or client-facing work actually spending their time there? Or are they pulled into admin, fixing problems, or waiting on you?
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-[1.6] mb-8">
            <strong className="text-foreground">How to track it:</strong> You don't need timesheets down to the minute. Start with a simple weekly estimate: billable hours vs. total hours.
          </p>

          <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mt-10 mb-3">
            7. Client retention and repeat rate
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-2">
            It's usually cheaper to keep a client than to find a new one. Track how many clients come back, how many referrals they send, and how long they stay.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-[1.6] mb-12">
            <strong className="text-foreground">How to track it:</strong> List your active clients from last year. How many are still with you? That's your retention rate.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mt-16 mb-6">
            What makes these metrics useful
          </h2>

          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-8">
            Knowing your numbers isn't the same as using them. Here's the back office that helps you act on them.
          </p>

          <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mt-10 mb-3">
            One weekly operations review
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-8">
            Same time, same agenda, every week. Review the numbers, the bottlenecks, and what needs to happen next. The consistency matters more than the tool.
          </p>

          <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mt-10 mb-3">
            A shared source of truth
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-8">
            One place where everyone knows the status of work, the next step, and who owns it. It can be a project management tool, a shared spreadsheet, or even a well-managed whiteboard. The point is everyone uses it.
          </p>

          <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mt-10 mb-3">
            Standard operating procedures for repeated work
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-8">
            If you do it more than twice, write it down. Not a 20-page manual—a simple checklist. It reduces errors, speeds up training, and stops you from being the only person who knows how things work.
          </p>

          <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mt-10 mb-3">
            A feedback loop with clients and team
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-12">
            Metrics only show part of the picture. A short monthly check-in with clients and a weekly team huddle will surface the problems numbers miss.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mt-16 mb-6">
            From metrics to action
          </h2>

          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-6">
            The goal is not to become a data analyst. The goal is to spot one or two patterns that point to real fixes.
          </p>

          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-6">
            For example, if your revenue leakage rate is high, the fix is usually a clearer follow-up process. If your on-time delivery rate is low, the fix is usually better scoping and capacity planning. If your owner dependency score is high, the fix is documented decisions and delegated ownership.
          </p>

          <p className="text-lg md:text-xl text-foreground leading-[1.6] mb-12">
            Start with one metric. Fix the process behind it. Then move to the next. That's how operational efficiency actually happens—one solid layer at a time.
          </p>

          <div className="bg-navy text-background rounded-2xl p-8 md:p-12 mt-16">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
              Want help building these processes in your business?
            </h2>
            <p className="text-lg md:text-xl leading-[1.5] mb-8 opacity-90">
              ACRO Consulting helps small, service-based business owners build a simple, reliable back office and a foundation their team can run. Let's diagnose what's leaking, build one process to fix it, and train your team to keep it going.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-background text-navy text-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy focus-visible:-translate-y-0.5 focus-visible:shadow-lg transition-all duration-200"
            >
              Book an Intro Call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <p className="mt-3 text-base opacity-80">15 minutes, no cost, no pitch.</p>
          </div>
        </div>
      </article>

      <footer className="border-t border-border py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="font-sans font-semibold tracking-[0.18em] text-foreground">
            ACRO <span className="text-muted-foreground font-normal">CONSULTING</span>
          </div>
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
            <Link
              to="/"
              className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              Home
            </Link>
          </div>
          <div>© {new Date().getFullYear()} ACRO Consulting. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
