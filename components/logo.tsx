'use client';

import darklogo from '@/public/light-logo.png'
import lightlogo from '@/public/dark-logo.png'
import 'aos/dist/aos.css'

import Image from 'next/image'
import { useTheme } from '@/components/theme-provider'

export default function LogoComponent() {
  const { theme } = useTheme()
  
  return (
    <div className="relative h-10 w-40">
      <Image
        src={darklogo}
        alt="Chancer Fun Logo"
        fill
        className={`object-contain transition-opacity duration-300 ${
          theme === 'light' ? 'opacity-100' : 'opacity-0'
        }`}
        priority
      />
      <Image
        src={lightlogo}
        alt="Chancer Fun Logo"
        fill
        className={`object-contain transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
        priority
      />
    </div>
  )
}