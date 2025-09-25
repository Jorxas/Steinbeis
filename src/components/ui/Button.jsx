'use client';

// Simple, beginner-friendly Button component
// Props:
// - variant: 'primary' | 'secondary' | 'outline' | 'dark'
// - size: 'sm' | 'md' | 'lg'
// - onClick, disabled, className, type, children

const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl';

const variantClasses = {
  primary: 'bg-primary-background text-primary-foreground hover:bg-primary-dark focus:ring-primary-light',
  secondary: 'bg-secondary-background text-secondary-foreground hover:bg-secondary-light focus:ring-secondary-light',
  outline: 'border-2 border-primary-background text-primary-background bg-transparent hover:bg-primary-light focus:ring-primary-light',
  dark: 'bg-background-dark text-primary-foreground hover:opacity-90 focus:ring-background-dark',
};

const sizeClasses = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3',
};

const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  children,
  onClick,
  type = 'button',
  ...props
}) => {
  const classes = [
    baseClasses,
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.md,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (event) => {
    if (disabled) {
      event?.preventDefault();
      return;
    }
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={classes}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button