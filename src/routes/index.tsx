import { createFileRoute, Link } from "@tanstack/react-router";
import heroVet from "@/assets/hero-vet.jpg";
import clinicBuilding from "@/assets/clinic-building.jpg";
import kennelSuite from "@/assets/kennel-suite.jpg";

const TITLE = "Wadhams Road Animal Clinic | Veterinary Care in Kimball, MI";
const DESCRIPTION =
  "Compassionate veterinary medicine for dogs and cats in Kimball, Michigan — wellness exams, surgery, dentistry and preventive care.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const services = [
  {
    name: "Wellness & Vaccination",
    detail:
      "Annual exams, puppy and kitten series, parasite prevention and senior bloodwork panels.",
  },
  {
    name: "Surgery & Dentistry",
    detail:
      "Soft-tissue surgery, spay and neuter, and full dental cleanings with digital radiographs.",
  },
  {
    name: "Diagnostics & Imaging",
    detail: "In-house laboratory, ultrasound and digital x-ray with same-day results.",
  },
  {
    name: "Urgent Care",
    detail: "Same-day sick visits during clinic hours with a dedicated triage nurse.",
  },
];

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

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main id="top">
        <section className="relative isolate min-h-[92vh] overflow-hidden">
          <img
            src={clinicBuilding}
            alt="Exterior of the Wagmore veterinary clinic and boarding kennel at golden hour"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bark/90 via-bark/70 to-bark/25" />

          <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-background">
            <a href="#top" className="font-display text-xl font-semibold tracking-tight">
              Wagmore
              <span className="opacity-70"> Vet &amp; Boarding</span>
            </a>
            <nav className="hidden gap-8 text-sm md:flex">
              <a className="opacity-80 transition-opacity hover:opacity-100" href="#services">
                Services
              </a>
              <a className="opacity-80 transition-opacity hover:opacity-100" href="#kennel">
                Kennel
              </a>
              <a className="opacity-80 transition-opacity hover:opacity-100" href="#visit">
                Visit
              </a>
            </nav>
          </header>

          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-24 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
            <div className="text-background">
              <p className="text-sm tracking-[0.22em] uppercase opacity-75">
                Clinic &amp; kennel · Est. 2009
              </p>
              <h1 className="font-display mt-5 text-4xl leading-[1.08] font-semibold text-balance md:text-6xl">
                Steady hands for your pet, a quiet room when you travel.
              </h1>
              <p className="mt-6 max-w-md text-lg opacity-85">{DESCRIPTION}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#visit"
                  className="bg-background text-foreground hover:bg-clay inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold transition-colors"
                >
                  Book an appointment
                </a>
                <a
                  href="#kennel"
                  className="inline-flex items-center rounded-full border border-background/50 px-7 py-3 text-sm font-semibold transition-colors hover:bg-background/15"
                >
                  See boarding suites
                </a>
              </div>
            </div>
            <div
              className="hidden overflow-hidden rounded-[2rem] md:block"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <img
                src={heroVet}
                alt="Veterinarian examining a golden retriever in a bright clinic room"
                width={1408}
                height={1008}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="services" className="bg-secondary/60 border-y border-border py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Veterinary services
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              One team follows your pet from their first vaccine through their senior years.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {services.map((s) => (
                <article
                  key={s.name}
                  className="bg-card border-border rounded-2xl border p-7"
                >
                  <h3 className="font-display text-xl font-semibold">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="kennel" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem]" style={{ boxShadow: "var(--shadow-soft)" }}>
              <img
                src={kennelSuite}
                alt="Interior of a warm, spacious boarding kennel suite with a resting dog"
                width={1200}
                height={912}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                The boarding kennel
              </h2>
              <p className="mt-4 text-muted-foreground">
                Sound-dampened suites, underfloor heating and a half-acre grass yard. Because
                the clinic is next door, a veterinarian is never more than a corridor away.
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-4 text-sm">
                {[
                  ["24", "Private suites"],
                  ["6am", "First yard break"],
                  ["1:6", "Staff to pet ratio"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-secondary rounded-xl px-4 py-4">
                    <dt className="font-display text-2xl font-semibold">{value}</dt>
                    <dd className="mt-1 text-muted-foreground">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
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

        <section id="visit" className="bg-secondary/60 border-t border-border py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Visit the practice
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Call to book an exam or reserve a boarding suite. Holiday weeks fill up about a
                month ahead.
              </p>
            </div>
            <address className="space-y-3 text-sm not-italic">
              <p className="font-semibold">Wagmore Veterinary &amp; Boarding</p>
              <p className="text-muted-foreground">
                214 Millbrook Road
                <br />
                Ashford, OR 97045
              </p>
              <p>
                <a className="hover:text-primary transition-colors" href="tel:+15035550142">
                  (503) 555-0142
                </a>
              </p>
              <p className="text-muted-foreground">
                Mon–Fri 7:30–18:00 · Sat 9:00–14:00
                <br />
                Boarding drop-off &amp; pick-up daily 8:00–17:00
              </p>
            </address>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Wagmore Veterinary &amp; Boarding
      </footer>
    </div>
  );
}
