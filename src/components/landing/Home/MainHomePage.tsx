"use client"
import React from 'react'
import HomeHeroSection from "./HomeHeroSection"
import HomeAboutUs from "./HomeAboutUs"
import HomeManagement from "./HomeManagement"
import HomeSmartReader from "./HomeSmartReader"
import HomeAi from "./HomeAi"
import CategoriesSlider from "@/components/landing/shared/CategoriesSlider"
import NewsLetter from "@/components/landing/shared/NewsLetter"
import Testimonials from "../shared/Testimonials"
import LatestBlog from "../shared/LatestBlog"
import FAQ from "../shared/FAQs"
import Partners from "../shared/Partners"
import { HomeFrontResponse } from "@/services/types"
import { useGetHomeFrontQuery, useGetProfileQuery } from "@/services/api"
import { CardLoader } from "@/components/shared/loaders"
import { ErrorMessage } from "@/components/shared"
import HomeLibraryNum from "./HomeLibraryNum"



const MainHomePage = ({ homeData }: { homeData: HomeFrontResponse }) => {

  const { data, isLoading, error, refetch } = useGetHomeFrontQuery({ initialData: homeData })

  useGetProfileQuery({})

  if (isLoading) return <CardLoader num={4} />
  if (error) return <ErrorMessage error={error} refetch={refetch} />
  if (!data?.data) return null


  return (
    <main>
      {!!data?.data?.sliders?.length && <HomeHeroSection data={data?.data?.sliders || []} />}
      {!!data?.data?.about_us?.[0] && <HomeAboutUs data={data?.data?.about_us} />}
      {!!data?.data?.educational?.main_section && <HomeManagement data={data?.data?.educational} />}
      {!!data?.data?.blocks?.main_section && <HomeLibraryNum data={data?.data?.blocks} />}
      {!!data?.data?.readers?.main_section && <HomeSmartReader data={data?.data?.readers} />}
      {!!data?.data?.ai && <HomeAi data={data?.data?.ai} />}
      <NewsLetter />
      {/* <CategoriesSlider /> */}
      {!!data?.data?.latest_testimonials?.data?.length && <Testimonials data={data?.data?.latest_testimonials?.data || []} />}
      {!!data?.data?.latest_blogs?.data?.length && <LatestBlog data={data?.data?.latest_blogs?.data || []} />}
      {!!data?.data?.faqs?.data?.length && <FAQ data={data?.data?.faqs?.data || []} />}
      {!!data?.data?.partners?.data?.length && <Partners data={data?.data?.partners?.data || []} />}
    </main>
  )
}

export default MainHomePage