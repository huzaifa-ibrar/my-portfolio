import '../styles/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Abdul Hannan | IT Networking Security Specialist',
  description: 'Abdul Hannan is an IT professional specializing in Network Security, DevSecOps, Cloud Security, and Penetration Testing.',
  keywords: ['IT Networking Security', 'DevSecOps', 'Cloud Security', 'Penetration Testing', 'Network Security', 'Python', 'AWS', 'Azure'],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-light">
        {children}
      </body>
    </html>
  );
} 