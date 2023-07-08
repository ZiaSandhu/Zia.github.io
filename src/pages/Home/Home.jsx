import React from 'react'
import Header from '../../components/Header/Header'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import Skill from '../../components/Skills/Skill'
import Divider from '../../components/Divider/Divider'
function Home() {
  return (
    <div>
        <Header />
        <Divider />
        <Skill />
        <Divider />
        <Projects/>
        <Footer />
    </div>
  )
}

export default Home