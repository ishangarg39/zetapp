"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

export default function Block4() {
    SwiperCore.use([Autoplay]);
    return (
        <div>

            <div className='bg-blue-600 relative z-10  my-[6vw] py-[2vw] justify-center -skew-y-6'>
                <div className='relative flex z-20 bg-sky-500  m-16 '>
                    <div>
                        <Image className='mix-blend-luminosity' src="/Block4_Image/peeps1.webp" width={695} height={463} alt={''}>
                        </Image>
                    </div>

                    <div className='relative skew-y-6 py-14 z-30 grid'>
                        <div className='py-[2vw] text-left text-white text-xl font-extrabold'>
                            <p >THE ZET EFFECT</p>
                        </div>
                        <div>



                        </div>
                        
                    </div>
                    <div className=' absolute z-30   indent-8 bottom-6   text-white font-semibold text-8xl'>
                            {/* <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                autoplay={{ delay: 3000 }}
                            >

                                <div className='p-2 skew-y-6'>
                                    <SwiperSlide><p className='block font-semibold text-4xl'>14 Lakh+ Financial Advisor across India are using ZET to increase their income.</p ></SwiperSlide>
                                    <SwiperSlide><p className='block font-semibold text-4xl'>More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans</p></SwiperSlide>
                                    <SwiperSlide><p className='block font-semibold text-4xl'>We helped customers in more than 50 cities to get their first financial product</p></SwiperSlide>
                                </div>
                            </Swiper> */}
                        </div>
                </div>
                
            </div>
            
        </div>

    )
}
const Slide = (imageurl: string) => {
    return (
        <div className='py-2 align-center place-items-center border-2 border-black-200  rounded-lg '>
            <div className="mx-2 jusitfy-center ">
                <Image src={imageurl} width={200} height={64} alt={''}></Image>
            </div>
        </div>

    )
}
