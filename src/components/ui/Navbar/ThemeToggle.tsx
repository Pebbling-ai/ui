import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Theme } from './types';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  className?: string;
  iconSize?: number;
}

export const ThemeToggle = ({ 
  theme, 
  onToggle, 
  className = '',
  iconSize = 20 
}: ThemeToggleProps) => (
  <button
    onClick={onToggle}
    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    className={cn(
      'p-2 rounded-full border transition-colors duration-150',
      'border-gray-300 dark:border-gray-700',
      'bg-white dark:bg-zinc-900',
      'hover:bg-gray-100 dark:hover:bg-zinc-800',
      className
    )}
  >
    {theme === 'dark' ? (
      <Sun size={iconSize} className="text-yellow-400" />
    ) : (
      <Moon size={iconSize} className="text-gray-700" />
    )}
  </button>
);
