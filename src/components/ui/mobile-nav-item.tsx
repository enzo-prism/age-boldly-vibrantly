import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MobileNavItemProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
  icon?: string;
}

export const MobileNavItem: React.FC<MobileNavItemProps> = ({
  to,
  children,
  onClick,
  icon
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 py-4 px-4 min-h-[48px]",
          "transition-all duration-200",
          "hover:bg-accent/10 hover:translate-x-1",
          "focus:outline-none focus:bg-accent/10",
          "border-l-2 border-transparent hover:border-primary/30",
          "touch-manipulation", // Improves touch responsiveness
          isActive
            ? "text-primary font-medium bg-primary/5 border-l-primary"
            : "text-foreground hover:text-primary"
        )
      }
      onClick={onClick}
    >
      {icon && (
        <span className="text-lg flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
    </NavLink>
  );
};