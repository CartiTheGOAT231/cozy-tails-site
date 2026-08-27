import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import clinicBuilding from "@/assets/clinic-building.jpg";

const TITLE = "Wadhams Road Animal Clinic | Veterinary Care in Kimball, MI";
const DESCRIPTION = "Your family is Our Family";

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

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main id="top">
        <section className="relative isolate min-h-[92vh] overflow-hidden">
          <img
            src={clinicBuilding}
            alt="Exterior of the Wadhams Road Animal Clinic building at golden hour"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bark/90 via-bark/70 to-bark/25" />

          <SiteHeader variant="light" />

          <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24">
            <div className="max-w-2xl text-background">
              <p className="text-sm tracking-[0.22em] uppercase opacity-75">
                Full-service veterinary clinic · Kimball, MI
              </p>
              <h1 className="font-display mt-5 text-4xl leading-[1.08] font-semibold text-balance md:text-6xl">
                Wadhams Road Animal Clinic
              </h1>
              <p className="mt-6 max-w-md text-lg opacity-85">{DESCRIPTION}</p>
              <div className="mt-9">
                <Link
                  to="/visit"
                  className="bg-background text-foreground hover:bg-clay inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold transition-colors"
                >
                  Book an appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="visit" className="bg-secondary/60 border-t border-border py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Visit the clinic
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Call to book an exam or reserve a boarding suite. Same-day sick visits are
                available during open hours.
              </p>
              <Link
                to="/visit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold transition-colors"
              >
                Get directions
              </Link>
            </div>
            <address className="space-y-3 text-sm not-italic">
              <p className="font-semibold">Wadhams Road Animal Clinic</p>
              <p className="text-muted-foreground">
                635 Wadhams Rd
                <br />
                Kimball, MI 48074
              </p>
              <p>
                <a className="hover:text-primary transition-colors" href="tel:+18109876543">
                  (810) 987-6543
                </a>
              </p>
              <p className="text-muted-foreground">
                Wed &amp; Fri 9PM–3PM
                <br />
                Thu &amp; Tue 8AM–12PM, 1PM–4PM
                <br />
                Sat–Sun Closed
              </p>
            </address>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Wadhams Road Animal Clinic
      </footer>
    </div>
  );
}
