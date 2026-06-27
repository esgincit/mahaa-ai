export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const navigation: NavItem[] = [
  { label: "Products", href: "/products", description: "Mission-ready systems for field operations." },
  { label: "Research", href: "/research", description: "Applied intelligence and simulation." },
  { label: "Technology", href: "/technology", description: "The platform architecture behind the experience." },
  { label: "Solutions", href: "/solutions", description: "Tailored outcomes for industry teams." },
  { label: "Industries", href: "/industries", description: "Sector-specific deployments and expertise." },
  { label: "About", href: "/about", description: "The team and the story behind MahaaAI." },
  { label: "Blog", href: "/blog", description: "Perspectives from the field." },
  { label: "Careers", href: "/careers", description: "Join the team building the future." },
  { label: "Contact", href: "/contact", description: "Start a conversation." },
];
