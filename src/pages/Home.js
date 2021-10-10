import React from 'react'
import Content from '../pages/Content'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
import { useGlobalContext } from '../context'

function Home() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Home
