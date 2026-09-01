import { Link } from "@tanstack/react-router";
import clinicLogo from "@/assets/clinic-logo.png";

type SiteHeaderProps = {
  /** Use on dark/image backgrounds */
  variant?: "light" | "dark";
};

export function SiteHeader({ variant = "light" }: SiteHeaderProps) {
  const isLight = variant === "light";
  return (
    <header
      className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-5 ${
        isLight ? "text-background" : "text-foreground"
      }`}
    >
      <Link
        to="/"
        className="flex items-center gap-3 font-display text-xl font-semibold tracking-tight"
      >
        <img
          src={clinicLogo}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 rounded-full bg-background/15 object-contain p-1 backdrop-blur-sm"
        />
        <span className="leading-tight">
          Wadhams Road
          <span className="opacity-70 block text-sm font-normal"> Animal Clinic</span>
        </span>
      </Link>
      <nav className="hidden gap-8 text-sm md:flex">
        <Link to="/about" className="opacity-90 transition-opacity hover:opacity-100 text-shadow-hero">
          About Us
        </Link>
        <Link
          to="/boarding"
          className="opacity-90 transition-opacity hover:opacity-100 text-shadow-hero"
        >
          Boarding
        </Link>
        <Link to="/visit" className="opacity-90 transition-opacity hover:opacity-100 text-shadow-hero">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
