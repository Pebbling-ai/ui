export interface GitHubRepo {
  stargazers_count: number;
}

export type Theme = 'light' | 'dark';

export interface NavItem {
  to: string;
  label: string;
  icon?: React.ReactNode;
}

import { ReactNode } from 'react';
export interface SocialLink {
  href: string;
  label: string;
  icon: () => ReactNode;
  className?: string;
  count?: number;
}
