'use client';

import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

// Custom components for MDX rendering
export const mdxComponents: MDXComponents = {
  // Headings
  h1: ({ children, ...props }) => (
    <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6 mt-8 first:mt-0" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-usc-text mb-4 mt-8" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-xl font-bold text-usc-text mb-3 mt-6" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-lg font-semibold text-usc-text mb-2 mt-4" {...props}>
      {children}
    </h4>
  ),

  // Paragraphs and text
  p: ({ children, ...props }) => (
    <p className="text-usc-text-secondary mb-4 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-usc-text" {...props}>
      {children}
    </strong>
  ),

  // Links
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-usc-green hover:text-usc-green-light underline underline-offset-2"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href || '#'} className="text-usc-green hover:text-usc-green-light underline underline-offset-2" {...props}>
        {children}
      </Link>
    );
  },

  // Lists
  ul: ({ children, ...props }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-usc-text-secondary" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-usc-text-secondary" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),

  // Code
  code: ({ children, ...props }) => (
    <code className="px-1.5 py-0.5 rounded bg-usc-surface text-usc-green text-sm font-mono" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre className="p-4 rounded-lg bg-usc-surface border border-usc-border overflow-x-auto mb-4 text-sm" {...props}>
      {children}
    </pre>
  ),

  // Blockquote
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-usc-green pl-4 py-2 mb-4 text-usc-text-secondary italic" {...props}>
      {children}
    </blockquote>
  ),

  // Table
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="border-b border-usc-border" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => (
    <tbody {...props}>{children}</tbody>
  ),
  tr: ({ children, ...props }) => (
    <tr className="border-b border-usc-border" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-usc-text" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-4 py-3 text-sm text-usc-text-secondary" {...props}>
      {children}
    </td>
  ),

  // Horizontal rule
  hr: (props) => (
    <hr className="border-usc-border my-8" {...props} />
  ),
};

// Callout components for docs
interface CalloutProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'success' | 'error';
}

export function Callout({ children, type = 'info' }: CalloutProps) {
  const styles = {
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
    success: 'bg-usc-green/10 border-usc-green/30 text-usc-green',
    error: 'bg-red-500/10 border-red-500/30 text-red-400',
  };

  const icons = {
    info: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    success: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <div className={`flex gap-3 p-4 rounded-lg border mb-4 ${styles[type]}`}>
      <div className="flex-shrink-0">{icons[type]}</div>
      <div className="text-sm">{children}</div>
    </div>
  );
}

// Contract address component
interface ContractAddressProps {
  network: string;
  address: string;
  explorer?: string;
}

export function ContractAddress({ network, address, explorer }: ContractAddressProps) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-usc-surface border border-usc-border mb-2">
      <div>
        <span className="text-sm font-medium text-usc-text">{network}</span>
      </div>
      <div className="flex items-center gap-2">
        <code className="text-xs text-usc-green font-mono">{address}</code>
        {explorer && (
          <a
            href={`${explorer}/address/${address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-usc-text-muted hover:text-usc-green"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
