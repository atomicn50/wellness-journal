import Image from "next/image";
import { lusitana } from "./ui/fonts";
import { getHour } from './lib/utils';

export default function Home() {
  const hour = getHour();
  let header: string;

  if (hour >= 0 && hour < 12) {
    header = 'Good Morning';
  } else if (hour >= 12 && hour < 17) {
    header = 'Good Afternoon';
  } else {
    header = 'Good Evening';
  }
  
  return (
    <main className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex justify-center">
        <h1 className={`${lusitana.className} text-6xl py-8`}>
          {header}
        </h1>
      </div>
      <div className="flex py-8 px-4">
      </div>
    </main>
  );
}
