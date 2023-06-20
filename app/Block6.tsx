"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

export default function Block6() {
    SwiperCore.use([Autoplay]);
    return (
        <div className='my-20'>

            <div className='bg-blue-950 relative z-10 justify-center  px-[20vw] py-[15vw] justify-center -skew-y-12'>


                <div className=' justify-center   py-14  grid'>
                    <div className='skew-y-12 text-center text-white text-xl font-extrabold'>
                        <p >Start Earning in 3 Easy Steps</p>

                    </div>
                    <div className=' justify-center text-white text-lg skew-y-12 '>
                        <p>We have create the app the make your earning easy</p>
                    </div>
                    <div>
                    </div>
                </div>

                <div className=' justify-center  skew-y-12      '>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{ delay: 3000 }}
                    >


                        <SwiperSlide>
                            <div className='flex'>
                                <div className='grid'>

                                    <p className='bg-blue-300 p-2 font-semibold text-lg'>STEP 1</p>

                                    <p className='block text-blue-200 font-bold text-3xl'>Download the App and Sign up as a ZET agent</p >
                                    <Image
                                        src="/downloadBtnDark.a0f01343.svg"
                                        width={142}
                                        height={38}
                                        alt="">
                                    </Image>
                                </div>
                                <div>
                                    <video autoPlay loop style={{ width: '500px', height: '500px' }}>
                                        <source src="/Block6/Step3.mp4" />
                                    </video>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex'>
                                <div className='grid'>
                                    <div className='bg-blue-300 font-semibold text-lg'>
                                        <p>STEP 2</p>
                                    </div>
                                    <p className='block text-blue-200 font-bold text-3xl'>Register your customers and Recommend financial products</p >
                                    <Image
                                        src="/downloadBtnDark.a0f01343.svg"
                                        width={142}
                                        height={38}
                                        alt="">
                                    </Image>
                                </div>
                                <div>
                                    <video autoPlay loop style={{ width: '500px', height: '500px' }}>
                                        <source src="/Block6/Step3.mp4" />
                                    </video>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex'>
                                <div className='grid'>
                                    <div className='bg-blue-300 font-semibold text-lg'>
                                        <p>STEP 3</p>
                                    </div>
                                    <p className='block text-blue-200 font-bold text-3xl'>Start earning upto ₹ 1 Lakh every month</p >
                                    <Image
                                        src="/downloadBtnDark.a0f01343.svg"
                                        width={142}
                                        height={38}
                                        alt="">
                                    </Image>
                                </div>
                                <div>
                                    <video autoPlay loop style={{ width: '500px', height: '500px' }}>
                                        <source src="/Block6/Step3.mp4" />
                                    </video>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
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
