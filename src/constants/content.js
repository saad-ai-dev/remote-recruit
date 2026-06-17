export const ASSETS = "/assets/";

export const features = [
  {
    eyebrow: "Global Reach",
    title: "The First Fully Global Job Board, Anywhere, Ever",
    body:
      "RemoteRecruit connects candidates with opportunities around the world. With today's remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.",
    image: "job-board-card.png",
    imageAlt: "RemoteRecruit job board interface with candidate cards",
    align: "right"
  },
  {
    eyebrow: "Actually Fee Free",
    title: "Fee-Free Forever",
    body:
      "We don't charge you fees and we don't put up paywalls. We're the bridge that connects job opportunities with the best candidates, with no middleman involved.",
    image: "profile-card.png",
    imageAlt: "Premium membership card showing fee-free job posting features",
    align: "left"
  },
  {
    eyebrow: "Custom Profile",
    title: "Showcase Your Talents",
    body:
      "Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.",
    image: "job-board-card-alt.png",
    imageAlt: "Candidate profile showcase with skill tags and client feedback",
    align: "right"
  }
];

export const faqs = [
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No long-term contract is required. RemoteRecruit is built for flexible hiring and job discovery, so teams and talent can move at the pace that works for them."
  },
  {
    question: "Can I pay for a whole year?",
    answer:
      "Yes. The monthly Premium plan can be adapted for longer billing cycles when you want to simplify ongoing hiring access."
  },
  {
    question: "What if I need help?",
    answer:
      "Help is always close by. Use the support flow to get guidance with setup, posting, profiles, and account questions."
  }
];

export const freeFeatures = [
  "1 Active Job",
  "Basic List Placement",
  "Unlimited Job Applicants",
  "Invite Anyone to Apply to Your Jobs"
];

export const premiumFeatures = [
  "Unlimited Job Posts",
  "Instant Job Post Approval",
  "Premium List Placement",
  "Unlimited Job Applicants"
];

export const categoryCards = [
  {
    label: "New Applicants",
    count: "+50 Individuals",
    active: true,
    icon: "users"
  },
  {
    label: "Invites",
    count: "50 Individuals",
    icon: "mail"
  },
  {
    label: "Shortlisted",
    count: "50 Individuals",
    icon: "clipboard"
  },
  {
    label: "Rejected",
    count: "50 Individuals",
    icon: "reject"
  }
];

export const applicants = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: "Joel Diamond",
  title: "Software Engineer",
  subtitle: "Building Solutions, One Line of Code at a Time",
  hourly: index % 2 === 0 ? "$120 - $234" : "$123 - $234",
  skills: ["Photoshop", "Figma", "illustration"]
}));

export const appNavItems = [
  { label: "Find Candidates", icon: "search" },
  { label: "Your Job Posts", icon: "briefcase", active: true, badge: "8" },
  { label: "Profile", icon: "user" },
  { label: "Messages", icon: "message", badge: "23" },
  { label: "Settings", icon: "settings" },
  { label: "Help", icon: "help" }
];

export const socialLinks = [
  {
    label: "Facebook",
    path:
      "M13.5 8.6h2.1V5.2c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.4 2-5.4 5.7V14H3.5v3.8H7V27h4.3v-9.2h3.4l.5-3.8h-3.9v-2.9c0-1.1.3-1.8 2.2-1.8Z",
    viewBox: "0 0 30 30"
  },
  {
    label: "Instagram",
    paths: [
      "M15 9.2A5.8 5.8 0 1 0 15 20.8 5.8 5.8 0 0 0 15 9.2Zm0 9.5A3.7 3.7 0 1 1 15 11.3a3.7 3.7 0 0 1 0 7.4Z",
      "M21.1 8.9a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7Z",
      "M20.5 3.2h-11A6.3 6.3 0 0 0 3.2 9.5v11a6.3 6.3 0 0 0 6.3 6.3h11a6.3 6.3 0 0 0 6.3-6.3v-11a6.3 6.3 0 0 0-6.3-6.3Zm4.1 17.3a4.1 4.1 0 0 1-4.1 4.1h-11a4.1 4.1 0 0 1-4.1-4.1v-11a4.1 4.1 0 0 1 4.1-4.1h11a4.1 4.1 0 0 1 4.1 4.1v11Z"
    ],
    viewBox: "0 0 30 30"
  },
  {
    label: "X",
    path:
      "M17.3 13.4 25.1 4h-1.8l-6.8 8.1L11.1 4H4.9l8.2 12-8.2 9.8h1.8l7.2-8.6 5.8 8.6h6.2l-8.6-12.4Zm-2.5 3-0.8-1.2L7.3 5.4h2.9l5.3 7.8.8 1.2 7 10.2h-2.9l-5.6-8.2Z",
    viewBox: "0 0 30 30"
  },
  {
    label: "Twitter",
    path:
      "M26.2 8.3c-.8.4-1.7.6-2.6.7.9-.6 1.6-1.4 2-2.5-.9.5-1.9.9-2.9 1.1A4.5 4.5 0 0 0 15 11.7c0 .4 0 .7.1 1-3.8-.2-7.2-2-9.5-4.8-.4.7-.6 1.4-.6 2.3 0 1.6.8 3 2.1 3.8-.8 0-1.5-.2-2.1-.6v.1c0 2.2 1.6 4 3.6 4.5-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.8 2.2 3.1 4.2 3.1A9.1 9.1 0 0 1 5 23.1c-.4 0-.7 0-1.1-.1a12.8 12.8 0 0 0 7 2.1c8.4 0 13-7 13-13v-.6c.9-.6 1.7-1.4 2.3-2.2Z",
    viewBox: "0 0 30 30"
  },
  {
    label: "LinkedIn",
    path:
      "M7 11.4h4.1V25H7V11.4ZM9.1 5a2.35 2.35 0 1 1 0 4.7A2.35 2.35 0 0 1 9.1 5Zm5 6.4H18v1.9h.1c.5-1 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V25h-4.1v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V25h-4.1V11.4Z",
    viewBox: "0 0 30 30"
  },
  {
    label: "Snapchat",
    path:
      "M15 4.5c3 0 5.1 2.1 5.1 5.1v2.5c0 .6.4 1 1.2 1.1.6.1 1 .4 1 .8 0 .7-1.2 1.2-2.1 1.5.3 1.4 1.4 2.4 3.2 3.2.4.2.7.5.7.9 0 .7-.8 1-1.8 1.1-.3.1-.4.4-.6.9-.2.4-.5.7-1.1.7-.5 0-1.2-.2-1.9-.2-.9 0-1.5.4-2.1 1-.5.5-1 .9-1.7.9s-1.2-.4-1.7-.9c-.6-.6-1.2-1-2.1-1-.7 0-1.4.2-1.9.2-.6 0-.9-.3-1.1-.7-.2-.5-.3-.8-.6-.9-1-.1-1.8-.4-1.8-1.1 0-.4.3-.7.7-.9 1.8-.8 2.9-1.8 3.2-3.2-.9-.3-2.1-.8-2.1-1.5 0-.4.4-.7 1-.8.8-.1 1.2-.5 1.2-1.1V9.6c.1-3 2.2-5.1 5.2-5.1Z",
    viewBox: "0 0 30 30"
  }
];
