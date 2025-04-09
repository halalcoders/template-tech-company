import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  className?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", className = "", ...props }, ref) => {
    const baseStyles =
      "px-4 py-2 rounded-lg font-medium transition-all duration-300";
    const variantStyles = {
      primary:
        "bg-nextpage-600 hover:bg-nextpage-700 text-white shadow-md hover:shadow-lg",
      outline:
        "bg-white border border-nextpage-300 hover:border-nextpage-400 hover:bg-nextpage-50",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
