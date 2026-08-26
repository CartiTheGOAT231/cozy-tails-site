import { createFileRoute } from "@tanstack/react-router";
import heroVet from "@/assets/hero-vet.jpg";
import clinicBuilding from "@/assets/clinic-building.jpg";
import kennelSuite from "@/assets/kennel-suite.jpg";

const TITLE = "Wagmore Veterinary & Boarding | Care and Kennel Suites";
const DESCRIPTION =
  "Compassionate veterinary medicine and calm, spacious boarding suites for dogs and cats — wellness exams, surgery, dentistry and overnight stays under one roof.";

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
  "Wellness & Vaccination",
  "Surgery & Dentistry",
  "Diagnostics & Imaging",
  "Urgent Care",
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main id="top">
        <section className="relative isolate flex min-h-screen flex-col overflow-hidden">
          <img
            src={clinicBuilding}
            alt="Exterior of the Wagmore veterinary clinic and boarding kennel at golden hour"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-bark/80" />

          <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6 text-background">
            <a href="#top" className="font-display text-lg font-semibold tracking-tight">
              Wagmore
            </a>
            <a
              className="text-sm opacity-80 transition-opacity hover:opacity-100"
              href="#visit"
            >
              Contact
            </a>
          </header>

          <div className="mx-auto flex max-w-5xl flex-1 flex-col justify-center px-6 py-16">
            <p className="text-sm tracking-[0.2em] uppercase text-background/75">
              Veterinary clinic & boarding kennel
            </p>
            <h1 className="font-display mt-5 max-w-2xl text-4xl leading-[1.08] font-semibold text-balance text-background md:text-6xl">
              Calm care for your pet, under one roof.
            </h1>
            <p className="mt-6 max-w-md text-lg text-background/85">
              {DESCRIPTION}
            </p>
            <a
              href="#visit"
              className="bg-background text-foreground hover:bg-clay mt-8 inline-flex w-fit items-center rounded-full px-7 py-3 text-sm font-semibold transition-colors"
            >
              Book an appointment
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Veterinary services
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s} className="text-muted-foreground">
                {s}
              </li>
            ))}
          </ul>
        </section>

        <section id="visit" className="bg-secondary/60 border-t border-border py-20">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold md:text-3xl">
                Visit us
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
              </p>
            </address>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Wagmore Veterinary &amp; Boarding
      </footer>
    </div>
  );
}
