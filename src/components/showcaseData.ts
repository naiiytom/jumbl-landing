export interface ShowcaseSlide {
  id: string;
  image: string;
  badge: string;
  title: string;
  description: string;
  alt: string;
}

export const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: 'focus',
    image: '/screenshots/mockup-1.jpg',
    badge: 'Focus Mode',
    title: 'Distraction-Free Sessions',
    description: 'Real-time reading timer with one-tap page logging and progress bar.',
    alt: 'Jumbl Focus Mode: real-time reading session with page progress and distraction-free timer',
  },
  {
    id: 'review',
    image: '/screenshots/mockup-2.jpg',
    badge: 'Session Review',
    title: 'Track Daily Progress',
    description: 'Review total time spent reading and confirm final pages reached.',
    alt: 'Jumbl Session Review: summary showing reading duration, pages reached, and progress saving',
  },
  {
    id: 'achievements',
    image: '/screenshots/mockup-3.jpg',
    badge: 'Achievements',
    title: 'Milestones & Badges',
    description: 'Celebrate your dedication with 18+ unlockable reading achievements.',
    alt: 'Jumbl Achievements: celebration dialog for newly unlocked reading milestones and badges',
  },
  {
    id: 'collection',
    image: '/screenshots/mockup-4.jpg',
    badge: 'Visual History',
    title: 'Gold Habit Heatmap',
    description: 'GitHub-style activity heatmap and annual reading goal progress.',
    alt: 'Jumbl Collection: reading stats summary, yearly book goal, and gold activity heatmap',
  },
  {
    id: 'library',
    image: '/screenshots/mockup-5.jpg',
    badge: 'Curated Library',
    title: 'Book Pile Management',
    description: 'Effortlessly organize your unread pile and pick what to read next.',
    alt: 'Jumbl Tracker: book list selection sheet for quick switching between active reading books',
  },
  {
    id: 'tracker',
    image: '/screenshots/mockup-6.jpg',
    badge: 'Smart Tracker',
    title: 'Active Focus Card',
    description: 'Seamlessly resume reading right where you left off with persistent timers.',
    alt: 'Jumbl Tracker Card: persistent active reading focus card with quick resume button',
  },
];
