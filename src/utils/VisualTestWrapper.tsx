import React from 'react';

/**
 * VisualTestWrapper - Ensures consistent spacing/padding to match Figma exports
 * 
 * Adjust the padding value to match your Figma export's padding.
 * Most Figma exports have 16px padding, but check your specific exports.
 */
export function VisualTestWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: '16px',
        display: 'inline-block',
        background: 'white',
      }}
    >
      {children}
    </div>
  );
}

