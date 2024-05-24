import { Lusitana, Libre_Baskerville, Poppins } from 'next/font/google';

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const libreBaskerVille = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
});
