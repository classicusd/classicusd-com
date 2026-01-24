import type { MDXComponents } from 'mdx/types';
import { mdxComponents, Callout, ContractAddress } from '@/components/docs/MDXComponents';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    Callout,
    ContractAddress,
    ...components,
  };
}
