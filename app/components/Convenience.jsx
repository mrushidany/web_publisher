'use client'

import { useState } from 'react'
import Image from 'next/image'
import kf from '../../public/images/kf.webp'
import wellness from '../../public/images/wellness.webp'
import sparkplus from '../../public/images/sparkplus.webp'

export default function Convenience() {
  const [activeCard, setActiveCard] = useState(null)

  const cards = [
    {
      id: 'kf',
      image: kf,
      title: 'KF GALLERY',
      description: '국내외 방문객에게 전시회, 문화 행사, 교육 프로그램 등 개최 국제 교류를 촉진하는 다양한 전시와 행사에 참여해보세요.'
    },
    {
      id: 'wellness',
      image: wellness,
      title: '센터원 Wellness',
      description: '피트니스, 골프GDR+, 필라테스, GX,스피닝, 사우나, PT(퍼스널트레이닝) 등 운영 바쁜 일상과 업무에서 잠시 휴식을 취해보세요.'
    },
    {
      id: 'sparkplus',
      image: sparkplus,
      title: 'SPARKPLUS',
      description: '원하는 인원만큼 사용할 수 있는 맞춤형 오피스 일에만 집중할 수 있는 완벽한 공유 오피스를 만나보세요.'
    }
  ]

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId)
  }

  return (
    <section className='w-full min-h-screen lg:h-screen bg-dark-default flex items-center px-4 lg:px-48 py-20 lg:py-0'>
        <div className='flex flex-col gap-10 lg:gap-40'>
            <div className='flex flex-col tracking-[-1%] text-xl lg:text-[40px] leading-8 lg:leading-[64px]'>
                <h3 className='tracking-[-1.4%]'>Convenience</h3>
                <p className='flex flex-col lg:flex-row'><span>미래에셋센터원에서 경험하는</span> <span className='text-orange-default'>특별한 서비스</span></p>
            </div>
            <div className='w-full grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-5 text-[40px] leading-[64px] tracking-[-1.4%]'>
                {cards.map((card) => (
                    <div key={card.id} className='w-full h-auto flex flex-col gap-4 lg:gap-6 cursor-pointer' onClick={() => handleCardClick(card.id)}>
                        <div className='w-full h-auto'>
                            <Image src={card.image} className='w-full' alt={card.title} />
                        </div>
                        <div className='flex flex-col gap-1 lg:gap-2'>
                            <h3 className={`${activeCard === card.id ? 'text-orange-default transition-all duration-300 ease-in-out' : ''}`}>{card.title}</h3>
                            <p className='w-full text-gray-default leading-7 lg:leading-8 text-base lg:text-[20px] tracking-[-1%]'>{card.description}</p>
                            { activeCard === card.id ? (
                                <div className='relative'>
                                    <div className={`w-1/2 h-0 border-[2px] mt-6 ${ card.id === 'wellness' ? 'lg:mt-[26px]' : 'lg:mt-8'} border-orange-default absolute transition-all duration-300 ease-in-out top-0 left-0`}></div>
                                    <div className={`w-full h-0 border-[2px] mt-6 ${ card.id === 'wellness' ? 'lg:mt-[26px]' : 'lg:mt-8'} border-gray-100`}></div>
                                </div>
                            ): (
                                <div className={`w-full h-0 border-[2px] mt-6 ${ card.id === 'wellness' ? 'lg:mt-[26px]' : 'lg:mt-8'} border-gray-100`}></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}