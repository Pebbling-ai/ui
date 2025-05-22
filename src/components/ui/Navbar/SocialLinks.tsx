import { cn } from '@/lib/utils';
import { SOCIAL_LINKS } from './constants';

interface SocialLinksProps {
  stars: number;
  className?: string;
  linkClassName?: string;
}

export const SocialLinks = ({ 
  stars, 
  className = '',
  linkClassName = '' 
}: SocialLinksProps) => {
  return (
    <div className={cn('flex space-x-3', className)}>
      {SOCIAL_LINKS(stars).map(({ href, label, icon, className: linkClass, count }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex items-center space-x-2 px-3 py-1.5 rounded-md',
            'text-sm shadow-sm hover:shadow-md transition-all duration-150',
            linkClass,
            linkClassName
          )}
        >
          {icon()}
          <span>{label}</span>
          {label === 'GitHub' && (
            <span className="ml-2 px-2 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 text-xs font-semibold shadow-sm">
              ★ {typeof count !== 'undefined' && count !== 0 ? count : 79}
            </span>
          )}
        </a>
      ))}
    </div>
  );
};
