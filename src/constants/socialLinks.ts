import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Ahmed Ezzat's social media profiles
export const socialLinks = [
  {
    icon: faGithub,
    href: 'https://github.com/ahmedezzat0247',
    label: 'GitHub',
    type: 'external' as const,
  },
  {
    icon: faLinkedin,
    href: 'https://linkedin.com/in/ahmed-ezzat-ahmed',
    label: 'LinkedIn',
    type: 'external' as const,
  },
  {
    icon: faEnvelope,
    href: 'mailto:ahmedezzat0247@gmail.com',
    label: 'Email',
    type: 'email' as const,
  },
] as const;

// Optional: X (formerly Twitter) link (can be added/removed as needed)
export const xLink = {
  icon: faXTwitter, // Using the actual X/Twitter icon from FontAwesome
  href: 'https://x.com',
  label: 'X',
  type: 'external' as const,
} as const;