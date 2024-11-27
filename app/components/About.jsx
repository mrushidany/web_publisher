'use client'

import Image from 'next/image'
import { useState } from 'react'
import environment from '../../public/images/environment.svg'
import building from '../../public/images/building.svg'
import impression from '../../public/images/impression.svg'
import service from '../../public/images/service.svg'
import about from '../../public/images/sample_about.svg'

export default function About() {
    const [activeSection, setActiveSection] = useState('environment')

    const services = [
        {
            id: 'environment',
            title: environment,
            background: '/images/bg/environment.webp',
            description: '서울 청계천은 자연 그대로의 휴식과 재충전 공간이며, 점심시간과 퇴근길에 만나는 청계천의 여유로움은 CENTER1 입주자 및 이용객이 누릴 수 있는 특권입니다. 이용자를 위한 감성적인 요소뿐만 아니라, 국내 최고 수준의 친환경 기준을 실천하여 국내외에서 친환경 건축물로 인증받았습니다.'
        },
        {
            id: 'building',
            title: building,
            background: '/images/bg/building.webp',
            description: 'Center1은 약 170,000m²의 건축 연면적으로 서울 도심 최대 규모의 빌딩입니다. 안정적 구조, 효율적 공간설계, 친환경 건축, 반영구적 자재, 최첨단 기술을 바탕으로 시간이 지나도 그 가치가 높아질 것입니다. 또한 편리한 접근성, 빌딩 앞 공원, 개방된 아트리움 공간 등을 통해 대중과 소통하는 새로운 시대 가치를 담고 있습니다. '
        },
        {
            id: 'impression',
            title: impression,
            background: '/images/bg/impression.webp',
            description: 'Center1의 건축 모티브는 음과 양 (Yin & Yang)입니다. 하나의 매스에서 분리된 두 동은 음각과 양각 형태로 마주 보고 있습니다. 외부 마감재는 자연과 조화를 이루며 주변 건물들과 차별화된 자재를 사용하였고, 알루미늄 환기창은 외기를 도입하면서도 개폐 시 외관 변화가 없도록 세심하게 설계되었습니다.'
        },
        {
            id: 'service',
            title: service,
            background: '/images/bg/service.webp',
            description: 'Center1은 입주사들을 위한 철저한 보안 관리와 사고 예방을 위한 통합 시스템을 도입하여, 보안과 경비 현황을 한 곳에서 효과적으로 관리합니다. 아트리움 2층 로비에서는 방문객 출입을 관리하며, 최첨단 보안 시설을 통해 임차인들에게 높은 수준의 보안 서비스를 제공합니다. 또한, 입주사를 위한 차별화된 서비스를 제공하며, 입주사와 외부 이용객 모두가 이용할 수 있는 다양한 편의 시설을 갖추고 있습니다.'
        },
    ]

    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId)
    }
  return (
    <section className='w-full h-screen px-48 bg-cover bg-center bg-no-repeat pt-20 pb-6 lg:pt-40 lg:pb-20 relative transition-all ease-linear duration-300' style={{ backgroundImage: `url(${services.find((s) => s.id === activeSection).background})` }}>
        <div className='w-full flex flex-col items-start gap-7'>
            <div>
                <Image className='w-full hidden lg:block' src={services.find((s) => s.id === activeSection).title} alt={services.find((s) => s.id === activeSection).id} />
                <Image src={about} className='w-full block lg:hidden' alt={services.find((s) => s.id === activeSection).id}/>
            </div>
            <div className='w-full hidden lg:flex flex-col gap-4'>
                <div className='w-full lg:w-3/4 h-0 relative border-[1px] border-gray-400'>
                    <div className='absolute w-1/2 lg:w-1/3 h-0 -top-[2px] left-0 border-[1.5px] border-white-default'></div>
                </div>
                <p className='w-full lg:w-3/4 text-xs leading-5 font-normal lg:text-xl lg:leading-8 lg:font-bold'>{services.find((s) => s.id === activeSection).description}</p>
                <div className='mt-6'>
                    <button className='w-[137px] h-12 rounded flex items-center justify-center border-[1px] border-white-default font-normal text-xs leading-5 lg:text-base lg:leading-7'>
                        <span>{`view more >`}</span>
                    </button>
                </div>
            </div>
        </div>
        <div className='hidden absolute bottom-20 w-full lg:flex items-center justify-center'>
            <div className='flex flex-row gap-2'>
                {services.map((s) => (
                    <button key={s.id} className={`w-8 h-[3px] rounded-md ${activeSection === s.id ? 'bg-white-default' : 'bg-white-200'}`} onClick={() => handleSectionChange(s.id)}></button>
                ))}
            </div>
        </div>
        <div className='h-full w-full flex items-end justify-center lg:hidden'>
            <div className='flex flex-row gap-2'>
                {services.map((s) => (
                    <button key={s.id} className={`w-8 h-[3px] rounded-md ${activeSection === s.id ? 'bg-white-default' : 'bg-white-200'}`} onClick={() => handleSectionChange(s.id)}></button>
                ))}
            </div>
        </div>
    </section>
  )
}
