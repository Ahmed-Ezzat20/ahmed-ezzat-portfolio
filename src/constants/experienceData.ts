import company1 from '@/assets/company-1.webp';
import company2 from '@/assets/company-2.webp';
import airbnbLogo from '@/assets/airbnb.webp';
import nusLogo from '@/assets/nus.webp';

// Real company logos
import genArabiaLogo from '@/assets/genarabia-logo.jpg';
import andalusiLogo from '@/assets/andalusi-logo.jpg';
import econnectLogo from '@/assets/econnect-logo.png';
import almentorLogo from '@/assets/almentor-logo.jpg';
import tensorgraphLogo from '@/assets/tensorgraph-logo.jpg';
import developerCareerLogo from '@/assets/developer-career-logo.jpg';
import helwanLogo from '@/assets/helwan-logo.png';

// Typing for experience items
export interface ExperienceItem {
  title: string;
  companyName: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

// Experience timeline data
export const experiences: ExperienceItem[] = [
  {
    title: 'AI Engineer (Full-time)',
    companyName: 'GenArabia',
    icon: genArabiaLogo,
    iconBg: '', // Now using centralized theme
    date: 'Sep 2025 – Present',
    points: [
      'Building Voice AI Solutions as part of the Gen AI Solutions Company.',
      'Focus on scalable AI implementations and cutting-edge voice technology.',
      'Contributing to innovative AI products that transform user experiences.',
    ],
  },
  {
    title: 'AI Engineer (Part-time)',
    companyName: 'Andalusi',
    icon: andalusiLogo,
    iconBg: '', // Now using centralized theme
    date: 'June 2025 – Aug 2025',
    points: [
      'Delivered a background removal model and applied quantization reducing its size by 75% for edge device deployment.',
      'Deployed a serverless endpoint for object removal feature for premium users.',
      'Increased application subscriptions and delivered high-end refined output.',
    ],
  },
  {
    title: 'AI Engineer',
    companyName: 'E Connect Africa',
    icon: econnectLogo,
    iconBg: '', // Now using centralized theme
    date: 'June 2024 – May 2025',
    points: [
      'Delivered course generation pipeline using RAG System with Gemma models for full course material generation.',
      'Managed full lifecycle of TTS model implementation with 25-hour Arabic speech dataset training.',
      'Developed and integrated 2D character animation models (animate anyone - UniAnimate) and AI-powered lip-sync.',
      'Leveraged generative AI (State Space Models, Diffusion Models) for character animation with minimal hardware usage.',
    ],
  },
  {
    title: 'Site Supervisor',
    companyName: 'almentor',
    icon: almentorLogo,
    iconBg: '', // Now using centralized theme
    date: 'Feb 2024 – Nov 2024',
    points: [
      'Part-time management role overseeing site operations and team coordination.',
      'Ensured quality standards and efficient workflow processes.',
      'Collaborated with cross-functional teams to optimize operational efficiency.',
    ],
  },
  {
    title: 'Machine Learning Intern',
    companyName: 'TensorGraph',
    icon: tensorgraphLogo,
    iconBg: '', // Now using centralized theme
    date: 'July 2023 – August 2023',
    points: [
      'Utilized BERT for entity recognition to streamline restaurant order-taking from phone calls.',
      'Leveraged OpenAI GPT for synthetic data generation, improving dataset diversity.',
      'Reduced annotation costs by 80% through synthetic data generation techniques.',
    ],
  },
  {
    title: 'Instructor',
    companyName: 'Developer Career',
    icon: developerCareerLogo,
    iconBg: '', // Now using centralized theme
    date: 'Dec 2022 – Jan 2024',
    points: [
      'Part-time teaching role focusing on team management and technical instruction.',
      'Developed curriculum and delivered training sessions on software development.',
      'Mentored students and guided their career development in technology.',
    ],
  },
  {
    title: 'BS in Computer Science',
    companyName: 'Helwan University',
    icon: helwanLogo,
    iconBg: '', // Now using centralized theme
    date: '2020 – 2024',
    points: [
      'Graduated with Very Good GPA (3.27), specializing in Computer Science.',
      'Published IEEE research paper on lightweight plant leaf classification using transfer learning.',
      'Graduation project: Implemented YOLOv8 achieving 86 mAP for prohibited object detection.',
      'Employed eye-gaze tracking and Siamese network for face recognition, reducing cheating incidents by 89%.',
      'Active in IEEE Helwan Student Branch and served as ComSoc Chapter Chairman.',
    ],
  }
];