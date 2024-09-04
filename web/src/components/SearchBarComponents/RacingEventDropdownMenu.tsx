import React, { useState } from 'react'

export default function RacingEventsDropdownMenu() {
  const [venuesMenuSlide, setVenuesMenuSlide] = useState(false)

  const toggleDropdown = () => {
    setVenuesMenuSlide(!venuesMenuSlide)
  }

  return (
    <>
      <button
        onClick={toggleDropdown}
        className="border-y border-r border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
      >
        <span className="h-full">Racing Venues</span>
      </button>
      {venuesMenuSlide && (
        <div className="absolute mt-12 grid w-36 rounded-md bg-white py-2 shadow-xl">
          <a
            href="rental"
            className="p-2 hover:bg-indigo-500 hover:text-white "
          >
            Monaco
          </a>
          <a
            href="rental"
            className="p-2 hover:bg-indigo-500 hover:text-white "
          >
            Chicago
          </a>
        </div>
      )}
    </>
  )
}
