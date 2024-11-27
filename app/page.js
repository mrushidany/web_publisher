'use client'

import About from './components/About'
import Convenience from './components/Convenience'
import Hero from './components/Hero'
import Center from './components/Center'
import Advertisement from './components/Advertisement'
import Miracle from './components/Miracle'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Convenience />
      <About />
      <Center />
      <Advertisement />
      <Miracle />
      <Footer />
    </>
  )
}
