import '../styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Atif Khan | Software Developer',
  description: 'Atif Khan is a Software Developer specializing in ADAS testing, DevSecOps, cloud architecture, and data engineering.',
  keywords: ['Software Developer', 'DevOps Engineer', 'ADAS Test Engineer', 'Python', 'AWS', 'Jenkins', 'Kubernetes', 'CI/CD', 'DevSecOps'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-light">
        {children}
      </body>
    </html>
  );
} 