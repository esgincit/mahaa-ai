export type ProductCategory =
  | "Autonomous Robotics"
  | "Aerial Intelligence"
  | "Smart Machinery"
  | "Harvest Automation"
  | "Water Systems"
  | "AI Platform";

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductMetric = {
  label: string;
  value: string;
};

export type ProductGalleryItem = {
  title: string;
  description: string;
  tone: "green" | "sky" | "amber" | "violet" | "cyan" | "slate";
};

export type Product = {
  slug: string;
  name: string;
  eyebrow: string;
  category: ProductCategory;
  shortDescription: string;
  overview: string;
  heroStatement: string;
  metrics: ProductMetric[];
  features: string[];
  specifications: ProductSpec[];
  aiCapabilities: string[];
  useCases: string[];
  gallery: ProductGalleryItem[];
  relatedSlugs: string[];
  accent: "green" | "sky" | "amber" | "violet" | "cyan" | "lime";
};

export const products: Product[] = [
  {
    slug: "autonomous-rover-x1",
    name: "Autonomous Rover X1",
    eyebrow: "Ground intelligence",
    category: "Autonomous Robotics",
    shortDescription:
      "A rugged rover for scouting, soil sensing, perimeter inspection, and autonomous field intervention.",
    overview:
      "Autonomous Rover X1 gives farm teams a reliable ground robot that can patrol acreage, collect crop and soil intelligence, and execute precision tasks without constant supervision.",
    heroStatement:
      "Continuous field awareness with centimeter-level navigation and adaptive autonomy.",
    metrics: [
      { label: "Runtime", value: "18 hr" },
      { label: "Payload", value: "120 kg" },
      { label: "Navigation", value: "RTK + Vision" },
    ],
    features: [
      "All-terrain drive train with adaptive traction control",
      "Modular payload bay for sprayers, samplers, and sensor arrays",
      "Autonomous patrol, obstacle avoidance, and route optimization",
      "Edge diagnostics with live fleet health telemetry",
    ],
    specifications: [
      { label: "Top speed", value: "18 km/h" },
      { label: "Operating range", value: "42 km per charge" },
      { label: "Ingress rating", value: "IP67 chassis and sensor housing" },
      { label: "Connectivity", value: "5G, LoRaWAN, Wi-Fi mesh, satellite fallback" },
      { label: "Sensors", value: "Stereo vision, LiDAR, RTK-GNSS, multispectral crop camera" },
    ],
    aiCapabilities: [
      "Crop stress detection from multispectral signatures",
      "Obstacle classification for livestock, workers, equipment, and terrain",
      "Autonomous mission replanning when weather or soil conditions change",
      "Predictive maintenance across motor, battery, and payload systems",
    ],
    useCases: [
      "Field scouting and emergence checks",
      "Targeted spraying and nutrient sampling",
      "Security patrols across large farms",
      "Post-storm damage assessment",
    ],
    gallery: [
      { title: "Sensor mast", description: "360-degree perception stack for crop and terrain awareness.", tone: "green" },
      { title: "Payload bay", description: "Swappable tools for scouting, treatment, and sampling missions.", tone: "sky" },
      { title: "Fleet view", description: "Live rover status and route telemetry in MahaaAI Command.", tone: "slate" },
    ],
    relatedSlugs: ["irrigation-bot-i2", "precision-tractor-t9", "ai-command-platform"],
    accent: "green",
  },
  {
    slug: "smart-drone-a1",
    name: "Smart Drone A1",
    eyebrow: "Aerial intelligence",
    category: "Aerial Intelligence",
    shortDescription:
      "An autonomous scouting drone for crop analytics, terrain mapping, pest pressure detection, and rapid survey flights.",
    overview:
      "Smart Drone A1 turns aerial imagery into daily operational insight, helping agronomy and operations teams understand crop health, drainage, pest movement, and field risk quickly.",
    heroStatement:
      "High-resolution crop intelligence from autonomous flights planned by AI.",
    metrics: [
      { label: "Flight time", value: "72 min" },
      { label: "Coverage", value: "900 ha/day" },
      { label: "Imagery", value: "RGB + MS" },
    ],
    features: [
      "Autonomous takeoff, survey, return, and charging workflows",
      "Multispectral and thermal imaging payloads",
      "Precision field stitching and anomaly heatmaps",
      "Weather-aware flight planning with no-fly safeguards",
    ],
    specifications: [
      { label: "Flight endurance", value: "72 minutes per pack" },
      { label: "Camera options", value: "48 MP RGB, five-band multispectral, thermal" },
      { label: "Mapping accuracy", value: "Down to 2.5 cm with ground control" },
      { label: "Wind tolerance", value: "Up to 38 km/h operational" },
      { label: "Docking", value: "Automated charge dock with sealed weather station" },
    ],
    aiCapabilities: [
      "Stand count and canopy vigor analysis",
      "Pest and disease anomaly clustering",
      "Drainage and compaction risk detection",
      "Autonomous flight plan generation from agronomy priorities",
    ],
    useCases: [
      "Daily crop health scouting",
      "Insurance and compliance documentation",
      "Irrigation uniformity analysis",
      "Variable-rate prescription planning",
    ],
    gallery: [
      { title: "Aerial scan", description: "Multispectral sweep with in-flight quality checks.", tone: "sky" },
      { title: "Autonomous dock", description: "Hands-off charging, weather sensing, and data upload.", tone: "cyan" },
      { title: "Crop map", description: "Anomaly layers delivered directly to field teams.", tone: "green" },
    ],
    relatedSlugs: ["autonomous-rover-x1", "ai-command-platform", "irrigation-bot-i2"],
    accent: "sky",
  },
  {
    slug: "precision-tractor-t9",
    name: "Precision Tractor T9",
    eyebrow: "Heavy autonomy",
    category: "Smart Machinery",
    shortDescription:
      "A high-torque autonomous tractor platform for precision tillage, planting, hauling, and implement control.",
    overview:
      "Precision Tractor T9 brings autonomy to the most demanding field operations with intelligent implement control, route execution, and supervised remote operation.",
    heroStatement:
      "Enterprise-grade tractor autonomy for repeatable, measurable field execution.",
    metrics: [
      { label: "Power", value: "320 hp" },
      { label: "Guidance", value: "2 cm" },
      { label: "Implements", value: "ISOBUS" },
    ],
    features: [
      "Autonomous path execution with headland and obstacle intelligence",
      "Smart implement depth, speed, and rate control",
      "Remote supervisor mode for mixed human-autonomous fleets",
      "Operational reporting for cost, fuel, and pass quality",
    ],
    specifications: [
      { label: "Engine power", value: "320 hp hybrid-electric drive assist" },
      { label: "Guidance precision", value: "2 cm RTK repeatability" },
      { label: "Hydraulics", value: "Up to 220 L/min load-sensing flow" },
      { label: "Implement support", value: "ISOBUS Class 3 with autonomous control profiles" },
      { label: "Safety", value: "Redundant braking, geofence lockout, 360-degree perception" },
    ],
    aiCapabilities: [
      "Field pass quality scoring",
      "Autonomous headland turn planning",
      "Soil condition aware speed and torque recommendations",
      "Fuel, implement, and operator efficiency prediction",
    ],
    useCases: [
      "Autonomous tillage and planting",
      "High-precision hauling and logistics",
      "Night operations under remote supervision",
      "Implement optimization for large-acre programs",
    ],
    gallery: [
      { title: "Autonomy kit", description: "Perception modules designed for heavy field equipment.", tone: "amber" },
      { title: "Implement control", description: "Closed-loop adjustments based on field conditions.", tone: "green" },
      { title: "Supervisor console", description: "Remote approval and live pass quality visibility.", tone: "slate" },
    ],
    relatedSlugs: ["harvest-robot-h1", "autonomous-rover-x1", "ai-command-platform"],
    accent: "amber",
  },
  {
    slug: "harvest-robot-h1",
    name: "Harvest Robot H1",
    eyebrow: "Selective harvest",
    category: "Harvest Automation",
    shortDescription:
      "A computer-vision harvest robot for delicate picking, maturity grading, and labor-efficient crop handling.",
    overview:
      "Harvest Robot H1 combines robotic manipulation and crop-specific AI to help producers harvest at the right time, reduce bruising, and stabilize labor-intensive workflows.",
    heroStatement:
      "Selective robotic harvesting that sees, grades, picks, and learns from every pass.",
    metrics: [
      { label: "Arms", value: "6 axis" },
      { label: "Grip force", value: "Adaptive" },
      { label: "Grading", value: "Real time" },
    ],
    features: [
      "Vision-guided picking with crop maturity detection",
      "Adaptive end effectors for delicate produce handling",
      "Harvest bin tracking and grade-level inventory",
      "Continuous model improvement from field outcomes",
    ],
    specifications: [
      { label: "Manipulator", value: "Six-axis collaborative arm with soft end effector" },
      { label: "Throughput", value: "Up to 1,250 picks per hour per module" },
      { label: "Crop support", value: "Tomato, strawberry, pepper, apple, and specialty crops" },
      { label: "Sorting", value: "Size, color, maturity, and defect grading" },
      { label: "Operation", value: "Autonomous row following with supervised exception handling" },
    ],
    aiCapabilities: [
      "Maturity and defect classification",
      "Occluded fruit detection and picking angle planning",
      "Yield forecasting from pre-harvest scans",
      "Harvest timing recommendations by block and variety",
    ],
    useCases: [
      "Selective fresh-market harvesting",
      "Labor constrained specialty crop operations",
      "Packhouse grade forecasting",
      "Quality traceability from row to bin",
    ],
    gallery: [
      { title: "Soft gripper", description: "Pressure-aware picking for delicate crops.", tone: "violet" },
      { title: "Maturity vision", description: "Fruit-level classification before each pick.", tone: "green" },
      { title: "Yield trace", description: "Quality and bin data synced into command dashboards.", tone: "cyan" },
    ],
    relatedSlugs: ["precision-tractor-t9", "smart-drone-a1", "ai-command-platform"],
    accent: "violet",
  },
  {
    slug: "irrigation-bot-i2",
    name: "Irrigation Bot I2",
    eyebrow: "Water autonomy",
    category: "Water Systems",
    shortDescription:
      "A mobile irrigation robot that measures soil moisture, detects leaks, and automates precision water delivery.",
    overview:
      "Irrigation Bot I2 helps teams conserve water and reduce crop stress by combining mobile sensing, irrigation control, and AI recommendations for each zone.",
    heroStatement:
      "Precision irrigation that moves with the field and responds to plant need.",
    metrics: [
      { label: "Savings", value: "34%" },
      { label: "Zones", value: "128" },
      { label: "Sensors", value: "Moisture + EC" },
    ],
    features: [
      "Mobile moisture, salinity, and temperature sampling",
      "Leak and pressure anomaly detection",
      "Zone-level irrigation recommendations",
      "Automated valve and pump orchestration",
    ],
    specifications: [
      { label: "Water control", value: "Valve, pump, pivot, and drip controller integrations" },
      { label: "Sampling", value: "Soil moisture, EC, canopy temperature, flow pressure" },
      { label: "Runtime", value: "14 hours continuous survey operation" },
      { label: "Connectivity", value: "LoRaWAN, cellular, and local gateway support" },
      { label: "Deployment", value: "Standalone robot or paired with Rover X1" },
    ],
    aiCapabilities: [
      "Water stress prediction by crop stage",
      "Leak and clog anomaly detection",
      "Irrigation scheduling based on weather, soil, and plant signals",
      "Water use reporting for compliance and sustainability programs",
    ],
    useCases: [
      "Drip irrigation optimization",
      "Water stress scouting",
      "Leak detection across distributed infrastructure",
      "Regenerative water stewardship reporting",
    ],
    gallery: [
      { title: "Moisture scan", description: "Mobile sensing across zones and soil profiles.", tone: "cyan" },
      { title: "Valve control", description: "Automated water delivery from command schedules.", tone: "sky" },
      { title: "Water map", description: "Stress and savings reports for farm managers.", tone: "green" },
    ],
    relatedSlugs: ["autonomous-rover-x1", "smart-drone-a1", "ai-command-platform"],
    accent: "cyan",
  },
  {
    slug: "ai-command-platform",
    name: "AI Command Platform",
    eyebrow: "Unified control",
    category: "AI Platform",
    shortDescription:
      "The operating layer for MahaaAI fleets, agronomy intelligence, digital twins, and enterprise workflows.",
    overview:
      "AI Command Platform unifies every robot, drone, sensor, field model, and team workflow into one operational command center for modern agricultural enterprises.",
    heroStatement:
      "One intelligent command center for fleets, fields, forecasts, and decisions.",
    metrics: [
      { label: "Fleets", value: "Mixed" },
      { label: "Latency", value: "<90 ms" },
      { label: "Twin sync", value: "Live" },
    ],
    features: [
      "Fleet orchestration for robots, drones, tractors, and irrigation systems",
      "Digital twin view of fields, assets, missions, and constraints",
      "AI copilots for agronomy, operations, maintenance, and leadership",
      "Enterprise APIs for ERP, GIS, and farm management platforms",
    ],
    specifications: [
      { label: "Deployment", value: "Cloud, private cloud, and edge gateway options" },
      { label: "Integrations", value: "ERP, GIS, FMS, SCADA, weather, sensor, and machine data" },
      { label: "Security", value: "SSO, RBAC, audit logs, encrypted telemetry, private models" },
      { label: "Data model", value: "Fields, assets, missions, prescriptions, events, and outcomes" },
      { label: "Developer access", value: "REST, GraphQL, webhooks, and streaming telemetry APIs" },
    ],
    aiCapabilities: [
      "Multi-agent mission planning across product fleets",
      "Decision intelligence for crop, water, labor, and equipment tradeoffs",
      "Digital twin simulation for what-if planning",
      "Natural-language copilots grounded in enterprise farm data",
    ],
    useCases: [
      "Fleet command and dispatch",
      "Executive operations dashboards",
      "Cross-farm agronomy intelligence",
      "Scenario planning and risk management",
    ],
    gallery: [
      { title: "Command center", description: "Live fleet, field, and mission visibility.", tone: "slate" },
      { title: "Digital twin", description: "Spatial operations modeled in real time.", tone: "violet" },
      { title: "AI copilots", description: "Decision support grounded in trusted farm data.", tone: "green" },
    ],
    relatedSlugs: ["autonomous-rover-x1", "smart-drone-a1", "precision-tractor-t9"],
    accent: "lime",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return product.relatedSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((related): related is Product => Boolean(related));
}
