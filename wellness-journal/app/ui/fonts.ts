import { Lusitana, Libre_Baskerville } from 'next/font/google';

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const libreBaskerVille = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});