import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import kennelSuite from "@/assets/kennel-suite.jpg";

const TITLE = "Boarding Kennel — Wadhams Road Animal Clinic";
const DESCRIPTION =
  "Overnight boarding for dogs and cats in Kimball, MI. Sound-dampened suites, outdoor runs and veterinary staff on site.";

export const Route = createFileRoute("/boarding")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BoardingPage,
});

const boarding = [
  {
    tier: "Garden Run",
    price: "$46 / night",
    points: ["Indoor suite with outdoor run", "Three yard breaks daily", "Bedtime check-in"],
  },
  {
    tier: "Retreat Suite",
    price: "$68 / night",
    points: ["Extra-large room with window", "Private play sessions", "Nightly photo update"],
  },
  {
    tier: "Medical Boarding",
    price: "From $85 / night",
    points: ["Nurse-administered medication", "Vet on site during hours", "Daily health log"],
  },
];

function BoardingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main>
        <section className="relative isolate overflow-hidden">
          <img
            src={kennelSuite}
            alt="Interior of a warm, spacious boarding kennel suite with a resting dog"
            width={1920}
            height={1459}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bark/90 via-bark/70 to-bark/30" />

          <SiteHeader variant="light" />

          <div className="mx-auto max-w-6xl px-6 pt-14 pb-20 md:pt-20">
            <div className="max-w-2xl text-background">
              <p className="text-sm tracking-[0.22em] uppercase opacity-75">
                Boarding &amp; daycare · Kimball, MI
              </p>
              <h1 className="font-display mt-5 text-4xl leading-[1.08] font-semibold text-balance md:text-6xl">
                The boarding kennel
              </h1>
              <p className="mt-6 max-w-md text-lg opacity-85">
                Sound-dampened suites, underfloor heating and a half-acre grass yard. Because
                the clinic is next door, a veterinarian is never more than a corridor away.
              </p>
              <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 text-sm">
                {[
                  ["24", "Private suites"],
                  ["6am", "First yard break"],
                  ["1:6", "Staff to pet ratio"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl bg-background/10 px-4 py-4 backdrop-blur-sm"
                  >
                    <dt className="font-display text-2xl font-semibold">{value}</dt>
                    <dd className="mt-1 opacity-75">{label}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-9">
                <Link
                  to="/visit"
                  className="bg-background text-foreground hover:bg-clay inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold transition-colors"
                >
                  Reserve a suite
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Boarding options
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Every stay includes daily exercise, fresh bedding and a health check from our
            clinic team.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {boarding.map((b) => (
              <article
                key={b.tier}
                className="border-border bg-card flex flex-col rounded-2xl border p-7"
              >
                <h3 className="font-display text-xl font-semibold">{b.tier}</h3>
                <p className="text-primary mt-1 text-sm font-semibold">{b.price}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {b.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="bg-accent mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Wadhams Road Animal Clinic
      </footer>
    </div>
  );
}
