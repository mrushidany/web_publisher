import Image from 'next/image'
import headTitle from '../../public/images/head-title.svg'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <section className='w-full h-screen px-6 md:px-24 lg:px-44 pb-[147px] md:pb-[256px] bg-hero-sm lg:bg-hero bg-cover bg-no-repeat bg-top lg:bg-center font-bold leading-6 md:leading-8 text-[14px] md:text-[32px]'>
        <Navbar />
        <div className='h-full flex items-end'>
            <div className='flex flex-col gap-3 md:gap-10 lg:gap-20'>
                <p>
                    <Image src={headTitle} className='w-[254px] h-[118px] md:w-full md:h-full' alt='The 1st Building' />
                </p>
                <div className='flex flex-col gap-[2px] md:gap-[18px] tracking-[-1%] md:tracking-[-3%]'>
                    <p className='leading-6 md:leading-[47.36px]'>최고의 공간을 경험하세요</p>
                    <p className='font-normal text-[12px] md:text-[20px] leading-[21px] md:leading-[30px]'>국내를 넘어 세계의 무대를 준비하는 여러분들과 함께 합니다.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
