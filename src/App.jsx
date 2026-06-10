import { useEffect, useRef, useState } from 'react'
// Footer Redesign Update - Triggering HMR
import './App.css'
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'

const services = [
  {
    id: 'frontend',
    icon: 'FE',
    title: 'Front-End Development',
    desc: 'Our development is pixel perfect in all ways, blending speed, motion, and responsive precision.',
    summary:
      'We build polished front-end systems that look sharp, move smoothly, and stay dependable across devices.',
    features: ['React and modern SPA architecture', 'Responsive UI systems', 'Animation and interaction design'],
    deliverables: ['Landing pages', 'Design systems', 'Component libraries'],
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind'],
    spotlight: 'Interfaces built for fast loading, smoother transitions, and stronger first impressions.',
    outcomes: ['Faster UI delivery', 'Cleaner design handoff', 'Better mobile consistency'],
    pageDescription: 'Front-end systems designed to feel premium, perform quickly, and support better conversion from the first screen onward.',
    benefits: ['Pixel-accurate responsive UI', 'Micro-interactions that feel intentional', 'Developer-friendly component structure'],
    industries: ['SaaS platforms', 'AI products', 'Marketing websites'],
  },
  {
    id: 'backend',
    icon: 'BE',
    title: 'Back-End Development',
    desc: 'We enhance customer experiences for success with secure, scalable, and maintainable server-side systems.',
    summary:
      'From API architecture to database design, we create back-end foundations that support product growth.',
    features: ['API design and integration', 'Authentication and permissions', 'Database modeling'],
    deliverables: ['Node and Python services', 'Admin systems', 'Cloud-ready deployments'],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    spotlight: 'Service layers designed for scale, reliability, and operational clarity.',
    outcomes: ['Stable data flows', 'Secure access control', 'Scalable system architecture'],
    pageDescription: 'Back-end foundations engineered for secure data handling, API performance, and long-term product maintainability.',
    benefits: ['Scalable API architecture', 'Robust database planning', 'Clear service separation'],
    industries: ['Internal platforms', 'Client-server apps', 'Enterprise systems'],
  },
  {
    id: 'arvr',
    icon: 'XR',
    title: 'AR / VR Development',
    desc: 'We create vibrant, intuitive, and immersive experiences for next-generation digital platforms.',
    summary:
      'Our immersive builds focus on clarity, interaction fidelity, and memorable storytelling for spatial products.',
    features: ['Immersive interaction flows', 'Unity production support', '3D scene optimization'],
    deliverables: ['Experience prototypes', 'VR walkthroughs', 'AR product demos'],
    stack: ['Unity', 'Blender', 'WebXR', 'C#'],
    spotlight: 'Immersive product experiences with better realism, interaction, and story flow.',
    outcomes: ['More engaging demos', 'Clearer product showcases', 'Interactive brand experiences'],
    pageDescription: 'AR and VR experiences built to help products feel more memorable, more interactive, and easier to understand.',
    benefits: ['Interactive storytelling', 'Spatial product demonstrations', 'High-clarity immersive UX'],
    industries: ['Real estate', 'Training systems', 'Product marketing'],
  },
  {
    id: 'uiux',
    icon: 'UX',
    title: 'UI/UX Design',
    desc: 'We turn digital products into user experiences that feel premium, intuitive, and conversion-focused.',
    summary:
      'Design direction, wireframes, high-fidelity screens, and thoughtful systems that help products communicate clearly.',
    features: ['UX strategy and flows', 'High-fidelity UI design', 'Prototype and design handoff'],
    deliverables: ['Wireframes', 'Figma systems', 'Interactive prototypes'],
    stack: ['Figma', 'Framer', 'Design Systems', 'Prototyping'],
    spotlight: 'Premium interface direction that turns complex products into clearer user journeys.',
    outcomes: ['Stronger visual trust', 'Lower friction', 'Higher conversion potential'],
    pageDescription: 'UI and UX direction focused on cleaner structure, stronger trust, and interfaces that guide users naturally.',
    benefits: ['Research-informed user flows', 'Design systems for scale', 'Premium visual polish'],
    industries: ['Startups', 'Enterprise tools', 'Consumer apps'],
  },
  {
    id: 'ai-ml',
    icon: 'AI',
    title: 'AI-ML Development',
    desc: 'Custom AI and ML solutions designed to solve real business challenges and deliver measurable ROI.',
    summary:
      'We design AI-powered workflows, assistants, and intelligence layers that fit practical business use cases.',
    features: ['LLM workflows and assistants', 'Prediction and classification pipelines', 'AI feature integration'],
    deliverables: ['Internal copilots', 'Vision workflows', 'Decision automation'],
    stack: ['OpenAI APIs', 'Python', 'LangChain', 'Vector Search'],
    spotlight: 'AI features shaped around real workflows instead of generic demos.',
    outcomes: ['Automation opportunities', 'Better decisions', 'New product intelligence'],
    pageDescription: 'AI solutions connected to real workflows so teams can automate work, unlock insights, and build smarter products.',
    benefits: ['LLM workflow design', 'Custom model integration', 'Practical automation layers'],
    industries: ['Operations', 'Support', 'Analytics products'],
  },
  {
    id: 'cloud',
    icon: 'CL',
    title: 'Cloud Services',
    desc: 'Scalable cloud infrastructure that keeps your product fast, secure, and ready for global traffic.',
    summary:
      'We help teams deploy with confidence through resilient infrastructure, observability, and cost-aware scaling.',
    features: ['Cloud architecture', 'CI/CD and deployment automation', 'Monitoring and reliability'],
    deliverables: ['AWS setup', 'Containerized apps', 'Operational runbooks'],
    stack: ['AWS', 'Docker', 'GitHub Actions', 'Kubernetes'],
    spotlight: 'Cloud infrastructure that is easier to manage, monitor, and scale.',
    outcomes: ['Safer releases', 'Better uptime', 'Lower operational friction'],
    pageDescription: 'Cloud services that keep systems reliable under growth while making releases and maintenance easier for teams.',
    benefits: ['Better deployment confidence', 'Infrastructure visibility', 'Resilient scaling patterns'],
    industries: ['SaaS', 'Marketplaces', 'High-traffic apps'],
  },
  {
    id: 'game',
    icon: 'GM',
    title: 'Game Development',
    desc: 'We do not just develop games, we build experiences with strong mechanics, visual clarity, and flow.',
    summary:
      'Game production support across gameplay systems, UI, world building, and feature prototyping.',
    features: ['Gameplay prototyping', 'UI and HUD systems', 'Art and interaction support'],
    deliverables: ['Playable demos', 'Level systems', 'Feature prototypes'],
    stack: ['Unity', 'Unreal', 'C#', 'Game UI'],
    spotlight: 'Game experiences with stronger mechanics, cleaner UX, and tighter iteration cycles.',
    outcomes: ['Faster prototyping', 'Better player flow', 'More polished interactions'],
    pageDescription: 'Game development support spanning mechanics, interface systems, visual feedback, and stronger prototyping speed.',
    benefits: ['Gameplay system design', 'UI and HUD refinement', 'Rapid iteration support'],
    industries: ['Indie studios', 'Interactive media', 'Gamified products'],
  },
  {
    id: 'staff',
    icon: 'ST',
    title: 'Staff Augmentation',
    desc: 'Expert developers and IT management to build your perfect project team in your timezone.',
    summary:
      'Flexible hiring support for startups and established teams that need experienced engineering capacity fast.',
    features: ['Dedicated developers', 'Timezone-aligned collaboration', 'Long-term delivery support'],
    deliverables: ['Embedded engineers', 'Pod extensions', 'Technical leadership support'],
    stack: ['React', 'Node.js', 'Python', 'QA'],
    spotlight: 'Skilled support that integrates with your team without slowing delivery.',
    outcomes: ['Faster hiring ramp', 'More delivery bandwidth', 'Lower execution risk'],
    pageDescription: 'Dedicated experts who can join your workflow quickly and help your team deliver without long hiring cycles.',
    benefits: ['Timezone-aligned talent', 'Flexible scaling', 'Reliable ongoing collaboration'],
    industries: ['Startups', 'Agencies', 'Growing product teams'],
  },
  {
    id: 'qa',
    icon: 'QA',
    title: 'QA Testing & Automation',
    desc: 'Seamless testing and flawless performance with automated efficiency across critical product flows.',
    summary:
      'We reduce regression risk through structured QA, automation coverage, and repeatable release confidence.',
    features: ['Manual QA planning', 'Automation suites', 'Cross-device testing'],
    deliverables: ['Test plans', 'Regression suites', 'Release verification'],
    stack: ['Playwright', 'Cypress', 'Postman', 'CI Pipelines'],
    spotlight: 'Quality systems that make releases safer and less stressful.',
    outcomes: ['Fewer regressions', 'Faster verification', 'Higher release confidence'],
    pageDescription: 'QA systems that reduce release risk through structured testing, automation coverage, and dependable checks.',
    benefits: ['Regression protection', 'Automation coverage', 'Cross-platform confidence'],
    industries: ['Web apps', 'Mobile products', 'Enterprise software'],
  },
  {
    id: 'enterprise',
    icon: 'ES',
    title: 'Enterprise Software',
    desc: 'Scalable solutions designed to drive business growth, innovation, and operational efficiency.',
    summary:
      'Large-scale internal platforms and enterprise workflows designed for usability, controls, and reliability.',
    features: ['Business workflow design', 'Role-based systems', 'Integration-heavy architecture'],
    deliverables: ['ERP modules', 'Operations dashboards', 'Internal tooling'],
    stack: ['.NET', 'Azure', 'SQL Server', 'Enterprise APIs'],
    spotlight: 'Enterprise systems built for structure, control, and long-term maintainability.',
    outcomes: ['Operational efficiency', 'Centralized workflows', 'Improved reporting visibility'],
    pageDescription: 'Enterprise software built around business workflows, permissions, integrations, and long-term operational stability.',
    benefits: ['Workflow clarity', 'Role-based access systems', 'System integration planning'],
    industries: ['Manufacturing', 'Operations', 'Corporate platforms'],
  },
  {
    id: 'dataviz',
    icon: 'DV',
    title: 'Data Visualization',
    desc: 'Transforming complex data into clear, actionable business insights with strong visual storytelling.',
    summary:
      'We turn dense datasets into understandable dashboards and decision-making tools people actually use.',
    features: ['Dashboard UX', 'Data storytelling', 'Visual hierarchy systems'],
    deliverables: ['Executive dashboards', 'Analytics interfaces', 'Report visualizations'],
    stack: ['D3', 'React', 'Charts', 'BI Integrations'],
    spotlight: 'Clearer dashboards that help teams understand patterns faster.',
    outcomes: ['Faster analysis', 'Better insight delivery', 'More useful reporting'],
    pageDescription: 'Visualization systems that turn complicated metrics into dashboards and reports people can act on quickly.',
    benefits: ['Clear metric hierarchy', 'Usable analytics UX', 'Decision-friendly views'],
    industries: ['Finance', 'Operations', 'Executive reporting'],
  },
  {
    id: '3d',
    icon: '3D',
    title: '3D Design',
    desc: 'Innovative 3D visuals and high-precision modeling for digital experiences that need depth and realism.',
    summary:
      'For marketing, products, or immersive builds, we create 3D assets that raise the visual quality ceiling.',
    features: ['Modeling and rendering', 'Motion-ready assets', 'Interactive presentation visuals'],
    deliverables: ['3D scenes', 'Rendered assets', 'Interactive showcases'],
    stack: ['Blender', 'Cinema 4D', 'Three.js', 'Rendering'],
    spotlight: 'High-quality 3D assets that add depth and presentation value.',
    outcomes: ['Stronger product visuals', 'Premium brand feel', 'Better demo storytelling'],
    pageDescription: '3D design support for product showcases, digital storytelling, immersive scenes, and higher-end visual presentation.',
    benefits: ['Premium product rendering', 'Motion-ready assets', 'Interactive showcase support'],
    industries: ['Product marketing', 'Architecture', 'Immersive brands'],
  },
]

const featuredServices = services.slice(0, 8)

const homeServices = [
  { id: 'frontend', title: 'Front-End Development', desc: 'Our development is pixel perfect in all ways.' },
  { id: 'backend', title: 'Back-End Development', desc: 'We enhance customer experiences for success.' },
  { id: 'arvr', title: 'AR - VR Development', desc: 'We create vibrant, intuitive and minimalist web' },
  { id: 'uiux', title: 'UI/UX Design', desc: 'We turn digital playgrounds (apps, sites, games) into user experiences that wow.' },
  { id: 'ai-ml', title: 'AI-ML Development', desc: 'From epic architecture to immersive props, we elevate your visuals.' },
  { id: 'cloud', title: 'Cloud Services', desc: 'We can provide all around the world.' },
  { id: 'game', title: 'Game Development', desc: 'We don\'t just develop games, we build experiences.' },
  { id: 'staff', title: 'Staff Augmentation', desc: 'Expert developers & IT management to build your perfect project team.' },
  { id: 'qa', title: 'QA Testing & Automation', desc: 'Seamless Testing, Flawless Performance with Automated Efficiency.' },
  { id: 'enterprise', title: 'Enterprise Software Development', desc: 'Scalable Solutions Designed to Drive Business Growth and Innovation.' },
  { id: 'dataviz', title: 'Data Visualization', desc: 'Transforming Complex Data into Clear, Actionable Business Insights.' },
  { id: '3d', title: '3D Design', desc: 'Innovative 3D Visuals and High-Precision Modeling for Digital Excellence.' },
]

const techStack = [
  'React',
  'Angular',
  'D3',
  '.NET (MVC, C#)',
  'Unity',
  'Node/Express',
  'GraphQL',
  'MySQL',
  'MongoDB',
  'Python',
]

const homeTechStack = [
  { id: 'react', name: 'React' },
  { id: 'angular', name: 'Angular' },
  { id: 'd3', name: 'D3' },
  { id: 'dotnet', name: '.Net (MVC, C#)' },
  { id: 'unity', name: 'Unity' },
  { id: 'jquery', name: 'Jquery' },
]

const processSteps = [
  { num: '01', title: 'Brainstorming Ideas', desc: 'We shape the product direction around business outcomes, users, and real constraints.' },
  { num: '02', title: 'Product Design', desc: 'Visual hierarchy, wireframes, and interface systems are prepared before development begins.' },
  { num: '03', title: 'Front-End Development', desc: 'We translate approved designs into responsive, high-performance interfaces.' },
  { num: '04', title: 'SEO Optimization', desc: 'Technical structure and content hierarchy are refined for discoverability and reach.' },
  { num: '05', title: 'Back-End Development', desc: 'Secure APIs, data flows, and scalable services are built to support the full experience.' },
  { num: '06', title: 'Digital Growth', desc: 'After launch, we continue improving speed, conversions, and operational clarity.' },
]

const testimonials = [
  {
    name: 'REGINA CHOU',
    role: 'Product Lead',
    text: '"The team is always reliable, it responds promptly to all issues and urgent requests. The developers have a positive attitude, patience, and strong work ethic."',
  },
  {
    name: 'CATE GWILLIAM',
    role: 'Operations Director',
    text: '"One of the best professionals I\'ve worked with. Great skills. Very attentive and dedicated to his work. Highly recommended"',
  },
  {
    name: 'SHAWN MCCARTHY',
    role: 'Business Owner',
    text: '"For several years, I\'ve collaborated with this group who possess good problem-solving abilities and consistently achieve remarkable outcomes."',
  },
  {
    name: 'SEAN COSENTINO',
    role: 'Founder',
    text: '"Did a very good job finished ahead of schedule. Professional delivery and clear communication."',
  },
  {
    name: 'JUSTIN MCMANUS',
    role: 'Tech Lead',
    text: '"Superb at all levels! Experts get the job done. If they don\'t have the answer they will figure it out and solve the problem in the best way."',
  },
  {
    name: 'SHUBHAM',
    role: 'Project Manager',
    text: '"The work is outstanding, very flexible and communicates well. I\'ll definitely work with them again in the future."',
  },
  {
    name: 'MICHAEL R.',
    role: 'CTO',
    text: '"The technical expertise provided was exactly what we needed to scale our infrastructure. Highly reliable and professional."',
  },
  {
    name: 'SARAH J.',
    role: 'Product Manager',
    text: '"They understood our requirements perfectly and delivered a high-performance solution within the deadline."',
  }
]

const portfolioItems = [
  {
    category: 'AI Interface System',
    name: 'Astra Vision',
    summary: 'An enterprise vision platform with a clearer product story, stronger trust cues, and better dashboard hierarchy.',
    tags: ['AI/ML', 'Dashboard', 'React'],
  },
  {
    category: 'Corporate Website',
    name: 'Northgrid',
    summary: 'A premium brand website redesign built for stronger positioning, clarity, and contact conversion.',
    tags: ['Website', 'Branding', 'Next.js'],
  },
  {
    category: 'Automation Dashboard',
    name: 'Fluxpilot',
    summary: 'An operations dashboard that helps teams make faster decisions through cleaner navigation and reporting views.',
    tags: ['UI/UX', 'Node.js', 'PostgreSQL'],
  },
]

const stats = [
  { value: '600+', label: 'Projects Delivered' },
  { value: '99%', label: 'Clients Loved Our Work' },
  { value: '15+', label: 'Years of Impact' },
]

function serviceHref(id) {
  return `/services/${id}`
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 7H17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HomeServiceIcon({ id }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  if (id === 'frontend') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="3" width="20" height="15" rx="2" {...common} />
        <path d="M2 13h20" {...common} />
        <circle cx="5" cy="15.5" r="0.5" stroke="none" fill="currentColor" />
        <circle cx="7.5" cy="15.5" r="0.5" stroke="none" fill="currentColor" />
        <path d="M8 8l-2 2 2 2M16 8l2 2-2 2M13 7l-2 6" {...common} />
      </svg>
    )
  }

  if (id === 'backend') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="6" rx="1" {...common} />
        <rect x="4" y="14" width="16" height="6" rx="1" {...common} />
        <path d="M6 7h2M6 17h2M18 7v10M16 7h2M16 17h2" {...common} />
        <path d="M12 10v4" {...common} />
      </svg>
    )
  }

  if (id === 'arvr') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 10a9 9 0 0 1 18 0v4a9 9 0 0 1-18 0v-4z" {...common} />
        <circle cx="8" cy="12" r="2" {...common} />
        <circle cx="16" cy="12" r="2" {...common} />
        <path d="M12 12v2M8 17h8" {...common} />
      </svg>
    )
  }

  if (id === 'uiux') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" {...common} strokeDasharray="2 2" />
        <rect x="7" y="7" width="10" height="10" rx="1" {...common} />
        <path d="M12 7v10M7 12h10" {...common} />
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (id === 'ai-ml') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" {...common} />
        <path d="M12 6v12M6 12h12" {...common} />
        <circle cx="12" cy="12" r="3" {...common} />
        <path d="M8 8l8 8M16 8l-8 8" {...common} />
      </svg>
    )
  }

  if (id === 'cloud') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.5 19a5.5 5.5 0 0 0 0-11 5.5 5.5 0 0 0-10.5 2 4.5 4.5 0 0 0 0 9h10.5z" {...common} />
        <path d="M12 13v4M10 15l2 2 2-2" {...common} />
      </svg>
    )
  }

  if (id === 'game') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="2" {...common} />
        <path d="M6 12h4M8 10v4M15 11h2M16 10v2" {...common} />
        <path d="M18 14h-2.5" {...common} />
      </svg>
    )
  }

  if (id === 'staff') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="7" r="4" {...common} />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2M12 11v4M10 13h4" {...common} />
      </svg>
    )
  }

  if (id === 'qa') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="8" {...common} />
        <path d="m21 21-4.35-4.35" {...common} />
        <path d="m8 11 2 2 4-4" {...common} />
      </svg>
    )
  }

  if (id === 'enterprise') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 21h18M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14M9 5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M9 10h6M9 14h6M9 18h6" {...common} />
      </svg>
    )
  }

  if (id === 'dataviz') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 3v18h18" {...common} />
        <path d="M7 16V9M12 16V12M17 16V7" {...common} />
        <path d="M7 9l5 3 5-5" {...common} strokeWidth="1" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l10 5v10l-10 5-10-5V7l10-5z" {...common} />
      <path d="M12 22V12M12 12l10-5M12 12L2 7" {...common} />
    </svg>
  )
}

function HomeTechLogo({ id }) {
  if (id === 'react') {
    return (
      <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" style={{ height: '70px' }}>
        <circle cx="100" cy="100" r="18" fill="#58C4DC" />
        <g stroke="#58C4DC" strokeWidth="8">
          <ellipse cx="100" cy="100" rx="80" ry="32" transform="rotate(0, 100, 100)" />
          <ellipse cx="100" cy="100" rx="80" ry="32" transform="rotate(60, 100, 100)" />
          <ellipse cx="100" cy="100" rx="80" ry="32" transform="rotate(120, 100, 100)" />
        </g>
      </svg>
    )
  }

  if (id === 'angular') {
    return (
      <svg viewBox="0 0 250 250" fill="none" aria-hidden="true" style={{ height: '75px' }}>
        <path d="M125 30l103.1 36.8-15.7 136.2L125 220 37.6 203l-15.7-136.2L125 30z" fill="#DD0031" />
        <path d="M125 30v190l87.6-17L125 30z" fill="#C3002F" />
        <path d="M18.8 66.8L125 30v21.5L51.3 198.5h24.2l12.4-33.1h74.2l12.4 33.1h24.2L125 51.5z" fill="none" />
        <path d="M125 51.5l-65.7 147h24.2l12.4-33.1h58.2l12.4 33.1h24.2L125 51.5zm20.8 90.4H104.2L125 94.7l20.8 47.2z" fill="white" />
      </svg>
    )
  }

  if (id === 'd3') {
    return (
      <svg viewBox="0 0 100 100" aria-hidden="true" style={{ height: '75px' }}>
        <rect x="5" y="5" width="90" height="90" rx="10" fill="none" stroke="#E1C1A5" strokeWidth="1.5" />
        <path d="M25 30h22c15 0 28 8 28 20s-13 20-28 20H25V30z" fill="#F89D3C" opacity="0.3" />
        <path d="M25 30h12c15 0 28 8 28 20s-13 20-28 20H25V30z" fill="#F89D3C" />
        <path d="M38 45h8c8 0 14 4 14 10s-6 10-14 10h-8V45z" fill="white" />
        <text x="35" y="65" fill="#F89D3C" fontSize="34" fontWeight="900" fontFamily="Arial, sans-serif">3</text>
      </svg>
    )
  }

  if (id === 'dotnet') {
    return (
      <svg viewBox="0 0 240 80" fill="none" aria-hidden="true" style={{ height: '54px' }}>
        <path d="M20 50s15-35 40-35 30 20 45 45" stroke="#0078D4" strokeWidth="6" strokeLinecap="round" />
        <text x="100" y="45" fill="#1a1a1a" fontSize="32" fontWeight="800" fontFamily="Arial, sans-serif">.NET</text>
        <text x="100" y="65" fill="#555" fontSize="11" fontWeight="600" fontFamily="Arial, sans-serif">Microsoft .NET</text>
      </svg>
    )
  }

  if (id === 'unity') {
    return (
      <svg viewBox="0 0 200 80" fill="none" aria-hidden="true" style={{ height: '54px' }}>
        <path d="M10 20l18 10v20l-18 10-18-10v-20l18-10z" fill="#000" />
        <path d="M10 20v20l18-10M10 40l-18-10M10 40v20" stroke="#fff" strokeWidth="2.5" />
        <text x="42" y="52" fill="#000" fontSize="36" fontWeight="700" fontFamily="Arial, sans-serif">unity</text>
      </svg>
    )
  }

  if (id === 'jquery') {
    return (
      <svg viewBox="0 0 240 80" fill="none" aria-hidden="true" style={{ height: '64px' }}>
        <path d="M40 40c0 10.5-8.5 19-19 19s-19-8.5-19-19 8.5-19 19-19 19 8.5 19 19z" fill="#006699" opacity="0.1" />
        <circle cx="21" cy="40" r="16" stroke="#08689B" strokeWidth="3" fill="none" />
        <circle cx="21" cy="40" r="10" stroke="#08689B" strokeWidth="3" fill="none" />
        <circle cx="21" cy="40" r="5" fill="#08689B" />
        <text x="60" y="54" fill="#08689B" fontSize="42" fontWeight="700" fontFamily="Arial, sans-serif">Jquery</text>
      </svg>
    )
  }

  return null
}

function ProcessIcon({ id }) {
  const common = {
    fill: 'none',
    stroke: '#2a68ff',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  if (id === 'brain') {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M9.5 2a.5.5 0 0 1 .5.5v.5h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1v.5a.5.5 0 0 1-1 0V6h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1v-.5a.5.5 0 0 1 .5-.5z" />
        <path d="M12 9c0 3.866-3.134 7-7 7s-1-2-1-3 1-4 3-4" />
        <path d="M12 9c0 3.866 3.134 7 7 7s1-2 1-3-1-4-3-4" />
        <path d="M12 2v7M5 16s1 4 7 4 7-4 7-4" />
      </svg>
    )
  }

  if (id === 'design') {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-1.5M14 17l-1.5-1.5M16 5V2M16 10V8" />
        <path d="M2 12c0-5.523 4.477-10 10-10s10 4.477 10 10" />
        <path d="M6 12l2 2 4-4" />
      </svg>
    )
  }

  if (id === 'frontend') {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <rect x="3" y="3" width="18" height="15" rx="2" />
        <path d="M3 13h18M11 6l2 4 2-4M10 13l2 4 2-4" />
        <text x="10" y="10" fill="#2a68ff" stroke="none" fontSize="8" fontWeight="bold">5</text>
      </svg>
    )
  }

  if (id === 'seo') {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M17.5 19a5.5 5.5 0 0 0 0-11 5.5 5.5 0 0 0-10.5 2 4.5 4.5 0 0 0 0 9h10.5z" />
        <circle cx="12" cy="13" r="3" />
        <path d="M14.5 15.5l2 2" />
      </svg>
    )
  }

  if (id === 'backend') {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M16 18l4-4-4-4M8 10l-4 4 4 4M14 4l-4 16" />
        <path d="M12 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
      </svg>
    )
  }

  if (id === 'marketing') {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M11 5h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2M11 15h2a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-2M5 10l-2 2 2 2h4V10H5z" />
        <path d="M11 2v16M11 18a2 2 0 0 1-2 2h-.5a1.5 1.5 0 0 1 0-3H11" />
      </svg>
    )
  }

  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-shell">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropRef = useRef(null)

  useEffect(() => {
    function handleClick(event) {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="topbar">
      <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)}>
        <img className="brand-logo" src="/sightinfusion-logo.svg" alt="SightInfusion" />
        <span className="brand-text">
          <strong>SightInfusion</strong>
          <span>Software Solution Pvt. Ltd.</span>
        </span>
      </NavLink>

      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>

        <div className="nav-dropdown" ref={dropRef}>
          <button
            type="button"
            className="nav-drop-btn"
            onClick={() => setServicesOpen((open) => !open)}
            aria-expanded={servicesOpen}
          >
            Services
            <span className={`drop-chevron ${servicesOpen ? 'open' : ''}`} aria-hidden="true" />
          </button>

          {servicesOpen && (
            <div className="dropdown-panel">
              <div className="dropdown-grid">
                {featuredServices.map((service) => (
                  <NavLink
                    key={service.id}
                    to={serviceHref(service.id)}
                    className="drop-item"
                    onClick={() => {
                      setServicesOpen(false)
                      setMenuOpen(false)
                    }}
                  >
                    <span className="drop-copy">
                      <strong>{service.title}</strong>
                      <small>{service.desc}</small>
                    </span>
                  </NavLink>
                ))}
              </div>

              <div className="dropdown-footer">
                <span>Explore all our capabilities</span>
                <NavLink
                  to="/services"
                  className="drop-view-all"
                  onClick={() => {
                    setServicesOpen(false)
                    setMenuOpen(false)
                  }}
                >
                  View All Services
                </NavLink>
              </div>
            </div>
          )}
        </div>

        <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
        <a href="#" onClick={() => setMenuOpen(false)}>Career</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Blogs</a>
        <a href="#" className="nav-ai-link" onClick={() => setMenuOpen(false)}>AI Expertise</a>
      </nav>

      <NavLink className="contact-link" to="/contact" onClick={() => setMenuOpen(false)}>
        Contact Us
      </NavLink>

      <button
        type="button"
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero hero-home">
        <div className="hero-gradient" aria-hidden="true" />
        <div className="hero-lines" aria-hidden="true" />
        <div className="container hero-center-wrap">
          <div className="hero-copy hero-copy-centered reveal">
            <p className="hero-badge">
              <span aria-hidden="true">✦</span>
              Strategic AI Solutions for Real-World Impact
            </p>
            <h1>
              Accelerating Tomorrow.
              <span>Powering Your Business with AI</span>
            </h1>
            <p className="hero-description">
              Custom AI solutions designed to solve your toughest business challenges,
              drive efficiency, and deliver measurable ROI.
            </p>
            <div className="hero-actions hero-actions-centered">
              <NavLink className="hero-home-cta" to="/contact">
                Let&apos;s Talk
                <span aria-hidden="true" style={{ fontSize: '0.85rem' }}>↗</span>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="hero-trust-band reveal reveal-delay-2">
          <div className="hero-trust-star" aria-hidden="true" />
          <div className="container hero-trust">
            <p className="trust-label">These companies trust <strong>SightInfusion AI</strong></p>
            <div className="trust-logos">
              <div className="trust-logo-group">
                <span className="trust-logo trust-logo-lt">L&amp;T</span>
                <div className="trust-sep" />
                <span className="trust-logo trust-logo-mhi">MHI POWER</span>
              </div>
              <span className="trust-logo trust-logo-pp">
                <span className="pp-icon">P</span>
                Perception Predict
              </span>
              <div className="trust-logo-group">
                <span className="trust-logo trust-logo-garino">GARINO</span>
                <span className="trust-logo trust-logo-anos">100 anos</span>
              </div>
              <span className="trust-logo trust-logo-facebook">facebook</span>
              <div className="trust-logo-jio-wrap">
                <span className="trust-logo-jio">Jio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-services-section">
        <div className="container home-services-shell">
          <div className="home-services-head reveal">
            <div className="home-services-head-left">
              <p className="home-services-kicker">WHAT WE&apos;RE OFFERING</p>
              <h2>Dealing in all professional IT services.</h2>
            </div>
            <p>
              One fundamental aspect of IT services is infrastructure management. This involves
              the design, implementation, and maintenance of the hardware, software, networks,
              and servers.
            </p>
          </div>

          <div className="home-services-grid">
            {homeServices.map((service, index) => (
              <NavLink
                to={serviceHref(service.id)}
                key={service.id}
                className={`home-service-card reveal ${index % 4 === 1 ? 'reveal-delay' : ''} ${index % 4 === 2 ? 'reveal-delay-2' : ''}`}
              >
                <div className="home-service-icon">
                  <HomeServiceIcon id={service.id} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad tech-section home-tech-section">
        <div className="container home-tech-shell">
          <div className="section-header centered home-tech-header">
            <p className="kicker home-tech-kicker">BUILDING A BETTER</p>
            <h2>Future with Smart Technology</h2>
          </div>
          <div className="home-tech-track-wrap">
            <div className="home-tech-track">
              {[...homeTechStack, ...homeTechStack].map((item, index) => (
                <article key={`${item.id}-${index}`} className="home-tech-card">
                  <div className={`home-tech-logo home-tech-logo-${item.id}`}>
                    <HomeTechLogo id={item.id} />
                  </div>
                  <h3>{item.name}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad home-process-section">
        <div className="container">
          <div className="process-shell">
            <div className="process-grid-bg" />

            <div className="process-content">
              <div className="process-info reveal">
                <p className="process-kicker">OUR MODEL</p>
                <h2>How we do</h2>
                <p className="process-description">
                  Save time and money with our poderosa method.
                </p>
              </div>

              <div className="process-map">
                {/* SVG Connecting Line */}
                <svg className="process-line-svg" viewBox="0 0 800 400" fill="none">
                  <path
                    d="M320 60 H700 Q740 60 740 100 V180 Q740 220 700 220 H100 Q60 220 60 260 V340 Q60 380 100 380 H320"
                    stroke="white" strokeWidth="2" strokeDasharray="5 5" opacity="0.15"
                  />
                </svg>

                <div className="process-steps-wrap">
                  {[
                    { id: 'brain', title: 'Brainstorming', sub: 'Ideas', x: 20, y: 0 },
                    { id: 'design', title: 'Product', sub: 'Design', x: 140, y: 0 },
                    { id: 'frontend', title: 'Front-End', sub: 'Development', x: 260, y: 0 },
                    { id: 'seo', title: 'SEO', sub: 'Optimization', x: 80, y: 160 },
                    { id: 'backend', title: 'Back-End', sub: 'Development', x: 200, y: 160 },
                    { id: 'marketing', title: 'Digital', sub: 'Marketing', x: 140, y: 320 }
                  ].map((step, idx) => (
                    <div
                      key={step.id}
                      className={`process-step-card step-${idx + 1}`}
                      style={{ '--step-x': `${step.x}px`, '--step-y': `${step.y}px` }}
                    >
                      <div className="step-icon">
                        <ProcessIcon id={step.id} />
                      </div>
                      <div className="step-label">
                        <strong>{step.title}</strong>
                        <span>{step.sub}</span>
                      </div>
                      <div className="step-dot" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad home-consulting-section">
        <div className="container consulting-grid">
          <div className="consulting-left reveal">
            <p className="consulting-kicker">CONSULTING EXCELLENCE</p>
            <h2>Best pathway to our clients.</h2>
            <p className="consulting-lead">
              Our consulting process begins with a thorough assessment of your current IT
              infrastructure, workflows, and pain points.
            </p>
            <ul className="consulting-check-list">
              <li>
                <div className="consulting-check-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                24/7 Full Service Support
              </li>
              <li>
                <div className="consulting-check-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                Immediate Response
              </li>
              <li>
                <div className="consulting-check-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                Easy to Approach us
              </li>
            </ul>
          </div>

          <div className="consulting-right">
            <div className="timeline-container">
              <div className="timeline-line" />

              <div className="timeline-steps">
                <div className="timeline-item item-right-top">
                  <div className="step-circle">01</div>
                  <div className="step-card-v2">
                    <h3>Fully flexible:</h3>
                    <p>Whether you need a single developer or an entire integrated team, we&apos;ve got you covered.</p>
                  </div>
                </div>

                <div className="timeline-item item-left-mid">
                  <div className="step-circle">02</div>
                  <div className="step-card-v2">
                    <h3>Time zone aligned:</h3>
                    <p>No more delayed response or work delivery, get the developers in your timezone.</p>
                  </div>
                </div>

                <div className="timeline-item item-right-bot">
                  <div className="step-circle">03</div>
                  <div className="step-card-v2">
                    <h3>No language barrier:</h3>
                    <p>Not sure what technology you need help with? No worries. We have 70+ developers covering all the tech stacks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad home-testimonials-section">
        <div className="container">
          <div className="section-header centered reveal">
            <p className="kicker">Testimonial</p>
            <h2>What people think about us</h2>
            <p className="section-sub">
              Their professionalism and commitment to our success were evident throughout the entire process.
            </p>
          </div>
        </div>
        <TestimonialTracks />
      </section>
    </>
  )
}

function TestimonialTracks() {
  const row1 = testimonials.slice(0, 4)
  const row2 = testimonials.slice(4, 8)

  return (
    <div className="testi-tracks-container reveal">
      {/* Row 1: Scrolls Left */}
      <div className="testi-track-wrap row-left">
        <div className="testi-track">
          {[...row1, ...row1].map((item, idx) => (
            <TestiCard key={`r1-${item.name}-${idx}`} data={item} />
          ))}
        </div>
      </div>

      {/* Row 2: Scrolls Right */}
      <div className="testi-track-wrap row-right">
        <div className="testi-track">
          {[...row2, ...row2].map((item, idx) => (
            <TestiCard key={`r2-${item.name}-${idx}`} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TestiCard({ data }) {
  return (
    <article className="testi-card-v3">
      <div className="testi-card-mesh" />
      <div className="testi-upwork">
        <span className="upwork-text">upwork</span>
      </div>
      <h3>{data.name}</h3>
      <p>{data.text}</p>
    </article>
  )
}

function AboutPage() {
  return (
    <>
      <section className="page-hero-banner">
        <div className="container reveal">
          <p className="kicker">About SightInfusion</p>
          <h1>We provide flexible services for ambitious digital products.</h1>
          <p className="page-hero-sub">
            SightInfusion combines technical depth with design clarity to help businesses
            build stronger digital products, websites, and AI experiences.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container about-split">
          <div className="reveal">
            <p className="kicker">About Us</p>
            <h2>We are responsible for your bug-free digital product.</h2>
            <p>
              Almost every company needs software to run business smoothly. We do not just
              develop products, we build experiences that make users stay and trust what they see.
            </p>
            <ul className="about-list">
              <li>Design-led engineering approach</li>
              <li>70+ specialized developers</li>
              <li>Delivery built for scale</li>
              <li>Long-term collaboration mindset</li>
            </ul>
          </div>

          <div className="about-visual-grid reveal reveal-delay">
            {[
              { label: 'Companies Trust Us', value: '600+' },
              { label: 'Success Stories', value: '280+' },
              { label: 'Years Of Experience', value: '15+' },
              { label: 'Client Satisfaction', value: '99+' },
            ].map((item) => (
              <div key={item.label} className="about-stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ServicesPage() {
  const { serviceId } = useParams()
  const activeService = services.find((service) => service.id === serviceId) ?? services[0]

  return (
    <>
      <section className="page-hero-banner">
        <div className="container reveal">
          <p className="kicker">Our Services</p>
          <h1>{activeService.title}</h1>
          <p className="page-hero-sub">
            {activeService.pageDescription}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-header reveal">
            <p className="kicker">What We&apos;re Offering</p>
            <h2>Specialized service experience for {activeService.title}.</h2>
            <p className="section-sub">
              Switching the service tab now changes the full page content block, including overview,
              benefits, deliverables, stack, and supporting sections for that specific service.
            </p>
          </div>

          <div className="service-route-tabs reveal" role="tablist" aria-label="Services">
            {services.map((service) => (
              <NavLink
                key={service.id}
                role="tab"
                aria-selected={activeService.id === service.id}
                to={serviceHref(service.id)}
                className={`service-route-tab ${activeService.id === service.id ? 'active' : ''}`}
              >
                <span>{service.title}</span>
                <span className="service-route-arrow"><ArrowIcon /></span>
              </NavLink>
            ))}
          </div>

          <div key={activeService.id} className="service-detail-page reveal">
            <div className="service-detail-hero">
              <div className="service-detail-kicker">
                <span className="service-detail-arrow"><ArrowIcon /></span>
                <span>Selected Service</span>
              </div>
              <h3>{activeService.title}</h3>
              <p className="service-panel-summary">{activeService.summary}</p>
            </div>

            <div className="service-spotlight">
              <span className="service-spotlight-label">Why this service matters</span>
              <p>{activeService.spotlight}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad service-breakdown-section">
        <div className="container">
          <div className="service-panel-grid reveal">
            <div className="service-panel-box">
              <h4>What we focus on</h4>
              <ul>
                {activeService.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="service-panel-box">
              <h4>Typical deliverables</h4>
              <ul>
                {activeService.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="service-panel-box">
              <h4>Core benefits</h4>
              <ul>
                {activeService.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="service-panel-box">
              <h4>Best fit industries</h4>
              <ul>
                {activeService.industries.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="service-stack-strip reveal">
            {activeService.stack.map((item) => (
              <span key={item} className="service-stack-pill">{item}</span>
            ))}
          </div>

          <div className="service-outcomes reveal">
            {activeService.outcomes.map((item) => (
              <div key={item} className="service-outcome-card">
                <strong>{item}</strong>
              </div>
            ))}
          </div>

          <div className="service-detail-cta reveal">
            <NavLink className="hero-primary" to="/contact">Discuss This Service</NavLink>
          </div>
        </div>
      </section>

      <section className="section-pad service-story-section">
        <div className="container service-story-grid">
          <div className="service-story-copy reveal">
            <p className="kicker">Why Choose This Service</p>
            <h2>{activeService.title} built around real delivery goals.</h2>
            <p className="section-sub">
              {activeService.summary} We shape the scope around your business goals, technical constraints,
              and the level of polish needed to make the product feel trustworthy.
            </p>
          </div>

          <div className="service-story-cards">
            {activeService.outcomes.map((item, index) => (
              <div
                key={item}
                className={`service-story-card reveal ${index === 1 ? 'reveal-delay' : ''} ${index === 2 ? 'reveal-delay-2' : ''}`}
              >
                <div className="service-story-icon"><ArrowIcon /></div>
                <strong>{item}</strong>
                <p>{activeService.title} is structured to deliver this outcome more reliably.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad service-process-section">
        <div className="container">
          <div className="section-header centered reveal">
            <p className="kicker">Delivery Model</p>
            <h2>How we handle {activeService.title.toLowerCase()}.</h2>
          </div>

          <div className="process-grid">
            {processSteps.slice(0, 3).map((step, index) => (
              <div
                key={`${activeService.id}-${step.num}`}
                className={`process-card reveal ${index === 1 ? 'reveal-delay' : ''} ${index === 2 ? 'reveal-delay-2' : ''}`}
              >
                <div className="process-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad tech-section">
        <div className="container">
          <div className="section-header centered reveal">
            <p className="kicker">Technology</p>
            <h2>Technology used for {activeService.title}.</h2>
          </div>
        </div>
        <div className="tech-track-wrap">
          <div className="tech-track">
            {[...activeService.stack, ...techStack, ...activeService.stack].map((item, index) => (
              <span key={`${item}-${index}`} className="tech-pill">{item}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function PortfolioPage() {
  return (
    <>
      <section className="page-hero-banner">
        <div className="container reveal">
          <p className="kicker">Portfolio</p>
          <h1>Selected work designed for technical authority.</h1>
          <p className="page-hero-sub">
            A focused set of projects across AI product framing, premium websites, and operational tools.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div
              key={item.name}
              className={`portfolio-card-v2 reveal ${index === 1 ? 'reveal-delay' : ''} ${index === 2 ? 'reveal-delay-2' : ''}`}
            >
              <div className="pc-visual">
                <span>{item.category}</span>
              </div>
              <div className="pc-body">
                <span className="pc-category">{item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <div className="pc-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="pc-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <section className="page-hero-banner">
        <div className="container reveal">
          <p className="kicker">Contact</p>
          <h1>Start the conversation for your next digital product.</h1>
          <p className="page-hero-sub">
            If you want a sharper digital presence backed by technical execution, let&apos;s talk.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container contact-layout">
          <div className="contact-info reveal">
            <h2>Get in touch</h2>
            <p>
              Have a project in mind? Send us a message and we will respond as soon as possible.
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="icon-box">L</div>
                <div>
                  <span className="contact-label">Location</span>
                  <p>Silver Business Point, VIP Circle, Utran, Surat, Gujarat, India</p>
                </div>
              </div>
              <div className="contact-method-item">
                <div className="icon-box">P</div>
                <div>
                  <span className="contact-label">Phone</span>
                  <a href="tel:+918530172127">+91 85301 72127</a>
                </div>
              </div>
              <div className="contact-method-item">
                <div className="icon-box">M</div>
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:info@sightinfusion.com">info@sightinfusion.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-side reveal reveal-delay">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert('Thank you! We will get back to you within 24 hours.')
  }

  return (
    <form className="premium-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="John Doe" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder="john@example.com" required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
      </div>

      <div className="form-group">
        <label htmlFor="service">Service Interested In</label>
        <select id="service" defaultValue="">
          <option value="" disabled>Select a service...</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>{service.title}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea id="message" rows="5" placeholder="Tell us about your project..." required />
      </div>

      <button type="submit" className="form-submit">Send Message</button>
    </form>
  )
}

function Footer() {
  return (
    <footer className="site-footer-ultra">
      <div className="footer-mesh" />
      <div className="container">
        {/* Top Section: Brand + CTA/Stats */}
        <div className="footer-hero">
          <div className="footer-hero-left">
            <div className="footer-logo-wrap">
              <div className="footer-logo-mark">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14L8 10L12 14L16 10L20 14" stroke="#2a68ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 10L8 6L12 10L16 6L20 10" stroke="#2a68ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                </svg>
              </div>
              <div className="footer-logo-text">
                <strong>SightInfusion</strong>
                <span>Technical Authority Pvt. Ltd.</span>
              </div>
            </div>
            <p className="footer-about-text">
              SightInfusion Technical Authority Pvt. Ltd. is an emerging tech-based company dealing in
              AI product design and high-performance development. We are committed to delivering
              cost-effective and scalable solutions to our clients across the globe.
            </p>
            <div className="footer-sub-brands">
              <span className="sub-brand"><strong>GAMES</strong>INFUSION</span>
              <span className="sub-brand"><strong>KEERU</strong>AI</span>
              <span className="sub-brand"><strong>OMNI</strong>TECH</span>
            </div>
          </div>

          <div className="footer-hero-right">
            <h2>Let&apos;s get started on something great</h2>
            <p>Our team of IT experts looks forward to meeting with you and providing valuable insights tailored to your business.</p>
            <NavLink to="/contact" className="footer-cta-btn">Get an appointment now</NavLink>

            <div className="footer-stats-grid">
              <div className="footer-stat">
                <strong>600+</strong>
                <span>Projects Delivered and working smoothly</span>
              </div>
              <div className="footer-stat">
                <strong>99%</strong>
                <span>Clients loved our work</span>
              </div>
              <div className="footer-stat">
                <strong>15+ Years</strong>
                <span>Since we are making impact</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Middle Section: Links Grid */}
        <div className="footer-links-grid-v2">
          <div className="footer-links-col">
            <h4>Services</h4>
            <NavLink to="/services/ai-solutions">AI & Data Science</NavLink>
            <NavLink to="/services/web-portals">Web Portals</NavLink>
            <NavLink to="/services/cloud-infra">Cloud Infra</NavLink>
            <NavLink to="/services/ui-ux">UI/UX Design</NavLink>
          </div>

          <div className="footer-links-col">
            <h4>Company</h4>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/career">Career</NavLink>
          </div>

          <div className="footer-links-col">
            <h4>Certified</h4>
            <div className="footer-cert-badges">
              <div className="cert-badge">
                <div className="cert-logo">ISO</div>
                <div className="cert-detail">9001:2015</div>
              </div>
              <div className="cert-badge">
                <div className="cert-logo">ISO</div>
                <div className="cert-detail">27001:2022</div>
              </div>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Phone</h4>
            <a href="tel:+918530172127">+91 85301 72127</a>
            <a href="tel:+918530172128">+91 85301 72128</a>
          </div>

          <div className="footer-links-col">
            <h4>Mail</h4>
            <a href="mailto:info@sightinfusion.com">info@sightinfusion.com</a>
            <a href="mailto:hr@sightinfusion.com">hr@sightinfusion.com</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom-v2">
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">LI</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
          <div className="footer-copy-v2">
            © 2026 All rights reserved by SightInfusion Technical Authority Pvt. Ltd.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App
