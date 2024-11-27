'use client'

import About from './components/About'
import Convenience from './components/Convenience'
import Hero from './components/Hero'
import Center from './components/Center'
import Advertisement from './components/Advertisement'
import Miracle from './components/Miracle'

export default function Home() {
  return (
    <>
      <Hero />
      <Convenience />
      <About />
      <Center />
      <Advertisement />
      <Miracle />
      {/* 
        
        <footer class='w-full h-auto bg-dark-default px-48 py-20 hidden lg:block'>
            <div class='w-full flex flex-row justify-between'>
                <div class='flex flex-col gap-4 tracking-[-2%]'>
                    <h3 class='text-[28px] leading-[34px]'>Mirae Asset Center1</h3>
                    <div class='w-full flex flex-col gap-[200px]'>
                        <div class='flex flex-col font-normal text-[18px] leading-[21.6px]'>
                            <p>주소 : 서울특별시 중구 수하동 67 미래에셋 센터원 ( 서울특별시 중구 을지로 5길 26 )</p>
                            <p>대표번호 : 02-6030-0100</p>
                        </div>
                        <span>COPYRIGHT(C) 2011 MIRAE ASSET COPORATION. CO., Ltd. ALL RIGHT RESERVED.</span>
                    </div>
                </div>
                <div class='flex flex-row gap-8'>
                    <h5>개인정보처리방침</h5>
                    <select>
                        <option>FAMILY SITE</option>
                        <option>미래에셋</option>
                    </select>
                </div>
            </div>
        </footer> */}
    </>
  )
}
