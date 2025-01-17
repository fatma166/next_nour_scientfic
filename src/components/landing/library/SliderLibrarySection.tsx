"use client"
import { RevealAnimation } from "@/components/shared"
import { SliderContainer } from "@/libs/slider"
import React, { FC } from 'react'
import { BookCard, LibraryBookCard } from "../books"
import { SCREEN_SIZES } from "@/services/theme"
import { LibraryBook } from "@/services/types"
import { Empty } from "antd"


interface Props {
  className?: string
  title: string
  data: LibraryBook[]
  refetch: () => Promise<any>
}
const SliderLibrarySection: FC<Props> = ({ className = '', title, data, refetch }) => {
  return (
    <section
      className={`py-12 lg:p-14 xl:py-16 bg-bg-secondary ${className}`}
    >
      <RevealAnimation>
        <div className="container">

          <div className="mb-9">
            <h2 className="text-xl"> {title} </h2>
          </div>
          {!!data?.length ? (
            <div>
              <SliderContainer
                sliderOptions={{
                  slidesPerView: 1,
                  spaceBetween: 20,
                  breakpoints: {
                    [SCREEN_SIZES.md]: {
                      slidesPerView: 2
                    },
                    [SCREEN_SIZES.lg]: {
                      slidesPerView: 3
                    },
                    // [SCREEN_SIZES.xl]: {
                    //   slidesPerView: 4
                    // },
                  }
                }}

                navigationOptions={{
                  navTypes: ['arrows']
                }}
              >

                {data?.map((book, k) => (
                  <LibraryBookCard key={book.id} index={(k + 1) / 10} book={book} refetch={refetch} />
                ))}
              </SliderContainer>
            </div>
          ) : (<Empty />)}

        </div>
      </RevealAnimation>
    </section>
  )
}

export default SliderLibrarySection