import { Braces, Cpu, Workflow } from 'lucide-react';

type IconType = typeof Cpu;

export type Stat = { value: string; label: string };

export type Product = {
  slug: string;
  icon: IconType;
  name: string;
  title: string;
  label: string;
  description: string;
  overview: string;
  badges: string[];
  stats: Stat[];
  capabilities: string[];
};

export const products: Product[] = [
  {
    slug: 'nexabis',
    icon: Cpu,
    name: 'NexABIS',
    title: 'Automated Biometric Identification System',
    label: 'Matching Engine',
    description:
      'Enterprise-grade biometric matching for identification, verification, deduplication, and watchlist search across population-scale identity programs.',
    overview:
      'A comprehensive Automated Biometric Identification System for foundational identity operations — end-to-end biometric enrollment, deduplication, and lifecycle management for National ID, Voter Registration, and Social Inclusion programs.',
    badges: ['ABIS Platform', 'Multi-Modal Biometrics', '500M+ Capacity'],
    stats: [
      { value: '<200ms', label: '1:N search response' },
      { value: '99.7%', label: 'Rank-1 accuracy' },
      { value: '500M+', label: 'record capacity' },
    ],
    capabilities: [
      'Fingerprint, face & iris matching',
      'Large-scale 1:N deduplication',
      'Real-time quality checks (NFIQ)',
      'Encrypted template storage',
    ],
  },
  {
    slug: 'nexsas',
    icon: Workflow,
    name: 'NexSAS',
    title: 'Smart Adjudication System',
    label: 'Adjudication Layer',
    description:
      'An expert-driven adjudication workspace for human-led verification of possible matches — with intelligent case routing, supervisor review, and complete audit trails.',
    overview:
      'A Smart Adjudication System for human-led biometric verification workflows. It gives expert adjudicators advanced tools for comparing fingerprint, face, and iris evidence, with configurable case routing, supervisor oversight, and complete audit trails.',
    badges: ['SAS Platform', 'Human-Led Verification', 'Audit-Ready'],
    stats: [
      { value: '99.8%', label: 'decision accuracy' },
      { value: '2.4m', label: 'avg. review time' },
      { value: 'Full', label: 'audit & decision history' },
    ],
    capabilities: [
      'Smart workflow & case routing',
      'Multi-modal evidence comparison',
      'Supervisor review & QA',
      'Real-time dashboards & analytics',
    ],
  },
  {
    slug: 'nexsdk',
    icon: Braces,
    name: 'NexSDK',
    title: 'Multi-Modal Biometric SDK',
    label: 'Developer Toolkit',
    description:
      'A developer-ready SDK for embedding biometric capture, liveness, verification, and template extraction into mobile, desktop, and enterprise applications.',
    overview:
      'A multi-modal biometric SDK for developers and system integrators — fingerprint, face, and iris engines with liveness, quality checks, template extraction, and native & REST APIs for secure identity verification.',
    badges: ['Multi-Modal SDK', 'ISO/IEC 19794', 'Cross-Platform'],
    stats: [
      { value: '<100ms', label: '1:1 match speed' },
      { value: '3', label: 'biometric modalities' },
      { value: '5+', label: 'platforms supported' },
    ],
    capabilities: [
      'Fingerprint, face & iris engines',
      'Liveness & anti-spoofing',
      'Native & REST APIs',
      'Standards-compliant templates',
    ],
  },
];

export const getProduct = (slug?: string): Product | undefined =>
  products.find((product) => product.slug === slug);
