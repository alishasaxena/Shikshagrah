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
    route: '/domain/infrastructure',
    blogs: [
      {
        title: 'School resources',
        description: 'The HM understands the importance of having good school resources',
        tags: ['HM'],
        date: '2 weeks',
        objective: 'To improve the resources available in the school',
        sqaDomain: 'Infrastructure',
        subCategory: 'Physical Infrastructure',
        isVideo: true,

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
        stepsTaken:  [
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
        sqaDomain: 'Infrastructure',
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
    route: '/domain/curriculum',
    blogs: [
      {
        title: ' Vocabulary Expansion',
        description: 'The HM understands the importance of having good school resources',
        tags: ['English Teachers'],
        date: '1 Month',
        objective: 'Build vocabulary of student by conducting classroom activities',
        sqaDomain: 'curriculum, Pedagogy Assessment',
        subCategory: 'Physical Infrastructure',
        stepsTaken: [
          'Conduct an activity to assess the vocabulary level of students',
          'Create a plan of action to introduce thematic vocabulary activities weekly',
          'Spend 15 minutes to conduct thematic vocabulary activities and form sentences using newly learned words',
          'Assess your students\' vocabulary periodically and make changes to your plan',
          'Plan for a classroom-level showcase where students demonstrate their newly learned vocabulary and phrases'
        ],
      },
      {
        title: ' Vocabulary Expansion',
        description: 'The HM understands the importance of having good school resources',
        tags: ['English Teachers'],
        date: '1 Month',
        objective: 'Build vocabulary of student by conducting classroom activities',
        sqaDomain: 'curriculum, Pedagogy Assessment',
        subCategory: 'Physical Infrastructure',
        stepsTaken: [
          'Conduct an activity to assess the vocabulary level of students',
          'Create a plan of action to introduce thematic vocabulary activities weekly',
          'Spend 15 minutes to conduct thematic vocabulary activities and form sentences using newly learned words',
          'Assess your students\' vocabulary periodically and make changes to your plan',
          'Plan for a classroom-level showcase where students demonstrate their newly learned vocabulary and phrases'
        ],
      },
       {
        title: ' Vocabulary Expansion',
        description: 'The HM understands the importance of having good school resources',
        tags: ['English Teachers'],
        date: '1 Month',
        objective: 'Build vocabulary of student by conducting classroom activities',
        sqaDomain: 'curriculum, Pedagogy Assessment',
        subCategory: 'Physical Infrastructure',
        stepsTaken: [
          'Conduct an activity to assess the vocabulary level of students',
          'Create a plan of action to introduce thematic vocabulary activities weekly',
          'Spend 15 minutes to conduct thematic vocabulary activities and form sentences using newly learned words',
          'Assess your students\' vocabulary periodically and make changes to your plan',
          'Plan for a classroom-level showcase where students demonstrate their newly learned vocabulary and phrases'
        ],
      }
    ]
  },
  {
    title: 'Human Resources',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    image: 'assets/images/micro-improve/m4.png',
    buttonLabel: 'Read More',
    route: '/domain/hr',
    blogs: [
      {
        title: "Teacher's motivation matters",
        description: "HM will be able to assess the motivation level of their teachers and take necessary steps to keep teachers motivated",
        tags: ['HM'],
        date: '1 month',
        objective: 'Ensure that the teachers are motivated',
        sqaDomain: 'Human Resources',
        subCategory: 'Mentoring opportunities',
        stepsTaken: [
          'Conduct a small baseline survey to map the motivation level of teachers',
          'Organize small sharing circles with teachers daily',
          'Schedule 1-1 conversation with every teacher in a month',
          'Discuss the challenges faced by the teacher',
          'Create an action plan with the teacher for identified areas of improvement',
          'Observe Samiksha Reports to analyze the change in the motivation level of teachers'
        ],
      },
      {
        title: "Teacher Mela",
        description: "Create a space for teachers to share their best practices, learning, and ideas by conducting a teacher mela.",
        tags: ['HM'],
        date: '2 weeks',
        objective: 'To conduct effective engagement amongst all the teachers',
        sqaDomain: 'Human Resources',
        subCategory: 'Staff recognition',
        stepsTaken: [
          'Send a survey form to understand teacher\'s expectation from the mela',
          'Organise & conduct a meeting with teachers to discuss the Teacher Mela',
          'List down the activities for the Teacher Mela',
          'Allocate the responsibilities for the Teacher Mela',
          'Arrange the logistics to organise the mela',
          'Communicate the schedule for teacher mela',
          'Conduct the Teacher mela',
          'Ask the teachers for the feedback post Mela',
          'Document the Mela proceedings'
        ],
      },
      {
          title: "Effective Staff Meeting",
          description: "It can help an HM to plan and conduct an effective staff meeting.",
          tags: ['HM'],
          date: '2 weeks',
          objective: 'Plan and conduct an effective staff meeting.',
          sqaDomain: 'Human Resources',
          subCategory: 'Structures and processes',
          stepsTaken: [
            'Set the agenda for the staff meeting',
            'Share the time, date, and agenda with the teachers',
            'Plan the meeting flow',
            'Share the discussion points with teachers',
            'Ask any teacher to write minutes during the meeting',
            'Discuss the possible agenda for the next meeting',
            'Ask teachers for feedback and document it'
          ],
      },
    ]
  },
  {
    title: 'Inclusive Practices',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    image: 'assets/images/micro-improve/m5.png',
    buttonLabel: 'Discover',
    route: '/domain/practices',
    blogs: [
      {
        title: 'Sensitization for inclusion',
        description: 'To sensitize teachers and SMCs towards under represented groups',
        tags: ['Education Leader'],
        date: '2 weeks',
        objective: 'To improve the resources available in the school',
        sqaDomain: 'Inclusive Practices',
        subCategory: 'Physical Infrastructure',
        stepsTaken:[
          'Collect data on the under-represented groups\' (SEDGs) children in your school/community',
          'Communicate date and agenda with teachers and SMC members for a meeting',
          'Share the data collected on the SEDGs with teachers and SMCs in the meeting',
          'List down the challenges in access to their education in the meeting',
          'Conduct an open forum to understand the views of teachers and SMCs',
          'Identify the approaches to include under-represented groups in the school',
          'Plan for a follow-up meeting to discuss the implementation of the identified approaches for inclusion',
          'Document the minutes of the meeting'
        ],
      },
      {
        title: 'Improving infrastructure for students with special needs',
        description: 'To improve the school infrastructure and resources to increase access for students with special needs',
        tags: ['Education Leader'],
        date: '1 Month',
        objective: 'To improve the resources available in the school',
        sqaDomain: 'Inclusive Practices',
        subCategory: 'Physical Infrastructure',
        stepsTaken:[
          'Plan to visit the schools in the cluster',
          'Visit to assess the current resources and infrastructure available in the schools',
          'Detail the needs of the schools which need to be procured',
          'Create a proposal for the procurement of resources for schools in the cluster',
          'Share the proposal with the BEO/BRP'
        ]
      },
      {
        title: 'Unity in Diversity',
        description: 'Using Republic day as an opportunity to help bridge the gap created by the pandemic and once again inculcate the sense of belonging by organizing an event where each stakeholder involve gets the opportunity to present their views and interact with each other.',
        tags: ['Head teacher'],
        date: '1 Month',
        objective: 'HT will be able to involve community to conduct Republic day effectively',
        sqaDomain: 'Inclusive Practices',
        subCategory: 'Physical Infrastructure',
        stepsTaken: [
          'Organize & conduct a meeting with teachers to discuss Republic Day',
          'List down the activities for the event',
          'Identify ways in which people in the community can contribute to the event',
          'Reach out to the community to support the event',
          'Allocate tasks of the event among the teachers and community',
          'Conduct the Republic Day event',
          'Take feedback from the attendees of the event'
        ]
      },
    ]
  },
  {
    title: 'Management & Governance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    image: 'assets/images/micro-improve/m6.png',
    buttonLabel: 'Get Started',
    route: '/domain/management',
    blogs: [
      {
        title: 'Building a Shared School Vision',
        description: 'The HM understands the importance of having good school resources',
        tags: ['School Leaders'],
        date: '2 weeks',
        objective: 'School leaders (Principals, HMs and HTs) will conduct activities for increasing enrolment of students in their schools.',
        sqaDomain: 'Management & Governance',
        subCategory: 'School Vision',
        stepsTaken: [
          'Plan and invite all staff members for a learning circle',
          'During the learning circle, discuss and gather info about the present situation of the school',
          'Identify and make note of the top priorities of the school',
          'Write together a clear shared vision statement',
          'Finalize the vision statement using the checklist',
          'Conclude the learning circle with action steps for achieving the vision',
          'Collect feedback from staff members on their experience'
        ]
      },
       {
        title: 'Making the Vision Come Alive',
        description: 'The HM understands the importance of having good school resources',
        tags: ['School Leaders'],
        date: '2 weeks',
        objective: 'Block and district level officials will support school leaders in conducting enrolment program to increase the enrolment in their schools.',
        sqaDomain: 'Management & Governance',
        subCategory: 'Communication with Community',
        stepsTaken:[
          'Conduct a meeting to plan activities for the campaign with staff members',
          'Create a schedule & assign responsibilities for conducting the activities',
          'Invite the parents and students to participate in the campaign',
          'Conduct the activities for the school vision campaign',
          'Capture the best moments of the campaign',
          'Reflect on the campaign using this form'
        ]
      },
       {
        title: 'Aao School Chalein',
        description: 'The HM understands the importance of having good school resources',
        tags: ['Principals', 'HMs', 'HTs'],
        date: '1 Month',
        objective: 'To engage with teachers and SMC members to create a plan to bring back students who have dropped out to school.',
        sqaDomain: 'Management & Governance',
        subCategory: 'Admission Drive',
        stepsTaken:[
          'Collect and analyze the enrollment data from the last 5 years',
          'Conduct a meeting with teachers and SMC members to discuss and set the enrollment target for this year',
          'Form a working committee and plan activities and timeline for the enrollment program',
          'Conduct different enrollment activities along with the working committee',
          'Calculate the percentage increase in enrollment from the last year',
          'Create an enrollment report'
        ]
      }
    ]
  },
  // data not provided for leadership
  {
    title: 'Leadership',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    image: 'assets/images/micro-improve/m7.png',
    buttonLabel: 'View Details',
    route: '/domain/leadership',
    blogs: [
      {
        title: 'Game Day with parents',
        description: 'The HM understands the importance of having good school resources',
        tags: ['HM'],
        date: '2 weeks',
        objective: 'To improve the resources available in the school',
        sqaDomain: '',
        subCategory: 'Parent Engagement',
        stepsTaken: [
          "Assess the current resources and infrastructure available in the school",
          "Detail the needs of the school",
          "Identify resources that the community can support with",
          "List the requirements which needs to be procured",
          "Share the list with the CRP",
        ]
      },
      {
        title: 'Gender Equitable Parenting ',
        description: 'The HM understands the importance of having good school resources',
        tags: ['HM'],
        date: '2 weeks',
        objective: 'To improve the resources available in the school',
        sqaDomain: '',
        subCategory: 'Parent Engagement',
        stepsTaken: [
          "Assess the current resources and infrastructure available in the school",
          "Detail the needs of the school",
          "Identify resources that the community can support with",
          "List the requirements which needs to be procured",
          "Share the list with the CRP",
        ]
      },
      {
        title: 'పిల్లలకోసం PTM',
        description: 'The HM understands the importance of having good school resources',
        tags: ['HM'],
        date: '2 weeks',
        objective: 'To improve the resources available in the school',
        sqaDomain: '',
        subCategory: 'Parent Engagement',
        stepsTaken: [
          "Assess the current resources and infrastructure available in the school",
          "Detail the needs of the school",
          "Identify resources that the community can support with",
          "List the requirements which needs to be procured",
          "Share the list with the CRP",
        ]
      }
    ]
  },
  {
    title: 'Beneficiary satisfaction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    image: 'assets/images/micro-improve/m2.png',
    buttonLabel: 'See More',
    route: '/domain/beneficiary',
    blogs: [
      {
        title: 'Enabling collaboration between school and parents',
        description: 'Fostering collaboration between schools and parents involves creating open channels for communication, shared educational goals, and active engagement to ensure the holistic development and success of students.',
        tags: ['Head Teachers'],
        date: '1 month',
        objective: 'Develop parent engagement plan',
        sqaDomain: 'Beneficiary satisfaction',
        subCategory: 'Parent Engagement',
        stepsTaken: [
          'Identify the factors that motivate/demotivate parents to participate in school activities',
          'Take suggestions from SMC/standing committee members on parents\' involvement for improving students\' learning',
          'Conduct a staff meeting to discuss parents\' expectations to improve students\' learning and enablers/barriers for the same',
          'List down priority areas for parents\' engagement through meeting reflections',
          'Develop an annual calendar of parent engagement activities'
        ]
      },
       {
        title: 'Learning at Home',
        description: 'Fostering collaboration between schools and parents involves creating open channels for communication, shared educational goals, and active engagement to ensure the holistic development and success of students.',
        tags: ['Head Teachers'],
        date: '1 month',
        objective: "Orienting parents on how they can engage in students' learning process at home ",
        sqaDomain: 'Beneficiary satisfaction',
        subCategory: 'Parent Engagement',
        stepsTaken:[
          'Collaborate with teachers/SMC members to conduct home visits to understand the home scenario',
          'Conduct a staff meeting to discuss & prepare guidelines for parents\' engagement in the student learning process at home',
          'Organize a session for parents to orient on the importance of parental engagement in children\'s learning',
          'Discuss the guidelines with parents and take their suggestions on it',
          'Finalize and share the guidelines with them'
        ]
      },
       {
        title: 'Game day with parents',
        description: 'Fostering collaboration between schools and parents involves creating open channels for communication, shared educational goals, and active engagement to ensure the holistic development and success of students.',
        tags: ['Head Teachers'],
        date: '1 month',
        objective: 'To build an understanding about the importance of regular attendance in the classroom',
        sqaDomain: 'Beneficiary satisfaction',
        subCategory: 'Parent Engagement',
        stepsTaken: [
          'Invite parents with invitation cards designed by students',
          'During staff meeting, curate benefits & consequences of regular & irregular attendance respectively',
          'During staff meeting, design game(s) with teachers & assign them roles as Facilitator, Co-facilitator, Observer for different games',
          'During the game day, discuss benefits & consequences of regular & irregular attendance respectively with parents',
          'During the game day, acknowledge parents of students who attend school regularly',
          'Post game day, develop a collaborative action plan to overcome attendance barriers discussed with parents & teachers',
          'Post game day, upload Self-Evaluation form and photographs from the "game day"'
        ]
      }
    ]

  },
];

interface Blog {
  title: string;
  description: string;
  tags: string[];
  date: string;
  objective: string;
  sqaDomain: string;
  subCategory: string;
  stepsTaken: string[];
  isVideo? : boolean;

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
  // {
  //   title: 'To conduct an exposure visit for parents and students to local primary schools.',
  //   description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
  //   tags: ['HM & Teachers ', 'SMC'],
  //   date: '4 weeks'
  // },
  // {
  //   title: 'To enable community to improve the infrastructural development of community surrounding to make the physical space engaging and lively',
  //   description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
  //   tags: ['HM & Teachers ', 'Panchayat'],
  //   date: '4 weeks'
  // },
  // {
  //   title: 'To improve the resources available in the school',
  //   description: 'The HM understands the importance of having good school resources.',
  //   tags: ['HM'],
  //   date: '4 weeks'
  // },
  // {
  //   title: 'To engage with teachers and SMC members to create a plan to bring back students who have dropped out to school.',
  //   description: '',
  //   tags: ['Teachers', 'Education'],
  //   date: '4 weeks'
  // },
  // {
  //   title: 'HT will take a walk around the school to observe that proper safety measures are implemented.',
  //   description: 'HTs takes a walk around school to ensure that the difference spaces in the school',
  //   tags: ['HT And Officials'],
  //   date: '4 weeks'
  // },
  // {
  //   title: 'HT will be able to improve the infrastructural development within the school to make the physical space engaging and lively',
  //   description: 'Building as a Learning Aid , or BaLA - create a plan to develop',
  //   tags: ['HT And Officials'],
  //   date: '4 weeks'
  // },

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

export const roleOptions : string[] =  [
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