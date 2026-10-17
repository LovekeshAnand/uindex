import Logo from "@/components/Logo";

// TODO: confirm email + profile URLs
const contact = {
  email: "lovekeshanand6@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lovekesh-anand-443138318/" },
    { label: "GitHub", href: "https://github.com/LovekeshAnand" },
    { label: "X", href: "https://x.com/LovekeshAnand07" },
  ],
};

const label = "mb-4 font-mono text-[11px] tracking-wider uppercase opacity-50";

export default function Footer() {
  return (
    <footer id="submit" className="mt-[10vw] overflow-hidden px-4 pb-8 sm:px-12">
      {/* call to action */}
      <div className="relative isolate flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[28px] bg-ink p-[clamp(24px,4vw,56px)] text-white">
        <div className="bg-aura animate-drift absolute -right-[10%] -bottom-[60%] -z-10 aspect-square w-[min(90vw,700px)] opacity-30 blur-3xl" />
        <h3 className="font-display text-[clamp(48px,7vw,110px)] leading-[.82] uppercase">
          Missing<br />a library?
        </h3>
        <a
          href={`mailto:${contact.email}?subject=Add%20a%20library%20to%20Uindex`}
          className="rounded-full bg-lime px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-white"
        >
          Feed the hive →
        </a>
      </div>

      {/* about + contact */}
      <div className="mt-16 grid gap-12 border-t border-lilac pt-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed opacity-60">
            Every UI library on the internet, in one searchable index.
          </p>
        </div>

        <div>
          <p className={label}>Built by</p>
          <a
            href={`mailto:${contact.email}`}
            className="group inline-block text-lg font-semibold tracking-tight break-all sm:text-xl"
          >
            {contact.email}
            <span className="bg-holo mt-1 block h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </div>

        <div>
          <p className={label}>Elsewhere</p>
          <div className="flex flex-wrap gap-2">
            {contact.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener"
                className="group rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                {l.label}
                <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="font-display mt-[4vw] text-center text-[34vw] leading-[.82] text-transparent uppercase select-none [-webkit-text-stroke:1px_var(--color-lilac)]"
      >
        Bzz.
      </p>
      <div className="mt-4 flex justify-between font-mono text-[11px] opacity-50">
        <span>© 2026 Uindex</span>
        <a href="#" className="hover:opacity-100">Back to top ↑</a>
      </div>
    </footer>
  );
}
