import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Visit Us — Wadhams Road Animal Clinic";
const DESCRIPTION =
  "Find Wadhams Road Animal Clinic at 635 Wadhams Rd, Kimball, MI 48074. View our hours and get directions.";

const address = {
  name: "Wadhams Road Animal Clinic",
  street: "635 Wadhams Rd",
  city: "Kimball",
  state: "MI",
  zip: "48074",
  phone: "(810) 987-6543",
};

const hours = [
  { day: "Monday", slots: ["9 AM – 3 PM"] },
  { day: "Tuesday", slots: ["8 AM – 12 PM", "1 – 4 PM"] },
  { day: "Wednesday", slots: ["9 AM – 3 PM"] },
  { day: "Thursday", slots: ["8 AM – 12 PM", "1 – 4 PM"] },
  { day: "Friday", slots: ["9 AM – 3 PM"] },
  { day: "Saturday", slots: ["Closed"] },
  { day: "Sunday", slots: ["Closed"] },
];

const mapsSearchUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${address.street}, ${address.city}, ${address.state} ${address.zip}`
)}&output=embed`;

const directionsUrl =
  "https://share.google/B4GNBU4EeFQ5PUYQ6";

export const Route = createFileRoute("/visit")({
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
  component: VisitPage,
});

function VisitPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link
          to="/"
          className="font-display text-xl font-semibold tracking-tight hover:opacity-80"
        >
          Wadhams Road Animal Clinic
        </Link>
        <Link
          to="/"
          className="inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
        >
          Back home
        </Link>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h1 className="font-display text-3xl font-semibold md:text-4xl">
              Visit the clinic
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              Call ahead to book an appointment or stop by during open hours. We
              look forward to meeting you and your pet.
            </p>

            <address className="mt-8 space-y-2 text-sm not-italic">
              <p className="font-semibold">{address.name}</p>
              <p className="text-muted-foreground">
                {address.street}
                <br />
                {address.city}, {address.state} {address.zip}
              </p>
              <p>
                <a
                  className="hover:text-primary transition-colors"
                  href={`tel:${address.phone.replace(/\D/g, "")}`}
                >
                  {address.phone}
                </a>
              </p>
            </address>

            <div className="mt-8">
              <h2 className="font-display text-xl font-semibold">Hours</h2>
              <dl className="mt-4 max-w-sm space-y-2 text-sm">
                {hours.map(({ day, slots }) => (
                  <div
                    key={day}
                    className="flex justify-between border-b border-border py-2 last:border-0"
                  >
                    <dt className="font-medium">{day}</dt>
                    <dd className="text-muted-foreground">
                      {slots.join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold transition-colors"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              title="Wadhams Road Animal Clinic location"
              src={mapsSearchUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "24rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-full w-full"
            />
          </div>
        </div>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Wadhams Road Animal Clinic
      </footer>
    </div>
  );
}
