import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className = "", children }: CardProps) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>{children}</div>
);

export const CardHeader = ({ className = "", children }: CardProps) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export const CardTitle = ({ className = "", children }: CardProps) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);

export const CardContent = ({ className = "", children }: CardProps) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

export const CardFooter = ({ className = "", children }: CardProps) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);
