// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import SearchBar from 'src/components/SearchBarComponents/SearchBar'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <SearchBar />
    </>
  )
}

export default HomePage
