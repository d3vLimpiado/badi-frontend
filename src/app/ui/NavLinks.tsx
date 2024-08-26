'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Navigation } from '@/components';
import { cn } from '@/lib/utils';

const { NavMenu, NavMenuList, NavMenuItem, NavMenuLink, navigationMenuTriggerStyle } = Navigation;

export default function NavLinks() {
  const pathname = usePathname();

  const navData = [
    {
      label: "Home",
      url: "/"
    },
    {
      label: "Forum",
      url: "/forum"
    },
    {
      label: "Jobs",
      url: "/jobs"
    },
    {
      label: "Events",
      url: "/events"
    },
    {
      label: "About",
      url: "/about"
    },
  ]
  return (
    <NavMenu className='m-auto'>
      <NavMenuList>
        {
          navData.map(nav => (
            <NavMenuItem key={nav.label}>
              <Link href={nav.url} legacyBehavior passHref>
                <NavMenuLink data-active={pathname === nav.url} className={cn(navigationMenuTriggerStyle())}>
                  {nav.label}
                </NavMenuLink>
              </Link>
            </NavMenuItem>
          ))
        }
      </NavMenuList>
    </NavMenu>
  )
}