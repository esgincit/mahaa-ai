export type NavHighlight = {
  label: string;
  href: string;
  blurb: string;
};

export type NavItem = {
  label: string;
  href: string;
  description: string;
  highlights: NavHighlight[];
};

export const navigation: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    description: "Mission-ready systems for field operations.",
    highlights: [
      { label: "Robotics OS", href: "/products/robotics-os", blurb: "Coordinate fleets with adaptive orchestration." },
      { label: "AI Workbench", href: "/products/ai-workbench", blurb: "Turn field data into rapid decisions." },
    ],
  },
  {
    label: "Research",
    href: "/research",
    description: "Applied intelligence and simulation built for rigorous teams.",
    highlights: [
      { label: "Knowledge Graph", href: "/research/knowledge-graph", blurb: "Connect experiments, evidence, and outcomes." },
      { label: "Simulation Lab", href: "/research/simulation-lab", blurb: "Model complex environments before deployment." },
    ],
  },
  {
    label: "Technology",
    href: "/technology",
    description: "The platform architecture behind the MahaaAI experience.",
    highlights: [
      { label: "Digital Twin", href: "/technology/digital-twin", blurb: "Visualize field and facility operations in real time." },
      { label: "Edge Intelligence", href: "/technology/edge", blurb: "Deploy decisioning where actions happen." },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    description: "Tailored outcomes for growth, operations, and innovation.",
    highlights: [
      { label: "Operational AI", href: "/solutions/operational-ai", blurb: "Make complex workflows measurable and adaptive." },
      { label: "Infrastructure Modernization", href: "/solutions/infrastructure", blurb: "Unify control, data, and trust." },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Sector-specific deployments and expertise for advanced operations.",
    highlights: [
      { label: "Agriculture", href: "/industries/agriculture", blurb: "Optimize field performance with autonomy and insight." },
      { label: "Energy", href: "/industries/energy", blurb: "Support mission-critical environments with context-aware intelligence." },
    ],
  },
  {
    label: "About",
    href: "/about",
    description: "The story and team behind MahaaAI.",
    highlights: [
      { label: "Our Story", href: "/about/story", blurb: "Learn how MahaaAI was built." },
      { label: "Leadership", href: "/about/leadership", blurb: "Meet the teams shaping the platform." },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Perspectives from the field on robotics and intelligent systems.",
    highlights: [
      { label: "Insights", href: "/blog/insights", blurb: "Read the latest field notes." },
      { label: "Case Studies", href: "/blog/case-studies", blurb: "See how the platform performs in production." },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    description: "Join the team building the future of applied intelligence.",
    highlights: [
      { label: "Open Roles", href: "/careers/open-roles", blurb: "Find the right fit for your craft." },
      { label: "Culture", href: "/careers/culture", blurb: "Discover what it means to build with MahaaAI." },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Start a conversation with our team.",
    highlights: [
      { label: "Book a Demo", href: "/contact/demo", blurb: "See the platform in action." },
      { label: "Support", href: "/contact/support", blurb: "Reach our specialists for rollout needs." },
    ],
  },
];
