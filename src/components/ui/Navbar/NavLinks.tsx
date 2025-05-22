import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from './constants';

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  onItemClick?: () => void;
  isScrolled?: boolean;
}

export const NavLinks = ({ 
  className = '', 
  linkClassName = '',
  onItemClick,
  isScrolled = false
}: NavLinksProps) => (
  <nav className={cn('space-x-8', className)}>
    {NAV_ITEMS.map(({ to, label }) => (
      <Link
        key={to}
        to={to}
        onClick={onItemClick}
        className={cn(
          'font-montserrat font-medium hover-underline-animation',
          'transition-colors duration-200',
          isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-black dark:text-white',
          linkClassName
        )}
      >
        {label}
      </Link>
    ))}
  </nav>
);
