import '../styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Huzaifa Ibrar | Software Engineer',
  description: 'Huzaifa Ibrar is a Software Engineer with expertise in full-stack development, DevOps, and database management.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'DevOps Engineer', 'React', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 