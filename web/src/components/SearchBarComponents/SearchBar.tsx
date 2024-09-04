import React from 'react'

import RacingEventDropdownMenu from 'web/src/components/SearchBarComponents/RacingEventDropdownMenu'

export default function SearchBar() {
  return (
    <div
      className="mx-auto grid max-w-xl grid-cols-4 rounded-md shadow-sm"
      role="group"
    >
      <RacingEventDropdownMenu />
      <button
        type="button"
        className="border-y border-r border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
      >
        Check In
      </button>
      <button
        type="button"
        className="border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
      >
        Check Out
      </button>
      <button
        type="button"
        className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
      >
        Guests
      </button>
    </div>
  )
}
