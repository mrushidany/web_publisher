'use client'

import About from './components/About'
import Convenience from './components/Convenience'
import Hero from './components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <Convenience />
      <About />
      {/* <section class='w-full h-screen bg-dark-default flex items-center px-48 hidden lg:block'>
            <div class='flex flex-col gap-[120px]'>
                <div class='flex flex-col tracking-[-1%] text-[40px] leading-[64px]'>
                    <h3 class='tracking-[-1.4%] uppercase flex flex-row gap-2 items-baseline'><span>ONLY</span><img src='./images/center_logo.png' class='w-[196px] h-[39px] object-cover' alt='CENTER 1' /></h3>
                    <p>미래에셋센터원에서만 누리는 <span class='text-orange-default'>특별한 혜택</span></p>
                </div>
                <div class='w-full grid grid-cols-3 gap-10 text-[32px] leading-[48px] tracking-[-1%]'>
                    <div class='w-full h-auto flex flex-col gap-10'>
                        <div class='w-full h-auto'>
                            <img src='./images/mom-child.webp' class='w-full' alt='Mom and Child' />
                        </div>
                        <div class='flex flex-col gap-2'>
                            <h3>프라임 서비스</h3>
                            <p class='w-full font-normal leading-7 text-[18px]'>임산부 휴게실/수유실 운영, 세차 서비스, 우편 배달 서비스 등 입주사 임직원을 위한 차별화된 서비스를 제공합니다.</p>
                        </div>
                    </div>
                    <div class='w-full h-auto flex flex-col gap-10'>
                        <div class='w-full h-auto'>
                            <img src='./images/petrol-station.webp' class='w-full' alt='Petrol Station' />
                        </div>
                        <div class='flex flex-col gap-2'>
                            <h3>E-pit 전기차 충전소</h3>
                            <p class='w-full font-normal leading-7 text-[18px] text-gray-200'>미래에셋센터원 주차장에는 전기차 이용자들을 위해
                                일반 충전소 외에도 E-pit 전기차 충전소가 마련되어 있습니다.</p>
                        </div>
                    </div>
                    <div class='w-full h-auto flex flex-col gap-10'>
                        <div class='w-full h-auto'>
                            <img src='./images/parking.webp' class='w-full' alt='Parking' />
                        </div>
                        <div class='flex flex-col gap-2'>
                            <h3>주차요금 할인</h3>
                            <p class='w-full font-normal leading-7 text-[18px] text-gray-200'>오피스,에비뉴 방문시 주차할인 혜택을 드리며 주말에는 
                                최대 8천원으로 부담없이 미래에셋센터원을 즐길 수 있습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class='w-screen h-screen bg-white-100 flex items-center px-48 relative hidden lg:block'>
            <div class='w-full grid grid-cols-2 gap-10'>
                <div class='w-full h-auto flex flex-col gap-12 relative'>
                    <div class='w-full flex flex-row justify-between items-center'>
                        <h3 class='text-[40px] leading-[64px] tracking-[-1.4%] text-dark-100'>지금 살펴봐야할 이벤트</h3>
                        <button class='size-6 rounded-full border-[2px] border-blue-default flex items-center justify-center text-blue-default'>+</button>
                    </div>
                    <div class='w-full flex flex-col gap-5'>
                        <div class='w-full h-[444px] bg-cover bg-no-repeat bg-center bg-christmas'></div>
                        <div class='flex flex-col font-normal leading-8 tracking-[-1%] text-[20px] text-gray-300'>
                            <h3 class='text-dark-100 text-[32px] leading-[48px]'>미래에셋센터원 크리스마스 작은 음악회</h3>
                            <ul>
                                <li class='flex flex-row gap-2 items-center'><span class='size-1 rounded-full bg-gray-300'></span><span>공연 주제 : 재즈 공연</span></li>
                                <li class='flex flex-row gap-2 items-center'><span class='size-1 rounded-full bg-gray-300'></span><span>장소 : 1층 계단 앞(연주), 1층 크리스마스 트리 앞(다과 및 커피 배포)</span></li>
                            </ul>
                            <div class='leading-7 text-[18px] mt-6'>2024.12.20(금)~2024.12.20(금)</div>
                        </div>
                    </div>
                    <div class='hidden w-full flex flex-col gap-5'>
                        <div class='w-full h-[444px] bg-cover bg-no-repeat bg-center bg-event'></div>
                        <div class='flex flex-col font-normal leading-8 tracking-[-1%] text-[20px] text-gray-300'>
                            <h3 class='text-dark-100 text-[32px] leading-[48px]'>가정의 달 EVENT</h3>
                            <ul>
                                <li class='flex flex-row gap-2 items-center'><span class='size-1 rounded-full bg-gray-300'></span><span>판매상품: 와인 및 꽃박스</span></li>
                                <li class='flex flex-row gap-2 items-center'><span class='size-1 rounded-full bg-gray-300'></span><span>토브의 카네이션은 행사 기간 동안 50개 판매 (한정판매)</span></li>
                            </ul>
                            <div class='leading-7 text-[18px] mt-6'>2024.05.07(화)~2024.05.08(목)</div>
                        </div>
                    </div>
                </div>
                <div class='w-full h-auto flex flex-col gap-12'>
                    <div class='w-full flex flex-row justify-between items-center'>
                        <h3 class='text-[40px] leading-[64px] tracking-[-1.4%] text-dark-100'>센터원 소식</h3>
                        <button class='size-6 rounded-full border-[2px] border-blue-default flex items-center justify-center text-blue-default'>+</button>
                    </div>
                    <div class='flex flex-col w-full tracking-[-1%] text-[15.6px] leading-8 text-blue-default'>
                        <h3 class='text-[28px] leading-[45px]'>미래에셋센터원 홈페이지 리뉴얼 안내</h3>
                        <p class='font-normal'>미래에셋센터원 공식 홈페이지가 리뉴얼 오픈했습니다. 더 나은 서비스 제공을 위해 불편한...</p>
                        <p class='mt-5 text-[16px] leading-7'>2024.09.04(수)</p>
                    </div>
                </div>
            </div>
            <div class='absolute bottom-16 right-6'>
                <div class='flex flex-col gap-4 w-20'>
                    <button class='size-20 rounded-[8px] border-[1px] bg-blue-default border-blue-default flex items-center justify-center'>
                        <div class='flex flex-col items-center gap-[2px]'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2681_462)">
                                    <path d="M10.6667 20C10.6667 18.5273 9.4728 17.3334 8.00004 17.3334C6.52728 17.3334 5.33337 18.5273 5.33337 20V22.6667C5.33337 24.1395 6.52728 25.3334 8.00004 25.3334C9.4728 25.3334 10.6667 24.1395 10.6667 22.6667V20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M26.6667 20C26.6667 18.5273 25.4728 17.3334 24 17.3334C22.5273 17.3334 21.3334 18.5273 21.3334 20V22.6667C21.3334 24.1395 22.5273 25.3334 24 25.3334C25.4728 25.3334 26.6667 24.1395 26.6667 22.6667V20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.33337 20V16C5.33337 13.1711 6.45718 10.458 8.45757 8.45757C10.458 6.45718 13.1711 5.33337 16 5.33337C18.829 5.33337 21.5421 6.45718 23.5425 8.45757C25.5429 10.458 26.6667 13.1711 26.6667 16V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M24 25.3334C24 26.3942 23.1571 27.4117 21.6569 28.1618C20.1566 28.9119 18.1217 29.3334 16 29.3334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2681_462">
                                        <rect width="32" height="32" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span class='font-bold text-[14px] leading-6 tracking-[-1%]'>주요문의처</span>  
                        </div>
                    </button>
                    <button class='size-20 rounded-[8px] border-[1px] border-blue-default flex items-center justify-center text-blue-default'>
                        <div class='flex flex-col items-center gap-[2px]'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2681_470)">
                                    <path d="M21.3334 7.99992H25.3334C25.687 7.99992 26.0261 8.14039 26.2762 8.39044C26.5262 8.64049 26.6667 8.97963 26.6667 9.33325V23.9999C26.6667 24.7072 26.3858 25.3854 25.8857 25.8855C25.3856 26.3856 24.7073 26.6666 24 26.6666C23.2928 26.6666 22.6145 26.3856 22.1144 25.8855C21.6143 25.3854 21.3334 24.7072 21.3334 23.9999V6.66659C21.3334 6.31296 21.1929 5.97382 20.9428 5.72378C20.6928 5.47373 20.3537 5.33325 20 5.33325H6.66671C6.31309 5.33325 5.97395 5.47373 5.7239 5.72378C5.47385 5.97382 5.33337 6.31296 5.33337 6.66659V22.6666C5.33337 23.7275 5.7548 24.7449 6.50495 25.495C7.25509 26.2452 8.27251 26.6666 9.33337 26.6666H24" stroke="#00427A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.6666 10.6667H16" stroke="#00427A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.6666 16H16" stroke="#00427A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.6666 21.3333H16" stroke="#00427A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2681_470">
                                        <rect width="32" height="32" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span class='font-bold text-[14px] leading-6 tracking-[-1%]'>임대문의</span>  
                        </div>
                    </button>
                    <button class='size-20 rounded-[8px] border-[1px] border-blue-default flex items-center justify-center text-blue-default'>
                        <div class='flex flex-col items-center gap-[2px]'>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.66667 6.33333V1M18.3333 6.33333V1M6.33333 11.6667H19.6667M3.66667 25H22.3333C23.8061 25 25 23.8061 25 22.3333V6.33333C25 4.86057 23.8061 3.66667 22.3333 3.66667H3.66667C2.19391 3.66667 1 4.86057 1 6.33333V22.3333C1 23.8061 2.19391 25 3.66667 25Z" stroke="#00427A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class='font-bold text-[14px] leading-6 tracking-[-1%]'>방문예약</span>  
                        </div>
                    </button>
                    <button class='size-20 rounded-[8px] border-[1px] border-blue-default flex items-center justify-center text-blue-default'>
                        <div class='flex flex-col items-center gap-[2px]'>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.9" y="0.9" width="24.2" height="24.2" rx="12.1" stroke="#00427A" stroke-width="1.8"/>
                                <path d="M13.6364 6.3636C13.2849 6.01213 12.7151 6.01213 12.3636 6.3636L6.63604 12.0912C6.28457 12.4426 6.28457 13.0125 6.63604 13.364C6.98751 13.7154 7.55736 13.7154 7.90883 13.364L13 8.27279L18.0912 13.364C18.4426 13.7154 19.0125 13.7154 19.364 13.364C19.7154 13.0125 19.7154 12.4426 19.364 12.0912L13.6364 6.3636ZM12.1 19C12.1 19.4971 12.5029 19.9 13 19.9C13.4971 19.9 13.9 19.4971 13.9 19L12.1 19ZM12.1 7L12.1 19L13.9 19L13.9 7L12.1 7Z" fill="#00427A"/>
                            </svg>
                            <span class='font-bold text-[14px] leading-6 tracking-[-1%]'>TOP</span>  
                        </div>
                    </button>
                </div>
            </div>
        </section>
        <section class='w-full h-screen bg-dark-default hidden lg:block'>

        </section>
        <section class='w-full h-screen bg-cover bg-center bg-no-repeat bg-miracle-asset hidden lg:block'></section>
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
