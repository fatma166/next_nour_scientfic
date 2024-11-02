import React from 'react'
import img from '@/assets/images/landing/ads1.jpg'
import { RevealAnimation } from "@/components/shared"
import Image from "next/image"

const SectionAd = () => {
  return (
    <section className="py-12">
      <RevealAnimation>
        <div className="container max-w-xl">

          <Image src={img} alt='guard art image' className="h-full object-contain" />
        </div>
      </RevealAnimation>
    </section>
  )
}

export default SectionAd