// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import RacingEventsDropdownMenu from 'src/components/SearchBarComponents/RacingEventDropdownMenu'
import SearchBar from 'src/components/SearchBarComponents/SearchBar'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <RacingEventsDropdownMenu />
      <SearchBar />
    </>
  )
}

export default HomePage
