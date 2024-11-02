"use client"

import React from 'react'
import asmImg from '@/assets/images/landing/slider_top_2.webp'
import { ButtonGhost, ButtonGradient } from "@/components/ui"
import Link from "next/link"
import { SingleHero } from "../shared"
import { RevealAnimation } from "@/components/shared"
import { HomeSingleDetail } from "@/services/types"
import { SliderContainer } from "@/libs/slider"
import { useLanguage } from "@/services/hooks"
import { useTranslations } from "next-intl";


const HomeHeroSection = ({ data }: { data: HomeSingleDetail[] }) => {

  const { t } = useLanguage()

  return (
    <section className="py-12 bg-bg-secondary-50 bg-cover bg-center bg-no-repeat header__hero"

      style={{
        backgroundImage: `url(${data[0]?.image})`,
      }}
    >
      <RevealAnimation >
        <div className="container">
          <SliderContainer
            sliderOptions={{
              slidesPerView: 1,
              spaceBetween: 40,
              // centeredSlides: true,
              // centerInsufficientSlides: true,
              loop: true,
              autoplay: {
                delay: 3500,
                disableOnInteraction: false,
              },

            }}
            navigationOptions={{
              navTypes: ['dots']
            }}
          >
            {data?.map(item => (
              <SingleHero
                key={item.id}
                title={item?.title}
                subTitle={item?.details || ''}
                secondTitle={''}
              >
                <div className="flex items-center gap-4">
                  <Link href={'/library'}>
                    <ButtonGradient size="large" className="!h-auto [&>div]:!text-lg [&>div]:!px-4 [&>div]:font-bold"   >
                      {t('library')}
                    </ButtonGradient>
                  </Link>
                  <Link href={'/smart-reader'}>
                    <ButtonGhost size="large" className="!h-auto [&>div]:!text-lg [&>div]:!px-4 [&>div]:font-bold"   >
                      {t('smartReader')}
                    </ButtonGhost>
                  </Link>
                </div>

              </SingleHero>
            ))}

          </SliderContainer>
        </div>
      </RevealAnimation>
    </section >
  )
}

export default HomeHeroSection