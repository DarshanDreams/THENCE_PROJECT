import React from 'react'
import Navbar from './Navbar'
import Questions from './Quetions'
import Footer from './Footer'
import SuccessStories from './SuccessStories'
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SuccessStories></SuccessStories>
      <Questions></Questions>
      <Footer></Footer>
    </div>
  )
}

export default Home