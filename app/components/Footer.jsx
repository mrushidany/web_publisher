'use client'

import { useState } from 'react'

export default function Footer() {
    const [isFamilySiteOpen, setIsFamilySiteOpen] = useState(false)

    const toggleFamilySite = () => {
        setIsFamilySiteOpen(!isFamilySiteOpen)
    }
  return (
    <section className='w-screen h-auto bg-dark-default px-4 lg:px-48 py-10 lg:py-20'>
        <div className='hidden w-full lg:flex flex-row justify-between'>
            <div className='flex flex-col gap-4 tracking-[-2%]'>
                <h3 className='text-[28px] leading-[34px]'>Mirae Asset Center1</h3>
                <div className='w-full flex flex-col gap-[200px]'>
                    <div className='flex flex-col font-normal text-[18px] leading-[21.6px]'>
                        <p>주소 : 서울특별시 중구 수하동 67 미래에셋 센터원 ( 서울특별시 중구 을지로 5길 26 )</p>
                        <p>대표번호 : 02-6030-0100</p>
                    </div>
                    <span>COPYRIGHT(C) 2011 MIRAE ASSET COPORATION. CO., Ltd. ALL RIGHT RESERVED.</span>
                </div>
            </div>
            <div className='flex flex-row gap-8'>
                <h5>개인정보처리방침</h5>
                <div className='flex flex-col gap-1'>
                    <button onClick={toggleFamilySite} className='w-[123px] h-10 rounded-3xl border-[1px] border-[#DDDDDD] flex items-center justify-center'>
                        <div className='flex flex-row gap-4 items-center font-semibold text-sm leading-4 uppercase'>
                            <span>family site</span>
                            <svg width="8" height="5" className={`transition-transform duration-300 ${isFamilySiteOpen ? 'rotate-180' : ''}`} viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.296861 0.954472L3.57295 4.7776C3.62576 4.83919 3.69127 4.88863 3.76498 4.92252C3.83869 4.95642 3.91886 4.97397 3.99999 4.97397C4.08112 4.97397 4.16129 4.95642 4.235 4.92252C4.30871 4.88863 4.37421 4.83919 4.42702 4.7776L7.70311 0.954472C8.01577 0.589551 7.75655 0.0258789 7.27608 0.0258789H0.722955C0.242486 0.0258789 -0.0167327 0.589551 0.296861 0.954472Z" fill="white"/>
                            </svg>
                        </div>
                    </button>
                    {isFamilySiteOpen && (
                        <div className='w-[123px] h-10 border-[1px] rounded-[1px] font-semibold text-sm leading-4 border-[#DDDDDD] flex items-center justify-center'>
                            <span>미래에셋</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className='w-full flex flex-col gap-3 lg:hidden'>
            <div className={`flex flex-row justify-between ${isFamilySiteOpen ? 'mb-5' : ''}`}>
                <h3 className='text-base leading-7'>Mirae Asset Center1</h3>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xs leading-[21px]'>개인정보처리방침</h3>
                    <div className='flex flex-col gap-1'>
                        <button onClick={toggleFamilySite} className='w-[109px] h-9 rounded-3xl border-[1px] border-[#DDDDDD] flex items-center justify-center'>
                            <div className='flex flex-row gap-4 items-center font-medium text-xs leading-4 uppercase'>
                                <span>family site</span>
                                <svg width="8" height="5" className={`transition-transform duration-300 ${isFamilySiteOpen ? 'rotate-180' : ''}`} viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.296861 0.954472L3.57295 4.7776C3.62576 4.83919 3.69127 4.88863 3.76498 4.92252C3.83869 4.95642 3.91886 4.97397 3.99999 4.97397C4.08112 4.97397 4.16129 4.95642 4.235 4.92252C4.30871 4.88863 4.37421 4.83919 4.42702 4.7776L7.70311 0.954472C8.01577 0.589551 7.75655 0.0258789 7.27608 0.0258789H0.722955C0.242486 0.0258789 -0.0167327 0.589551 0.296861 0.954472Z" fill="white"/>
                                </svg>
                            </div>
                        </button>
                        {isFamilySiteOpen && (
                            <div className='w-[109px] h-9 border-[1px] rounded-[1px] font-medium text-xs leading-4 border-[#DDDDDD] flex items-center justify-center'>
                                <span>미래에셋</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-2 gap-1 font-normal text-xs leading-[21px]'>
                <span>주소 : 서울특별시 중구 수하동 67 미래에셋 센터원 ( 서울특별시 중구 을지로 5길 26 )</span>
                <span>대표번호 : 02-6030-0100</span>
                <span className='mt-2'>COPYRIGHT(C) 2011 MIRAE ASSET COPORATION. CO., Ltd. ALL RIGHT RESERVED.</span>
            </div>
        </div>
    </section>
  )
}
