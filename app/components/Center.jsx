'use client'

import Image from 'next/image'

export default function Center() {
  return (
    <section className='w-full h-auto lg:h-screen bg-dark-default lg:flex lg:items-center py-20 px-4 lg:py-0 lg:px-48'>
        <div className='flex flex-col gap-10 lg:gap-[120px]'>
            <div className='flex flex-col tracking-[-1%] text-xl leading-8 lg:text-[40px] lg:leading-[64px] w-[73%] lg:w-full'>
                <h3 className='tracking-[-1.4%] uppercase flex flex-row gap-2 items-baseline'><span>ONLY</span><img src='./images/center_logo.png' className='w-[108px] h-6 lg:w-[196px] lg:h-[39px] object-cover' alt='CENTER 1' /></h3>
                <p>미래에셋센터원에서만 누리는 <span className='text-orange-default'>특별한 혜택</span></p>
            </div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-10 text-xl leading-8 lg:text-[32px] lg:leading-[48px] tracking-[-1%]'>
                <div className='w-full h-auto flex flex-col gap-5 lg:gap-10'>
                    <div className='w-full h-auto'>
                        <img src='./images/mom-child.webp' className='w-[328px] h-[203px] lg:w-full' alt='Mom and Child' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3>프라임 서비스</h3>
                        <p className='w-full font-normal leading-7 text-base lg:text-[18px]'>임산부 휴게실/수유실 운영, 세차 서비스, 우편 배달 서비스 등 입주사 임직원을 위한 차별화된 서비스를 제공합니다.</p>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-5 lg:gap-10'>
                    <div className='w-full h-auto'>
                        <img src='./images/petrol-station.webp' className='w-[328px] h-[203px] lg:w-full' alt='Petrol Station' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3>E-pit 전기차 충전소</h3>
                        <p className='w-full font-normal leading-7 text-base lg:text-[18px] text-gray-200'>미래에셋센터원 주차장에는 전기차 이용자들을 위해
                            일반 충전소 외에도 E-pit 전기차 충전소가 마련되어 있습니다.</p>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-5 lg:gap-10'>
                    <div className='w-full h-auto'>
                        <img src='./images/parking.webp' className='w-[328px] h-[203px] lg:w-full' alt='Parking' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3>주차요금 할인</h3>
                        <p className='w-full font-normal leading-7 text-base lg:text-[18px] text-gray-200'>오피스,에비뉴 방문시 주차할인 혜택을 드리며 주말에는 
                            최대 8천원으로 부담없이 미래에셋센터원을 즐길 수 있습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
