"use client"
import React, { FC, useMemo, useState } from 'react'
import { } from "antd"
import { Book1, Heart } from "iconsax-react"

import { ClientLink, NextImage, RevealAnimation } from "@/components/shared"
import { LibraryBook } from "@/services/types"
import { useLanguage } from "@/services/hooks"
import { Button } from "@/components/ui"
import { errorMessageLog } from "@/utils"
import { addToCart, useGetProfileQuery } from "@/services/api"
import { useRouter } from "next/navigation"
import useAddToCart from "./useAddToCart"
import { SEARCH_PARAMS_NAMES } from "@/services/constants"

interface Props {

  index?: number
  noCart?: boolean
  defaultFav?: boolean
  book: LibraryBook
  refetch: () => Promise<any>
  href?: string
}

const LibraryBookCard: FC<Props> = ({ index, noCart = false, book, refetch, href }) => {


  const { t } = useLanguage()
  const { handleAddToCart, isAddingToCart, isAuth, favUpdating, handleToggleFav } = useAddToCart()



  const isFavorite = useMemo(() => book?.is_favorite || false, [book])


  return (
    <RevealAnimation delay={0.25 + ((index || 1) * 0.15)}>
      <ClientLink href={href || `/library/${book.id}`} className="w-full border border-text-10 rounded-lg p-3 lg:p-4 bg-white">

        <div className="relative  rounded-lg overflow-hidden bg-white">
          <div className="absolute inset-x-0 top-0   h-2/5 bg-gradient-to-b from-black/50 to-black/0  z-10  ">
            <div className="w-full flex items-center justify-between p-4 ">
              {isAuth ? (

                <Button className="!bg-white/60 !p-1   !h-auto"
                  loading={favUpdating}
                  onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    handleToggleFav({ book_id: book.id, is_favorite: !isFavorite, apiRefetch: refetch })
                  }}
                >
                  <Heart className="text-danger" variant={isFavorite ? 'Bold' : "Outline"} />
                </Button>
              ) : <span> </span>}


              {book.category && (
                <ClientLink href={`/library/categories?${SEARCH_PARAMS_NAMES.category_slug}=${book.category_id}`} className="rounded shadow-sm bg-primary text-white py-1 px-2 text-sm">
                  {book?.category}
                </ClientLink>
              )}
            </div>
          </div>
          <div className="w-full aspect-[4/3] h-[250px] [&>div]:!h-full [&>div]:!w-full">
            {/* <img src="https://ahmedyousry74.github.io/st-website/assets/images/book-1.jpeg" alt="blog image" className="w-full h-full object-contain" /> */}
            <NextImage src={book.image} alt={book?.title} className="!w-full !h-full object-cover" />
          </div>
        </div>
        <div className='flex items-center gap-1 text-sm opacity-100 mt-5 pb-3 border-b border-solid border-[#ccc]'>
          <Book1 size={14} />
          {book.page_num} {t('pages')}
        </div>
        <hr className="py-2" />
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">
            {book?.title}

          </h3>
          <div className='text-[#666] font-medium text-[14px]'
            dangerouslySetInnerHTML={{ __html: book?.details }}
          >

          </div>

          {!noCart && (

            <h4 className="font-bold text-primary"> {book.price} {t('SAR')} </h4>
          )}
        </div>
        {!noCart && (
          <div className="mt-3">
            <Button block type='primary' className="!bg-secondary hover:opacity-70 !font-bold"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                handleAddToCart({ book_id: book.id })
              }}
              loading={isAddingToCart}
              disabled={isAddingToCart}
            >

              {t('add_to_cart')}

            </Button>
            {/* <button className="bg-[#FF9501] text-white text-[15px] font-semibold py-[8px] px-[25px] rounded-[4px] flex justify-center items-center w-full"> إضافة إلى السلة </button> */}
          </div>
        )}

      </ClientLink>
    </RevealAnimation>
  )
}

export default LibraryBookCard