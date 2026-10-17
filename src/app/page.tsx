import Explorer from "@/components/Explorer";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { libraries } from "@/data/libraries";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#author` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${site.url}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#author`,
      name: site.author.name,
      url: site.author.github,
      sameAs: [site.author.github, site.repo],
    },
    {
      "@type": "ItemList",
      "@id": `${site.url}/#index`,
      name: "UI libraries indexed by Uindex",
      numberOfItems: libraries.length,
      itemListElement: libraries.map((l, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: l.name,
          url: l.url,
          description: l.description,
          applicationCategory: "DeveloperApplication",
          applicationSubCategory: l.kind,
          operatingSystem: "Web",
          keywords: l.frameworks.join(", "),
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // escape "<" so library text can never close the script tag
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <nav aria-label="Primary" className="sticky top-0 z-40 flex items-center gap-6 bg-[#f4f4f7]/80 px-4 py-3.5 backdrop-blur-md sm:px-12">
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
