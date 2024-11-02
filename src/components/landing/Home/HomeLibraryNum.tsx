"use client"
import { RevealAnimation } from "@/components/shared"
import React from 'react'

import bgImg from '@/assets/images/landing/home-library-bg.png'
import { HomeSingleDetailsSection } from "@/services/types"
import { useLanguage } from "@/services/hooks"


const data = [
  {
    title: 'واجهة مستخدم سهلة الاستخدام',
    desc: 'تصميم المكتبة يعتمد على واجهة بديهية تسهل على المستخدمين البحث عن الكتب، تصفحها، وتنزيلها أو قراءتها مباشرة عبر الإنترنت'
  },
  {
    title: 'التفاعل مع النصوص',
    desc: 'يمكن للمستخدمين تظليل النصوص المهمة، إضافة ملاحظات، وعمل إشارات مرجعية للعودة إلى النقاط الهامة لاحقاً. بعض المكتبات التفاعلية تتيح أيضاً إمكانية المشاركة والتعليق على الكتب مع مستخدمين آخرين.'
  },
  {
    title: 'محركات بحث متقدم',
    desc: 'توفر المكتبة أدوات بحث متقدمة تمكن المستخدمين من العثور على الكتب باستخدام كلمات مفتاحية، أسماء المؤلفين، أو الموضوعات'
  },
  {
    title: 'التوصيات المخصصة',
    desc: 'تعتمد المكتبة على تقنيات الذكاء الاصطناعي لتقديم توصيات مخصصة لكل مستخدم بناءً على اهتماماتهم وقراءاتهم السابقة'
  },
  {
    title: 'قراءة اجتماعية',
    desc: 'يمكن للمستخدمين الانضمام إلى مجموعات قراءة، مناقشة الكتب مع الأعضاء الآخرين، والمشاركة في فعاليات وورش عمل ذات صلة.'
  },
  {
    title: 'توافق مع الأجهزة المختلفة',
    desc: 'المكتبة التفاعلية عادةً ما تكون متاحة عبر مختلف الأجهزة مثل الحواسيب، الهواتف الذكية، والأجهزة اللوحية، مما يسمح للمستخدمين بالوصول إلى كتبهم في أي وقت وأي مكان.'
  },
]

const HomeLibraryNum = ({ data }: { data: HomeSingleDetailsSection }) => {


  return (
    <section className="dark">
      <RevealAnimation>
        <div className="relative" >
          <div className="  h-[100%] w-full absolute -z-10">

            <div className="bg-cover h-full w-full " style={{
              backgroundImage: `url(${bgImg.src})`,
            }}>
              <div className="w-full h-full !bg-[#393939bf]">
              </div>
            </div>
          </div>
          <div className=" py-12   ">
            <div className="container dark ">
              <div className="text-center">
                <div className="text-lg ">
                  <span className="  py-3 px-10 bg-white text-[30px] text-primary rounded-full font-bold inline-block  ">
                    {data?.main_section?.title}
                  </span>
                </div>

                <div className="text-white mt-6 font-medium"

                  dangerouslySetInnerHTML={{ __html: data?.main_section?.details || '' }}
                />


              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6  mt-8 lg:mt-10">

                {data?.items?.data.map((item, index) => (
                  <div key={index} className="bg-[#553ddd82] p-4 lg:py-6 text-center text-white rounded-md shadow-md">
                    <h4 className="text-lg font-bold mb-2 text-white">
                      {item?.title}
                    </h4>
                    <p className="opacity-90 text-white" >{item.details}
                      {item?.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  )
}

export default HomeLibraryNum