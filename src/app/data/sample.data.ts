import { Statement } from "@angular/compiler";

export const navigationLinks: { label: string; route: string }[] = [
  { label: 'Home', route: '/' },
  { label: 'Approach', route: '/approach' },
  { label: 'Mahotsav', route: '/mahotsav' },
  { label: 'Micro-Improvement Pitaara', route: '/micro-improvement' },
];

export const heroData: HeroSection = {
  title: 'Vidya amrit',
  subtitle: 'small steps to build great schools',
  description: 'Vidya Amrit aims to encourage, recognize, and nurture innovations across the 1.5 million school in our eductaion system, by breaking down big ideas into a series of micro-improvements.',
};

export const stats: Stats[] = [
  {
    stat: '30',
    desc: 'State/UTs',
  },
  {
    stat: '290+',
    desc: 'Districts',
  },
  {
    stat: '50+',
    desc: 'Unique MI Projects',
  },
  {
    stat:' 5.98L+', 
    desc: 'Total number of micro-improvements',
  }
]

export const cardsData: Card[] = [
  {
    title: 'Infrastructure',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    image: 'assets/images/micro-improve/m1.png',
    buttonLabel: 'Learn More',
    route: '/infrastructure'
  },
  {
    title: 'curriculum, Pedagogy Assessment ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    image: 'assets/images/micro-improve/m3.png',
    buttonLabel: 'Explore',
    route: '/infrastructure'
  },
  {
    title: 'Human Resources',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    image: 'assets/images/micro-improve/m4.png',
    buttonLabel: 'Read More',
    route: '/infrastructure'
  },
  {
    title: 'Inclusive Practices',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    image: 'assets/images/micro-improve/m5.png',
    buttonLabel: 'Discover',
    route: '/infrastructure'
  },
  {
    title: 'Management & Governance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    image: 'assets/images/micro-improve/m6.png',
    buttonLabel: 'Get Started',
    route: '/infrastructure'
  },
  {
    title: 'Leadership',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    image: 'assets/images/micro-improve/m7.png',
    buttonLabel: 'View Details',
    route: '/infrastructure'
  },
  {
    title: 'Beneficiary satisfaction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    image: 'assets/images/micro-improve/m2.png',
    buttonLabel: 'See More',
    route: '/infrastructure'
  },
];

export const blogsData: Blog[] = [
  {
    title: 'To conduct an exposure visit for parents and students to local primary schools.',
    description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
    tags: ['HM & Teachers ', 'SMC'],
    date: '4 weeks'
  },
  {
    title: 'To enable community to improve the infrastructural development of community surrounding to make the physical space engaging and lively',
    description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
    tags: ['HM & Teachers ', 'Panchayat'],
    date: '4 weeks'
  },
  {
    title: 'To improve the resources available in the school',
    description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
    tags: ['HM'],
    date: '4 weeks'
  },
  {
    title: 'To engage with teachers and SMC members to create a plan to bring back students who have dropped out to school.',
    description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
    tags: ['Teachers', 'Education'],
    date: '4 weeks'
  },
  {
    title: 'HT will take a walk around the school to observe that proper safety measures are implemented.',
    description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
    tags: ['HT And Officials'],
    date: '4 weeks'
  },
  {
    title: 'HT will be able to improve the infrastructural development within the school to make the physical space engaging and lively',
    description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
    tags: ['HT And Officials'],
    date: '4 weeks'
  },

];


const exposureVisit: ExposureVisit = {
  objective: "To conduct an exposure visit for parents and students to local primary schools.",
  description: "This event may be organized in the village or community a few months before enrollment into Std I and once again at the time when Std I classes begin.",
  recommendedDuration: "4 Weeks",
  sqaaDomain: "Curriculum, Pedagogy Assessment",
  subDomain: "Access",
  stepsTaken: [
    { stepNumber: 1, description: "Identify the local primary school to visit for exposure." },
    { stepNumber: 2, description: "Connect with local primary school HM to schedule an exposure visit." },
    { stepNumber: 3, description: "Inform parents about the primary school and exposure visit to school." },
    { stepNumber: 4, description: "Plan the visit to the primary school." },
    { stepNumber: 5, description: "Plan an interactive session with the primary school HM, teacher, and students." },
    { stepNumber: 6, description: "Take feedback from the parents on the visit." }
  ]
};
export interface ExposureVisit {
  objective: string;
  description: string;
  recommendedDuration: string;
  sqaaDomain: string;
  subDomain: string;
  stepsTaken: ExposureVisitStep[];
}
export interface ExposureVisitStep {
  stepNumber: number;
  description: string;
}
interface Card {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  route: string;
}

interface Stats {
  stat: string;
  desc: string;
}

interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
}


interface CardDetail {
  time: string;
  title: string;
  description: string;
  tags: string[];
}

interface Blog {
  title: string;
  description: string;
  date: string;
  tags: any;
}