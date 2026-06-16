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
    heroTitle: 'Pixel-perfect front-end.<br />Designed to impress, built to perform.',
    heroDescription: 'Get high-performance, visually stunning, responsive web interfaces, built by top-tier front-end developers using React, Angular, and Vue.js. Delivered on time, optimized for engagement.',
    heroButtonLabel: 'Hire Front-End Developer',
    heroImage: '/src/assets/man2.webp',
    detailedFeatures: [
      { title: 'Custom Web Front-End Development', desc: 'Delivery of high-quality, interactive, and feature-rich web applications with a front-end that captivates end-users.' },
      { title: 'Single Page Applications (SPA) Development', desc: 'Using novel frameworks like React.js, Angular, and Vue.js, we develop ultra-fast SPAs that provide unified user experiences.' },
      { title: 'Progressive Web Apps (PWA) Development', desc: 'Enrich engagement with offline-first, mobile-friendly web applications that offer near-native functioning on any device.' },
      { title: 'Front-End Performance Optimization', desc: 'We safeguard faster load speeds, improved accessibility, and seamless performance across all devices.' },
      { title: 'UI/UX Design & Development', desc: 'Our designers and developers work together to build artistically satisfying, user-centric frontend interfaces.' },
      { title: 'Migration & Modernization Services', desc: 'Upgrade legacy front-end systems to modern, efficient, and secure frameworks like React, Vue.js, and Angular.' },
      { title: 'Cross-Platform & Mobile-Responsive Front-End', desc: 'We make certain your front-end adapts utterly to any screen size, serving an intuitive experience across devices.' }
    ]
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
    heroTitle: 'Rock-solid backend<br />solutions for your growing business.',
    heroDescription: "Design a backend infrastructure that's as scalable as your ambitions. Collaborate with elite backend developers, ready to join your team and start delivering results in a matter of weeks.",
    heroButtonLabel: 'Hire Back-End Developer',
    heroImage: '/src/assets/backend-hero.png',
    detailedFeatures: [
      { title: 'Custom API Development', desc: 'Building secure, robust, and scalable APIs that connect your front-end with your data seamlessly.' },
      { title: 'Database Architecture & Modeling', desc: 'Designing optimized database schemas for performance, reliability, and long-term data integrity.' },
      { title: 'Server-Side Security', desc: 'Implementing enterprise-grade authentication, authorization, and data encryption to keep your systems safe.' },
      { title: 'Infrastructure & DevOps', desc: 'Setting up automated deployment pipelines and cloud infrastructure for seamless operations.' },
      { title: 'Microservices Architecture', desc: 'Breaking down complex applications into manageable, scalable services for better maintainability.' },
      { title: 'Legacy System Migration', desc: 'Helping you transition from old server systems to modern, cloud-native architectures without data loss.' },
      { title: 'Database Performance Tuning', desc: 'Optimizing queries and indexing to ensure your backend remains fast even under high load.' }
    ],
    caseStudies: [
      {
        id: 'performance',
        tag: 'Analytics AI',
        title: 'Performance Management System',
        desc: 'PerceptionPredict.ai, developed by Perception Group, uses AI and performance prediction to optimize B2B sales talent management, enhancing hiring...',
        img: '/cs-performance.png',
        tech: ['vue', 'node']
      },
      {
        id: 'learning',
        tag: 'Automobile E-Learning',
        title: 'Servitization Learning System',
        desc: 'The Volvo Servitization Learning Path offers an interactive, visually dynamic platform with milestones, animations, and examination modules for...',
        img: '/cs-learning.png',
        tech: ['react', 'js', 'node']
      },
      {
        id: 'accounting',
        tag: 'Accounting',
        title: 'Account Management System (TBook)',
        desc: 'The Jon Tunis Enterprise Solution streamlines business operations with modules for Marketing, Customer Management, Accounting, and more,...',
        img: '/cs-accounting.png',
        tech: ['node']
      }
    ]
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
    heroTitle: 'Immersive AR/VR.<br />Experiences that bridge worlds.',
    heroDescription: 'Create vibrant, intuitive, and immersive experiences for next-generation digital platforms using Unity and WebXR.',
    heroButtonLabel: 'Hire AR/VR Developer',
    heroImage: '/src/assets/hero-visual.png',
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
    heroTitle: 'Premium UI/UX Design.<br />Intuitive and conversion-focused.',
    heroDescription: 'We turn digital products into user experiences that feel premium, intuitive, and conversion-focused. From wireframes to pixel-perfect delivery, our design process is built around clarity, user intent, and measurable outcomes.',
    heroButtonLabel: 'Hire UI/UX Designer',
    heroImage: '/uiux-hero.png',
    detailedFeatures: [
      { title: 'UX Research & Strategy', desc: 'We start with deep user research, competitive analysis, and journey mapping to ensure every design decision is rooted in real user needs.' },
      { title: 'Wireframing & Information Architecture', desc: 'Structured low-fidelity wireframes that map out content hierarchy, navigation flows, and feature placement before visual design begins.' },
      { title: 'High-Fidelity UI Design', desc: 'Pixel-perfect, branded visual designs crafted in Figma with reusable components, color systems, and precise spacing.' },
      { title: 'Interactive Prototyping', desc: 'Clickable Figma prototypes that simulate the full user experience, allowing early testing and client validation before development.' },
      { title: 'Design Systems & Component Libraries', desc: 'Scalable design systems with documented tokens, variants, and usage guidelines that accelerate development handoff.' },
      { title: 'Usability Testing & Iteration', desc: 'We conduct structured usability tests, gather feedback, and refine designs iteratively to reduce friction and increase conversion.' },
      { title: 'Developer Handoff & Support', desc: 'Clean, annotated design files with specs, assets, and interactive guides ensuring your development team can implement designs flawlessly.' }
    ],
    caseStudies: [
      {
        id: 'saas-dashboard',
        tag: 'SaaS Platform',
        title: 'Enterprise Analytics Dashboard',
        desc: 'A complete UX overhaul for a B2B analytics platform — restructuring information hierarchy, designing a new data visualization language, and reducing time-to-insight by 60%.',
        img: '/cs-saas-dashboard.png',
        tech: ['react', 'js']
      },
      {
        id: 'ecommerce-redesign',
        tag: 'E-Commerce',
        title: 'Premium Fashion Marketplace Redesign',
        desc: 'End-to-end UI/UX redesign of a fashion e-commerce platform increasing conversion rate by 38% through improved product discovery, streamlined checkout, and a refined visual identity.',
        img: '/cs-ecommerce-ui.png',
        tech: ['react']
      },
      {
        id: 'mobile-health',
        tag: 'Health & Wellness App',
        title: 'Wellness Companion Mobile App',
        desc: 'Designed a calming and intuitive mobile experience for a health tracking app — from onboarding flows to habit dashboards — achieving a 4.8-star rating on launch.',
        img: '/cs-mobile-app.png',
        tech: ['js']
      }
    ]
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
    heroTitle: 'Custom AI/ML Solutions.<br />Practical automation for business.',
    heroDescription: 'Design AI-powered workflows, assistants, and intelligence layers that fit practical business use cases.',
    heroButtonLabel: 'Hire AI Developer',
    heroImage: '/src/assets/hero-visual.png',
    detailedFeatures: [
      { title: 'LLM & Chatbot Development', desc: 'Building production-grade conversational AI and LLM-powered workflows using OpenAI, Anthropic, and open-source models tailored to your domain.' },
      { title: 'Custom ML Model Training', desc: 'Training and fine-tuning machine learning models on your proprietary data to solve classification, regression, and ranking problems with high accuracy.' },
      { title: 'AI Feature Integration', desc: 'Embedding AI capabilities — recommendation engines, smart search, summarization — directly into your existing product without disrupting current workflows.' },
      { title: 'Retrieval-Augmented Generation (RAG)', desc: 'Designing vector search pipelines and knowledge bases so your AI can retrieve accurate, context-aware answers from your own documents and data.' },
      { title: 'Prediction & Forecasting Pipelines', desc: 'Building end-to-end ML pipelines that process streaming or batch data and deliver actionable predictions to your dashboards or APIs.' },
      { title: 'Computer Vision Solutions', desc: 'Developing image classification, object detection, and document processing systems for healthcare, logistics, and manufacturing use cases.' },
      { title: 'MLOps & Model Lifecycle Management', desc: 'Setting up model versioning, monitoring, and retraining pipelines so your AI systems stay accurate and reliable in production.' }
    ],
    caseStudies: [
      {
        id: 'ai-sales',
        tag: 'Analytics AI',
        title: 'AI-Powered Sales Intelligence Platform',
        desc: 'Built a LangChain-based assistant that analyzes CRM data, surfaces deal-risk signals, and generates personalized outreach — reducing sales cycle time by 28%.',
        img: '/cs-performance.png',
        tech: ['python', 'node']
      },
      {
        id: 'ai-docs',
        tag: 'Document Intelligence',
        title: 'Intelligent Document Processing System',
        desc: 'Deployed an OCR and NLP pipeline to extract, classify, and route structured data from 10,000+ monthly invoices and contracts for an enterprise finance team.',
        img: '/cs-accounting.png',
        tech: ['python']
      },
      {
        id: 'ai-support',
        tag: 'Customer Support AI',
        title: 'RAG-Powered Support Copilot',
        desc: 'Designed a retrieval-augmented generation system that resolved 62% of support tickets autonomously, with seamless escalation to human agents for complex cases.',
        img: '/cs-learning.png',
        tech: ['python', 'node']
      }
    ]
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
    heroTitle: 'Scalable Cloud Services.<br />Reliable systems, global reach.',
    heroDescription: 'Scalable cloud infrastructure that keeps your product fast, secure, and ready for global traffic.',
    heroButtonLabel: 'Hire Cloud Engineer',
    heroImage: '/src/assets/hero-visual.png',
    detailedFeatures: [
      { title: 'Cloud Architecture & Strategy', desc: 'Designing scalable, cost-efficient cloud architectures on AWS, GCP, or Azure that align with your product growth and compliance requirements.' },
      { title: 'CI/CD Pipeline Automation', desc: 'Building fully automated deployment pipelines with GitHub Actions, GitLab CI, or Jenkins so every release is fast, tested, and repeatable.' },
      { title: 'Infrastructure as Code (IaC)', desc: 'Managing cloud infrastructure through Terraform and CloudFormation, making environments reproducible, version-controlled, and auditable.' },
      { title: 'Containerization & Orchestration', desc: 'Packaging applications into Docker containers and orchestrating workloads with Kubernetes for consistent environments and horizontal scaling.' },
      { title: 'Cloud Security & Compliance', desc: 'Implementing IAM policies, network segmentation, encryption at rest and in transit, and compliance controls for SOC 2, HIPAA, and GDPR readiness.' },
      { title: 'Monitoring, Logging & Alerting', desc: 'Setting up observability stacks with Datadog, Grafana, or CloudWatch so your team gets clear visibility into system health and incident signals.' },
      { title: 'Cloud Cost Optimization', desc: 'Auditing resource utilization, rightsizing instances, and implementing autoscaling strategies to reduce cloud spend without sacrificing performance.' }
    ],
    caseStudies: [
      {
        id: 'cloud-migration',
        tag: 'Cloud Migration',
        title: 'Zero-Downtime Migration to AWS',
        desc: 'Migrated a monolithic on-premise application serving 50,000 daily users to a containerized AWS architecture — achieving zero downtime and a 35% reduction in infrastructure costs.',
        img: '/cs-performance.png',
        tech: ['node']
      },
      {
        id: 'cloud-cicd',
        tag: 'DevOps Automation',
        title: 'Enterprise CI/CD Pipeline Overhaul',
        desc: 'Replaced a fragile manual deployment process with a fully automated GitHub Actions pipeline — reducing release time from 4 hours to under 12 minutes with full rollback support.',
        img: '/cs-learning.png',
        tech: ['node', 'react']
      },
      {
        id: 'cloud-k8s',
        tag: 'Platform Engineering',
        title: 'Kubernetes Platform for Multi-Tenant SaaS',
        desc: 'Designed and deployed a Kubernetes-based platform enabling a SaaS product to onboard new tenants in minutes with full namespace isolation, autoscaling, and cost attribution.',
        img: '/cs-accounting.png',
        tech: ['node']
      }
    ]
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
    heroTitle: 'Expert Game Development.<br />Strong mechanics, visual flow.',
    heroDescription: 'Production support across gameplay systems, UI, world building, and feature prototyping.',
    heroButtonLabel: 'Hire Game Developer',
    heroImage: '/src/assets/hero-visual.png',
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
    heroTitle: 'Staff Augmentation.<br />Expert talent in your timezone.',
    heroDescription: 'Flexible hiring support for startups and established teams that need experienced engineering capacity fast.',
    heroButtonLabel: 'Hire Dedicated Developers',
    heroImage: '/src/assets/hero-visual.png',
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
    heroTitle: 'QA & Automation.<br />Seamless testing, flawless performance.',
    heroDescription: 'Reduce regression risk through structured QA, automation coverage, and repeatable release confidence.',
    heroButtonLabel: 'Hire QA Engineer',
    heroImage: '/src/assets/hero-visual.png',
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
    heroTitle: 'Enterprise Software.<br />Operational efficiency at scale.',
    heroDescription: 'Large-scale internal platforms and enterprise workflows designed for usability, controls, and reliability.',
    heroButtonLabel: 'Hire Enterprise Expert',
    heroImage: '/src/assets/hero-visual.png',
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
    heroTitle: 'Data Visualization.<br />Clearer insights, faster analysis.',
    heroDescription: 'Transforming complex data into clear, actionable business insights with strong visual storytelling.',
    heroButtonLabel: 'Hire Data Viz Specialist',
    heroImage: '/src/assets/hero-visual.png',
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
    heroTitle: 'Innovative 3D visuals.<br />Designed for realism and depth.',
    heroDescription: 'High-precision 3D modeling and rendering for digital experiences that need a premium visual finish.',
    heroButtonLabel: 'Hire 3D Designer',
    heroImage: '/src/assets/hero-visual.png',
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

function TechIcon({ type }) {
  if (type === 'react') {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="8" fill="#58C4DC" />
        <ellipse cx="50" cy="50" rx="40" ry="16" stroke="#58C4DC" strokeWidth="2" fill="none" />
        <ellipse cx="50" cy="50" rx="40" ry="16" stroke="#58C4DC" strokeWidth="2" fill="none" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="40" ry="16" stroke="#58C4DC" strokeWidth="2" fill="none" transform="rotate(120 50 50)" />
      </svg>
    )
  }
  if (type === 'node') {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10L85 30V70L50 90L15 70V30L50 10Z" fill="#339933" />
        <path d="M50 25V75M30 40L50 50L70 40" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (type === 'js') {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#F7DF1E" />
        <path d="M75 75C75 80 70 85 62 85C54 85 50 80 50 75" stroke="black" strokeWidth="8" strokeLinecap="round" />
        <path d="M30 55V85" stroke="black" strokeWidth="8" strokeLinecap="round" />
      </svg>
    )
  }
  if (type === 'vue') {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 85L15 25H30L50 60L70 25H85L50 85Z" fill="#41B883" />
        <path d="M50 60L32 25H41L50 42L59 25H68L50 60Z" fill="#35495E" />
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
            <div className="dropdown-panel-light">
              <div className="dropdown-light-grid">
                <NavLink
                  to={serviceHref('frontend')}
                  className="drop-light-item"
                  onClick={() => {
                    setServicesOpen(false)
                    setMenuOpen(false)
                  }}
                >
                  <div className="drop-light-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="drop-light-text">
                    <div className="drop-light-title">Front-End Development</div>
                  </div>
                </NavLink>

                <NavLink
                  to={serviceHref('backend')}
                  className="drop-light-item"
                  onClick={() => {
                    setServicesOpen(false)
                    setMenuOpen(false)
                  }}
                >
                  <div className="drop-light-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="drop-light-text">
                    <div className="drop-light-title">Back-End Development</div>
                  </div>
                </NavLink>

                <NavLink
                  to={serviceHref('uiux')}
                  className="drop-light-item"
                  onClick={() => {
                    setServicesOpen(false)
                    setMenuOpen(false)
                  }}
                >
                  <div className="drop-light-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="drop-light-text">
                    <div className="drop-light-title">UI/UX Designing</div>
                  </div>
                </NavLink>

                <NavLink
                  to={serviceHref('ai-ml')}
                  className="drop-light-item"
                  onClick={() => {
                    setServicesOpen(false)
                    setMenuOpen(false)
                  }}
                >
                  <div className="drop-light-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="drop-light-text">
                    <div className="drop-light-title">AI-ML Development</div>
                  </div>
                </NavLink>

                <NavLink
                  to={serviceHref('cloud')}
                  className="drop-light-item"
                  onClick={() => {
                    setServicesOpen(false)
                    setMenuOpen(false)
                  }}
                >
                  <div className="drop-light-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="drop-light-text">
                    <div className="drop-light-title">Cloud Services</div>
                  </div>
                </NavLink>
              </div>

              <div className="dropdown-light-footer">
                <NavLink
                  to="/services"
                  className="view-all-services-text"
                  onClick={() => {
                    setServicesOpen(false)
                    setMenuOpen(false)
                  }}
                >
                  View all Services <span className="arrow-icon-text">→</span>
                </NavLink>
              </div>
            </div>
          )}
        </div>

        <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
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
  const [hasAnimated, setHasAnimated] = useState(false)
  const servicesRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            const cards = entry.target.querySelectorAll('.home-service-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in')
              }, index * 100)
            })
            setHasAnimated(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current)
      }
    }
  }, [hasAnimated])

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
            <div className="home-services-head-right">
              <p>
                One fundamental aspect of IT services is infrastructure management. This involves
                the design, implementation, and maintenance of the hardware, software, networks,
                and servers.
              </p>
            </div>
          </div>

          <div className="home-services-grid" ref={servicesRef}>
            {homeServices.map((service, index) => (
              <NavLink
                to={serviceHref(service.id)}
                key={service.id}
                className="home-service-card"
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
                <svg className="process-line-svg" viewBox="0 0 800 400" fill="none" preserveAspectRatio="none">
                  <path
                    d="M 120 42 H 720 Q 750 42 750 72 V 172 Q 750 202 720 202 H 80 Q 50 202 50 232 V 332 Q 50 362 80 362 H 450"
                    stroke="#5d7ab5" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6"
                  />
                </svg>

                <div className="process-steps-wrap">
                  {[
                    { id: 'brain', title: 'Brainstorming', sub: 'Ideas', x: 0, y: 0 },
                    { id: 'design', title: 'Product', sub: 'Design', x: 0, y: 0 },
                    { id: 'frontend', title: 'Front-End', sub: 'Development', x: 0, y: 0 },
                    { id: 'backend', title: 'Back-End', sub: 'Development', x: 0, y: 0 },
                    { id: 'seo', title: 'SEO', sub: 'Optimization', x: 0, y: 0 },
                    { id: 'marketing', title: 'Digital', sub: 'Marketing', x: 0, y: 0 }
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
            <div className="consulting-zigzag">
              {/* Central dashed line */}
              <div className="czz-line" />

              {/* Step 01 — card on RIGHT */}
              <div className="czz-row czz-row-right">
                <div className="czz-spacer" />
                <div className="czz-node">
                  <span className="czz-num">01</span>
                </div>
                <div className="czz-card">
                  <h3>Fully flexible:</h3>
                  <p>Whether you need a single developer or an entire integrated team, we&apos;ve got you covered.</p>
                </div>
              </div>

              {/* Step 02 — card on LEFT */}
              <div className="czz-row czz-row-left">
                <div className="czz-card czz-card-left">
                  <h3>Time zone aligned:</h3>
                  <p>No more delayed response or work delivery, get the developers in your timezone.</p>
                </div>
                <div className="czz-node">
                  <span className="czz-num">02</span>
                </div>
                <div className="czz-spacer" />
              </div>

              {/* Step 03 — card on RIGHT */}
              <div className="czz-row czz-row-right">
                <div className="czz-spacer" />
                <div className="czz-node">
                  <span className="czz-num">03</span>
                </div>
                <div className="czz-card">
                  <h3>No language barrier:</h3>
                  <p>Not sure what technology you need help with? We have 70+ developers covering all the tech stacks.</p>
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
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-content reveal">
            <span className="about-badge">We Are Guilty!</span>
            <h1 className="about-hero-title">We are responsible for your bug-free digital product</h1>
            <p className="about-hero-description">
              Almost every company needs software to run their business smoothly, even yours. We don't just develop
              products, we build experiences that make the users stay.
            </p>
          </div>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-two-col reveal reveal-delay">
            <div className="about-left">
              <span className="about-section-badge">About SightInfusion</span>
              <h2 className="about-section-title">We Provide You Flexible Services</h2>
            </div>
            <div className="about-right">
              <p className="about-section-text">
                SightInfusion Technical Authority Pvt. Ltd. is an emerging tech-based company specializing
                in AI product design and high-performance development. With years of experience, we are known for
                providing innovative solutions for all kinds of software development needs. We
                are committed to delivering cost-effective and scalable solutions to our clients
                across the globe, helping businesses transform with cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="container">
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon value-icon-history">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 6v6l4 2M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h3 className="value-title">Our History</h3>
              <p className="value-description">
                Fifteen years ago, we merged technology with creativity, crafting over 600 digital solutions.
                Each project tells a story, reflecting our dedication to innovation and excellence.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon value-icon-mission">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22l-10-5 10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.22 12L12 17l9.78-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.22 7L12 12l9.78-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                </svg>
              </div>
              <h3 className="value-title">Our Mission</h3>
              <p className="value-description">
                We aim to be architects of digital evolution, crafting custom solutions that surpass
                expectations, turning the ordinary into extraordinary through visionary technology and innovation.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon value-icon-vision">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 12l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 1" />
                  <path d="M18 12a6 6 0 0 0-12 0" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                </svg>
              </div>
              <h3 className="value-title">Our Vision</h3>
              <p className="value-description">
                We strive to shape a future where technology feels human, ideas become legacies, and
                businesses redefine their horizons. We're not just building solutions; we're designing tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats-section">
        <div className="container">
          <div className="stats-layout">
            <div className="stats-left">
              <div className="stat-box">
                <div className="stat-icon stat-icon-blue">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M17 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                  </svg>
                </div>
                <h3 className="stat-number">600+</h3>
                <p className="stat-label">Companies Trust Us</p>
              </div>

              <div className="stat-box">
                <div className="stat-icon stat-icon-green">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                  </svg>
                </div>
                <h3 className="stat-number">280+</h3>
                <p className="stat-label">Success Stories</p>
              </div>

              <div className="stat-box">
                <div className="stat-icon stat-icon-purple">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.1" />
                  </svg>
                </div>
                <h3 className="stat-number">15+</h3>
                <p className="stat-label">Years of experience</p>
              </div>

              <div className="stat-box">
                <div className="stat-icon stat-icon-orange">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                  </svg>
                </div>
                <h3 className="stat-number">99+</h3>
                <p className="stat-label">Client Satisfaction</p>
              </div>
            </div>

            <div className="stats-right">
              <div className="company-image-card">
                <div className="building-realistic-image">
                  <img src="/src/assets/about-building.png" alt="SightInfusion Headquarters" className="hq-building-img" />
                  <div className="hq-image-overlay" />
                </div>
                <div className="company-overlay">
                  <h2 className="company-year">2023</h2>
                  <p className="company-text">We Established on</p>
                  <p className="company-subtext">Our company have a great history.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="certifications-box">
            <div className="cert-logos">
              <div className="cert-item">
                <div className="iso-badge modern-seal">
                  <div className="seal-icon-wrapper">
                    <svg className="iso-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M16 24l5.5 5.5L32 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M24 6v2M24 40v2M6 24h2M40 24h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="iso-seal-text">
                    <strong>ISO</strong>
                    <span>9001 : 2015</span>
                  </div>
                </div>
              </div>
              <div className="cert-item">
                <div className="iso-badge modern-seal">
                  <div className="seal-icon-wrapper">
                    <svg className="iso-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M24 12v12m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M36 24a12 12 0 11-24 0 12 12 0 0124 0z" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                    </svg>
                  </div>
                  <div className="iso-seal-text">
                    <strong>ISO</strong>
                    <span>27001 : 2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cert-text">
              <p>
                As an <strong>ISO-certified</strong> company, we proudly hold <strong>ISO 9001:2015</strong> for unparalleled quality management
                and <strong>ISO 27001:2022</strong> for top-tier information security. Your success and data security are at the core
                of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-brands-section">
        <div className="container">
          <p className="brands-heading">Trusted by start-ups, enterprises, and Fortune 500</p>
          <div className="brands-track-wrapper">
            <div className="brands-track">
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#FFA500" opacity="0.1" stroke="#FFA500" strokeWidth="2" />
                  <path d="M50 25L60 45H80L65 58L72 78L50 65L28 78L35 58L20 45H40L50 25Z" fill="#FFA500" />
                </svg>
                <span>Tru Performance</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#1E90FF" opacity="0.1" stroke="#1E90FF" strokeWidth="2" />
                  <text x="50" y="60" fontSize="40" fontWeight="bold" fill="#1E90FF" textAnchor="middle">L&T</text>
                </svg>
                <span>L&T</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#DC143C" opacity="0.1" stroke="#DC143C" strokeWidth="2" />
                  <rect x="30" y="35" width="40" height="30" fill="#DC143C" rx="4" />
                  <text x="50" y="60" fontSize="16" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">MHI</text>
                </svg>
                <span>MHI POWER</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#3B5998" opacity="0.1" stroke="#3B5998" strokeWidth="2" />
                  <circle cx="50" cy="50" r="35" fill="#3B5998" />
                  <text x="50" y="65" fontSize="38" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">f</text>
                </svg>
                <span>facebook</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#8B4789" opacity="0.1" stroke="#8B4789" strokeWidth="2" />
                  <rect x="25" y="30" width="50" height="40" fill="none" stroke="#8B4789" strokeWidth="3" rx="4" />
                  <circle cx="35" cy="40" r="4" fill="#8B4789" />
                  <polyline points="25,50 40,35 55,45 75,25" stroke="#8B4789" strokeWidth="3" fill="none" strokeLinejoin="round" />
                </svg>
                <span>GAMING</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#00A8E8" opacity="0.1" stroke="#00A8E8" strokeWidth="2" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#00A8E8" strokeWidth="3" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="#00A8E8" strokeWidth="3" />
                  <circle cx="50" cy="50" r="8" fill="#00A8E8" />
                </svg>
                <span>Infinity</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#9333EA" opacity="0.1" stroke="#9333EA" strokeWidth="2" />
                  <circle cx="40" cy="50" r="12" fill="#9333EA" />
                  <circle cx="50" cy="50" r="12" fill="#9333EA" />
                  <circle cx="60" cy="50" r="12" fill="#9333EA" />
                </svg>
                <span>Perception</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#E60000" opacity="0.1" stroke="#E60000" strokeWidth="2" />
                  <circle cx="50" cy="50" r="30" fill="#E60000" />
                  <text x="50" y="62" fontSize="32" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">J</text>
                </svg>
                <span>Jio</span>
              </div>

              {/* Duplicate for continuous scroll */}
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#FFA500" opacity="0.1" stroke="#FFA500" strokeWidth="2" />
                  <path d="M50 25L60 45H80L65 58L72 78L50 65L28 78L35 58L20 45H40L50 25Z" fill="#FFA500" />
                </svg>
                <span>Tru Performance</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#1E90FF" opacity="0.1" stroke="#1E90FF" strokeWidth="2" />
                  <text x="50" y="60" fontSize="40" fontWeight="bold" fill="#1E90FF" textAnchor="middle">L&T</text>
                </svg>
                <span>L&T</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#DC143C" opacity="0.1" stroke="#DC143C" strokeWidth="2" />
                  <rect x="30" y="35" width="40" height="30" fill="#DC143C" rx="4" />
                  <text x="50" y="60" fontSize="16" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">MHI</text>
                </svg>
                <span>MHI POWER</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#3B5998" opacity="0.1" stroke="#3B5998" strokeWidth="2" />
                  <circle cx="50" cy="50" r="35" fill="#3B5998" />
                  <text x="50" y="65" fontSize="38" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">f</text>
                </svg>
                <span>facebook</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#8B4789" opacity="0.1" stroke="#8B4789" strokeWidth="2" />
                  <rect x="25" y="30" width="50" height="40" fill="none" stroke="#8B4789" strokeWidth="3" rx="4" />
                  <circle cx="35" cy="40" r="4" fill="#8B4789" />
                  <polyline points="25,50 40,35 55,45 75,25" stroke="#8B4789" strokeWidth="3" fill="none" strokeLinejoin="round" />
                </svg>
                <span>GAMING</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#00A8E8" opacity="0.1" stroke="#00A8E8" strokeWidth="2" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#00A8E8" strokeWidth="3" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="#00A8E8" strokeWidth="3" />
                  <circle cx="50" cy="50" r="8" fill="#00A8E8" />
                </svg>
                <span>Infinity</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#9333EA" opacity="0.1" stroke="#9333EA" strokeWidth="2" />
                  <circle cx="40" cy="50" r="12" fill="#9333EA" />
                  <circle cx="50" cy="50" r="12" fill="#9333EA" />
                  <circle cx="60" cy="50" r="12" fill="#9333EA" />
                </svg>
                <span>Perception</span>
              </div>
              <div className="brand-logo-item">
                <svg className="brand-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#E60000" opacity="0.1" stroke="#E60000" strokeWidth="2" />
                  <circle cx="50" cy="50" r="30" fill="#E60000" />
                  <text x="50" y="62" fontSize="32" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">J</text>
                </svg>
                <span>Jio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-why-services-section">
        <div className="container">
          <div className="why-services-horizontal-layout">
            <div className="why-services-image-left">
              <img src="/src/assets/services-visual.png" alt="Professional Services Team" className="why-services-img-horizontal" />
            </div>

            <div className="why-services-content-right">
              <span className="why-services-badge">Contact Us</span>
              <h2 className="why-services-title">Why Our Services are Better Than Others?</h2>

              <div className="why-services-horizontal-grid">
                <div className="why-service-horizontal-item">
                  <div className="why-service-horizontal-icon why-icon-quality">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>Quality Comes First</h3>
                </div>

                <div className="why-service-horizontal-item">
                  <div className="why-service-horizontal-icon why-icon-flexible">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                    </svg>
                  </div>
                  <h3>Flexible Cooperation</h3>
                </div>

                <div className="why-service-horizontal-item">
                  <div className="why-service-horizontal-icon why-icon-delivery">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 21h8M12 17v4M7 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>On-time Delivery</h3>
                </div>

                <div className="why-service-horizontal-item">
                  <div className="why-service-horizontal-icon why-icon-transparent">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1v22M5 12h14M12 1l4 4M12 1L8 5M12 23l4-4M12 23l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                    </svg>
                  </div>
                  <h3>Transparent Costs</h3>
                </div>

                <div className="why-service-horizontal-item">
                  <div className="why-service-horizontal-icon why-icon-developers">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>Qualified Developers</h3>
                </div>

                <div className="why-service-horizontal-item">
                  <div className="why-service-horizontal-icon why-icon-scale">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22v-5M9 7l3-3 3 3M12 4v12M17 10l5 5-5 5M22 15h-8M7 10l-5 5 5 5M2 15h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>Quick Scale-up</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const uiuxTechStack = [
  { id: 'ps', name: 'Photoshop' },
  { id: 'xd', name: 'Adobe XD' },
  { id: 'sketch', name: 'Sketch' },
  { id: 'ai', name: 'Illustrator' },
  { id: 'figma', name: 'Figma' },
  { id: 'canva', name: 'Canva' }
]

function UiUxToolLogo({ id }) {
  if (id === 'ps') return <div style={{ background: '#001E36', color: '#31A8FF', fontWeight: 'bold', display: 'grid', placeItems: 'center', height: '50px', width: '50px', borderRadius: '10px', fontSize: '24px', margin: '0 auto' }}>Ps</div>;
  if (id === 'xd') return <div style={{ background: '#470137', color: '#FF61F6', fontWeight: 'bold', display: 'grid', placeItems: 'center', height: '50px', width: '50px', borderRadius: '10px', fontSize: '24px', margin: '0 auto' }}>Xd</div>;
  if (id === 'sketch') return (
    <svg viewBox="0 0 24 24" fill="none" style={{ height: '50px', width: '50px', margin: '0 auto' }}>
      <path d="M12 2L2 9.5 12 22l10-12.5L12 2z" fill="#FDB300" />
      <path d="M2 9.5h20M12 2v20M7 6l5 16-5-16zm10 0l-5 16 5-16z" stroke="#FFECA1" strokeWidth="0.5" strokeOpacity="0.5" />
    </svg>
  );
  if (id === 'ai') return <div style={{ background: '#330000', color: '#FF9A00', fontWeight: 'bold', display: 'grid', placeItems: 'center', height: '50px', width: '50px', borderRadius: '10px', fontSize: '24px', margin: '0 auto' }}>Ai</div>;
  if (id === 'figma') return (
    <svg viewBox="0 0 38 57" fill="none" style={{ height: '50px', width: '34px', margin: '0 auto' }}>
      <path d="M19 28.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z" fill="#1ABCFE" />
      <path d="M0 47.5A9.5 9.5 0 019.5 38h9.5v9.5A9.5 9.5 0 019.5 57 9.5 9.5 0 010 47.5z" fill="#0ACF83" />
      <path d="M19 0h9.5A9.5 9.5 0 0138 9.5v0a9.5 9.5 0 01-9.5 9.5H19V0z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 019.5 0H19v19H9.5A9.5 9.5 0 010 9.5v0z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 019.5 19H19v19H9.5A9.5 9.5 0 010 28.5v0z" fill="#A259FF" />
    </svg>
  );
  if (id === 'canva') return (
    <div style={{ background: '#00C4CC', color: 'white', fontWeight: 'bold', display: 'grid', placeItems: 'center', height: '50px', width: '50px', borderRadius: '50%', fontSize: '14px', margin: '0 auto', letterSpacing: '-0.5px', fontStyle: 'italic' }}>
      Canva
    </div>
  );
  return null;
}

function ServicesPage() {
  const { serviceId } = useParams()
  const activeService = services.find((service) => service.id === serviceId) ?? services[0]
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <>
      <section className="service-hero-section">
        <div className="container">
          <div className="service-hero-content reveal">
            <div className="service-hero-left">
              <div className="service-breadcrumb">
                <NavLink to="/">Home</NavLink>
                <span>/</span>
                <NavLink to="/services">Services</NavLink>
                <span>/</span>
                <span>{activeService.title}</span>
              </div>

              <span className="service-badge">{activeService.title}</span>

              <h1 className="service-hero-title" dangerouslySetInnerHTML={{ __html: activeService.heroTitle }}></h1>

              <p className="service-hero-description">
                {activeService.heroDescription}
              </p>

              <NavLink to="/contact" className="service-hero-btn">
                {activeService.heroButtonLabel}
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </NavLink>
            </div>

            <div className="service-hero-right">
              <img src={activeService.heroImage} alt={activeService.title} className="service-hero-image" />
            </div>
          </div>
        </div>
      </section>

      {activeService.id === 'uiux' ? (
        <section className="section-pad uiux-tool-section">
          <div className="container">
            <div className="uiux-tool-track-wrap">
              <div className="uiux-tool-track">
                {[...uiuxTechStack, ...uiuxTechStack].map((item, index) => (
                  <article key={`${item.id}-${index}`} className="uiux-tool-card">
                    <div className="uiux-tool-logo">
                      <UiUxToolLogo id={item.id} />
                    </div>
                    <h3>{item.name}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="section-pad tech-section home-tech-section">
          <div className="container home-tech-shell">
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
      )}

      <section className="section-pad service-features-section">
        <div className="container">
          <div className="service-features-wrapper reveal">
            <div className="service-features-header">
              <span className="features-label">FEATURES</span>
              <h2 className="features-title">Our {activeService.title} Service</h2>
              <div className="features-divider"></div>
            </div>

            <div className="service-features-grid">
              {(activeService.detailedFeatures || activeService.features).map((feature, idx) => (
                <div key={idx} className="feature-item-box">
                  <div className="feature-icon-check">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="#4c7ef3" />
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title || feature}</h3>
                    <p>{feature.desc || activeService.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad service-case-study-section">
        <div className="container">
          <div className="case-study-wrapper reveal">
            <div className="case-study-header">
              <span className="case-study-label">CASE STUDY</span>
              <h2 className="case-study-title">Achieving Success Through Innovation and Expertise</h2>
            </div>

            <div className="case-study-grid">
              {(activeService.caseStudies || [
                {
                  id: 'directory',
                  tag: 'Popular Listing',
                  title: 'Local Business Directory Search Engine',
                  desc: 'Tulse City connects users with local vendors across categories like restaurants, doctors, and hotels. A smart search engine with real-time filters, ratings, and map integration.',
                  img: '/cs-performance.png',
                },
                {
                  id: 'lms',
                  tag: 'E-Learning',
                  title: 'Learning Management System',
                  desc: 'An enterprise SaaS LMS offering a vast course library with progress tracking, interactive modules, and certification management for corporate training.',
                  img: '/cs-learning.png',
                },
                {
                  id: 'accounting',
                  tag: 'Business Management',
                  title: 'Account Management System',
                  desc: 'A comprehensive business operations platform with modules for Marketing, Customer Management, Accounting, and project tracking for an enterprise client.',
                  img: '/cs-accounting.png',
                }
              ]).map((cs) => (
                <div key={cs.id} className="case-study-card">
                  <div className="case-study-badge-container">
                    <span className="case-study-badge">{cs.tag}</span>
                  </div>
                  {cs.tech && (
                    <div className="case-study-tech-icons">
                      {cs.tech.map((t) => (
                        <div key={t} className={`cs-tech-icon icon-${t}`}>
                          <TechIcon type={t} />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="case-study-image-container">
                    <img src={cs.img} alt={cs.title} className="case-study-img" />
                  </div>
                  <div className="case-study-content">
                    <h3>{cs.title}</h3>
                    <p>{cs.desc}</p>
                    <a href="#" className="case-study-link">
                      Read full case study
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeService.id === 'frontend' && (
        <section className="section-pad frontend-process-section">
          <div className="container">
            <div className="frontend-process-grid">
              <div className="frontend-process-left">
                <div className="process-header">
                  <span className="process-kicker">OUR PROCESS</span>
                  <h2>Innovative, Collaborative, Seamless Designs</h2>
                  <p className="process-description">
                    SightInfusion focuses on delivering pixel-perfect front-end systems that are fast, accessible, and visually polished. From discovery to deployment, our structured process ensures every interface is built for performance and conversion.
                  </p>
                  <NavLink to="/contact" className="schedule-call-btn">
                    Schedule a Call
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </NavLink>
                </div>
              </div>

              <div className="frontend-process-right">
                <div className="process-steps-container">
                  <div className="process-step-item">
                    <div className="step-number-circle">01</div>
                    <div className="step-content">
                      <h3>Discover and plan</h3>
                      <p>We start by aligning on your brand, audience, and goals — mapping out component architecture, design tokens, and responsive breakpoints before writing a single line of code.</p>
                    </div>
                  </div>

                  <div className="process-step-item">
                    <div className="step-number-circle">02</div>
                    <div className="step-content">
                      <h3>Design and prototype</h3>
                      <p>Our designers build high-fidelity Figma prototypes with motion specs, ensuring every interaction is validated before the development sprint begins.</p>
                    </div>
                  </div>

                  <div className="process-step-item">
                    <div className="step-number-circle">03</div>
                    <div className="step-content">
                      <h3>Build, test, and deliver</h3>
                      <p>Developers implement the approved designs with accessibility checks, cross-browser testing, and performance audits — handing off clean, documented component code.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {['backend', 'uiux', 'ai-ml', 'cloud'].includes(activeService.id) && (
        <section className="section-pad home-consulting-section">
          <div className="container consulting-grid">
            <div className="consulting-left reveal">
              <p className="consulting-kicker">OUR PROCESS</p>
              <h2>
                {activeService.id === 'ai-ml' ? 'Practical, Iterative, Intelligence-First' :
                 activeService.id === 'cloud' ? 'Resilient, Automated, Always Observable' :
                 'Innovative, Collaborative, Seamless Designs'}
              </h2>
              <p className="consulting-lead">
                {activeService.id === 'ai-ml'
                  ? 'SightInfusion builds AI solutions anchored in real business problems. From use-case discovery to model deployment, our process ensures your AI investment delivers measurable, production-ready results.'
                  : activeService.id === 'cloud'
                  ? 'SightInfusion engineers cloud infrastructure for reliability, speed, and growth. Our process covers architecture planning, automated provisioning, and ongoing observability from day one.'
                  : 'SightInfusion focuses on delivering back-end systems that are secure, scalable, and future-ready. From consultation to deployment, our streamlined process ensures effective collaboration, seamless integration, and high-quality results that align with your business goals.'}
              </p>
              <NavLink to="/contact" className="backend-process-btn">
                Schedule a Call
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </NavLink>
            </div>

            <div className="consulting-right">
              <div className="consulting-zigzag">
                <div className="czz-line" />

                <div className="czz-row czz-row-right">
                  <div className="czz-spacer" />
                  <div className="czz-node">
                    <span className="czz-num">01</span>
                  </div>
                  <div className="czz-card">
                    <h3>
                      {activeService.id === 'ai-ml' ? 'Define the problem and data landscape' :
                       activeService.id === 'cloud' ? 'Audit your current infrastructure' :
                       'Discuss your requirements'}
                    </h3>
                    <p>
                      {activeService.id === 'ai-ml'
                        ? 'We map out your business challenge, identify the right AI approach, and assess the data available — building a clear scope before any model work begins.'
                        : activeService.id === 'cloud'
                        ? 'We review your existing stack, workloads, and pain points — identifying the gaps in reliability, security, and scalability before recommending a path forward.'
                        : 'We begin by understanding your vision, goals, and audience, ensuring the design aligns with your business needs.'}
                    </p>
                  </div>
                </div>

                <div className="czz-row czz-row-left">
                  <div className="czz-card czz-card-left">
                    <h3>
                      {activeService.id === 'ai-ml' ? 'Prototype and validate the approach' :
                       activeService.id === 'cloud' ? 'Design and provision the architecture' :
                       'Create a plan and assemble a team'}
                    </h3>
                    <p>
                      {activeService.id === 'ai-ml'
                        ? 'We build a focused proof-of-concept, validate model accuracy, and iterate on the pipeline with real data before committing to full production build-out.'
                        : activeService.id === 'cloud'
                        ? 'Our engineers define the target architecture in IaC, provision environments through automated pipelines, and document every component for your team.'
                        : 'We develop a design plan with wireframes and prototypes, ensuring an intuitive, functional design.'}
                    </p>
                  </div>
                  <div className="czz-node">
                    <span className="czz-num">02</span>
                  </div>
                  <div className="czz-spacer" />
                </div>

                <div className="czz-row czz-row-right">
                  <div className="czz-spacer" />
                  <div className="czz-node">
                    <span className="czz-num">03</span>
                  </div>
                  <div className="czz-card">
                    <h3>
                      {activeService.id === 'ai-ml' ? 'Deploy, monitor, and improve' :
                       activeService.id === 'cloud' ? 'Ship, monitor, and optimize' :
                       activeService.id === 'uiux' ? 'Design, test, and hand off' :
                       'Get to work'}
                    </h3>
                    <p>
                      {activeService.id === 'ai-ml'
                        ? 'We deploy models to production with monitoring, alerting, and retraining pipelines so your AI stays accurate and reliable as your data evolves.'
                        : activeService.id === 'cloud'
                        ? 'We deploy your infrastructure, wire up monitoring and alerting, and run load and failover tests — then hand off runbooks and on-call guides so your team owns it.'
                        : activeService.id === 'uiux'
                        ? 'Our designers deliver high-fidelity screens, design systems, and interactive prototypes, refined through testing and feedback.'
                        : 'Our developers build and optimize your back-end with secure APIs and thorough testing for seamless operation.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {['backend', 'uiux', 'frontend', 'ai-ml', 'cloud'].includes(activeService.id) && (
        <section className="section-pad backend-why-choose-section">
          <div className="container">
            <div className="backend-why-choose-wrapper reveal">
              <div className="backend-why-choose-left">
                <h2 className="backend-why-choose-title">
                  {activeService.id === 'uiux' ? 'Why Choose us for UI/UX Design?' :
                   activeService.id === 'frontend' ? 'Why Choose us for Front-End Development?' :
                   activeService.id === 'ai-ml' ? 'Why Choose us for AI/ML Development?' :
                   activeService.id === 'cloud' ? 'Why Choose us for Cloud Services?' :
                   'Why Choose us for Backend Development Service?'}
                </h2>
                <p className="backend-why-choose-subtitle">
                  {activeService.id === 'uiux'
                    ? 'A great design is not just how it looks — it is how it works. Our design process ensures:'
                    : activeService.id === 'frontend'
                    ? 'A great front-end is more than visual — it is performant, maintainable, and user-tested. We deliver:'
                    : activeService.id === 'ai-ml'
                    ? 'AI that delivers real business value requires more than a model — it requires the right process:'
                    : activeService.id === 'cloud'
                    ? 'Reliable cloud infrastructure is the foundation your product scales on. We make sure it is built right:'
                    : 'A well-structured backend not only ensures seamless functionality but also:'}
                </p>
              </div>

              <div className="backend-why-choose-right">
                <div className="backend-why-choose-grid">
                  {activeService.id === 'frontend' ? (
                    <>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>We write clean, component-driven code that your in-house team can maintain and extend without friction.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>Every interface we build is tested across devices, browsers, and screen sizes — no last-minute mobile surprises.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>We optimize for Core Web Vitals and Lighthouse scores — fast load times directly improve conversion and SEO.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>We collaborate directly with your designers and backend engineers, keeping handoff smooth and integration risk low.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>Accessibility is built in — semantic HTML, ARIA compliance, and keyboard navigation are non-negotiable for us.</p>
                      </div>
                    </>
                  ) : activeService.id === 'uiux' ? (
                    <>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>User-centered design process grounded in research, data, and real user behavior.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>We create scalable design systems that grow with your product and keep your team aligned.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>We collaborate closely as your design partner, ensuring your vision is translated accurately into pixels.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>Our designs are optimized for conversion, accessibility, and cross-platform consistency.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>Clean developer handoff with annotated specs, assets, and component documentation.</p>
                      </div>
                    </>
                  ) : activeService.id === 'ai-ml' ? (
                    <>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>We focus on business outcomes first — every model we build is tied to a measurable KPI, not a research benchmark.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>Our engineers have hands-on experience deploying LLMs, ML pipelines, and vision systems in production environments.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>We validate before we build — a rapid PoC phase ensures feasibility before you invest in full-scale development.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>AI models are only as good as their data — we help you structure, clean, and label your training data correctly from the start.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>We provide end-to-end support from problem framing and data strategy through model deployment and ongoing monitoring.</p>
                      </div>
                    </>
                  ) : activeService.id === 'cloud' ? (
                    <>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>We design cloud architectures that are cost-aware from day one — avoiding over-provisioning and wasteful resource allocation.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>Everything we build is version-controlled in IaC — your infrastructure is reproducible, auditable, and disaster-recoverable.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>We configure observability from the start — metrics, logs, traces, and on-call alerts so your team always knows system state.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>Our security practices are baked into the architecture — IAM least-privilege, encryption, and compliance controls are not afterthoughts.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>We hand off runbooks, architecture diagrams, and on-call guides so your team can fully own and operate the infrastructure we build.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>Customized backend services tailored to solve your business challenges and deliver measurable outcomes.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>We build backend systems that are uniquely designed to grow with your business needs.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>We act as your strategic partner, not just a backend development provider, ensuring your success.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>Our backend development prioritizes robust security to protect your data and ensure compliance.</p>
                      </div>
                      <div className="backend-why-choose-item">
                        <div className="backend-why-bullet"></div>
                        <p>End-to-end backend development support from planning to deployment and maintenance.</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {['backend', 'uiux', 'frontend', 'ai-ml', 'cloud'].includes(activeService.id) && (() => {
        const backendTestimonials = [
          {
            tag: 'LinkedIn',
            color: '#0077b5',
            quote: '"The backend architecture is incredibly robust and performs perfectly under load."',
            text: 'Their proactive approach to security and database optimization has been a game-changer for our platform.',
            author: 'Serena Balluci',
            role: 'Product Designer',
            img: '/src/assets/avatars/serena.png'
          },
          {
            tag: 'Fintech',
            color: '#00a8e8',
            quote: '"Scaling was a nightmare until we integrated their serverless solutions."',
            text: "We've seen a 40% reduction in latency since the migration. The team's expertise is unmatched.",
            author: 'Alexander Graham',
            role: 'CTO, Global Tech',
            img: '/src/assets/avatars/alexander.png'
          },
          {
            tag: 'Commerce',
            color: '#ff4b2b',
            quote: '"Exceptional API design that simplified our third-party integrations."',
            text: 'Working with SightInfusion was smooth. They understood our complex business logic immediately.',
            author: 'Mira Kothari',
            role: 'Engineering Manager',
            img: '/src/assets/avatars/mira.png'
          }
        ]
        const uiuxTestimonials = [
          {
            tag: 'SaaS',
            color: '#7c3aed',
            quote: '"Our product went from confusing to delightful after their UX redesign."',
            text: 'The SightInfusion team took time to understand our users and delivered a design system that our engineering team loved.',
            author: 'Priya Nair',
            role: 'Head of Product, TechCore',
            img: '/src/assets/avatars/serena.png'
          },
          {
            tag: 'E-Commerce',
            color: '#0ea5e9',
            quote: '"Conversion rates jumped 38% within 3 months of the redesign launch."',
            text: 'The attention to detail in every screen — from the micro-interactions to the checkout flow — was exceptional.',
            author: 'James Whittaker',
            role: 'CEO, StyleVault',
            img: '/src/assets/avatars/alexander.png'
          },
          {
            tag: 'Health App',
            color: '#10b981',
            quote: '"The onboarding experience they designed is the best in our category."',
            text: 'Users immediately understood the value of our app because of how clearly the design communicated it. Brilliant work.',
            author: 'Dr. Anita Sharma',
            role: 'Founder, WellPath',
            img: '/src/assets/avatars/mira.png'
          }
        ]
        const frontendTestimonials = [
          {
            tag: 'SaaS',
            color: '#2a68ff',
            quote: '"The React component library they built cut our dev time in half."',
            text: 'Every screen matched our Figma designs pixel-for-pixel. The attention to responsive edge cases was something we had never experienced before.',
            author: 'Lena Vasquez',
            role: 'VP of Engineering, Nexaloom',
            img: '/src/assets/avatars/serena.png'
          },
          {
            tag: 'E-Commerce',
            color: '#f59e0b',
            quote: '"Our Lighthouse score went from 54 to 96 after their performance audit."',
            text: 'SightInfusion rebuilt our checkout flow and product pages. The result was a dramatically faster experience and a measurable lift in conversion.',
            author: 'Tom Brecker',
            role: 'Head of Growth, CartFlux',
            img: '/src/assets/avatars/alexander.png'
          },
          {
            tag: 'Marketing',
            color: '#ec4899',
            quote: '"The animations they built made our product feel like a premium brand."',
            text: 'They balanced visual polish with accessibility perfectly. Our accessibility score improved alongside the aesthetics — which we did not think was possible.',
            author: 'Nadia Fourie',
            role: 'Creative Director, PulseAgency',
            img: '/src/assets/avatars/mira.png'
          }
        ]
        const aimlTestimonials = [
          {
            tag: 'Operations',
            color: '#6366f1',
            quote: '"The AI pipeline they built is processing 10,000 documents a day flawlessly."',
            text: 'What used to take a team of 5 people three days now runs automatically overnight. The ROI was immediate and undeniable.',
            author: 'Carlos Mendez',
            role: 'Director of Operations, DocuFlow',
            img: '/src/assets/avatars/alexander.png'
          },
          {
            tag: 'Sales Tech',
            color: '#8b5cf6',
            quote: '"Our AI sales assistant boosted qualified pipeline by 31% in 90 days."',
            text: 'SightInfusion understood our domain deeply before writing a single line of code. The model performs like an expert, not a chatbot.',
            author: 'Rachel Kim',
            role: 'CRO, LeadSpark',
            img: '/src/assets/avatars/serena.png'
          },
          {
            tag: 'Healthcare',
            color: '#14b8a6',
            quote: '"The predictive model they delivered flagged risks our team had missed for years."',
            text: 'The combination of domain consultation and ML expertise made SightInfusion stand out. They asked the right questions before touching the data.',
            author: 'Dr. Farah Naseem',
            role: 'Chief Medical Officer, MediSense',
            img: '/src/assets/avatars/mira.png'
          }
        ]
        const cloudTestimonials = [
          {
            tag: 'SaaS',
            color: '#0ea5e9',
            quote: '"We went from 4-hour deployments to 12-minute automated releases."',
            text: "The CI/CD pipeline SightInfusion built gave our team back hours every week. Zero downtime deploys were a dream before — now they are the default.",
            author: 'Ben Okafor',
            role: 'Platform Lead, Cloudspace',
            img: '/src/assets/avatars/alexander.png'
          },
          {
            tag: 'FinTech',
            color: '#22c55e',
            quote: '"Our cloud bill dropped 38% after their infrastructure audit and rightsizing."',
            text: 'They found waste we did not know existed and replaced it with autoscaling that actually fits our traffic patterns. We are faster and cheaper.',
            author: 'Yuki Tanaka',
            role: 'Infrastructure Engineer, PayBridge',
            img: '/src/assets/avatars/serena.png'
          },
          {
            tag: 'Healthcare',
            color: '#f97316',
            quote: '"SOC 2 Type II certification was a nightmare until SightInfusion stepped in."',
            text: 'They mapped every infrastructure requirement to a compliance control and built automated evidence collection into the pipeline. Certification was painless.',
            author: 'Dr. Marcus Hill',
            role: 'CTO, HealthNode',
            img: '/src/assets/avatars/mira.png'
          }
        ]
        const testimonials =
          activeService.id === 'uiux' ? uiuxTestimonials :
          activeService.id === 'frontend' ? frontendTestimonials :
          activeService.id === 'ai-ml' ? aimlTestimonials :
          activeService.id === 'cloud' ? cloudTestimonials :
          backendTestimonials

        const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length)
        const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        const active = testimonials[currentSlide]

        return (
          <section className="section-pad backend-testimonial-section">
            <div className="container">
              <div className="backend-testimonial-wrapper reveal">
                <div className="backend-testimonial-nav">
                  <button className="testimonial-nav-btn testimonial-prev" onClick={prevSlide}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="testimonial-nav-btn testimonial-next" onClick={nextSlide}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="backend-testimonial-card highlight-glow">
                  <div className="backend-testimonial-content">
                    <div className="testimonial-company-logo">
                      <div className="company-logo-placeholder" style={{ background: active.color }}>{active.tag}</div>
                    </div>
                    <h3 className="backend-testimonial-quote">{active.quote}</h3>
                    <p className="backend-testimonial-text">{active.text}</p>
                    <div className="backend-testimonial-author">
                      <div className="author-avatar">
                        <img src={active.img} alt={active.author} />
                      </div>
                      <div className="author-info">
                        <h4>{active.author}</h4>
                        <p>{active.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })()}

      {['backend', 'uiux', 'frontend', 'ai-ml', 'cloud'].includes(activeService.id) && (
        <section className="contact-new-section">
          <div className="container">
            <div className="contact-new-grid reveal">
              {/* Column 1: Form Card */}
              <div className="contact-white-card form-column">
                <span className="contact-kicker">CONTACT</span>
                <h2 className="contact-inner-title">Lets get in touch</h2>
                <p className="contact-top-desc">You can reach us anytime via <a href="mailto:info@sightinfusion.com">info@sightinfusion.com</a></p>

                <form className="contact-premium-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label>First Name</label>
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="form-field">
                      <label>Last Name</label>
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Email</label>
                    <input type="email" placeholder="Your Email" />
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label>Phone Number</label>
                      <input type="text" placeholder="Your Number" />
                    </div>
                    <div className="form-field">
                      <label>Country</label>
                      <input type="text" placeholder="Your Country" />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Message</label>
                    <textarea placeholder="Leave us a message..."></textarea>
                  </div>

                  <div className="form-checkbox">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">You agree to our terms and conditions.</label>
                  </div>

                  <button type="submit" className="contact-submit-btn">Get Started</button>
                </form>
              </div>

              {/* Column 2: Stats Box */}
              <div className="contact-stats-column">
                <div className="stat-item">
                  <div className="stat-number">600+</div>
                  <p className="stat-desc">Done Around World</p>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99%</div>
                  <p className="stat-desc">Client Satisfaction</p>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <p className="stat-desc">Field Experience</p>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2009</div>
                  <p className="stat-desc">Establish Year</p>
                </div>
              </div>

              {/* Column 3: Contact Info Card */}
              <div className="contact-white-card info-column">
                <div className="contact-info-header">
                  <div className="contact-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <h3>Contact Info</h3>
                </div>

                <div className="contact-details">
                  <p>+91 85301 72127</p>
                  <p>+91 85301 72128</p>
                  <p>info@sightinfusion.com</p>
                  <p>hr@sightinfusion.com</p>
                </div>

                <div className="office-section">
                  <h4><img src="https://flagcdn.com/w40/in.png" alt="India" className="flag-icon" /> India (HQ)</h4>
                  <div className="office-details">
                    <p>Silver Business Point,</p>
                    <p>VIP Circle, Utran,</p>
                    <p>Surat, Gujarat,</p>
                    <p>India - 394105</p>
                  </div>
                </div>

                <div className="social-links">
                  <div className="social-link">
                    <div className="social-icon">in</div>
                    <span>LinkedIn</span>
                  </div>
                  <div className="social-link">
                    <div className="social-icon">ig</div>
                    <span>Instagram</span>
                  </div>
                  <div className="social-link">
                    <div className="social-icon">yt</div>
                    <span>YouTube</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
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
      <section className="contact-new-section">
        <div className="container">
          <div className="contact-new-header reveal">
            <span className="contact-top-badge">Contact Us</span>
            <h1 className="contact-main-title">We are always open to talk</h1>
          </div>

          <div className="contact-new-grid reveal">
            {/* Column 1: Form Card */}
            <div className="contact-white-card form-column">
              <span className="contact-kicker">CONTACT</span>
              <h2 className="contact-inner-title">Lets get in touch</h2>
              <p className="contact-top-desc">You can reach us anytime via <a href="mailto:info@sightinfusion.com">info@sightinfusion.com</a></p>

              <form className="contact-premium-form">
                <div className="form-row">
                  <div className="form-field">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="form-field">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>

                <div className="form-field">
                  <label>Email</label>
                  <input type="email" placeholder="Your Email" />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Phone Number</label>
                    <input type="text" placeholder="Your Number" />
                  </div>
                  <div className="form-field">
                    <label>Country</label>
                    <input type="text" placeholder="Your Country" />
                  </div>
                </div>

                <div className="form-field">
                  <label>Message</label>
                  <textarea placeholder="Leave us a message..."></textarea>
                </div>

                <div className="form-checkbox">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">You agree to our terms and conditions.</label>
                </div>

                <button type="submit" className="contact-submit-btn">Get Started</button>
              </form>
            </div>

            {/* Column 2: Stats Box */}
            <div className="contact-stats-column">
              <div className="stat-item">
                <div className="stat-number">600+</div>
                <p className="stat-desc">Done Around World</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <p className="stat-desc">Client Satisfaction</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <p className="stat-desc">Field Experience</p>
              </div>
              <div className="stat-item">
                <div className="stat-number">2009</div>
                <p className="stat-desc">Establish Year</p>
              </div>
            </div>

            {/* Column 3: Contact Info Card */}
            <div className="contact-white-card info-column">
              <div className="contact-info-header">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <h3>Contact Info</h3>
              </div>

              <div className="contact-details">
                <p>+91 85301 72127</p>
                <p>+91 85301 72128</p>
                <p>info@sightinfusion.com</p>
                <p>hr@sightinfusion.com</p>
              </div>

              <div className="office-section">
                <h4><img src="https://flagcdn.com/w40/in.png" alt="India" className="flag-icon" /> India (HQ)</h4>
                <div className="office-details">
                  <p>Silver Business Point,</p>
                  <p>VIP Circle, Utran,</p>
                  <p>Surat, Gujarat,</p>
                  <p>India - 394105</p>
                </div>
              </div>

              <div className="social-links">
                <div className="social-link">
                  <div className="social-icon">in</div>
                  <span>LinkedIn</span>
                </div>
                <div className="social-link">
                  <div className="social-icon">ig</div>
                  <span>Instagram</span>
                </div>
                <div className="social-link">
                  <div className="social-icon">yt</div>
                  <span>YouTube</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
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
