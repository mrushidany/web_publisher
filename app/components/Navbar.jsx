import Image from 'next/image'
import logo from '../../public/images/logo.svg'
import smLogo from '../../public/images/sm-logo.svg'
import globe from '../../public/images/globe.svg'

export default function Navbar() {
  return (
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
  )
}
