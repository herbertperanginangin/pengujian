import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import Navbar from '@/components/organism/Navbar'
import MainBanner from '@/components/organism/Mainbanner'
import Event from '@/components/organism/event'
import Footer from '@/components/organism/footer'

const inter = Inter({ subsets: ['latin'] })
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <>
    <Navbar />
      
   <MainBanner />
  
      <Event />
 
      <Footer />
    </>
  )
}
