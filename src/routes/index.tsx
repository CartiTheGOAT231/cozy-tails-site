import { createFileRoute, Link } from "@tanstack/react-router";
import { FacebookEmbed } from "@/components/facebook-embed";
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
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bark/95 via-bark/75 to-bark/35" />

          <SiteHeader variant="light" />

          <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24">
            <div className="text-background inline-block max-w-2xl pt-4">
              <p
                className="text-sm tracking-[0.22em] uppercase opacity-90"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.45)" }}
              >
                635 Wadhams Road, Kimball MI 48074
              </p>
              <h1
                className="font-display mt-5 text-4xl leading-[1.08] font-semibold text-balance md:text-6xl"
                style={{ textShadow: "0 3px 18px rgba(0,0,0,0.55)" }}
              >
                Wadhams Road Animal Clinic
              </h1>
              <p
                className="mt-6 max-w-md text-lg font-medium opacity-95"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
              >
                {DESCRIPTION}
              </p>
              <div className="mt-9">
                <Link
                  to="/visit"
                  className="bg-background text-foreground hover:bg-clay inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold shadow-lg transition-colors"
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

        <section id="facebook" className="bg-secondary/40 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Follow us on Facebook
              </h2>
              <p className="mt-4 text-muted-foreground">
                Stay up to date with clinic news, pet care tips, and adorable patient photos.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">Wadhams Road Animal Clinic</p>
                    <p className="text-xs text-muted-foreground">@WadhamsRoadAnimalClinic</p>
                  </div>
                </div>
                <FacebookEmbed />
                <div className="border-t border-border px-5 py-4 text-center">
                  <a
                    href="https://www.facebook.com/WadhamsRoadAnimalClinic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#166fe5]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Visit us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Wadhams Road Animal Clinic
      </footer>
    </div>
  );
}
