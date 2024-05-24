import Image from 'next/image';

import clsx from 'clsx';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

import { getCurrentWeek, getHour, getDate, getCurrentWeekDays, getDayOfMonth } from "@/app/lib/utils"
import ElephantsImage from '@/app/public/elephants.jpg'
import { libreBaskerVille, poppins } from '@/app/ui/fonts';
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
    <div>
      <div className={`${poppins.className} ml-20 mt-20`}>
        <p className='font-semibold text-sm'>{getDate()}</p>
        <p className='font-semibold text-3xl'>{greeting}</p>
      </div>
      <div className='flex mt-40 pt-10 ml-20 items-center'>
        <CalendarDaysIcon className='size-6' />
        {`Week ${getCurrentWeek()}`}
        <p className='p-2'>&gt;</p>
        {getCurrentWeekDays().map(([abbrev, day]) => (
          <div className='mr-4 items-center flex flex-col'>
            <p>{abbrev}</p>
            <p>{day}</p>
          </div>
        ))}
      </div>
    </div>
  )
}