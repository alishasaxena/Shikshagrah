// Sample Data
export const navigationLinks: { label: string; route: string }[] = [
  { label: 'Home', route: '/' },
  { label: 'Approach', route: '/approach' },
  { label: 'Mahotsav', route: '/mahotsav' },
  { label: 'Micro-Improvement Pitaara', route: '/micro-improvement' },
];

export const heroData: HeroSection = {
  title: 'Welcome to Our Website',
  subtitle: 'Discover Amazing Things Here',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const cardsData: Card[] = [
  {
    title: 'Card 1',
    description: 'Description for Card 1',
    image: 'path/to/image1.jpg',
    buttonLabel: 'Learn More',
  },
  {
    title: 'Card 2',
    description: 'Description for Card 2',
    image: 'path/to/image2.jpg',
    buttonLabel: 'Explore',
  },
  {
    title: 'Card 3',
    description: 'Description for Card 3',
    image: 'path/to/image3.jpg',
    buttonLabel: 'Read More',
  },
  {
    title: 'Card 4',
    description: 'Description for Card 4',
    image: 'path/to/image4.jpg',
    buttonLabel: 'Discover',
  },
  {
    title: 'Card 5',
    description: 'Description for Card 5',
    image: 'path/to/image5.jpg',
    buttonLabel: 'Get Started',
  },
  {
    title: 'Card 6',
    description: 'Description for Card 6',
    image: 'path/to/image6.jpg',
    buttonLabel: 'View Details',
  },
  {
    title: 'Card 7',
    description: 'Description for Card 7',
    image: 'path/to/image7.jpg',
    buttonLabel: 'See More',
  },
];

export const blogsData: Blog[] = [
  {
    title: 'Card 1',
    description: 'Description for Card 1',
    details: [
      { time: '10:00 AM', title: 'Event 1', description: 'Description for Event 1', tags: ['Tag1', 'Tag2'] },
      { time: '12:00 PM', title: 'Event 2', description: 'Description for Event 2', tags: ['Tag3', 'Tag4'] },
      // Add more events as needed
    ],
  },
  {
    title: 'Card 2',
    description: 'Description for Card 2',
    details: [
      { time: '2:00 PM', title: 'Event 3', description: 'Description for Event 3', tags: ['Tag5', 'Tag6'] },
      { time: '4:00 PM', title: 'Event 4', description: 'Description for Event 4', tags: ['Tag7', 'Tag8'] },
      // Add more events as needed
    ],
  },
  // Add more cards as needed
];

// Interface for Cards
interface Card {
  title: string;
  description: string;
  image: string; // Path to the image
  buttonLabel: string;
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

// Interface for Cards
interface Blog {
  title: string;
  description: string;
  details: CardDetail[];
}