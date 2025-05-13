type Project = {
  name: string
  description: string
  link: string
  thumbnail: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type Resource = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Scalable semantics in a post-http world',
    description:
      'Comparing two rival information systems pitched and developed at DARPA',
    link: 'mailto:jacob.b.friedman@gmail.com?subject=Curious: Scalable semantics in a post-http world',
    thumbnail: 'layer-cake',
    id: 'projectprolog',
  },
  {
    name: 'Navigating logical blockchains',
    description: 'When a 50 year-old A.I. language acts as a consensus protocol',
    link: 'mailto:jacob.b.friedman@gmail.com?subject=Curious: Navigating logical blockchains',
    thumbnail: 'paxos',
    id: 'project2',
  },
  {
    name: 'Always settling for more',
    description:
      'Demographic-led product alternations in the world of insurance buyouts',
    link: 'mailto:jacob.b.friedman@gmail.com?subject=Curious: Always settling for more (insurance buyouts)',
    thumbnail: 'american-life-settlement',
    id: 'project1',
  },
  {
    name: 'A new dimension of medicine',
    description:
      'Applying anomaly detection on reverse-engineered ultrasounds',
    link: 'mailto:jacob.b.friedman@gmail.com?subject=Curious: A new dimension of medicine (ultrasounds)',
    thumbnail: 'ultrasound',
    id: 'projecthp',
  },
  {
    name: 'The once-greener grass',
    description: 'Operating in the gray while driving the largest marijuana producers in Toronto',
    link: 'mailto:jacob.b.friedman@gmail.com?subject=Curious: The once-greener grass (Soco)',
    thumbnail: 'soco',
    id: 'project2',
  },

  {
    name: 'Effective pop art popups',
    description:
      'Piloting an iconic demand driver through the heart of a city',
    link: 'mailto:jacob.b.friedman@gmail.com?subject=Curious: Effective pop art popups (Warhol)',
    thumbnail: 'warhol',
    id: 'projectwarhol',
  },


]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Permion, Inc.',
    title: 'Product Manager, A.I.',
    start: '2023',
    end: 'Present',
    link: 'https://permion.ai',
    id: 'work1',
  },
  {
    company: 'Permion, Inc.',
    title: 'Senior A.I. Software Developer',
    start: '2021',
    end: '2023',
    link: 'https://permion.ai',
    id: 'work2',
  },
  {
    company: 'Recipe Unlimited',
    title: 'Principal Software Architect',
    start: '2018',
    end: '2021',
    link: 'https://www.recipeunlimited.com/',
    id: 'work3',
  },
  {
    company: 'Chief Technology Officer / Co-Founder',
    title: 'VusionVR, Inc.',
    start: '2015',
    end: '2018',
    link: 'https://www.facebook.com/VusionVR',
    id: 'work4',
  },
  {
    company: 'Chief Executive Officer / Founder',
    title: 'Subsumo Media, Inc.',
    start: '2008',
    end: '2017',
    link: '#',
    id: 'work5',
  },
]

export const BLOG_POSTS: BlogPost[] = [
]

export const WORKING_GROUPS: Resource[] = [

]

export const RESOURCES: Resource[] = [
  {
    title: 'Topological Quantum Computer decodes the Stock Market Behavior',
    description: 'Manipulating pairs of quasi-particles, [...] in braided trajectories',
    link: '/resource/topological-quantum-computer-decodes-the-stock-market-behaviour.pdf',
    uid: 'resource-1',
  },
  {
    title: 'Random Discrete Distributions',
    description:
      'The 1975 "Heaps" problem discussed with PJ Burville',
    link: '/resource/random-discrete-distributions',
    uid: 'resource-2',
  },
  {
    title: 'Verilator: the fastest Verilog/SystemVerilog simulator.',
    description:
      'Moving from software to hardware',
    link: 'https://www.veripool.org/verilator/',
    uid: 'resource-3',
  },

  {
    title: 'Siliwiz:',
    description:
      'MOSFETS are the most manufactured object in the world',
    link: 'https://app.siliwiz.com/',
    uid: 'resource-4',
  },
]


export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jacobfriedman',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/jacobfriedman',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jacobbfriedman',
  }
]

export const EMAIL = 'jacob.b.friedman@gmail.com'
