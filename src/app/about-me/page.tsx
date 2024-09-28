import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <main className='main about-me'>
        <h1>Welcome to About me page!!</h1><br/>
        <p>Here you will get to know about my background , my inetrest and my skills . I am  a passionate web developer constantly learning new cutting edge technologies and trying to improve my skills and learn new tech stacks like <strong>Nextjs</strong></p>
      </main>
      <Footer />
    </div>
    
  
    
        
  )
}

export default AboutMe
