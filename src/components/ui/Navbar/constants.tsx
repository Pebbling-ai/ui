import { NavItem, SocialLink } from './types';
import { FileText, MessageSquare, Github } from 'lucide-react';
import { ReactNode } from 'react';

export const NAV_ITEMS: NavItem[] = [
  { to: '/pebbling', label: 'Pebbling' },
  { to: '/hibiscus', label: 'Hibiscus' }
];

// Instead of JSX, provide a function returning the icon as ReactNode
export const SOCIAL_LINKS = (stars: number): SocialLink[] => [
  {
    href: 'https://docs.pebbling.ai',
    label: 'Docs',
    icon: () => <FileText className="w-4 h-4" />,
    className: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
  },
  {
    href: 'https://discord.gg/RBvKfcrPnY',
    label: 'Discord',
    icon: () => <MessageSquare className="w-4 h-4" />,
    className: 'bg-[#5865F2] hover:bg-[#4752C4] text-white'
  },
  {
    href: 'https://github.com/Pebbling-ai/pebble',
    label: 'GitHub',
    icon: () => <Github className="w-4 h-4" />,
    className: 'bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-900 hover:to-black text-white border border-gray-800 hover:border-black transition-colors duration-200',
    count: stars
  }
];

export const GITHUB_API_URL = 'https://api.github.com/repos/Pebbling-ai/pebble';
export const STAR_REFRESH_INTERVAL = 6 * 60 * 60 * 1000; // 6 hours
