import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';

export const helveticaNeue = localFont({
  src: [
    {
      path: '../public/fonts/HelveticaNeueThin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeueLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeueRoman.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeueMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeueBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeueBlack.otf',
      weight: '900',
      style: 'normal',
    }
  ],
  variable: '--font-helvetica',
  display: 'swap',
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
