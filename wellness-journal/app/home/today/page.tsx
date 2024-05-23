import Image from 'next/image';

import clsx from 'clsx';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

import { getHour, getDate, getCurrentWeekDays, getDayOfMonth } from "@/app/lib/utils"
import ElephantsImage from '@/app/public/elephants.jpg'
import { libreBaskerVille } from '@/app/ui/fonts';
import Statistics from '@/app/ui/today/statistics';


export default function Page() {
  const hour = getHour();
  let greeting;
  
  if (hour >= 0 && hour < 12) {
    greeting = 'Good Morning ~';
  } else if (hour >= 12 && hour < 17) {
    greeting = 'Good Afternoon ~';
  } else {
    greeting = 'Good Evening ~';
  }

  return (
    <div className='h-screen'>
      <div className='items-end h-screen'>
        <div className="bg-gray-200 bg-cover">
        </div>
      </div>
    </div>
  )
}