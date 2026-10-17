import Explorer from "@/components/Explorer";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { libraries } from "@/data/libraries";

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 z-40 flex items-center gap-6 bg-[#f4f4f7]/80 px-4 py-3.5 backdrop-blur-md sm:px-12">
        <Logo />
        <span className="ml-auto flex items-center gap-2 font-mono text-xs opacity-70 md:ml-0">
          <span className="animate-ping-soft size-2 rounded-full bg-cyan" />
          {libraries.length} libraries indexed
        </span>
        <div className="ml-auto hidden gap-5 text-xs uppercase md:flex">
          {["index", "submit"].map((id) => (
            <a key={id} href={`#${id}`} className="opacity-65 hover:opacity-100">{id}</a>
          ))}
        </div>
      </nav>

      <main>
        <Explorer />
      </main>

      <Footer />
    </>
  );
}
