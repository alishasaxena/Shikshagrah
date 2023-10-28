import { Statement } from "@angular/compiler";

export const navigationLinks: { label: string; route: string }[] = [
  { label: 'Home', route: '/' },
  { label: 'Approach', route: '/approach' },
  { label: 'Mahotsav', route: '/mahotsav' },
  { label: 'Micro-Improvement Pitaara', route: '/explore' },
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
    stat: ' 5',
    decimalData: '.98L',
    sign: '+',
    desc: 'Total number of micro-improvements',
  }
]

export const cardsData: Card[] = [
  {
    title: 'Infrastructure',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    image: 'assets/images/micro-improve/m1.png',
    buttonLabel: 'Learn More',
    route: '/infrastructure',
    blogs: [
      {
        title: 'School resources',
        description: 'The HM understands the importance of having good school resources',
        tags: ['HM'],
        date: '2 weeks',
        objective: 'To improve the resources available in the school',
        sqaDomain: '',
        subCategory: 'Physical Infrastructure',
        stepsTaken: [
          "Assess the current resources and infrastructure available in the school",
          "Detail the needs of the school",
          "Identify resources that the community can support with",
          "List the requirements which needs to be procured",
          "Share the list with the CRP",
        ]
      },
      {
        title: 'Bringing back the dropouts',
        description: 'To engage with teachers and SMC members to create a plan to bring back students who have dropped out to school.',
        tags: ['HT'],
        date: '1 month',
        objective: 'To engage teachers and SMC members to create a plan to bring back students who have dropped out to school.',
        sqaDomain: 'Infrastructure',
        subCategory: 'Physical Infrastructure',
        stepsTaken: [
          'Create a consolidated list of students who have dropped out of school',
          'Organise a meeting with teachers and SMC members',
          'Identify the reasons for dropouts',
          'Identify strategies to bring dropout students back into the school system',
          'Create an action plan',
          'Assign tasks to members at the meeting based on strategies',
          'Implement the strategies',
          'Conduct a follow-up session for updates and challenges',
          'Document the learnings, challenges, experiences'
        ],
      },
      {
        title: 'School Exposure Visit',
        description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
        tags: ['HT', 'SMC'],
        date: '2 weeks',
        objective: 'To conduct an exposure visit for parents and students to local primary schools.',
        sqaDomain: '',
        subCategory: 'Physical Infrastructure',
        stepsTaken: [
          'Identify the local primary school to visit for exposure',
          'Connect with the local primary school HM to schedule an exposure visit',
          'Inform parents about the primary school and exposure visit to school',
          'Plan the visit to the primary school',
          'Plan an interactive session with the primary school HM, teacher, and students',
          'Take feedback from parents on the visit'
        ]
      }
    ]
  },
  {
    title: 'curriculum, Pedagogy Assessment ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    image: 'assets/images/micro-improve/m3.png',
    buttonLabel: 'Explore',
    route: '/infrastructure',
    blogs: [
      {
        title: 'To conduct an exposure visit for parents and students to local primary schools.',
        description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
        tags: ['HM & Teachers ', 'SMC'],
        date: '4 weeks'
      }
    ]
  },
  {
    title: 'Human Resources',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    image: 'assets/images/micro-improve/m4.png',
    buttonLabel: 'Read More',
    route: '/infrastructure',
    blogs: [
      {
        title: 'To conduct an exposure visit for parents and students to local primary schools.',
        description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
        tags: ['HM & Teachers ', 'SMC'],
        date: '4 weeks'
      }
    ]
  },
  {
    title: 'Inclusive Practices',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    image: 'assets/images/micro-improve/m5.png',
    buttonLabel: 'Discover',
    route: '/infrastructure',
    blogs: [
      {
        title: 'To conduct an exposure visit for parents and students to local primary schools.',
        description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
        tags: ['HM & Teachers ', 'SMC'],
        date: '4 weeks'
      }
    ]
  },
  {
    title: 'Management & Governance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    image: 'assets/images/micro-improve/m6.png',
    buttonLabel: 'Get Started',
    route: '/infrastructure',
    blogs: [
      {
        title: 'To conduct an exposure visit for parents and students to local primary schools.',
        description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
        tags: ['HM & Teachers ', 'SMC'],
        date: '4 weeks'
      }
    ]
  },
  {
    title: 'Leadership',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    image: 'assets/images/micro-improve/m7.png',
    buttonLabel: 'View Details',
    route: '/infrastructure',
    blogs: [
      {
        title: 'To conduct an exposure visit for parents and students to local primary schools.',
        description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
        tags: ['HM & Teachers ', 'SMC'],
        date: '4 weeks'
      }
    ]
  },
  {
    title: 'Beneficiary satisfaction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    image: 'assets/images/micro-improve/m2.png',
    buttonLabel: 'See More',
    route: '/infrastructure',
    blogs: [
      {
        title: 'To conduct an exposure visit for parents and students to local primary schools.',
        description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
        tags: ['HM & Teachers ', 'SMC'],
        date: '4 weeks'
      }
    ]

  },
];

interface Blog {
  title: string;
  description: string;
  tags: string[];
  date: string;
  objective?: string;
  sqaDomain?: string;
  subCategory?: string;
  stepsTaken?: string[];
}

interface Card {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  route: string;
  blogs?: Blog[];
}

export interface CardsData {
  cardsData: Card[];
}


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
    description: 'The HM understands the importance of having good school resources.',
    tags: ['HM'],
    date: '4 weeks'
  },
  {
    title: 'To engage with teachers and SMC members to create a plan to bring back students who have dropped out to school.',
    description: '',
    tags: ['Teachers', 'Education'],
    date: '4 weeks'
  },
  {
    title: 'HT will take a walk around the school to observe that proper safety measures are implemented.',
    description: 'HTs takes a walk around school to ensure that the difference spaces in the school',
    tags: ['HT And Officials'],
    date: '4 weeks'
  },
  {
    title: 'HT will be able to improve the infrastructural development within the school to make the physical space engaging and lively',
    description: 'Building as a Learning Aid , or BaLA - create a plan to develop',
    tags: ['HT And Officials'],
    date: '4 weeks'
  },

];


export const exposureVisit: ExposureVisit[] = [
  {
    objective: "To conduct an exposure visit for parents and students to local primary schools.",
    description: "This event may be organized in the village or community a few months before enrollment into Std I and once again at the time when Std I classes begins.",
    recommendedFor: ['HM & Teachers', 'SMC'],
    recommendedDuration: "4 Weeks",
    sqaaDomain: "Curriculum, Pedagogy Assessment",
    subDomain: "Access",
    stepsTaken: [
      "Identify the local primary school to visit for exposure.",
      "Connect with local primary school HM to schedule an exposure visit.",
      "Inform parents about the primary school and exposure visit to school.",
      "Plan the visit to the primary school.",
      "Plan an interactive session with the primary school HM, teacher, and students.",
      "Take feedback from the parents on the visit."
    ]
  },

  {
    objective: "Heyyy an exposure visit for parents and students to local primary schools.",
    description: "This event may be organized in the village or community a few months before enrollment into Std I and once again at the time when Std I classes begin.",
    recommendedFor: ['HM & Teachers', 'SMC'],
    recommendedDuration: "4 Weeks",
    sqaaDomain: "Curriculum, Pedagogy Assessment",
    subDomain: "Access",
    stepsTaken: [
      "Identify the local primary school to visit for exposure.",
      "Connect with local primary school HM to schedule an exposure visit.",
      "Inform parents about the primary school and exposure visit to school.",
      "Plan the visit to the primary school.",
      "Plan an interactive session with the primary school HM, teacher, and students.",
      "Take feedback from the parents on the visit."
    ]
  }
];



export const sortOptions: string[] = [
  "A-Z",
  "Z-A",
]

export const roleOptions: string[] = [
  "Teachers",
  "HM",
  "SMC",
  "Education Leader",
  "Panchayat"
]
export interface ExposureVisit {
  objective: string;
  description: string;
  recommendedFor: any;
  recommendedDuration: string;
  sqaaDomain: string;
  subDomain: string;
  stepsTaken: any;
}

// interface Card {
//   title: string;
//   description: string;
//   image: string;
//   buttonLabel: string;
//   route: string;
//   blogs: Blog;
// }

interface Stats {
  stat: string;
  desc: string;
  decimalData?: string;
  sign?: string;
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

// interface Blog {
//   title: string;
//   description: any;
//   date: string;
//   tags: any;
// }