import React from 'react'

import RentalCard from 'web/src/components/Rental/RentalCard.js'

const CardContainer = () => {
  return (
    <div className="mx-2 grid justify-items-center gap-4 px-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <RentalCard />
      <div className="max-w-xs rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <div>
          <img
            className="rounded-t-lg"
            src="https://phantom-marca.unidadeditorial.es/ec33eb4d46c78d2e77acd27e6c1985a2/resize/1200/f/jpg/assets/multimedia/imagenes/2023/05/25/16850063154805.jpg"
            alt=""
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Monaco Corner View
            </h5>
          </div>
          <div className="inline-flex items-center rounded-lg bg-blue-700 px-2 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="max-w-xs rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <div>
          <img
            className="rounded-t-lg"
            src="https://phantom-marca.unidadeditorial.es/ec33eb4d46c78d2e77acd27e6c1985a2/resize/1200/f/jpg/assets/multimedia/imagenes/2023/05/25/16850063154805.jpg"
            alt=""
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Monaco Corner View
            </h5>
          </div>
          <div className="inline-flex items-center rounded-lg bg-blue-700 px-2 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="max-w-xs rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <div>
          <img
            className="rounded-t-lg"
            src="https://phantom-marca.unidadeditorial.es/ec33eb4d46c78d2e77acd27e6c1985a2/resize/1200/f/jpg/assets/multimedia/imagenes/2023/05/25/16850063154805.jpg"
            alt=""
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Monaco Corner View
            </h5>
          </div>
          <div className="inline-flex items-center rounded-lg bg-blue-700 px-2 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardContainer
