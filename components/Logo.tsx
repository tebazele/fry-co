import Image, { StaticImageData } from 'next/image.js'
import React from 'react'

interface LogoProps{
  image: string | null | undefined | StaticImageData
  alt: string
}

export default function Logo({image}:LogoProps) {
  return (
    <div>
      <Image src={image || "../public/BFC_logo.png"} width={24} height={28} quality={ 100 } className="h-20 w-28" alt="Boise FryCo"/>

    </div>
  )
}
