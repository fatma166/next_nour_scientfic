"use client"
import React from 'react'
import { SingleHero } from "../shared"
import img from '@/assets/images/landing/about_1.png'

import imgBg from '@/assets/images/landing/about_8.png'
import { TickCircle } from "iconsax-react"
import { RevealAnimation } from "@/components/shared"
import { HomeAboutUsIN } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import { useTranslations } from "next-intl";

const HomeAboutUs = ({ data }: { data: HomeAboutUsIN }) => {

  const t = useTranslations();

  return (
    <section className="bg-bg-secondary py-12">
      <RevealAnimation >




        <div className="container">
          <SingleHero

            preTitle={t('about_us')}
            title={data?.[0]?.title}
            subTitle={data?.[0]?.details || ''}
            img={data?.[0]?.image || img.src}
            imgBg={imgBg}
          >
            {!!data?.items?.data?.length && (

              <div className="flex flex-col gap-4 text-lg">
                {data?.items?.data?.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <TickCircle variant="Bulk" size={22} className="flex-shrink-0 text-primary" />
                    <p> {item?.detail_ar}</p>
                  </div>
                ))}
              </div>
            )}

          </SingleHero>
        </div>

      </RevealAnimation>
    </section>
  )
}

export default HomeAboutUs