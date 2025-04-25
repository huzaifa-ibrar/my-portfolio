import '../styles/globals.css';
import type { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Abdul Hannan | IT Networking Security Specialist',
  description: 'Abdul Hannan is an IT professional specializing in Network Security, DevSecOps, Cloud Security, and Penetration Testing.',
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