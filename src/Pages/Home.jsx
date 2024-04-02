import React from 'react'
import Banner from '../components/Banner/Banner'
import MyExpertz from '../components/MyExpert/MyExpertz'
import MySkills from '../components/MySkills/MySkills'
import Carousel from '../components/Crousel/Crousel'

const Home = () => {
  return (
    <div>
      <Banner/>
      <MyExpertz/>
      <MySkills/>
      <Carousel/>
    </div>
  )
}

export default Home
