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

// Import Service Icons
import frontEndIcon from './assets/icons/front-end-serices-icon.svg'
import backendIcon from './assets/icons/service-back_end.svg'
import arvrIcon from './assets/icons/ar-vr-icon.svg'
import uiuxIcon from './assets/icons/ui-ux-icon-2.svg'
import aimlIcon from './assets/icons/ai-ml-logo.svg'
import cloudIcon from './assets/icons/cloud-icon-4.svg'
import qaIcon from './assets/icons/QA-services-icon.svg'
import enterpriseIcon from './assets/icons/enterprise-software-services-icon.svg'
import datavizIcon from './assets/icons/data-visualization-services-icon.svg'
import appDevelopmentIcon from './assets/icons/app-development-icon.svg'

// Import About Page Icons
import ourHistoryIcon from './assets/svg_image/our-history.svg'
import ourMissionIcon from './assets/svg_image/our-mission.svg'
import ourVisionIcon from './assets/svg_image/our-vision.svg'

// Import Stat Icons
import estaTrustedIcon from './assets/svg_image/esta-trusted.svg'
import estaSuccessIcon from './assets/svg_image/esta-suceess.svg'
import estaYearsIcon from './assets/svg_image/esta-years.svg'
import estaClientIcon from './assets/svg_image/esta-client.svg'
import isoLogoIcon from './assets/svg_image/iso-abut-img-1.svg'

// Import Why Services Icons
import serviQualityIcon from './assets/svg_image/servi-quality.svg'
import serviFlexibleIcon from './assets/svg_image/servi-flexible.svg'
import serviDeliveryIcon from './assets/svg_image/servi-delivery.svg'
import serviTransparentIcon from './assets/svg_image/servi-transparant.svg'
import serviQualifiedIcon from './assets/svg_image/servi-qualified.svg'
import serviQuickIcon from './assets/svg_image/servi-quick.svg'

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
    ],
    caseStudies: [
      {
        id: 'fe-fourth',
        tag: 'Golf Marketplace',
        title: 'fourth. — Golf Tee-Time Web Platform',
        desc: 'Built a Next.js 16 App Router site with island architecture — SSR-first marketing pages, live Firestore share pages, and iOS/Android deep-link handling, all with near-zero client JavaScript.',
        img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&auto=format&fit=crop',
        tech: ['next', 'ts']
      },
      {
        id: 'fe-ptb',
        tag: 'Spiritual Wellness App',
        title: 'Pray the Bible AI — Web Platform',
        desc: 'Delivered a Flutter web build featuring 11 feature areas, 7 custom UI themes, AI-assisted prayer flows, and a PWA-installable landing experience across iOS, Android, and web.',
        img: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80&auto=format&fit=crop',
        tech: ['flutter', 'firebase']
      }
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
    heroImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format&fit=crop',
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
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
        tech: ['python', 'node']
      },
      {
        id: 'ai-docs',
        tag: 'Document Intelligence',
        title: 'Intelligent Document Processing System',
        desc: 'Deployed an OCR and NLP pipeline to extract, classify, and route structured data from 10,000+ monthly invoices and contracts for an enterprise finance team.',
        img: 'https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?w=800&q=80&auto=format&fit=crop',
        tech: ['python']
      },
      {
        id: 'ai-support',
        tag: 'Customer Support AI',
        title: 'RAG-Powered Support Copilot',
        desc: 'Designed a retrieval-augmented generation system that resolved 62% of support tickets autonomously, with seamless escalation to human agents for complex cases.',
        img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&auto=format&fit=crop',
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
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80&auto=format&fit=crop',
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
        img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format&fit=crop',
        tech: ['node']
      },
      {
        id: 'cloud-cicd',
        tag: 'DevOps Automation',
        title: 'Enterprise CI/CD Pipeline Overhaul',
        desc: 'Replaced a fragile manual deployment process with a fully automated GitHub Actions pipeline — reducing release time from 4 hours to under 12 minutes with full rollback support.',
        img: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80&auto=format&fit=crop',
        tech: ['node', 'react']
      },
      {
        id: 'cloud-k8s',
        tag: 'Platform Engineering',
        title: 'Kubernetes Platform for Multi-Tenant SaaS',
        desc: 'Designed and deployed a Kubernetes-based platform enabling a SaaS product to onboard new tenants in minutes with full namespace isolation, autoscaling, and cost attribution.',
        img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop',
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
  {
    id: 'app',
    icon: 'AP',
    title: 'App Development',
    desc: 'Cross-platform mobile apps with native performance, real-time backends, and AI-powered features — built to ship and scale.',
    summary:
      'We build iOS and Android apps using Flutter and Firebase, delivering polished, production-ready products with real-time data, complex state, and integrated services.',
    features: ['Flutter cross-platform apps', 'Firebase real-time backend', 'AI & subscription integrations'],
    deliverables: ['iOS & Android apps', 'Firebase backend setup', 'CI/CD & App Store deployment'],
    stack: ['Flutter', 'Dart', 'Firebase', 'Riverpod'],
    spotlight: 'Production-grade mobile apps that feel native, scale confidently, and integrate seamlessly with AI and third-party services.',
    outcomes: ['Faster app delivery', 'Consistent iOS & Android experience', 'Lower backend maintenance burden'],
    pageDescription: 'End-to-end mobile app development using Flutter and Firebase — from architecture and UI to App Store deployment and real-time backend integration.',
    benefits: ['Single codebase for iOS and Android', 'Real-time Firestore data sync', 'AI and subscription-ready architecture'],
    industries: ['Consumer apps', 'Faith & wellness', 'Sports & lifestyle'],
    heroTitle: 'Cross-platform mobile apps.<br />Shipped faster, built to last.',
    heroDescription: 'Full-cycle iOS and Android development using Flutter and Firebase — pixel-perfect UI, real-time backends, AI integrations, and App Store delivery.',
    heroButtonLabel: 'Hire App Developer',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80&auto=format&fit=crop',
    detailedFeatures: [
      { title: 'Flutter Cross-Platform Development', desc: 'One codebase, two stores. We build fully native-feeling iOS and Android apps with Flutter, delivering consistent performance and pixel-accurate UI across devices.' },
      { title: 'Firebase Real-Time Backend', desc: 'Firestore, Authentication, Cloud Functions, Storage, and FCM push notifications — a complete managed backend that scales with your user base without DevOps overhead.' },
      { title: 'AI-Powered Feature Integration', desc: 'We connect your app to ChatGPT, Gemini, or custom AI services through secure Cloud Functions, adding intelligent personalization and content generation to mobile workflows.' },
      { title: 'Subscription & Monetization', desc: 'RevenueCat integration for in-app subscriptions, paywall flows, and purchase analytics — across iOS and Android with a single API and webhook support.' },
      { title: 'Complex State & Architecture', desc: 'Production apps built with Riverpod or Provider, Freezed immutable models, GoRouter navigation, and feature-based modular structure for long-term maintainability.' },
      { title: 'Push Notifications & Deep Linking', desc: 'Firebase Cloud Messaging for targeted push delivery, combined with GoRouter deep-link routing so every notification lands on exactly the right in-app screen.' },
      { title: 'App Store Deployment & CI/CD', desc: 'End-to-end delivery: code signing, App Store Connect and Google Play submission, Fastlane automation, and Firebase App Distribution for beta testing.' },
    ],
    whyChooseItems: [
      { title: 'Single codebase, both platforms', desc: 'Flutter gives us one codebase that deploys to iOS and Android with native performance — no compromises, no duplicate effort.' },
      { title: 'Firebase-native architecture', desc: 'We design around Firestore real-time streams, Cloud Functions, and FCM from day one so your backend scales without a separate server team.' },
      { title: 'Proven AI integration patterns', desc: 'We have shipped apps with ChatGPT-powered features — prompt engineering, Cloud Function middleware, rate limiting, and cost control all handled.' },
      { title: 'Full-cycle ownership', desc: 'From Figma handoff to App Store approval, we own the entire delivery — architecture, UI, backend, testing, and submission.' },
    ],
    processSteps: [
      { num: '01', title: 'Architecture & stack decision', desc: 'We audit your requirements and choose the right state management, navigation, and backend structure before writing a line of feature code.' },
      { num: '02', title: 'Design system & component build', desc: 'Custom Flutter theme with your brand tokens, responsive ScreenUtil sizing, and a reusable component library that speeds up every screen.' },
      { num: '03', title: 'Feature development & Firebase wiring', desc: 'Features built module by module — Firestore collections, Auth flows, Cloud Functions, and UI all developed and tested in parallel.' },
      { num: '04', title: 'QA, performance & App Store submission', desc: 'Device testing across iOS and Android, Firebase Crashlytics integration, App Store and Play Store submission with full signing setup.' },
    ],
    testimonials: [
      { quote: 'The team delivered a fully working Flutter app with Firebase backend in 10 weeks. The code quality and architecture exceeded what our internal team could have produced in 6 months.', author: 'CTO, Faith Tech Startup', role: 'App Development client' },
      { quote: 'They handled everything — from the Riverpod architecture to RevenueCat subscriptions and App Store submission. One team, no handoffs, no gaps.', author: 'Founder, Sports Lifestyle App', role: 'App Development client' },
      { quote: 'The AI prayer generation feature works flawlessly at scale. Their Cloud Functions approach handles cost control and rate limiting so we never had a surprise bill.', author: 'Product Lead, PTB AI', role: 'App Development client' },
    ],
    caseStudies: [
      {
        id: 'app-fourth',
        tag: 'Sports Marketplace',
        title: 'fourth. — Golf Tee Time Marketplace App',
        desc: 'A real-time Flutter marketplace where golfers post and fill open tee time spots. Built with Riverpod, atomic Firestore transactions, FCM push notifications, and deep-link routing.',
        img: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80&auto=format&fit=crop',
        tech: ['flutter', 'firebase', 'riverpod'],
      },
      {
        id: 'app-ptb',
        tag: 'Faith & Wellness',
        title: 'Pray the Bible — AI Prayer & Community App',
        desc: 'A cross-platform spiritual wellness app with ChatGPT-powered prayer generation, full NET Bible, mood-based recommendations, prayer groups, and RevenueCat subscriptions across iOS, Android, and web.',
        img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80&auto=format&fit=crop',
        tech: ['flutter', 'firebase', 'openai'],
      },
    ],
  },
]

const featuredServices = services.slice(0, 8)

const homeServices = [
  { id: 'app', title: 'App Development', desc: 'Native and cross-platform mobile apps built with Flutter — shipped to iOS and Android.' },
  { id: 'frontend', title: 'Front-End Development', desc: 'Our development is pixel perfect in all ways.' },
  { id: 'backend', title: 'Back-End Development', desc: 'We enhance customer experiences for success.' },
  { id: 'arvr', title: 'AR - VR Development', desc: 'We create vibrant, intuitive and minimalist web' },
  { id: 'uiux', title: 'UI/UX Design', desc: 'We turn digital playgrounds (apps, sites, games) into user experiences that wow.' },
  { id: 'ai-ml', title: 'AI-ML Development', desc: 'From epic architecture to immersive props, we elevate your visuals.' },
  { id: 'cloud', title: 'Cloud Services', desc: 'We can provide all around the world.' },
  { id: 'qa', title: 'QA Testing & Automation', desc: 'Seamless Testing, Flawless Performance with Automated Efficiency.' },
  { id: 'enterprise', title: 'Enterprise Software Development', desc: 'Scalable Solutions Designed to Drive Business Growth and Innovation.' },
  { id: 'dataviz', title: 'Data Visualization', desc: 'Transforming Complex Data into Clear, Actionable Business Insights.' },
]

const caseStudiesDetail = {
  'performance': {
    id: 'performance',
    service: 'backend',
    serviceTitle: 'Back-End Development',
    tag: 'Analytics AI',
    title: 'Performance Management System',
    subtitle: 'AI-powered B2B sales talent prediction platform built on a robust, scalable backend.',
    overview: 'PerceptionPredict.ai, developed by Perception Group, leverages AI and performance prediction to optimize B2B sales talent management — from hiring signals to performance coaching.',
    client: 'Perception Group',
    industry: 'HR Technology / B2B SaaS',
    timeline: '6 months',
    teamSize: '5 engineers',
    challenge: 'Perception Group needed a backend capable of ingesting high-volume behavioral data, running ML inference in near-real-time, and serving a multi-tenant SaaS product to enterprise HR teams — all while maintaining GDPR-compliant data handling.',
    challengePoints: [
      'Multi-tenant data isolation with enterprise-grade access control',
      'Real-time ML inference pipeline integrated into the hiring workflow',
      'High-volume event ingestion with sub-200ms API response times',
      'GDPR-compliant data storage and audit trail requirements'
    ],
    solution: 'We designed a Node.js microservices backend with PostgreSQL for structured talent data and Redis for caching inference results. A separate Python service handled ML model serving via REST, with queued jobs for batch scoring runs.',
    solutionPoints: [
      'Node.js REST API with role-based access control per tenant',
      'Python ML service for real-time scoring and batch prediction jobs',
      'PostgreSQL with row-level security for tenant data isolation',
      'Redis caching layer reducing inference latency by 78%',
      'Event-driven architecture using job queues for batch operations',
      'Comprehensive audit log system meeting GDPR Article 30 requirements'
    ],
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Python', 'Vue.js', 'Docker', 'AWS'],
    results: [
      { metric: '78%', label: 'Reduction in API latency' },
      { metric: '99.97%', label: 'Uptime over 12 months' },
      { metric: '3x', label: 'Faster hiring cycle for clients' },
      { metric: '40+', label: 'Enterprise tenants onboarded' }
    ],
    heroImg: '/cs-performance.png',
    testimonial: { quote: 'The backend architecture is incredibly robust and performs perfectly under load. Their team understood our data complexity from day one.', author: 'CEO, Perception Group' }
  },
  'learning': {
    id: 'learning',
    service: 'backend',
    serviceTitle: 'Back-End Development',
    tag: 'Automobile E-Learning',
    title: 'Servitization Learning System',
    subtitle: 'An interactive, milestone-driven e-learning platform for Volvo\'s global dealer network.',
    overview: 'The Volvo Servitization Learning Path offers a visually dynamic training platform with milestones, animated progress tracking, and certification management for Volvo\'s worldwide aftersales and service teams.',
    client: 'Volvo (Global Dealer Training)',
    industry: 'Automotive / E-Learning',
    timeline: '5 months',
    teamSize: '4 engineers',
    challenge: 'Volvo needed a scalable e-learning backend capable of serving thousands of concurrent learners across 50+ countries, managing multilingual course content, and issuing tamper-proof digital certificates.',
    challengePoints: [
      'Global delivery with sub-300ms response times across regions',
      'Multilingual content management for 12+ languages',
      'Tamper-proof certificate issuance and verification system',
      'Complex progress tracking with branched learning paths',
      'Integration with Volvo\'s existing identity provider (SSO)'
    ],
    solution: 'We built a Node.js API with a PostgreSQL content store, a separate certification microservice, and a CDN-backed content delivery layer. SSO integration via SAML 2.0 enabled seamless dealer portal login.',
    solutionPoints: [
      'Node.js API with optimized course content delivery',
      'PostgreSQL with JSON support for flexible multilingual content',
      'SAML 2.0 SSO integration with Volvo\'s identity provider',
      'PDF certificate generation with cryptographic signing',
      'Branched learning path engine with completion tracking',
      'CDN integration for global sub-300ms asset delivery'
    ],
    tech: ['Node.js', 'React', 'JavaScript', 'PostgreSQL', 'AWS CloudFront', 'SAML 2.0'],
    results: [
      { metric: '50+', label: 'Countries served' },
      { metric: '98%', label: 'Course completion rate' },
      { metric: '<300ms', label: 'Global response time' },
      { metric: '12', label: 'Languages supported' }
    ],
    heroImg: '/cs-learning.png',
    testimonial: { quote: '"The platform handles our global dealer network without a hitch. Certificate issuance is instant and the multilingual support works flawlessly."', author: 'Digital Learning Manager, Volvo' }
  },
  'accounting': {
    id: 'accounting',
    service: 'backend',
    serviceTitle: 'Back-End Development',
    tag: 'Accounting',
    title: 'Account Management System (TBook)',
    subtitle: 'An integrated enterprise operations platform covering accounting, CRM, marketing, and project management.',
    overview: 'The Jon Tunis Enterprise Solution (TBook) streamlines business operations with interconnected modules for Marketing, Customer Management, Accounting, and project tracking — serving an enterprise client with 200+ internal users.',
    client: 'Jon Tunis Enterprises',
    industry: 'Enterprise Operations',
    timeline: '8 months',
    teamSize: '6 engineers',
    challenge: 'The client ran their operations across seven disconnected tools — causing data duplication, manual reconciliation overhead, and a lack of real-time financial visibility across departments.',
    challengePoints: [
      'Data siloed across 7 separate legacy systems',
      'Manual reconciliation taking 40+ hours per month',
      'No unified customer view across sales, support, and finance',
      'Audit trail gaps creating compliance risk',
      'Role-based access needed for 6 distinct department types'
    ],
    solution: 'We built a modular Node.js backend with PostgreSQL, where each business domain (accounting, CRM, projects) had its own service layer but shared a unified data model for customers, transactions, and users.',
    solutionPoints: [
      'Unified customer data model across CRM, accounting, and support',
      'Module-based Node.js services with shared authentication layer',
      'Double-entry accounting engine with real-time P&L reporting',
      'Role-based access control with 6 permission tiers',
      'Audit log for every financial transaction',
      'Automated reconciliation engine reducing manual work by 94%'
    ],
    tech: ['Node.js', 'PostgreSQL', 'Express', 'Redis', 'React', 'Chart.js'],
    results: [
      { metric: '94%', label: 'Reduction in manual reconciliation' },
      { metric: '7→1', label: 'Systems consolidated' },
      { metric: '200+', label: 'Internal users served' },
      { metric: '40hrs', label: 'Monthly overhead eliminated' }
    ],
    heroImg: '/cs-accounting.png',
    testimonial: { quote: '"TBook replaced 7 tools in one. Our finance team finally has real-time visibility and the audit trail has eliminated our compliance risk entirely."', author: 'COO, Jon Tunis Enterprises' }
  },
  'saas-dashboard': {
    id: 'saas-dashboard',
    service: 'uiux',
    serviceTitle: 'UI/UX Design',
    tag: 'SaaS Platform',
    title: 'Enterprise Analytics Dashboard',
    subtitle: 'A complete UX overhaul of a B2B analytics platform that reduced time-to-insight by 60%.',
    overview: 'A comprehensive UX redesign for a B2B analytics platform serving data teams at Fortune 500 companies — restructuring information hierarchy, introducing a new data visualization language, and dramatically reducing cognitive load.',
    client: 'DataFlow Analytics (B2B SaaS)',
    industry: 'Data & Analytics SaaS',
    timeline: '4 months',
    teamSize: '3 designers, 2 developers',
    challenge: 'The existing dashboard had evolved organically over 5 years, resulting in 14 navigation levels, inconsistent chart patterns, and an average time-to-insight of 12 minutes — causing high churn among new users.',
    challengePoints: [
      '14-level navigation causing disorientation and abandonment',
      'Inconsistent chart types making cross-metric comparison impossible',
      'Average 12-minute time-to-insight driving new user churn',
      'No mobile experience for field teams',
      'No design system causing every new feature to look different'
    ],
    solution: 'We conducted 24 user interviews, ran tree testing on the navigation, and rebuilt the information architecture from scratch. We introduced a unified chart component library and a progressive disclosure pattern for advanced features.',
    solutionPoints: [
      '24 user interviews + card sorting to rebuild IA',
      'Navigation collapsed from 14 levels to 3',
      'Unified chart component library with consistent visual grammar',
      'Progressive disclosure pattern for advanced analyst features',
      'Responsive design system for field team mobile access',
      'Figma component library with 200+ documented components'
    ],
    tech: ['Figma', 'Framer', 'React', 'D3.js', 'Design Systems'],
    results: [
      { metric: '60%', label: 'Reduction in time-to-insight' },
      { metric: '14→3', label: 'Navigation levels' },
      { metric: '42%', label: 'Reduction in new user churn' },
      { metric: '4.7/5', label: 'Post-launch user satisfaction' }
    ],
    heroImg: '/cs-saas-dashboard.png',
    testimonial: { quote: 'Our product went from something our customers tolerated to something they show off. The redesign paid for itself in reduced churn in the first quarter.', author: 'Head of Product, DataFlow Analytics' }
  },
  'ecommerce-redesign': {
    id: 'ecommerce-redesign',
    service: 'uiux',
    serviceTitle: 'UI/UX Design',
    tag: 'E-Commerce',
    title: 'Premium Fashion Marketplace Redesign',
    subtitle: 'End-to-end UI/UX redesign increasing conversion rate by 38% in 90 days.',
    overview: 'A complete visual identity and UX overhaul for a premium fashion e-commerce platform — improving product discovery, streamlining checkout from 7 steps to 3, and establishing a design system that supports 300+ monthly product launches.',
    client: 'StyleVault (E-Commerce)',
    industry: 'Fashion Retail',
    timeline: '3 months',
    teamSize: '2 designers, 3 developers',
    challenge: 'StyleVault had a 2.1% conversion rate and a 73% cart abandonment rate. User research revealed that the product discovery experience felt cluttered, the checkout was confusing, and the brand felt inconsistent across device types.',
    challengePoints: [
      '2.1% conversion rate well below industry average of 3.5%',
      '73% cart abandonment rate, highest at the shipping step',
      'Cluttered product listings with inconsistent photography framing',
      '7-step checkout flow causing drop-off on mobile',
      'Brand inconsistency across web and mobile experiences'
    ],
    solution: 'We rebuilt the product grid with editorial layout modes, redesigned the checkout as a 3-step flow with inline validation, and created a comprehensive design system that the StyleVault team could use to launch new categories consistently.',
    solutionPoints: [
      'New editorial product grid with curated collection layouts',
      'Checkout redesigned from 7 steps to 3 with inline validation',
      'Smart size recommendation component reducing return rate',
      'Wishlist redesigned as social sharing feature',
      'Design system with 150+ components for consistent launches',
      'Performance-optimized image loading for 40% faster product pages'
    ],
    tech: ['Figma', 'React', 'Design Systems', 'A/B Testing'],
    results: [
      { metric: '38%', label: 'Increase in conversion rate' },
      { metric: '61%', label: 'Reduction in cart abandonment' },
      { metric: '22%', label: 'Reduction in return rate' },
      { metric: '3.2s→1.1s', label: 'Page load improvement' }
    ],
    heroImg: '/cs-ecommerce-ui.png',
    testimonial: { quote: 'Conversion rates jumped 38% within 3 months of the redesign launch. The checkout redesign alone recovered six figures in monthly revenue we were leaving on the table.', author: 'CEO, StyleVault' }
  },
  'mobile-health': {
    id: 'mobile-health',
    service: 'uiux',
    serviceTitle: 'UI/UX Design',
    tag: 'Health & Wellness App',
    title: 'Wellness Companion Mobile App',
    subtitle: 'A calming mobile health tracking experience that launched to a 4.8-star rating.',
    overview: 'A complete UX design for a wellness and habit tracking mobile app — from brand identity through onboarding flows, habit dashboards, and community features — launched on iOS and Android to immediate critical acclaim.',
    client: 'WellPath (Health Tech Startup)',
    industry: 'Health & Wellness',
    timeline: '3 months',
    teamSize: '2 designers',
    challenge: 'Most health apps fail because they feel like medical interfaces rather than supportive companions. WellPath needed a design that felt calming, personal, and motivating — especially during the critical first 7 days of habit formation.',
    challengePoints: [
      'Existing health apps have 75% drop-off rate within first week',
      'Users needed motivation, not clinical data overwhelming them',
      'Complex data (sleep, nutrition, movement) needed to feel simple',
      'Accessibility for users with anxiety and attention difficulties',
      'Dark mode needed to feel relaxing, not just inverted'
    ],
    solution: 'We designed around the concept of "calm momentum" — using soft color progressions, celebratory micro-interactions, and a daily focus mode that surfaced only the most relevant habits. The onboarding was conversational, not form-based.',
    solutionPoints: [
      'Conversational onboarding flow across 5 screens (vs typical 12)',
      '"Calm momentum" visual language with soft gradients and breathing animations',
      'Daily focus mode surfacing only 3 priority habits',
      'Celebratory micro-interactions triggered at habit milestones',
      'WCAG 2.1 AA accessibility compliance throughout',
      'Dark mode designed as a first-class experience, not an afterthought'
    ],
    tech: ['Figma', 'Framer', 'iOS Design Guidelines', 'Material Design'],
    results: [
      { metric: '4.8★', label: 'App Store rating at launch' },
      { metric: '68%', label: 'Day-7 retention (vs 25% industry avg)' },
      { metric: '3.2min', label: 'Average daily session length' },
      { metric: '#4', label: 'Health & Fitness charts on launch week' }
    ],
    heroImg: '/cs-mobile-app.png',
    testimonial: { quote: 'Users immediately understood the value of our app because of how clearly the design communicated it. We hit #4 in Health & Fitness in our first week.', author: 'Founder, WellPath' }
  },
  'ai-sales': {
    id: 'ai-sales',
    service: 'ai-ml',
    serviceTitle: 'AI-ML Development',
    tag: 'Analytics AI',
    title: 'AI-Powered Sales Intelligence Platform',
    subtitle: 'A LangChain-based assistant that reduced sales cycle time by 28%.',
    overview: 'An AI-driven sales intelligence assistant that analyzes CRM data in real-time, surfaces deal-risk signals, generates personalized outreach copy, and forecasts pipeline health — deployed to a 150-person sales team at a SaaS company.',
    client: 'LeadSpark (Sales Technology)',
    industry: 'Sales Technology / SaaS',
    timeline: '4 months',
    teamSize: '3 AI engineers, 1 backend engineer',
    challenge: 'LeadSpark\'s sales team was spending 35% of their time on manual data analysis — reviewing CRM notes, identifying at-risk deals, and writing personalized follow-up emails. Deal risk was identified too late, and pipeline forecasting was wildly inaccurate.',
    challengePoints: [
      '35% of sales rep time consumed by manual CRM analysis',
      'Deal risks identified only after deals were already lost',
      'Pipeline forecast accuracy below 55%',
      'Follow-up email personalization inconsistent across the team',
      'No unified signal from calls, emails, and CRM activity'
    ],
    solution: 'We built a LangChain-based pipeline that ingested CRM activity, email threads, and call transcripts — generating deal-health scores, risk alerts, and personalized follow-up drafts via a React sidebar embedded directly in Salesforce.',
    solutionPoints: [
      'LangChain pipeline combining CRM, email, and call transcript data',
      'Deal-health scoring model trained on 3 years of historical outcomes',
      'Real-time risk alerts surfaced 14 days earlier than before',
      'GPT-4 powered follow-up generation with rep tone calibration',
      'Salesforce embedded sidebar via LWC for zero-workflow-change adoption',
      'Pipeline forecasting model with 81% accuracy vs previous 55%'
    ],
    tech: ['Python', 'LangChain', 'GPT-4', 'Node.js', 'Salesforce LWC', 'PostgreSQL', 'Redis'],
    results: [
      { metric: '28%', label: 'Reduction in sales cycle time' },
      { metric: '81%', label: 'Pipeline forecast accuracy' },
      { metric: '35%→8%', label: 'Time on manual CRM analysis' },
      { metric: '31%', label: 'Increase in qualified pipeline' }
    ],
    heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    testimonial: { quote: 'Our reps stopped dreading CRM hygiene the day the assistant launched. Deal risk alerts alone recovered two enterprise deals in the first month.', author: 'CRO, LeadSpark' }
  },
  'ai-docs': {
    id: 'ai-docs',
    service: 'ai-ml',
    serviceTitle: 'AI-ML Development',
    tag: 'Document Intelligence',
    title: 'Intelligent Document Processing System',
    subtitle: 'An OCR and NLP pipeline processing 10,000+ documents per month for enterprise finance.',
    overview: 'A production-grade intelligent document processing system that automatically extracts, classifies, validates, and routes structured data from invoices, contracts, and purchase orders — eliminating a 5-person manual processing team.',
    client: 'DocuFlow (Enterprise Finance)',
    industry: 'Financial Operations',
    timeline: '5 months',
    teamSize: '4 AI engineers, 1 backend engineer',
    challenge: 'DocuFlow\'s finance team processed 10,000+ mixed-format documents monthly using a 5-person team. Error rates ran at 4.2%, reconciliation took 3 days, and the team had no capacity for the 40% volume growth planned for the following year.',
    challengePoints: [
      '5-person team manually processing 10,000+ documents monthly',
      '4.2% error rate creating downstream accounting discrepancies',
      'Mixed formats: PDFs, scanned images, Word docs, emails',
      '3-day reconciliation cycle delaying financial close',
      'No capacity headroom for planned 40% volume growth'
    ],
    solution: 'We built a multi-stage pipeline: AWS Textract for OCR, a custom NLP classifier for document type detection, a field extraction model fine-tuned on 18 months of historical documents, and a rules-based validation engine before routing to ERP.',
    solutionPoints: [
      'AWS Textract OCR layer with layout-aware text extraction',
      'Custom NLP classifier distinguishing 12 document types with 97% accuracy',
      'Fine-tuned field extraction model on 50,000 historical documents',
      'Rules-based validation engine flagging anomalies before ERP posting',
      'Human-in-the-loop queue for edge cases with confidence <85%',
      'SAP ERP integration for straight-through processing'
    ],
    tech: ['Python', 'AWS Textract', 'HuggingFace Transformers', 'Node.js', 'PostgreSQL', 'SAP ERP API'],
    results: [
      { metric: '0.3%', label: 'Error rate (down from 4.2%)' },
      { metric: '62%', label: 'Documents processed with zero human touch' },
      { metric: '3 days→4hrs', label: 'Reconciliation cycle time' },
      { metric: '10x', label: 'Capacity headroom for volume growth' }
    ],
    heroImg: 'https://images.unsplash.com/photo-1568027762272-e4da8b386fe9?w=800&q=80&auto=format&fit=crop',
    testimonial: { quote: 'The pipeline processes 62% of documents end-to-end without a human touch. Our team now focuses on exceptions, not data entry. The ROI was visible in month two.', author: 'Director of Operations, DocuFlow' }
  },
  'ai-support': {
    id: 'ai-support',
    service: 'ai-ml',
    serviceTitle: 'AI-ML Development',
    tag: 'Customer Support AI',
    title: 'RAG-Powered Support Copilot',
    subtitle: 'A retrieval-augmented generation system resolving 62% of tickets autonomously.',
    overview: 'A production RAG system that resolves customer support tickets by retrieving context from a 15,000-article knowledge base, generating accurate responses, and escalating complex cases to human agents — deployed across email, chat, and a help portal.',
    client: 'ServiceEdge (B2B SaaS)',
    industry: 'Customer Support Technology',
    timeline: '3 months',
    teamSize: '3 AI engineers, 1 backend engineer',
    challenge: 'ServiceEdge\'s support team handled 8,000+ tickets monthly. First response time averaged 6 hours, resolution required 2.3 agent interactions per ticket, and a growing backlog was hurting NPS scores despite hiring more agents.',
    challengePoints: [
      '8,000+ monthly tickets with 6-hour average first response time',
      '2.3 average agent interactions per ticket to reach resolution',
      'Growing backlog despite continuous agent hiring',
      'Knowledge base scattered across Confluence, Notion, and PDFs',
      'No context-passing between channels (email, chat, portal) for same customer'
    ],
    solution: 'We built a RAG pipeline ingesting all knowledge sources into a Pinecone vector store, with a LangChain orchestrator generating responses grounded in retrieved context. A confidence-based routing layer determined autonomous resolution vs human escalation.',
    solutionPoints: [
      'Unified vector knowledge base from Confluence, Notion, and PDFs using Pinecone',
      'LangChain RAG pipeline with source citation in every response',
      'Confidence-based routing: >85% confidence → auto-resolve, <85% → agent queue',
      'Customer context panel for agents showing full cross-channel history',
      'Continuous learning loop retraining retrieval on resolved ticket feedback',
      'Slack integration for agent escalation with pre-populated context'
    ],
    tech: ['Python', 'LangChain', 'Pinecone', 'GPT-4', 'Node.js', 'PostgreSQL', 'Slack API'],
    results: [
      { metric: '62%', label: 'Tickets resolved autonomously' },
      { metric: '6hrs→18min', label: 'First response time' },
      { metric: '2.3→1.1', label: 'Interactions per resolution' },
      { metric: '+22pts', label: 'NPS improvement in 90 days' }
    ],
    heroImg: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&auto=format&fit=crop',
    testimonial: { quote: 'First response time dropped from 6 hours to 18 minutes. Our agents now work on genuinely complex problems instead of answering the same 40 questions repeatedly.', author: 'VP of Customer Success, ServiceEdge' }
  },
  'cloud-migration': {
    id: 'cloud-migration',
    service: 'cloud',
    serviceTitle: 'Cloud Services',
    tag: 'Cloud Migration',
    title: 'Zero-Downtime Migration to AWS',
    subtitle: 'Migrated a 50,000 daily-user platform to AWS with zero downtime and 35% cost reduction.',
    overview: 'A full lift-and-shift migration of a monolithic on-premise application to a containerized AWS architecture — executed with a live traffic cutover strategy that achieved zero downtime across a 3-week migration window.',
    client: 'Cloudspace (SaaS Platform)',
    industry: 'B2B SaaS',
    timeline: '4 months',
    teamSize: '3 cloud engineers, 1 DBA',
    challenge: 'Cloudspace was running on aging on-premise hardware with unpredictable performance spikes, a manual deployment process, and no disaster recovery capability. A planned 40% user growth would have exceeded their physical capacity.',
    challengePoints: [
      'Aging on-premise hardware causing 4-6 unpredictable outages per month',
      'Manual deployments taking 4 hours with high rollback risk',
      'No disaster recovery — single point of failure across all services',
      'Database at 87% capacity with no clear path to scaling',
      'Compliance audit flagging infrastructure as non-SOC 2 ready'
    ],
    solution: 'We containerized the application with Docker, migrated the database to Aurora PostgreSQL with read replicas, and used AWS Application Load Balancer with blue-green deployments to achieve a zero-downtime cutover from on-premise to AWS.',
    solutionPoints: [
      'Containerized monolith with Docker, deployed on ECS Fargate',
      'Database migrated to Aurora PostgreSQL with read replicas',
      'Blue-green deployment with ALB for zero-downtime cutover',
      'S3 + CloudFront for static asset delivery (reducing origin load by 65%)',
      'Terraform for all infrastructure — fully reproducible and version-controlled',
      'CloudWatch dashboards and PagerDuty alerting from day one'
    ],
    tech: ['AWS ECS Fargate', 'Aurora PostgreSQL', 'Terraform', 'Docker', 'CloudFront', 'GitHub Actions'],
    results: [
      { metric: '0min', label: 'Downtime during migration' },
      { metric: '35%', label: 'Infrastructure cost reduction' },
      { metric: '4-6/mo→0', label: 'Monthly outage incidents' },
      { metric: 'SOC 2', label: 'Type II ready post-migration' }
    ],
    heroImg: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format&fit=crop',
    testimonial: { quote: 'We were live on AWS before our users noticed anything changed. The zero-downtime cutover was executed flawlessly and our infrastructure bill dropped by 35% in the first month.', author: 'Platform Lead, Cloudspace' }
  },
  'cloud-cicd': {
    id: 'cloud-cicd',
    service: 'cloud',
    serviceTitle: 'Cloud Services',
    tag: 'DevOps Automation',
    title: 'Enterprise CI/CD Pipeline Overhaul',
    subtitle: 'Release time cut from 4 hours to 12 minutes with full automated rollback support.',
    overview: 'A complete replacement of a fragile, semi-manual deployment process with a fully automated GitHub Actions CI/CD pipeline — including automated testing gates, environment promotion, canary deployments, and one-click rollback.',
    client: 'PayBridge (FinTech)',
    industry: 'Financial Technology',
    timeline: '2 months',
    teamSize: '2 DevOps engineers',
    challenge: 'PayBridge\'s release process required a dedicated ops engineer, 4 hours of manual coordination, and had failed catastrophically twice in 6 months — causing outages that cost the company clients. Engineers were avoiding deployments out of fear.',
    challengePoints: [
      '4-hour manual release requiring dedicated ops engineer presence',
      'Two major deployment failures in 6 months causing customer-facing outages',
      'No automated test execution before production deployment',
      'Rollback required 90 minutes of manual database intervention',
      'Engineers avoiding deployments creating a growing backlog of small changes'
    ],
    solution: 'We rebuilt the entire pipeline in GitHub Actions with environment-specific secrets, mandatory test gates, automated database migration validation, canary deployment to 5% traffic before full rollout, and automated rollback on error-rate spike.',
    solutionPoints: [
      'GitHub Actions pipeline with environment-specific OIDC secrets management',
      'Mandatory test gates: unit, integration, and E2E before any promotion',
      'Automated database migration dry-run with rollback on failure',
      'Canary deployment to 5% traffic with automated error-rate monitoring',
      'Automatic rollback triggered if error rate exceeds 0.5% threshold',
      'Deployment frequency moved from weekly to multiple times per day'
    ],
    tech: ['GitHub Actions', 'Docker', 'AWS ECS', 'Terraform', 'Playwright', 'Datadog'],
    results: [
      { metric: '4hrs→12min', label: 'Release cycle time' },
      { metric: '0', label: 'Failed production deployments since launch' },
      { metric: '8x', label: 'Increase in deployment frequency' },
      { metric: '90min→auto', label: 'Rollback time' }
    ],
    heroImg: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80&auto=format&fit=crop',
    testimonial: { quote: 'Our engineers went from dreading deployments to doing them 8x more frequently. The automatic rollback has caught two issues before customers noticed anything.', author: 'Engineering Lead, PayBridge' }
  },
  'cloud-k8s': {
    id: 'cloud-k8s',
    service: 'cloud',
    serviceTitle: 'Cloud Services',
    tag: 'Platform Engineering',
    title: 'Kubernetes Platform for Multi-Tenant SaaS',
    subtitle: 'A self-service Kubernetes platform enabling new tenant onboarding in under 4 minutes.',
    overview: 'Design and deployment of a Kubernetes-based internal developer platform (IDP) enabling a growing SaaS product to onboard new enterprise tenants in minutes with full namespace isolation, autoscaling, and per-tenant cost attribution.',
    client: 'HealthNode (Healthcare SaaS)',
    industry: 'Healthcare Technology',
    timeline: '5 months',
    teamSize: '3 platform engineers',
    challenge: 'HealthNode\'s manual tenant provisioning process took 2 days, required DevOps involvement for each new client, had no resource isolation between tenants, and could not support their aggressive growth target of 50 new enterprise customers per quarter.',
    challengePoints: [
      '2-day manual tenant provisioning requiring DevOps for each client',
      'No resource isolation — noisy neighbor incidents affecting multiple tenants',
      'No per-tenant cost attribution making pricing decisions impossible',
      'Engineers spending 30% of time on tenant ops instead of product',
      'No self-service capability for the customer success team'
    ],
    solution: 'We deployed a Kubernetes-based platform on EKS with namespace-per-tenant isolation, Helm chart templates for standard tenant provisioning, Karpenter for autoscaling, and Kubecost for per-tenant cost attribution — with a self-service portal for the CS team.',
    solutionPoints: [
      'AWS EKS cluster with namespace-per-tenant isolation and network policies',
      'Helm chart templates enabling self-service tenant provisioning',
      'Karpenter autoscaling with per-tenant resource quotas',
      'Kubecost integration for real-time per-tenant cost attribution',
      'RBAC policies ensuring tenants cannot access cross-namespace resources',
      'Self-service portal for customer success team to provision new tenants'
    ],
    tech: ['Kubernetes', 'AWS EKS', 'Helm', 'Terraform', 'Karpenter', 'Kubecost', 'ArgoCD'],
    results: [
      { metric: '2 days→4 min', label: 'Tenant provisioning time' },
      { metric: '100%', label: 'Tenant resource isolation' },
      { metric: '30%→5%', label: 'DevOps time on tenant ops' },
      { metric: '50/qtr', label: 'Enterprise tenant capacity' }
    ],
    heroImg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop',
    testimonial: { quote: 'Our customer success team can now provision a new enterprise tenant in 4 minutes without touching DevOps. The Kubernetes platform completely unblocked our growth.', author: 'CTO, HealthNode' }
  },
  'app-fourth': {
    id: 'app-fourth',
    service: 'app',
    serviceTitle: 'App Development',
    tag: 'Sports Marketplace',
    title: 'fourth. — Golf Tee Time Marketplace',
    subtitle: 'A real-time Flutter marketplace where golfers post open tee time spots and others join — preventing overbooking with atomic Firestore transactions.',
    overview: 'fourth. solves a universal golf frustration: showing up to play with an incomplete group. We built a real-time mobile marketplace where golfers can post upcoming tee times with open spots, and other players in their area can discover and join them. The app uses atomic Firestore batch writes to prevent double-booking, Riverpod for fully reactive state, and FCM push notifications to keep players coordinated.',
    client: 'fourth. (Golf Tech Startup)',
    industry: 'Sports & Leisure / Consumer Marketplace',
    timeline: '4 months',
    teamSize: '3 Flutter engineers, 1 designer',
    challenge: 'Golf is inherently social but coordinating foursomes is fragmented — texts, group chats, and last-minute cancellations. The client needed a marketplace with real-time availability, race-condition-safe join logic, and a native mobile feel that golfers would actually use on the course.',
    challengePoints: [
      'No reliable way for golfers to find open spots in real time without manual coordination',
      'Double-booking risk when multiple players attempt to join the last open spot simultaneously',
      'Need for deep-link routing so push notification taps open the exact tee time card',
      'Complex multi-tab navigation with independent state that had to persist across tab switches',
      'App had to feel native and fast — no web-view compromises acceptable for core flows',
    ],
    solution: 'We built a Flutter app with a Firestore real-time feed, atomic batch writes for the join transaction, Riverpod 3 with code-generated providers for every async stream, and a GoRouter shell with indexedStack for independent tab state persistence.',
    solutionPoints: [
      'Riverpod 3 + Riverpod Annotation: all state in generated providers, screens stay thin and testable',
      'Atomic Firestore batch writes on join — decrement spots and add participant in one transaction, impossible to double-book',
      'GoRouter 17 with StatefulShellRoute.indexedStack for independent per-tab navigation state',
      'Firebase Cloud Messaging + App Links for deep-linked push notifications routing to specific tee times',
      'Firebase AppCheck + Play Integrity API for production request security',
      'Shimmer loading states and empty-state views for every async screen — zero raw spinners',
    ],
    tech: ['Flutter', 'Dart', 'Firebase Firestore', 'Firebase Auth', 'Riverpod 3', 'GoRouter', 'FCM', 'Firebase Storage', 'AppCheck'],
    results: [
      { metric: '0', label: 'Double-booking incidents (atomic transactions)' },
      { metric: '120+', label: 'Dart files — fully modular feature structure' },
      { metric: '<200ms', label: 'Firestore real-time stream latency' },
      { metric: '2 stores', label: 'iOS + Android from one Flutter codebase' },
    ],
    heroImg: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80&auto=format&fit=crop',
    testimonial: { quote: 'The architecture is exactly what we needed — Riverpod keeps everything reactive, the join transaction has never failed, and the deep-link routing works perfectly from push notifications.', author: 'Founder, fourth. Golf App' }
  },
  'app-ptb': {
    id: 'app-ptb',
    service: 'app',
    serviceTitle: 'App Development',
    tag: 'Faith & Wellness',
    title: 'Pray the Bible — AI Prayer & Community App',
    subtitle: 'A cross-platform spiritual wellness app with ChatGPT-powered prayer generation, the full NET Bible, mood-based AI recommendations, prayer groups, and RevenueCat subscriptions.',
    overview: 'Pray the Bible (PTB AI) helps Christians build a consistent, AI-assisted prayer life. Users can generate personalized prayers from Bible verses, topics, or moods using ChatGPT — integrated via Firebase Cloud Functions. The app bundles the full 66-book NET Bible, a community prayer wall, private prayer groups, mood-based verse recommendations, and a Spiritual Growth dashboard. It runs on iOS, Android, and web — with a separate Flutter admin panel for content management.',
    client: 'PTB AI (Faith Tech Startup)',
    industry: 'Faith & Spiritual Wellness / Consumer SaaS',
    timeline: '8 months',
    teamSize: '4 Flutter engineers, 1 backend engineer, 1 designer',
    challenge: 'Christians seeking a structured prayer life had no tool that combined scripture, AI personalization, and community. The product required multiple AI prayer generation flows, a bundled offline Bible, community moderation, cross-platform (iOS/Android/web) delivery, and a sustainable subscription monetization model — all in one coherent app.',
    challengePoints: [
      'Four distinct AI prayer generation flows (verse-based, book chapter, topic, mood) each needing different prompt engineering and response formatting',
      'Full 66-book NET Bible had to be bundled as offline JSON assets with cross-reference viewer and chapter progress tracking',
      'Community prayer wall required AI moderation via Cloud Functions before any user-generated prayer went public',
      'RevenueCat subscription paywall had to gate premium features across iOS and Android with shared entitlement logic',
      'Hive-based theme system with multiple predefined themes switchable at runtime without app restart',
      'Separate Flutter web admin panel for non-dev content managers to manage Discover content without code deployments',
    ],
    solution: 'We architected PTB AI with Provider + GoRouter, 13+ Firebase Cloud Functions for AI orchestration and content pipelines, RevenueCat for subscription management, and Hive for local persistence. The full Bible was bundled as JSON assets split for performance. The web admin panel was built as a separate Flutter web target sharing Firebase credentials.',
    solutionPoints: [
      '13+ Firebase Cloud Functions: ChatGPT prayer generation, AI moderation, news parsing, content curation, FCM dispatch, and email automation',
      'Full NET Bible (66 books) bundled as JSON assets — offline-first, split into parts for parse performance',
      'RevenueCat integration for iOS/Android subscriptions: paywalls, entitlement checks, cancellation webhooks',
      'Hive local persistence for theme switching, user preferences, and cached content — zero Firestore reads on hot paths',
      'Provider + GoRouter architecture with ChangeNotifier state across 230+ Dart files in a clean feature-based module structure',
      'AI moderation Cloud Function gates every community prayer before it appears on the public wall',
      'Separate Flutter web admin panel sharing Firebase project for content and user management without developer involvement',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'ChatGPT API', 'RevenueCat', 'Provider', 'GoRouter', 'Hive', 'Firebase Auth', 'FCM', 'Google Ads'],
    results: [
      { metric: '13+', label: 'Firebase Cloud Functions (AI, content, push)' },
      { metric: '66 books', label: 'Full NET Bible bundled offline' },
      { metric: '4 flows', label: 'Distinct AI prayer generation modes' },
      { metric: '3 platforms', label: 'iOS, Android, and web from one codebase' },
    ],
    heroImg: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80&auto=format&fit=crop',
    testimonial: { quote: 'The AI prayer generation feels personal and theologically sound — the Cloud Functions architecture handles rate limiting and cost control so we scale confidently. The team delivered a complex, multi-platform product on time.', author: 'Founder, Pray the Bible AI' }
  },
  'fe-fourth': {
    id: 'fe-fourth',
    service: 'frontend',
    serviceTitle: 'Front-End Development',
    tag: 'Golf Marketplace',
    title: 'fourth. — Golf Tee-Time Web Platform',
    subtitle: 'Next.js 16 App Router site with island architecture — SSR-first, live Firestore share pages, and deep-link handling with near-zero client JavaScript.',
    overview: 'fourth. is a golf tee-time coordination platform that lets golfers post open spots, find players, and share live round tracking. We built the companion web platform — a Next.js 16 App Router site serving dual roles: a marketing site driving iOS/Android app downloads, and a live-data utility layer rendering shareable tee-time and round-tracker pages that work without the app installed.',
    client: 'fourth. (Golf Marketplace)',
    industry: 'Sports & Recreation Technology',
    timeline: '6 weeks',
    teamSize: '2 frontend engineers, 1 designer',
    challenge: 'The fourth. team needed a web presence that could serve two fundamentally different audiences simultaneously — prospective users who needed to be convinced to download the app, and existing golfers sharing round links with friends who might not have the app. A standard marketing site would handle the first; the second required live Firestore data rendered server-side so shared links loaded instantly without a client-side JS bundle or app install.',
    challengePoints: [
      'Share links had to work for users without the app — no React hydration delay on first load',
      'Live round data (current hole, elapsed time, player status) needed server-side Firestore reads to avoid exposing Firebase credentials in the browser',
      'iOS Universal Links and Android App Links required serving AASA and Digital Asset Link files with exact Content-Type headers',
      'Marketing page needed fast LCP for App Store conversion — every 100ms counted',
      'Zero UI library dependency — custom design system needed to match the mobile app brand exactly'
    ],
    solution: 'We architected the site on Next.js 16 App Router using an island architecture: the marketing page is a pure Server Component with a single client island for scroll-reveal animations. Dynamic share pages use Firebase Admin SDK server-side to read live Firestore data at request time, so the full tee-time state is in the initial HTML — no client JS required to see round progress. Universal Link and App Link files are served via Next.js route handlers with correct headers.',
    solutionPoints: [
      'Next.js 16 App Router with React 19 — Server Components by default throughout',
      'Island architecture: one client component (IntersectionObserver scroll-reveal) on the entire marketing page',
      'Firebase Admin SDK for server-side Firestore reads — API keys never reach the browser',
      'Dynamic share pages render live tee-time data (players, holes, ETA) in initial SSR HTML',
      'next/image with AVIF + WebP, priority LCP prop on hero, and aggressive Cache-Control headers',
      'Custom CSS design system with 16 tokens — no Tailwind, no UI library, pixel-matched to mobile app',
      'iOS AASA + Android DAL served via Next.js route handlers with programmatic Content-Type'
    ],
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Firebase Admin SDK', 'Firestore', 'Vercel', 'CSS Modules'],
    results: [
      { metric: '1 JS island', label: 'On entire marketing page' },
      { metric: '8 routes', label: '2 dynamic with live Firestore data' },
      { metric: 'SSR-first', label: 'Share pages load without app install' },
      { metric: '2 stores', label: 'iOS & Android deep-link coverage' }
    ],
    heroImg: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&auto=format&fit=crop',
    testimonial: { quote: 'The share pages work perfectly — golfers text a link to their group and everyone can see the live round without downloading the app. The marketing site converted exactly the way we needed it to.', author: 'Founder, fourth.' }
  },
  'fe-ptb': {
    id: 'fe-ptb',
    service: 'frontend',
    serviceTitle: 'Front-End Development',
    tag: 'Spiritual Wellness App',
    title: 'Pray the Bible AI — Cross-Platform Web Experience',
    subtitle: 'Flutter web build delivering 11 feature areas, 7 custom themes, AI prayer flows, and a PWA-installable experience across iOS, Android, and web.',
    overview: 'Pray the Bible AI is an AI-assisted prayer and Bible study platform for Christians. We built the full cross-platform frontend — a Flutter 3 web application covering 11 major feature areas including AI-generated prayers, a 66-book Bible browser, a community prayer wall, mood-based verse recommendations, and a spiritual growth dashboard — all sharing a single codebase deployed to iOS, Android, and web.',
    client: 'Pray the Bible AI',
    industry: 'Spiritual Wellness & Faith Tech',
    timeline: '5 months',
    teamSize: '3 Flutter engineers, 1 UI/UX designer',
    challenge: 'Building a spiritually-sensitive app for a faith audience meant the UI had to feel reverent and personal, not clinical. The product spanned 11 distinct feature areas — each with its own data model, AI integration, and interaction pattern — all required to share a single Flutter codebase that compiled to iOS, Android, and web without platform-specific rewrites. Seven distinct visual themes were required to match different user moods and worship styles.',
    challengePoints: [
      '11 major feature areas (Prayer, Bible Browser, Hub, Soul, Discover, My Journey, Voice, News, Auth, Settings, Web Landing) in one codebase',
      '7 handcrafted UI themes (Light, Dark, Aubergine, Holy Ember, Hoth, Scripture Sepia, Water) requiring full app-level theming',
      'AI prayer generation via Cloud Functions had to be responsive enough not to break the reverent UX flow',
      '66 JSON Bible books bundled as assets for offline scripture access — no network call required for scripture display',
      'Community prayer wall needed server-side AI moderation before posts went live — without adding latency to the submission flow',
      'RevenueCat cross-platform subscription state had to stay in sync across iOS, Android, and web simultaneously'
    ],
    solution: 'We applied a strict feature-folder architecture with one Provider class per feature area, GoRouter for URL-based navigation across all platforms, and Hive for offline-first local persistence. The entire NET Bible (66 books) was bundled as JSON assets so scripture loads instantly offline. AI prayer generation is gated behind Cloud Functions that keep the OpenAI key server-side, with shimmer placeholders maintaining the meditative feel during generation.',
    solutionPoints: [
      'Flutter 3 + Dart SDK ^3.8.1 — single codebase compiling to iOS, Android, and web',
      'Provider state management with one Provider class per feature area, enforced by architecture rules',
      'GoRouter for declarative URL-based navigation — deep-link compatible on all platforms',
      '66 NET Bible books bundled as JSON assets — instant offline scripture, zero network dependency',
      'Hive local persistence for prayers, theme preference, and cached content across sessions',
      '7 full-app themes with custom color systems — user-selectable without app restart',
      'Cloud Functions AI pipeline: OpenAI key stays server-side, shimmer loading maintains UX feel',
      'RevenueCat subscription management with webhook-triggered Firestore entitlement sync',
      'PWA manifest + splash screens for web installability'
    ],
    tech: ['Flutter 3', 'Dart', 'Firebase', 'Provider', 'GoRouter', 'RevenueCat', 'Hive', 'Cloud Functions'],
    results: [
      { metric: '11', label: 'Feature areas in one codebase' },
      { metric: '7', label: 'Custom UI themes' },
      { metric: '66', label: 'Bible books available offline' },
      { metric: '3 platforms', label: 'iOS, Android & Web from single build' }
    ],
    heroImg: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80&auto=format&fit=crop',
    testimonial: { quote: 'The team nailed the reverence we needed — every screen feels intentional. The fact that it runs on iOS, Android, and web from one codebase without any platform hacks is exactly what we asked for.', author: 'Founder, Pray the Bible AI' }
  },
  'directory': {
    id: 'directory',
    service: 'general',
    serviceTitle: 'Full-Stack Development',
    tag: 'Popular Listing',
    title: 'Local Business Directory Search Engine',
    subtitle: 'A smart local discovery platform connecting users with vendors across categories.',
    overview: 'Tulse City is a smart local business discovery platform connecting users with local vendors across categories including restaurants, doctors, hotels, and retail — featuring real-time search, ratings, map integration, and a merchant dashboard.',
    client: 'Tulse City Platform',
    industry: 'Local Commerce',
    timeline: '5 months',
    teamSize: '4 engineers, 2 designers',
    challenge: 'Local business discovery in the target market relied on word-of-mouth and fragmented Facebook groups. No unified platform offered filtered search, verified reviews, and merchant self-service in a single mobile-friendly experience.',
    challengePoints: [
      'No unified local discovery platform in the target market',
      'Real-time search needed across 10,000+ business listings',
      'Merchant self-service portal for updating business info and hours',
      'Map integration with accurate geolocation filtering',
      'Review system resistant to manipulation'
    ],
    solution: 'We built a full-stack platform with a React frontend, Node.js API, and PostgreSQL with PostGIS for geo queries. Elasticsearch powered sub-200ms search, and Mapbox provided the map integration. Merchants got a self-service portal for their listings.',
    solutionPoints: [
      'React frontend with Mapbox integration for geographic discovery',
      'Node.js API with Elasticsearch for sub-200ms full-text search',
      'PostgreSQL with PostGIS for radius-based geo filtering',
      'Merchant self-service portal for listings, hours, and photo management',
      'Verified review system with flagging and moderation queue',
      'Mobile-first PWA with offline capability for low-connectivity areas'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'Mapbox', 'PostGIS'],
    results: [
      { metric: '10,000+', label: 'Business listings at launch' },
      { metric: '<200ms', label: 'Search response time' },
      { metric: '85%', label: 'Mobile traffic share' },
      { metric: '4.5★', label: 'User rating on app stores' }
    ],
    heroImg: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&auto=format&fit=crop',
    testimonial: { quote: 'Tulse City gave our local business community a professional platform we had been asking for. The search and map experience is seamless.', author: 'Community Manager, Tulse City' }
  },
  'lms': {
    id: 'lms',
    service: 'general',
    serviceTitle: 'Full-Stack Development',
    tag: 'E-Learning',
    title: 'Learning Management System',
    subtitle: 'An enterprise SaaS LMS with certification management for corporate training.',
    overview: 'A full-featured enterprise LMS deployed as a SaaS platform — offering a vast course library with progress tracking, interactive module types, certification management, and a white-label option for corporate training programs.',
    client: 'EduCorp Learning Solutions',
    industry: 'Corporate Training / EdTech',
    timeline: '7 months',
    teamSize: '5 engineers, 2 designers',
    challenge: 'Corporate training programs were relying on outdated LMS platforms with poor UX, no mobile access, and certification systems that required manual PDF generation and email delivery.',
    challengePoints: [
      'Existing LMS had 42% mobile abandon rate due to non-responsive design',
      'Certification issuance required 3 days of manual processing',
      'No SCORM/xAPI support for existing content library',
      'Analytics limited to pass/fail — no learning path insights',
      'White-label needed for enterprise clients with brand requirements'
    ],
    solution: 'We built a multi-tenant SaaS LMS with SCORM/xAPI support, automated certificate generation, a learner analytics dashboard, and a white-label theming system — deployed on AWS with tenant data isolation.',
    solutionPoints: [
      'Multi-tenant SaaS architecture with full data isolation per organization',
      'SCORM 1.2/2004 and xAPI (Tin Can) support for existing content libraries',
      'Automated PDF certificate generation with cryptographic signing',
      'Learner analytics with path completion rates and engagement metrics',
      'White-label theming system for enterprise brand customization',
      'Offline-capable mobile PWA for field learners'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'SCORM', 'PDF generation'],
    results: [
      { metric: '42%→8%', label: 'Mobile abandon rate' },
      { metric: '3 days→instant', label: 'Certificate issuance time' },
      { metric: '94%', label: 'Course completion rate' },
      { metric: '50+', label: 'Enterprise organizations deployed' }
    ],
    heroImg: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80&auto=format&fit=crop',
    testimonial: { quote: 'The LMS replaced our fragmented training tools in one platform. Certificate automation alone saved our HR team 20 hours per week.', author: 'Head of L&D, EduCorp' }
  }
}

const techStack = [
  'React',
  'Angular',
  'Flutter',
  'Node/Express',
  'GraphQL',
  'MySQL',
  'MongoDB',
  'Python',
]

const homeTechStack = [
  { id: 'react', name: 'React' },
  { id: 'angular', name: 'Angular' },
  { id: 'flutter', name: 'Flutter' },
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
  if (id === 'app') {
    return <img src={appDevelopmentIcon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  }

  if (id === 'frontend') {
    return <img src={frontEndIcon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  }

  if (id === 'backend') {
    return <img src={backendIcon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  }

  if (id === 'arvr') {
    return <img src={arvrIcon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  }

  if (id === 'uiux') {
    return <img src={uiuxIcon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  }

  if (id === 'ai-ml') {
    return <img src={aimlIcon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  }

  if (id === 'cloud') {
    return <img src={cloudIcon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  }

  if (id === 'qa') {
    return <img src={qaIcon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  }

  if (id === 'enterprise') {
    return <img src={enterpriseIcon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  }

  if (id === 'dataviz') {
    return <img src={datavizIcon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  }

  // Fallback for 'app' and others (using the original box icon)
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
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

  if (id === 'flutter') {
    return (
      <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" style={{ height: '70px' }}>
        {/* Top chevron wing */}
        <polygon points="38,100 100,38 162,38 100,100" fill="#54C5F8" />
        {/* Bottom chevron wing */}
        <polygon points="100,100 162,162 100,162 69,131" fill="#54C5F8" />
        {/* Dark shadow triangle on bottom wing */}
        <polygon points="100,100 69,131 100,162 131,131" fill="#01579B" />
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
  if (type === 'flutter') {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 50L50 20H80L50 50L80 80H50L20 50Z" fill="#54C5F8" />
        <path d="M50 50L80 80H50L35 65L50 50Z" fill="#01579B" />
      </svg>
    )
  }
  if (type === 'firebase') {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 75L35 30L50 50L65 15L80 75L50 90L20 75Z" fill="#FFA000" />
        <path d="M50 50L65 15L80 75L50 90L50 50Z" fill="#F57C00" />
        <path d="M20 75L38 45L50 50L20 75Z" fill="#FFCA28" />
      </svg>
    )
  }
  if (type === 'riverpod') {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="35" stroke="#00BCD4" strokeWidth="6" fill="none" />
        <circle cx="50" cy="50" r="18" fill="#00BCD4" />
        <path d="M50 15V25M50 75V85M15 50H25M75 50H85" stroke="#00BCD4" strokeWidth="5" strokeLinecap="round" />
      </svg>
    )
  }
  if (type === 'openai') {
    return (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15C35 15 23 27 23 42C23 49 26 55 31 60L28 75L43 68C45 69 47 69 50 69C65 69 77 57 77 42C77 27 65 15 50 15Z" fill="#10A37F" />
        <path d="M38 42H62M44 33L50 42L56 33M44 51L50 42L56 51" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
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
          <Route path="/case-study/:caseStudyId" element={<CaseStudyPage />} />
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

                <NavLink
                  to={serviceHref('app')}
                  className="drop-light-item"
                  onClick={() => {
                    setServicesOpen(false)
                    setMenuOpen(false)
                  }}
                >
                  <div className="drop-light-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="drop-light-text">
                    <div className="drop-light-title">App Development</div>
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

const PROCESS_STEPS = [
  { id: 'brain', title: 'Brainstorming', sub: 'Ideas' },
  { id: 'design', title: 'Product', sub: 'Design' },
  { id: 'frontend', title: 'Front-End', sub: 'Development' },
  { id: 'backend', title: 'Back-End', sub: 'Development' },
  { id: 'seo', title: 'SEO', sub: 'Optimization' },
  { id: 'marketing', title: 'Digital', sub: 'Marketing' },
]

function ProcessMap() {
  const mapRef = useRef(null)
  const cardRefs = useRef([])
  const [pathD, setPathD] = useState('')

  useEffect(() => {
    const compute = () => {
      if (!mapRef.current) return
      const map = mapRef.current.getBoundingClientRect()
      const cards = cardRefs.current.map(el => {
        if (!el) return null
        const r = el.getBoundingClientRect()
        return {
          l: r.left - map.left,
          r: r.right - map.left,
          my: (r.top + r.bottom) / 2 - map.top,
        }
      })
      if (cards.some(c => !c)) return

      // card order: 0=Brainstorm 1=Product 2=Frontend 3=Backend(18%) 4=SEO(53%) 5=Digital
      // visual snake: row1 L→R (0,1,2), row2 R→L (4=SEO first, 3=Backend), row3 (5)
      const [c0, c1, c2, c3, c4, c5] = cards
      const y1 = c0.my
      const y2 = c4.my
      const y3 = c5.my
      const xR = c2.r + 30   // right-turn column (past Frontend)
      const xL = c3.l - 30   // left-turn column  (past Backend)
      const rad = 18

      const d = [
        `M ${c0.r} ${y1}`,                                   // start: right of Brainstorm
        `H ${c1.l}`,                                          // → dot: left of Product
        `H ${c2.l}`,                                          // → dot: left of Frontend
        `H ${xR - rad}`,                                      // approach right corner
        `Q ${xR} ${y1} ${xR} ${y1 + rad}`,                   // turn: right → down
        `V ${y2 - rad}`,                                      // vertical to row2
        `Q ${xR} ${y2} ${xR - rad} ${y2}`,                   // turn: down → left
        `H ${c4.r}`,                                          // → dot: right of SEO
        `H ${c3.r}`,                                          // → dot: right of Backend
        `H ${xL + rad}`,                                      // approach left corner
        `Q ${xL} ${y2} ${xL} ${y2 + rad}`,                   // turn: left → down
        `V ${y3 - rad}`,                                      // vertical to row3
        `Q ${xL} ${y3} ${xL + rad} ${y3}`,                   // turn: down → right
        `H ${c5.l}`,                                          // → dot: left of Digital
      ].join(' ')

      setPathD(d)
    }
    const t = setTimeout(compute, 80)
    window.addEventListener('resize', compute)
    return () => { clearTimeout(t); window.removeEventListener('resize', compute) }
  }, [])

  return (
    <div className="process-map" ref={mapRef}>
      <svg fill="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, overflow: 'visible' }}>
        {pathD && (
          <path d={pathD} stroke="#4c7ef3" strokeWidth="1.5" strokeDasharray="7 5" strokeLinecap="round" opacity="0.65" />
        )}
      </svg>
      <div className="process-steps-wrap">
        {PROCESS_STEPS.map((step, idx) => (
          <div key={step.id} className={`process-step-card step-${idx + 1}`}
            ref={el => { cardRefs.current[idx] = el }}>
            <div className="step-icon"><ProcessIcon id={step.id} /></div>
            <div className="step-label">
              <strong>{step.title}</strong>
              <span>{step.sub}</span>
            </div>
            <div className="step-dot" />
          </div>
        ))}
      </div>
    </div>
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
              <ProcessMap />
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
                <img src={ourHistoryIcon} alt="Our History" style={{ width: '100%', height: '100%' }} />
              </div>
              <h3 className="value-title">Our History</h3>
              <p className="value-description">
                Fifteen years ago, we merged technology with creativity, crafting over 600 digital solutions.
                Each project tells a story, reflecting our dedication to innovation and excellence.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon value-icon-mission">
                <img src={ourMissionIcon} alt="Our Mission" style={{ width: '100%', height: '100%' }} />
              </div>
              <h3 className="value-title">Our Mission</h3>
              <p className="value-description">
                We aim to be architects of digital evolution, crafting custom solutions that surpass
                expectations, turning the ordinary into extraordinary through visionary technology and innovation.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon value-icon-vision">
                <img src={ourVisionIcon} alt="Our Vision" style={{ width: '100%', height: '100%' }} />
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
                  <img src={estaTrustedIcon} alt="Trusted Companies" style={{ width: '100%', height: '100%' }} />
                </div>
                <h3 className="stat-number">600+</h3>
                <p className="stat-label">Companies Trust Us</p>
              </div>

              <div className="stat-box">
                <div className="stat-icon stat-icon-green">
                  <img src={estaSuccessIcon} alt="Success Stories" style={{ width: '100%', height: '100%' }} />
                </div>
                <h3 className="stat-number">280+</h3>
                <p className="stat-label">Success Stories</p>
              </div>

              <div className="stat-box">
                <div className="stat-icon stat-icon-purple">
                  <img src={estaYearsIcon} alt="Years of Experience" style={{ width: '100%', height: '100%' }} />
                </div>
                <h3 className="stat-number">15+</h3>
                <p className="stat-label">Years of experience</p>
              </div>

              <div className="stat-box">
                <div className="stat-icon stat-icon-orange">
                  <img src={estaClientIcon} alt="Client Satisfaction" style={{ width: '100%', height: '100%' }} />
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
                    <img src={isoLogoIcon} alt="ISO 9001 Certification" className="iso-icon" style={{ objectFit: 'contain' }} />
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
                    <img src={isoLogoIcon} alt="ISO 27001 Certification" className="iso-icon" style={{ objectFit: 'contain' }} />
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
                    <img src={serviQualityIcon} alt="Quality Comes First" />
                  </div>
                  <h3>Quality Comes First</h3>
                </div>

                <div className="why-service-horizontal-item">
                  <div className="why-service-horizontal-icon why-icon-flexible">
                    <img src={serviFlexibleIcon} alt="Flexible Cooperation" />
                  </div>
                  <h3>Flexible Cooperation</h3>
                </div>

                <div className="why-service-horizontal-item">
                  <div className="why-service-horizontal-icon why-icon-delivery">
                    <img src={serviDeliveryIcon} alt="On-time Delivery" />
                  </div>
                  <h3>On-time Delivery</h3>
                </div>

                <div className="why-service-horizontal-item">
                  <div className="why-service-horizontal-icon why-icon-transparent">
                    <img src={serviTransparentIcon} alt="Transparent Costs" />
                  </div>
                  <h3>Transparent Costs</h3>
                </div>

                <div className="why-service-horizontal-item">
                  <div className="why-service-horizontal-icon why-icon-developers">
                    <img src={serviQualifiedIcon} alt="Qualified Developers" />
                  </div>
                  <h3>Qualified Developers</h3>
                </div>

                <div className="why-service-horizontal-item">
                  <div className="why-service-horizontal-icon why-icon-scale">
                    <img src={serviQuickIcon} alt="Quick Scale-up" />
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
                    <NavLink to={`/case-study/${cs.id}`} className="case-study-link">
                      Read full case study
                      <ArrowIcon />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {['backend', 'uiux', 'frontend', 'ai-ml', 'cloud', 'app'].includes(activeService.id) && (
        <section className="section-pad home-consulting-section">
          <div className="container consulting-grid">
            <div className="consulting-left reveal">
              <p className="consulting-kicker">OUR PROCESS</p>
              <h2>
                {activeService.id === 'ai-ml' ? 'Practical, Iterative, Intelligence-First' :
                  activeService.id === 'cloud' ? 'Resilient, Automated, Always Observable' :
                    activeService.id === 'frontend' ? 'Discover, Design, Deliver — Front-End at Full Speed' :
                      activeService.id === 'app' ? 'Architect, Build, Ship — Mobile Done Right' :
                        'Innovative, Collaborative, Seamless Designs'}
              </h2>
              <p className="consulting-lead">
                {activeService.id === 'ai-ml'
                  ? 'SightInfusion builds AI solutions anchored in real business problems. From use-case discovery to model deployment, our process ensures your AI investment delivers measurable, production-ready results.'
                  : activeService.id === 'cloud'
                    ? 'SightInfusion engineers cloud infrastructure for reliability, speed, and growth. Our process covers architecture planning, automated provisioning, and ongoing observability from day one.'
                    : activeService.id === 'frontend'
                      ? 'SightInfusion front-end teams move fast without breaking things. From component architecture to final delivery, our structured process keeps every sprint on time and every pixel on spec.'
                      : activeService.id === 'app'
                        ? 'SightInfusion delivers production-ready Flutter apps from architecture to App Store. Our structured process eliminates ambiguity at every phase — so you get a polished, scalable app without surprises.'
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
                          activeService.id === 'frontend' ? 'Discover and align' :
                            'Discuss your requirements'}
                    </h3>
                    <p>
                      {activeService.id === 'ai-ml'
                        ? 'We map out your business challenge, identify the right AI approach, and assess the data available — building a clear scope before any model work begins.'
                        : activeService.id === 'cloud'
                          ? 'We review your existing stack, workloads, and pain points — identifying the gaps in reliability, security, and scalability before recommending a path forward.'
                          : activeService.id === 'frontend'
                            ? 'We audit your existing codebase, align on your brand and audience, and map out component architecture, design tokens, and breakpoints before writing a line of code.'
                            : 'We begin by understanding your vision, goals, and audience, ensuring the design aligns with your business needs.'}
                    </p>
                  </div>
                </div>

                <div className="czz-row czz-row-left">
                  <div className="czz-card czz-card-left">
                    <h3>
                      {activeService.id === 'ai-ml' ? 'Prototype and validate the approach' :
                        activeService.id === 'cloud' ? 'Design and provision the architecture' :
                          activeService.id === 'frontend' ? 'Design and prototype' :
                            'Create a plan and assemble a team'}
                    </h3>
                    <p>
                      {activeService.id === 'ai-ml'
                        ? 'We build a focused proof-of-concept, validate model accuracy, and iterate on the pipeline with real data before committing to full production build-out.'
                        : activeService.id === 'cloud'
                          ? 'Our engineers define the target architecture in IaC, provision environments through automated pipelines, and document every component for your team.'
                          : activeService.id === 'frontend'
                            ? 'Our designers produce high-fidelity Figma prototypes with motion specs and responsive variants, validated before the build sprint starts.'
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
                            activeService.id === 'frontend' ? 'Build, test, and deliver' :
                              'Get to work'}
                    </h3>
                    <p>
                      {activeService.id === 'ai-ml'
                        ? 'We deploy models to production with monitoring, alerting, and retraining pipelines so your AI stays accurate and reliable as your data evolves.'
                        : activeService.id === 'cloud'
                          ? 'We deploy your infrastructure, wire up monitoring and alerting, and run load and failover tests — then hand off runbooks and on-call guides so your team owns it.'
                          : activeService.id === 'uiux'
                            ? 'Our designers deliver high-fidelity screens, design systems, and interactive prototypes, refined through testing and feedback.'
                            : activeService.id === 'frontend'
                              ? 'Developers implement designs with accessibility audits, cross-browser testing, and Lighthouse performance checks — delivering clean, documented component code.'
                              : 'Our developers build and optimize your back-end with secure APIs and thorough testing for seamless operation.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {['backend', 'uiux', 'frontend', 'ai-ml', 'cloud', 'app'].includes(activeService.id) && (
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

      {['backend', 'uiux', 'frontend', 'ai-ml', 'cloud', 'app'].includes(activeService.id) && (() => {
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

      {['backend', 'uiux', 'frontend', 'ai-ml', 'cloud', 'app'].includes(activeService.id) && (
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

function CaseStudyPage() {
  const { caseStudyId } = useParams()
  const cs = caseStudiesDetail[caseStudyId]

  if (!cs) {
    return (
      <section className="section-pad">
        <div className="container" style={{ textAlign: 'center', padding: '8rem 0' }}>
          <h2>Case study not found</h2>
          <NavLink to="/services" className="service-hero-btn" style={{ marginTop: '2rem', display: 'inline-flex' }}>
            Back to Services
            <svg viewBox="0 0 24 24" fill="none"><path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </NavLink>
        </div>
      </section>
    )
  }

  const featIcons = [
    <svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" /><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" /></svg>,
    <svg viewBox="0 0 24 24" fill="none"><path d="M3 12h4l3 8 4-16 3 8h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    <svg viewBox="0 0 24 24" fill="none"><path d="M4 7l8-4 8 4-8 4-8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M4 12l8 4 8-4M4 17l8 4 8-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  ]
  const related = Object.values(caseStudiesDetail)
    .filter(c => c.id !== cs.id)
    .sort((a, b) => (a.service === cs.service ? -1 : 0) - (b.service === cs.service ? -1 : 0))
    .slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="cs-hero">
        <div className="cs-hero-glow" />
        <div className="container">
          <div className="cs-detail-breadcrumb reveal">
            <NavLink to="/">Home</NavLink>
            <span>/</span>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <span>/</span>
            <span>{cs.title}</span>
          </div>
          <div className="cs-hero-grid reveal">
            <div className="cs-hero-head">
              <span className="cs-detail-tag">{cs.tag}</span>
              <h1 className="cs-hero-title">{cs.title}</h1>
              <p className="cs-hero-subtitle">{cs.subtitle}</p>
              <div className="cs-hero-meta">
                <div className="cs-hero-meta-item"><span>Client</span><strong>{cs.client}</strong></div>
                <div className="cs-hero-meta-item"><span>Industry</span><strong>{cs.industry}</strong></div>
                <div className="cs-hero-meta-item"><span>Timeline</span><strong>{cs.timeline}</strong></div>
                <div className="cs-hero-meta-item"><span>Team</span><strong>{cs.teamSize}</strong></div>
              </div>
            </div>
            <div className="cs-hero-figure">
              <img src={cs.heroImg} alt={cs.title} className="cs-hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Results — floating stat cards */}
      <section className="cs-stats">
        <div className="container">
          <div className="cs-stats-grid reveal">
            {cs.results.map((r, i) => (
              <div key={i} className="cs-stat-card">
                <div className="cs-stat-metric">{r.metric}</div>
                <div className="cs-stat-label">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview + Challenge/Approach cards */}
      <section className="section-pad cs-overview-section">
        <div className="container">
          <div className="cs-overview-head reveal">
            <span className="cs-section-tag">PROJECT OVERVIEW</span>
            <h2>{cs.overview}</h2>
          </div>
          <div className="cs-split-cards reveal">
            <div className="cs-split-card cs-card-challenge">
              <span className="cs-card-kicker">The Challenge</span>
              <p>{cs.challenge}</p>
              <ul className="cs-card-list">
                {cs.challengePoints.slice(0, 4).map((pt, i) => (
                  <li key={i}><span className="cs-dash" />{pt}</li>
                ))}
              </ul>
            </div>
            <div className="cs-split-card cs-card-approach">
              <span className="cs-card-kicker">Our Approach</span>
              <p>{cs.solution}</p>
              <ul className="cs-card-list">
                {cs.solutionPoints.slice(0, 4).map((pt, i) => (
                  <li key={i}>
                    <svg className="cs-li-check" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key features grid */}
      <section className="section-pad cs-features-section">
        <div className="container">
          <div className="cs-section-header cs-center reveal">
            <span className="cs-section-tag">KEY FEATURES</span>
            <h2>What makes it work</h2>
          </div>
          <div className="cs-features-grid reveal">
            {cs.solutionPoints.map((pt, i) => (
              <div key={i} className="cs-feature-card">
                <div className="cs-feature-icon">{featIcons[i % featIcons.length]}</div>
                <p>{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section-pad cs-tech-section">
        <div className="container">
          <div className="cs-section-header cs-center reveal">
            <span className="cs-section-tag">TECHNOLOGY STACK</span>
            <h2>Built with a modern toolchain</h2>
          </div>
          <div className="cs-tech-tags reveal">
            {cs.tech.map((t, i) => (
              <span key={i} className="cs-tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {cs.testimonial && (
        <section className="cs-testimonial-section">
          <div className="container">
            <div className="cs-testimonial-card reveal">
              <div className="cs-quote-mark">&ldquo;</div>
              <p className="cs-testimonial-quote">{cs.testimonial.quote}</p>
              <p className="cs-testimonial-author">— {cs.testimonial.author}</p>
            </div>
          </div>
        </section>
      )}

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="section-pad cs-related-section">
          <div className="container">
            <div className="cs-section-header cs-center reveal">
              <span className="cs-section-tag">MORE WORK</span>
              <h2>Related case studies</h2>
            </div>
            <div className="cs-related-grid reveal">
              {related.map((c) => (
                <NavLink key={c.id} to={`/case-study/${c.id}`} className="cs-related-card">
                  <div className="cs-related-img-wrap">
                    <img src={c.heroImg} alt={c.title} />
                  </div>
                  <div className="cs-related-body">
                    <span className="cs-related-tag">{c.tag}</span>
                    <h3>{c.title}</h3>
                    <span className="cs-related-link">View case study
                      <svg viewBox="0 0 24 24" fill="none"><path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cs-cta-section">
        <div className="container">
          <div className="cs-cta-inner reveal">
            <div className="cs-cta-text">
              <span className="cs-section-tag cs-tag-light">START YOUR PROJECT</span>
              <h2>Ready for results like these?</h2>
              <p>Tell us about your challenge and we will put together the right team and approach to get you there.</p>
            </div>
            <NavLink to="/contact" className="service-hero-btn cs-cta-btn">
              Get in Touch
              <svg viewBox="0 0 24 24" fill="none"><path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

const portfolioFilters = ['All', 'Backend', 'Frontend', 'UI/UX', 'AI/ML', 'Cloud', 'App']
const portfolioServiceMap = {
  backend: 'Backend',
  frontend: 'Frontend',
  uiux: 'UI/UX',
  'ai-ml': 'AI/ML',
  cloud: 'Cloud',
  app: 'App',
}

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const allProjects = Object.values(caseStudiesDetail)
  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => portfolioServiceMap[p.service] === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="pf-hero">
        <div className="container">
          <div className="pf-hero-inner reveal">
            <span className="pf-kicker">Our Work</span>
            <h1 className="pf-title">Projects that<br />deliver real results</h1>
            <p className="pf-subtitle">
              {Object.keys(caseStudiesDetail).length} projects across backend, frontend, AI/ML, cloud, and UI/UX — each built to solve a specific problem and move a business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="pf-stats-strip">
        <div className="container">
          <div className="pf-stats-row">
            <div className="pf-stat"><strong>17</strong><span>Case Studies</span></div>
            <div className="pf-stat-divider" />
            <div className="pf-stat"><strong>5</strong><span>Service areas</span></div>
            <div className="pf-stat-divider" />
            <div className="pf-stat"><strong>600+</strong><span>Projects delivered</span></div>
            <div className="pf-stat-divider" />
            <div className="pf-stat"><strong>99%</strong><span>Client satisfaction</span></div>
          </div>
        </div>
      </div>

      {/* Filter + Grid */}
      <section className="pf-grid-section">
        <div className="container">
          {/* Filter tabs */}
          <div className="pf-filters reveal">
            {portfolioFilters.map(f => (
              <button
                key={f}
                className={`pf-filter-btn${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="pf-grid reveal">
            {filtered.map((project) => (
              <NavLink
                key={project.id}
                to={`/case-study/${project.id}`}
                className="pf-card"
              >
                <div className="pf-card-img-wrap">
                  <img src={project.heroImg} alt={project.title} />
                  <span className="pf-card-service">{portfolioServiceMap[project.service]}</span>
                </div>
                <div className="pf-card-body">
                  <span className="pf-card-tag">{project.tag}</span>
                  <h3 className="pf-card-title">{project.title}</h3>
                  <p className="pf-card-desc">{project.subtitle}</p>
                  <div className="pf-card-metrics">
                    {project.results.slice(0, 2).map((r, i) => (
                      <div key={i} className="pf-metric">
                        <strong>{r.metric}</strong>
                        <span>{r.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pf-card-footer">
                    <span className="pf-card-link">
                      View case study
                      <svg viewBox="0 0 24 24" fill="none"><path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <div className="pf-card-tech">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pf-cta">
        <div className="container">
          <div className="pf-cta-inner reveal">
            <div>
              <h2>Have a project in mind?</h2>
              <p>Tell us what you're building and we'll put together the right team.</p>
            </div>
            <NavLink to="/contact" className="service-hero-btn">
              Start a conversation
              <svg viewBox="0 0 24 24" fill="none"><path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </NavLink>
          </div>
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
