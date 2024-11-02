import { BookRate } from "@/services/types"
import { Empty, Rate } from "antd"
import React from 'react'



const SingleBookRate = ({ rate }: { rate: BookRate }) => {

  return <div className="border border-text-10 rounded-lg p-3 lg:p-4 xl:p-5 shadow-sm">

    <div className="flex items-start justify-between gap-4">
      <div>
        <h4 className="text-primary mb-1 text-lg font-bold"> {rate?.client?.name}</h4>
        <Rate
          allowHalf
          value={rate?.rating}
          className="text-sm !text-primary  "
          disabled

        />
      </div>

      <div >
        {/* 27-11-2025 */}
      </div>
    </div>
    {!!rate?.review && (
      <p>
        {rate?.review}
      </p>
    )}
  </div>
}
const BookRates = ({ rating }: { rating: BookRate[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {!!rating?.length ? (
        <>
          {rating?.map((rate) => (
            <SingleBookRate key={rate.id} rate={rate} />
          ))}
        </>
      ) : (
        <Empty />
      )}

    </div>
  )
}

export default BookRates