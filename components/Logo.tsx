'use client'

import Image from 'next/image.js'
import { useRouter } from 'next/navigation'
import React from 'react'
import BFCLogo from '@/public/BFC_logo.png'

interface LogoProps{
  alt: string
}

export default function Logo({ alt }: LogoProps) {
  const router = useRouter()
  return (
    <div>
      <Image onClick={() => router.push("/")} src={BFCLogo} className="h-20 w-28" alt={alt} />

    </div>
  )
}
