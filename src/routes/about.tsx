import { createFileRoute } from "@tanstack/react-router";
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
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Our Mission: Provide High Quality Care and Exceptional Service in a Safe
            Learning Environment.
          </h2>

          <div className="border-border bg-card mt-8 rounded-2xl border p-7 shadow-soft md:p-10">
            <p className="leading-relaxed text-muted-foreground">
              Wadhams Road Animal Clinic was founded in 1974 by Dr. Joseph Roehl. The
              facility was owned and operated for over twenty years by Dr. Roehl. The
              practice was purchased by Dr. Eric Saunders on May 1, 1996. New
              construction of the Wadhams Road Animal Care Center began April 2006 and
              completed on December 15, 2006. We now offer a full range of veterinary
              care and hospital services, boarding/kenneling, grooming and retail
              services in the roughly 10,000 sq. ft. building. We are proud to be
              members of the Michigan Veterinary Medical Association, American Veterinary
              Medical Association, and Marysville Chamber of Commerce. We take an active
              supportive role in the County 4-H, local school seminars, student career
              days, in clinic student mentoring, and philanthropy activities in the
              area.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm tracking-[0.22em] uppercase text-muted-foreground">
              Our team
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl">
              Meet the staff
            </h2>
            <p className="mt-4 text-muted-foreground">
              The friendly faces behind Wadhams Road Animal Clinic.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Ashley L. Soule'–Neely, LVT",
                bio: "Ashley is a 2008 graduate of the Macomb Community College Veterinary Technician Program. She currently works as a Licensed Veterinary Technician and also as our Practice Manager. She has been with WRAC since 2006 and has a strong passion for continuing education, special interests in feline and equine medicine, and enjoys keeping clients informed on how to best care for their furry family members. Her own list of animals includes dogs, cats and horses!",
              },
              {
                name: "Catherine Musu, LVT",
                bio: "Catherine is a 1995 graduate of Macomb Community College Veterinary Technician Program, and has been practicing with Dr. Saunders at WRAC since 2005. Catherine enjoys educating clients, especially with new kittens and puppies. In her free time, she enjoys spending time with her family and pets.",
              },
              {
                name: "Cindi Pirrone, LVT",
                bio: "Cindi is a 2015 graduate of Macomb Community College Veterinary Technician Program, and immediately started her veterinary technician career at WRAC.",
              },
              {
                name: "Glenn McDonald, LVT",
                bio: "Glenn is a 2019 graduate of the Macomb Community College Veterinary Technician Program, and after performing his internship at our office, stayed on as one of our licensed technicians. Glenn became very interested in the large animal aspect of our business and frequently travels with Dr. Saunders to our clients' farms. He enjoys spending his free time outdoors with his family and pets.",
              },
              {
                name: "Olivia Johnson, Groomer & Assistant",
                bio: "As our most recent addition, Olivia joined our office in 2021! Olivia has her grooming certificate from The Academy of Dog Grooming. As much as Olivia loves grooming, she also has an interest in the medical aspect of pet care. Her dual role as groomer and assistant allows her to explore both of her passions with pets! In her free time, Olivia likes to travel and spend time with friends, family and animals.",
              },
              {
                name: "Hallie Miller, Receptionist",
                bio: "Hallie started her employment in the summer of 2016 after finishing her Veterinary Assistance internship with us. She has worked at our office as an assistant for both large and small animals and has transitioned to our head receptionist. Hallie is currently working to obtain a degree in business and accounting and in her free time, she enjoys hiking, camping and spending time with her Weimaraner and English Setter.",
              },
              {
                name: "Dr. Eric Saunders",
                bio: "Dr. Saunders is a two time graduate of The Ohio State University, Undergraduate studies in Animal Science and Nutrition and the College of Veterinary Medicine. He continued his learning in Pennsylvania while working for the largest single breed horse farm in the world, Hanover Shoe Farms. There, although very educational, he learned corporate employment was just not what it promised to be. Then in 1996, he bought a small animal hospital in Smiths Creek, MI and has been rocking it ever since. He still loves large animal medicine and surgery. Dr. Saunders is now the longest standing large and farm animal veterinarian in the county but is still less than 7.5% of his case load. His Family is at his core, having a recent celebration of his 25th Anniversary with his wife Mindy, they have two young adult boys which also keep them active and involved.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="border-border bg-card rounded-2xl border p-7 shadow-soft"
              >
                <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
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
