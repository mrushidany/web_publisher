import Image from 'next/image'
import logo from '../../public/images/logo.svg'
import smLogo from '../../public/images/sm-logo.svg'
import globe from '../../public/images/globe.svg'
import headTitle from '../../public/images/head-title.svg'

export default function Hero() {
  return (
    <section className='w-full h-screen px-6 md:px-24 lg:px-44 pb-[147px] md:pb-[256px] bg-hero-sm lg:bg-hero bg-cover bg-no-repeat bg-top lg:bg-center font-bold leading-6 md:leading-8 text-[14px] md:text-[32px]'>
            <nav className='w-full h-[60px] md:h-20 py-[18px] md:py-[26px] block'>
                <div className='lg:flex flex-row justify-between items-center text-[20px] tracking-[-1%] text-center hidden'>
                    <div className='flex flex-row items-center gap-16'>
                        <div>
                            <a href='/'>
                                <Image src={logo} className='w-[300px] h-[26px]' alt='Logo' />
                            </a>
                        </div>
                        <ul className='flex flex-row gap-10'>
                            <li>
                                <a href='#'>센터원</a>
                            </li>
                            <li>
                                <a href='#'>이용안내</a>
                            </li>
                            <li>
                                <a href='#'>서비스소개</a>
                            </li>
                            <li>
                                <a href='#'>임대문의</a>
                            </li>
                            <li>
                                <a href='#'>고객지원</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a href='/'>
                            <Image src={globe} alt='Globe' />
                        </a>
                    </div>
                </div>
                <div className='w-full flex flex-row justify-between items-baseline lg:hidden'>
                    <div>
                        <a href='/'>
                            <Image src={smLogo} className='block md:hidden' alt='Logo' />
                            <Image src={logo} className='w-[300px] h-[26px] hidden md:block' alt='Logo' />
                        </a>
                    </div>
                    <div>
                        <button>
                            <svg width='18' height='12' viewBox='0 0 18 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M0 0H18V2H0V0ZM0 5H18V7H0V5ZM0 10H18V12H0V10Z' fill='white'/>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
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
