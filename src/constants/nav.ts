import { Sections } from './sections'

export interface NavLink {
  label: string
  href: string
  isExternal?: boolean
}

export const navLinks: NavLink[] = [
  {
    label: 'Identity',
    href: `#${Sections.Identity}`,
  },
  {
    label: 'Rewards',
    href: `#${Sections.Rewards}`,
  },
  {
    label: 'Integrate',
    href: `#${Sections.Integrations}`,
  },
]

export const documentationLinks: NavLink[] = [
  {
    label: 'Integrations',
    href: 'https://docs.rarimo.com/products/rarime/',
    isExternal: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com./rarimo',
    isExternal: true,
  },
]

export const legalLinks: NavLink[] = [
  {
    label: 'Terms & Conditions',
    href: '/general-terms.html',
    isExternal: true,
  },
  {
    label: 'Privacy Notice',
    href: '/privacy-notice.html',
    isExternal: true,
  },
]
