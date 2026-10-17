export type Kind =
  | "Headless"
  | "Styled kit"
  | "Copy-paste"
  | "CSS framework"
  | "Motion"
  | "Mobile"
  | "Charts"
  | "Icons";

export type Library = {
  name: string;
  url: string;
  kind: Kind;
  frameworks: string[];
  description: string;
};

// ponytail: static seed index, swap for a fetch() once a real index/API exists
export const libraries: Library[] = [
  { name: "shadcn/ui", url: "https://ui.shadcn.com", kind: "Copy-paste", frameworks: ["React"], description: "Accessible components you copy into your codebase and own. Radix + Tailwind." },
  { name: "Origin UI", url: "https://originui.com", kind: "Copy-paste", frameworks: ["React"], description: "Large set of copy-paste Tailwind components built on shadcn conventions." },
  { name: "Tailwind Plus", url: "https://tailwindcss.com/plus", kind: "Copy-paste", frameworks: ["React", "Vue", "HTML/CSS"], description: "Official Tailwind blocks, templates and app shells by the Tailwind team." },
  { name: "Radix UI", url: "https://www.radix-ui.com", kind: "Headless", frameworks: ["React"], description: "Unstyled, accessible primitives for dialogs, menus, popovers and more." },
  { name: "Headless UI", url: "https://headlessui.com", kind: "Headless", frameworks: ["React", "Vue"], description: "Unstyled, accessible components designed to pair with Tailwind CSS." },
  { name: "Ark UI", url: "https://ark-ui.com", kind: "Headless", frameworks: ["React", "Vue", "Svelte", "Solid"], description: "Headless components powered by Zag.js state machines, across frameworks." },
  { name: "React Aria", url: "https://react-spectrum.adobe.com/react-aria/", kind: "Headless", frameworks: ["React"], description: "Adobe's hooks and components for best-in-class accessibility and i18n." },
  { name: "Base UI", url: "https://base-ui.com", kind: "Headless", frameworks: ["React"], description: "Unstyled components from the creators of Radix, MUI and Floating UI." },
  { name: "Melt UI", url: "https://melt-ui.com", kind: "Headless", frameworks: ["Svelte"], description: "Headless builders for accessible Svelte components." },
  { name: "Bits UI", url: "https://bits-ui.com", kind: "Headless", frameworks: ["Svelte"], description: "Headless, composable Svelte primitives. Powers shadcn-svelte." },
  { name: "MUI", url: "https://mui.com", kind: "Styled kit", frameworks: ["React"], description: "Material Design for React, plus data grid, date pickers and charts." },
  { name: "Chakra UI", url: "https://chakra-ui.com", kind: "Styled kit", frameworks: ["React"], description: "Themeable, accessible components with a style-props API." },
  { name: "Mantine", url: "https://mantine.dev", kind: "Styled kit", frameworks: ["React"], description: "100+ components and 50+ hooks, with forms, dates and notifications." },
  { name: "Ant Design", url: "https://ant.design", kind: "Styled kit", frameworks: ["React"], description: "Enterprise-grade design system with dense data-heavy components." },
  { name: "HeroUI", url: "https://heroui.com", kind: "Styled kit", frameworks: ["React"], description: "Beautiful Tailwind-based components, formerly NextUI." },
  { name: "Fluent UI", url: "https://react.fluentui.dev", kind: "Styled kit", frameworks: ["React", "Web Components"], description: "Microsoft's design system used across Office and Teams." },
  { name: "PrimeVue", url: "https://primevue.org", kind: "Styled kit", frameworks: ["Vue"], description: "90+ Vue components with styled and unstyled modes." },
  { name: "Vuetify", url: "https://vuetifyjs.com", kind: "Styled kit", frameworks: ["Vue"], description: "Material Design component framework for Vue." },
  { name: "Quasar", url: "https://quasar.dev", kind: "Styled kit", frameworks: ["Vue"], description: "Vue framework to ship SPA, SSR, PWA, mobile and desktop from one codebase." },
  { name: "Nuxt UI", url: "https://ui.nuxt.com", kind: "Styled kit", frameworks: ["Vue"], description: "Tailwind-powered components for Nuxt and Vue, built on Reka UI." },
  { name: "Angular Material", url: "https://material.angular.dev", kind: "Styled kit", frameworks: ["Angular"], description: "Official Material Design components for Angular." },
  { name: "PrimeNG", url: "https://primeng.org", kind: "Styled kit", frameworks: ["Angular"], description: "Rich Angular component suite with tables, charts and themes." },
  { name: "Skeleton", url: "https://www.skeleton.dev", kind: "Styled kit", frameworks: ["Svelte", "React"], description: "Adaptive design system built on Tailwind for Svelte and React." },
  { name: "Web Awesome", url: "https://webawesome.com", kind: "Styled kit", frameworks: ["Web Components"], description: "Framework-agnostic web components, successor to Shoelace." },
  { name: "Bootstrap", url: "https://getbootstrap.com", kind: "CSS framework", frameworks: ["HTML/CSS"], description: "The classic responsive grid, utilities and components." },
  { name: "Bulma", url: "https://bulma.io", kind: "CSS framework", frameworks: ["HTML/CSS"], description: "Modern CSS-only framework based on Flexbox. No JavaScript." },
  { name: "daisyUI", url: "https://daisyui.com", kind: "CSS framework", frameworks: ["HTML/CSS"], description: "Tailwind plugin adding semantic component class names and themes." },
  { name: "Flowbite", url: "https://flowbite.com", kind: "CSS framework", frameworks: ["HTML/CSS", "React", "Vue"], description: "Tailwind components with interactive JS, plus Figma kit." },
  { name: "Pico CSS", url: "https://picocss.com", kind: "CSS framework", frameworks: ["HTML/CSS"], description: "Minimal CSS that styles semantic HTML with no classes." },
  { name: "Aceternity UI", url: "https://ui.aceternity.com", kind: "Motion", frameworks: ["React"], description: "Flashy animated components with Tailwind and Motion." },
  { name: "Magic UI", url: "https://magicui.design", kind: "Motion", frameworks: ["React"], description: "Animated components for landing pages, shadcn-compatible." },
  { name: "Motion", url: "https://motion.dev", kind: "Motion", frameworks: ["React", "Vue", "HTML/CSS"], description: "Production animation library, formerly Framer Motion." },
  { name: "React Bits", url: "https://reactbits.dev", kind: "Motion", frameworks: ["React"], description: "Animated text, backgrounds and interactive components." },
  { name: "React Native Paper", url: "https://reactnativepaper.com", kind: "Mobile", frameworks: ["React Native"], description: "Material Design components for React Native." },
  { name: "Tamagui", url: "https://tamagui.dev", kind: "Mobile", frameworks: ["React", "React Native"], description: "Universal UI with an optimizing compiler for web and native." },
  { name: "gluestack-ui", url: "https://gluestack.io", kind: "Mobile", frameworks: ["React", "React Native"], description: "Copy-paste universal components styled with NativeWind." },
  { name: "Flutter Material", url: "https://docs.flutter.dev/ui/widgets/material", kind: "Mobile", frameworks: ["Flutter"], description: "Material 3 widget catalog built into Flutter." },
  { name: "Recharts", url: "https://recharts.org", kind: "Charts", frameworks: ["React"], description: "Composable charting built on React and D3." },
  { name: "Apache ECharts", url: "https://echarts.apache.org", kind: "Charts", frameworks: ["HTML/CSS", "React", "Vue"], description: "Powerful interactive charting and visualization library." },
  { name: "Tremor", url: "https://tremor.so", kind: "Charts", frameworks: ["React"], description: "Dashboard and chart components built on Tailwind." },
  { name: "Lucide", url: "https://lucide.dev", kind: "Icons", frameworks: ["React", "Vue", "Svelte", "Angular", "HTML/CSS"], description: "Clean, consistent open-source icon set. Fork of Feather." },
  { name: "Phosphor", url: "https://phosphoricons.com", kind: "Icons", frameworks: ["React", "Vue", "HTML/CSS"], description: "Flexible icon family in six weights." },
];
