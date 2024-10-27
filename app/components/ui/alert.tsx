import React from 'react';

interface AlertProps {
  className?: string;
  children: React.ReactNode;
}

interface AlertDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

// Main Alert Component
export const Alert: React.FC<AlertProps> = ({ className, children }) => {
  return (
    <div className={`p-4 border-l-4 rounded ${className}`}>
      {children}
    </div>
  );
};

// Alert Description Component for Custom Message
export const AlertDescription: React.FC<AlertDescriptionProps> = ({ className, children }) => {
  return (
    <p className={`text-sm ${className}`}>
      {children}
    </p>
  );
};
