import { Link } from "@tanstack/react-router";

type SiteHeaderProps = {
  /** Use on dark/image backgrounds */
  variant?: "light" | "dark";
};

export function SiteHeader({ variant = "light" }: SiteHeaderProps) {
  const isLight = variant === "light";
  return (
    <header
      className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-6 ${
        isLight ? "text-background" : "text-foreground"
      }`}
    >
      <Link to="/" className="font-display text-xl font-semibold tracking-tight">
        Wadhams Road
        <span className="opacity-70"> Animal Clinic</span>
      </Link>
      <nav className="hidden gap-8 text-sm md:flex">
        <Link
          to="/boarding"
          className="opacity-80 transition-opacity hover:opacity-100"
        >
          Boarding
        </Link>
        <Link to="/visit" className="opacity-80 transition-opacity hover:opacity-100">
          Visit
        </Link>
      </nav>
    </header>
  );
}
