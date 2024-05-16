'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import { BookmarkIcon, CalendarIcon } from "@heroicons/react/24/outline";

const links = [
  {
    name: 'Today',
    href: '/home/today',
    icon: BookmarkIcon,
  },
  {
    name: 'Calendar',
    href: '/home/calendar',
    icon: CalendarIcon,
  }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className='pt-8 pl-2'>
      {links.map((link) => {
        const { href, name } = link;
        const LinkIcon = link.icon;

        return (
          <Link key={name} href={href} className={clsx(
            'flex gap-2 p-1 mr-2 items-center',
            {
              'bg-gray-400 rounded-md': pathname === link.href,
            })}>
              <LinkIcon className='size-6'/>
              <p>{name}</p>
          </Link>
        )
      })}
    </div>
  )
}