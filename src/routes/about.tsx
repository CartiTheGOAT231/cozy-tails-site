import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import clinicLogo from "@/assets/clinic-logo.png";

const TITLE = "About Us — Wadhams Road Animal Clinic";
const DESCRIPTION =
  "Meet the team behind Wadhams Road Animal Clinic in Kimball, MI. Compassionate veterinary care and boarding for the pets of St. Clair County.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main>
        <section className="bg-bark text-background">
          <SiteHeader variant="light" />
          <div className="mx-auto max-w-6xl px-6 pt-14 pb-20 md:pt-20">
            <div className="max-w-2xl">
              <p className="text-sm tracking-[0.22em] uppercase opacity-75">
                Our story · Kimball, MI
              </p>
              <h1 className="font-display mt-5 text-4xl leading-[1.08] font-semibold text-balance md:text-6xl">
                About us
              </h1>
              <p className="mt-6 max-w-md text-lg opacity-85">
                Your family is Our Family — it&apos;s not just a motto, it&apos;s how we
                practice medicine.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                A small-town clinic with a big heart
              </h2>
              <div className="mt-5 space-y-4 text-muted-foreground">
                <p>
                  Wadhams Road Animal Clinic has served the families of Kimball and the
                  surrounding St. Clair County communities with honest, compassionate
                  veterinary care — from first puppy exams to gentle senior care.
                </p>
                <p>
                  With an on-site boarding kennel, your pets stay where their doctor is.
                  Whether it&apos;s a wellness visit, surgery, or a weekend stay in one of
                  our suites, your animals are treated like our own.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/visit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold transition-colors"
                >
                  Visit the clinic
                </Link>
                <Link
                  to="/boarding"
                  className="border-border hover:bg-secondary inline-flex items-center rounded-full border px-7 py-3 text-sm font-semibold transition-colors"
                >
                  See boarding
                </Link>
              </div>
            </div>
            <div className="bg-card border-border flex items-center justify-center rounded-2xl border p-12 shadow-soft">
              <img
                src={clinicLogo}
                alt="Wadhams Road Animal Clinic logo: a horse, a dog with a stethoscope, and a cat"
                className="w-full max-w-sm"
              />
            </div>
          </div>

          <dl className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              ["Dogs & cats", "Wellness exams, surgery, dentistry and preventive care"],
              ["On-site kennel", "Overnight boarding with clinic staff steps away"],
              ["Same-day sick visits", "Available during open hours — call ahead"],
            ].map(([title, body]) => (
              <div key={title} className="border-border bg-card rounded-2xl border p-7">
                <dt className="font-display text-lg font-semibold">{title}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Wadhams Road Animal Clinic
      </footer>
    </div>
  );
}
