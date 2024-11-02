"use client"
import { NextImage, RevealAnimation } from "@/components/shared"
import { ButtonGradient } from "@/components/ui"
import React, { useEffect, useRef } from 'react'

import { useAnimation, useInView, motion, Variants } from "framer-motion"
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"


const variants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

const HomeSmartReader = ({ data }: { data: HomeSingleDetailsSection }) => {

  const { t } = useLanguage()

  const mainControls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })


  useEffect(() => {

    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])


  return (
    <section className="py-12 bg-bg-secondary smartReader">
      <RevealAnimation>

        <motion.div ref={ref} className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
            <div>


              <div className="text-lg ">
                <span className="   py-3 px-10 bg-white text-[30px] text-primary rounded-full font-bold inline-block   ">
                  {data?.main_section?.title}
                </span>
              </div>

              {/* <h1 className={`font-bold text-2xl md:text-3xl  lg:text-4xl !leading-[1.4]  mt-4 `}>
                يتيح القارئ الذكي للمستخدمين التفاعل بفعالية مع النصوص من خلال ميزات متقدمة :
              </h1> */}

              <div className="my-5 lg:my-6 text-xl text-text     "
                dangerouslySetInnerHTML={{ __html: data?.main_section?.details || '' }}
              />


              <ButtonGradient>
                {t('smartReader')}
              </ButtonGradient>
            </div>
            {!!data?.items?.data?.length && (
              <div className="grid grid-cols-2 gap-4 lg:gap-6 pb-10">

                {data?.items?.data?.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 lg:p-6 bg-bg rounded-lg shadow relative ${(index & 1) === 1 ? 'md:!translate-y-8' : ''}`}
                    variants={variants}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >

                    {item?.image && (
                      <NextImage
                        src={item?.image}
                        alt={item?.title}
                        className="relative rtl:-scale-x-100 z-[1] w-full  object-contain  !h-7 " />
                    )}

                    {/* {item.icon} */}
                    <h3>      {item?.title}</h3>
                    <p>     {item?.details}</p>
                  </motion.div>
                ))}

              </div>
            )}
          </div>


        </motion.div>
      </RevealAnimation>

    </section>
  )
}

export default HomeSmartReader