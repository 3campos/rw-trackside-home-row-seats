// import { Link, routes } from '@redwoodjs/router'
// import { Metadata } from '@redwoodjs/web'
import './HomePage.css'
import CardContainer from 'src/components/Home/CardContainer'
import SearchBar from 'src/components/SearchBarComponents/SearchBar'

const HomePage = () => {
  return (
    <div className="home-page grid gap-y-2">
      <SearchBar />
      <CardContainer />
    </div>
  )
}

export default HomePage
