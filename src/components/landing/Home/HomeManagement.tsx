"use client"
import React from 'react'
import { SingleHero } from "../shared"
import img from '@/assets/images/landing/about_1.png'
import userImg from '@/assets/images/landing/32.webp'


import bg1 from '@/assets/images/landing/shape1.png'
import bg2 from '@/assets/images/landing/shape2.png'
import bg3 from '@/assets/images/landing/shape3.png'

import imgBg from '@/assets/images/landing/about_8.png'
import { ArchiveBook, Book1, Data2, PresentionChart, Setting5, TickCircle, UserEdit } from "iconsax-react"
import Image from "next/image"
import { NextImage, RevealAnimation } from "@/components/shared"
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"





const HomeManagement = ({ data }: { data: HomeSingleDetailsSection }) => {

  // const data = [
  //   "إدارة المكتبات الرقمية",
  //   "تحرير المحتوى",
  //   "توزيع المحتوى",
  //   "مزامنة البيانات",
  //   "تقارير الأداء",
  //   "لوحات تحكم تفاعلية",
  // ]


  const icons = [
    <Book1 variant="Linear" size={22} className="flex-shrink-0 text-white" key={1} />,
    <ArchiveBook variant="Linear" size={22} className="flex-shrink-0 text-white" key={2} />,
    <UserEdit variant="Linear" size={22} className="flex-shrink-0 text-white" key={3} />,
    <Data2 variant="Linear" size={22} className="flex-shrink-0 text-white" key={4} />,
    <PresentionChart variant="Linear" size={22} className="flex-shrink-0 text-white" key={5} />,
    <Setting5 variant="Linear" size={22} className="flex-shrink-0 text-white" key={6} />,
  ]
  return (

    <section className="bg-primary py-12 dark">

      <RevealAnimation>



        <div className="container ">
          <SingleHero
            isReverse
            preTitle="إدارة المؤسسات التعليمية"
            title={data?.main_section?.title}
            subTitle={data?.main_section?.details || ''}

            imgNode={<div className="relative w-full h-full  ">
              <Image src={bg1} alt='guard art image' className="absolute top-12 -end-20  z-[1] w-full ltr:-scale-x-100  object-contain !h-auto max-h-[30vh]" />

              <Image src={bg2} alt='guard art image' className="absolute top-1/3 translate-y-8 -end-20  z-[1] w-full ltr:-scale-x-100  object-contain !h-auto max-h-[30vh]" />

              <Image src={bg3} alt='guard art image' className="absolute top-1/4 translate-y-8   end-1/3  z-[1] w-full ltr:-scale-x-100  object-contain !h-auto max-h-[30vh]" />

              {/* <Image src={userImg} alt='guard art image' className="relative -bottom-14 ltr:-scale-x-100 z-[1] w-full  object-contain !h-auto max-h-[60vh]" /> */}

              {data?.main_section?.image && (
                <NextImage
                  src={data?.main_section?.image}
                  alt={data?.main_section?.title}
                  className="relative -bottom-14 ltr:-scale-x-100 z-[1] w-full  object-contain !h-auto max-h-[60vh] " />
              )}

            </div>}
          >
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg dark text-white">
              {data?.items?.data?.map((item, index) => (
                <div key={index} className="flex items-center gap-2 border-white border rounded-lg shadow-sm py-2 px-3">
                  {/* {icons[index]} */}

                  {item?.image && (
                    <NextImage
                      src={item?.image}
                      alt={item?.title}
                      className="relative rtl:-scale-x-100 z-[1] w-full  object-contain  !h-7 " />
                  )}

                  <p>   {item?.title}</p>
                </div>
              ))}
            </div>

          </SingleHero>
        </div>

      </RevealAnimation>
    </section>
  )
}

export default HomeManagement