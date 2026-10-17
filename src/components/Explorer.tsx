"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { libraries, type Kind } from "@/data/libraries";

const frameworks = [...new Set(libraries.flatMap((l) => l.frameworks))];
const kinds = [...new Set(libraries.map((l) => l.kind))];
const hints = ["date picker", "headless svelte", "animated", "data grid", "react native", "icons"];

const chip =
  "cursor-pointer rounded-full border px-3.5 py-2 text-xs transition-colors aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white border-lilac bg-white/60 hover:border-ink";

// track the pointer as CSS vars so effects stay in CSS
const trackPointer = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${((e.clientX - r.left) / r.width) * 100}%`);
  e.currentTarget.style.setProperty("--y", `${((e.clientY - r.top) / r.height) * 100}%`);
};

export default function Explorer() {
  const [q, setQ] = useState("");
  const [fw, setFw] = useState<string | null>(null);
  const [kind, setKind] = useState<Kind | null>(null);
  const [hint, setHint] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const index = useRef<HTMLElement>(null);

  // deep links: /?q=… (also powers the sitelinks search box in JSON-LD)
  useEffect(() => {
    const initial = new URLSearchParams(location.search).get("q");
    // read after hydration so server and client HTML match
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (initial) setQ(initial);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== input.current) {
        e.preventDefault();
        input.current?.focus();
      }
    };
    const t = setInterval(() => setHint((h) => (h + 1) % hints.length), 2400);
    addEventListener("keydown", onKey);
    return () => {
      removeEventListener("keydown", onKey);
      clearInterval(t);
    };
  }, []);

  const hits = useMemo(() => {
    const term = q.trim().toLowerCase();
    return libraries.filter(
      (l) =>
        (!fw || l.frameworks.includes(fw)) &&
        (!kind || l.kind === kind) &&
        (!term ||
          `${l.name} ${l.kind} ${l.frameworks.join(" ")} ${l.description}`.toLowerCase().includes(term)),
    );
  }, [q, fw, kind]);

  const reset = () => {
    setQ("");
    setFw(null);
    setKind(null);
  };

  return (
    <>
      {/* ---------- hero ---------- */}
      <header
        onMouseMove={trackPointer}
        className="relative isolate grid content-center pt-[50vw] md:min-h-[min(calc(100svh-64px),920px)] overflow-hidden px-4 pb-16 md:pt-[4vw] [--x:70%] [--y:30%] sm:px-12"
      >
        {/* honeycomb texture, revealed around the cursor */}
        <div className="bg-hexgrid absolute inset-0 -z-10 [mask-image:radial-gradient(40vw_30vw_at_var(--x)_var(--y),#000,transparent)]" />
        {/* aura behind the bee */}
        <div className="bg-aura animate-drift absolute top-[2%] -right-[10%] -z-10 aspect-square w-[min(110vw,1000px)] opacity-35 blur-3xl md:top-1/2 md:-right-[4%] md:-translate-y-1/2 md:opacity-45" />
        {/* cool floor light */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-linear-to-t from-[#dfe6ff]/70 to-transparent" />

        <Image
          src="/bee.png"
          alt=""
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 768px) 80vw, 56vw"
          className="animate-hover pointer-events-none absolute top-[4%] -right-[12vw] -z-[5] w-[80vw] drop-shadow-[0_50px_50px_rgb(59_91_255/.25)] md:top-1/2 md:right-[1vw] md:w-[min(56vw,960px)] md:-translate-y-1/2"
        />

        <h1 className="font-display text-[clamp(88px,17vw,280px)] leading-[.82] uppercase">
          Every <span className="bg-holo animate-shimmer bg-clip-text text-transparent">UI</span>
          <span className="animate-sheen block w-fit bg-[linear-gradient(110deg,#0d0f2b_42%,#5b74ff_48%,#38e1f0_50%,#0d0f2b_56%)] bg-size-[250%_100%] bg-clip-text text-transparent">
            Indexed.
          </span>
          <span className="sr-only"> — search UI component libraries for React, Vue, Svelte, Angular and more</span>
        </h1>

        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            index.current?.scrollIntoView();
          }}
          className="group relative mt-[4vw] max-w-150"
        >
          <div className="bg-holo animate-shimmer absolute -inset-1 rounded-[22px] opacity-30 blur-xl transition-opacity duration-500 group-focus-within:opacity-80" />
          <div className="relative flex items-center gap-3 rounded-2xl bg-ink p-2 pl-5 text-white shadow-2xl ring-1 ring-white/10">
            <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-cyan" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" strokeLinecap="round" />
            </svg>
            <input
              ref={input}
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search UI libraries"
              placeholder={`Try “${hints[hint]}”`}
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent py-3 text-lg outline-none placeholder:text-white/40 [&::-webkit-search-cancel-button]:invert"
            />
            <kbd className="hidden rounded-md border border-white/20 px-2 py-1 font-mono text-[11px] text-white/60 sm:block">/</kbd>
            <button
              aria-label="Search"
              className="grid size-12 shrink-0 cursor-pointer place-items-center rounded-xl bg-lime text-ink transition-transform hover:scale-105 hover:bg-cyan"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </form>

        <div className="relative mt-5 flex max-w-150 flex-wrap gap-2" aria-label="Filter by framework">
          {frameworks.map((f) => (
            <button key={f} aria-pressed={fw === f} onClick={() => setFw(fw === f ? null : f)} className={chip}>
              {f}
            </button>
          ))}
        </div>
      </header>

      {/* ---------- ticker ---------- */}
      <div aria-hidden className="overflow-hidden bg-ink text-white">
        <div className="animate-slide flex w-max">
          {[...libraries, ...libraries].map((l, i) => (
            <span
              key={i}
              className="font-display px-5 py-2.5 text-[34px] whitespace-nowrap uppercase [&:nth-child(3n)]:text-cyan [&:nth-child(5n)]:text-lime"
            >
              {l.name} ✦
            </span>
          ))}
        </div>
      </div>

      {/* ---------- index ---------- */}
      <section ref={index} id="index" className="scroll-mt-16 px-4 pt-[7vw] sm:px-12">
        <h2 className="font-display mb-8 text-[clamp(56px,9vw,140px)] leading-[.82] uppercase">
          The <span className="bg-holo animate-shimmer bg-clip-text text-transparent">Index</span>
        </h2>

        {/* kinds as tabs — sticky so filtering is always one tap away */}
        <div className="sticky top-16 z-30 -mx-4 mb-6 overflow-x-auto bg-[#f4f4f7]/85 px-4 backdrop-blur-md [scrollbar-width:none] sm:-mx-12 sm:px-12">
          <div className="flex w-max gap-1 border-b border-lilac">
            {[null, ...kinds].map((k) => (
              <button
                key={k ?? "all"}
                aria-pressed={kind === k}
                onClick={() => setKind(k)}
                className="group relative cursor-pointer px-4 py-4 text-[15px] font-medium whitespace-nowrap text-ink/50 transition-colors hover:text-ink aria-pressed:text-ink"
              >
                {k ?? "All"}
                <sup className="ml-1 font-mono text-[10px] opacity-60">
                  {k ? libraries.filter((l) => l.kind === k).length : libraries.length}
                </sup>
                <span className="bg-holo absolute inset-x-3 -bottom-px h-[3px] scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-50 group-aria-pressed:scale-x-100" />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
          <span className="font-display text-[40px] leading-none">{hits.length}</span>
          <span className="font-mono">matches</span>
          {fw && <span className="rounded-full bg-ink px-3 py-1 text-white">{fw}</span>}
                    <button onClick={reset} className={`${chip} ml-auto`}>
            Reset ✕
          </button>
        </div>

        <ul className="border-t-2 border-ink">
          {hits.map((l, i) => (
            <li key={l.name}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener"
                className="group grid grid-cols-[28px_1fr_24px] items-center gap-4 border-b border-lilac px-2 py-5 transition-all duration-300 hover:bg-white hover:pl-6 md:grid-cols-[40px_1.1fr_1.6fr_1fr_24px]"
              >
                <span className="font-mono text-xs opacity-45">{String(i + 1).padStart(3, "0")}</span>
                <span>
                  <h3 className="text-[clamp(18px,1.6vw,22px)] font-semibold tracking-tight">{l.name}</h3>
                  <span className="mt-1 block text-[13px] opacity-60 md:hidden">{l.description}</span>
                </span>
                <span className="hidden text-sm leading-relaxed opacity-70 md:block">{l.description}</span>
                <span className="hidden flex-wrap gap-1.5 md:flex">
                  {l.frameworks.map((f) => (
                    <span key={f} className="rounded-full border border-lilac px-2 py-0.5 text-[11px]">
                      {f}
                    </span>
                  ))}
                </span>
                <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </li>
          ))}
        </ul>

        {!hits.length && (
          <div className="py-16 text-center">
            <p className="font-display text-7xl uppercase">Nothing buzzing</p>
            <p className="mt-2 opacity-60">Try another word.</p>
          </div>
        )}
      </section>
    </>
  );
}
