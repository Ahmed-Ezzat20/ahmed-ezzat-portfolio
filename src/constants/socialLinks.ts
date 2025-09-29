import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

// Ahmed Ezzat's social media profiles
export const socialLinks = [
  {
    icon: faGithub,
    href: 'https://github.com/Ahmed-Ezzat20',
    label: 'GitHub',
    type: 'external' as const,
  },
  {
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/mrezzat/',
    label: 'LinkedIn',
    type: 'external' as const,
  },
  {
    icon: faEnvelope,
    href: 'mailto:ahmedezzat0247@gmail.com',
    label: 'Email',
    type: 'email' as const,
  },
  {
    icon: faGraduationCap,
    href: 'https://scholar.google.com/citations?user=5OHfOSgAAAAJ&hl=en',
    label: 'Google Scholar',
    type: 'external' as const,
  },
] as const;

// Optional: X (formerly Twitter) link (can be added/removed as needed)
export const xLink = {
  icon: faXTwitter,
  href: 'https://x.com/Ahmedez28506831',
  label: 'X',
  type: 'external' as const,
} as const;