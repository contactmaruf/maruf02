import { Project, ServiceItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'aura-studio',
    title: 'Aura Studio — Architectural Canvas',
    category: 'Interactive Website',
    badge: 'Concept Project',
    shortDescription: 'Minimalist editorial web experience for a high-end architectural and spatial design studio.',
    fullDescription: 'A bespoke digital exhibition space designed to celebrate physical architecture through digital medium. Features fluid typographic scales, smooth section reveals, an interactive dimensional layout grid, and high-performance WebGL asset transitions without layout shift.',
    image: '/src/assets/images/portfolio_interactive_web_1792381056763.jpg',
    aspectRatio: '4/3',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'WebGL', 'Intersection Observer API'],
    deliverables: ['Custom Web Architecture', 'Design System & Typography', 'Responsive Breakpoint Matrix', 'Micro-Interactions'],
    features: [
      'Sub-200ms interaction feedback and smooth easing transitions',
      'Dynamic typography that adapts gracefully across viewport sizes',
      'Zero-shift media loading with measured aspect-ratio containers',
      'Editorial monochrome aesthetic paired with precise grid alignments'
    ],
    year: '2025'
  },
  {
    id: 'synthetica-engine',
    title: 'Synthetica — Generative Brand Engine',
    category: 'AI Creative Experiment',
    badge: 'Demo',
    shortDescription: 'Algorithmic design tool synthesizing brand palettes and fluid vector ribbon patterns.',
    fullDescription: 'An interactive exploration into how creative practitioners can steer machine-learning models to produce coherent brand identity systems. Synthetica translates brand emotional prompts into generative vector geometries, harmonic color ramps, and exportable SVG assets in real-time.',
    image: '/src/assets/images/portfolio_ai_experiment_1792381056981.jpg',
    aspectRatio: '4/3',
    technologies: ['TypeScript', 'Canvas API', 'Mathematical Vector Physics', 'React 19', 'CSS Shaders'],
    deliverables: ['Generative Algorithm', 'Interactive Parameter GUI', 'Vector Export Pipeline', 'Color Harmony Matrix'],
    features: [
      'Mathematical ribbon curves driven by parametric Bezier splines',
      'High-contrast crimson and obsidian color formulation',
      'Instant client-side canvas generation without backend latency',
      'Interactive seed randomizer allowing repeatable visual iterations'
    ],
    year: '2025'
  },
  {
    id: 'kinetic-flow',
    title: 'Kinetic Flow — Spatial Brand Motion',
    category: 'Motion Graphics Project',
    badge: 'Concept Project',
    shortDescription: '3D kinetic choreography exploring fluid tension, sculptural ribbon curves, and brand rhythm.',
    fullDescription: 'A multi-channel motion language engineered for digital product launches and experiential exhibitions. Balances heavy obsidian ribbons with dynamic crimson arcs, creating rhythmic visual loops that command attention while preserving clarity and poise.',
    image: '/src/assets/images/portfolio_motion_graphics_1792381056815.jpg',
    aspectRatio: '4/3',
    technologies: ['Cinema 4D', 'After Effects', 'Lottie / JSON', 'CSS Transforms', 'Web Video Optimization'],
    deliverables: ['Brand Motion Identity', '60 FPS UI Micro-Loops', 'Video Broadcast Package', 'Motion Design Guidelines'],
    features: [
      'Engineered specifically for 60fps web performance and mobile rendering',
      'Consistent spatial physics across desktop and mobile screens',
      'Balanced contrast engineered for dark and light surfaces',
      'Micro-delays designed to enhance perceived responsiveness'
    ],
    year: '2024'
  },
  {
    id: 'voxel-horizon',
    title: 'Voxel Horizon — Interactive Editorial Platform',
    category: 'Digital Brand Experience',
    badge: 'Demo',
    shortDescription: 'A luxury editorial publication showcasing contemporary culture, industrial design, and technology.',
    fullDescription: 'A cross-disciplinary brand packaging and digital publication created to establish a cohesive physical-to-digital narrative. Incorporates structured serif-sans typographic hierarchy, tactile digital paper textures, and responsive reading modes.',
    image: '/src/assets/images/portfolio_brand_experience_1792381057111.jpg',
    aspectRatio: '4/3',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'CSS Print Media', 'Accessibility WCAG AA'],
    deliverables: ['Brand Identity Book', 'Digital Editorial Platform', 'Typography Hierarchy', 'Packaging Mockups'],
    features: [
      'Editorial layout structure informed by Swiss modernist print traditions',
      'Seamless transition between digital article reading and physical brand assets',
      'Strict 4.5:1 WCAG AA contrast compliance across all text surfaces',
      'Custom ribbon bookmarks and tactile interaction states'
    ],
    year: '2024'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Design & Development',
    shortDescription: 'Responsive, accessible, modern websites built with exceptional performance.',
    fullDescription: 'Crafting tailor-made digital storefronts, corporate landing platforms, and modern web applications that merge striking editorial aesthetics with robust engineering principles.',
    iconName: 'layout',
    deliverables: ['High-Performance SPAs', 'Accessible UI Systems (WCAG AA)', 'Modern Front-end Architecture', 'Smooth Micro-Interactions']
  },
  {
    id: 'ai-solutions',
    number: '02',
    title: 'AI-Powered Solutions',
    shortDescription: 'Practical AI experiences, automation, and intelligent digital tools for real workflows.',
    fullDescription: 'Integrating intuitive machine intelligence into user workflows — from generative content pipelines and prompt engineering to custom interactive algorithmic tools.',
    iconName: 'cpu',
    deliverables: ['Custom AI Workflows', 'Generative Media Interfaces', 'Interactive Prompt Systems', 'Smart Tool Integration']
  },
  {
    id: 'motion-graphics',
    number: '03',
    title: 'Motion Graphics & Video',
    shortDescription: 'Engaging visual storytelling, fluid animation, and promotional content.',
    fullDescription: 'Bringing products and concepts to life through intentional motion choreography, 3D visual loops, UI animation tokens, and cinematic video assets.',
    iconName: 'play',
    deliverables: ['Kinetic Typography', '3D Visual Showcases', 'UI Interaction Choreography', 'Promotional Video Reels']
  },
  {
    id: 'branding-content',
    number: '04',
    title: 'Creative Content & Branding',
    shortDescription: 'Digital creative assets, visual communication, and memorable brand presentation.',
    fullDescription: 'Establishing strong, cohesive visual identities through deliberate typography systems, color strategies, editorial layouts, and bespoke digital collateral.',
    iconName: 'palette',
    deliverables: ['Brand Identity Systems', 'Typography & Palette Strategy', 'Digital Art Direction', 'Editorial Content Design']
  }
];

export const ABOUT_VALUES = [
  {
    title: 'Creative by Design',
    description: 'Every layout, typography pairing, and visual choice is intentional. We reject generic templates in favor of authentic, human-crafted design with purpose.'
  },
  {
    title: 'Built with Technology',
    description: 'Underneath every refined surface is clean, modern code. We prioritize lightweight architectures, accessibility, responsive rigor, and smooth performance.'
  },
  {
    title: 'Focused on Impact',
    description: 'Design and engineering must deliver tangible value. We build digital experiences that communicate clearly, engage audiences, and stand the test of time.'
  }
];
