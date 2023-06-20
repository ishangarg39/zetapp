"use client"
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import Image from 'next/image';
import 'swiper/css';

export default function Block2() {
    SwiperCore.use([Autoplay]);

    return (
        <div className='my-8 mx-40'>
            <div className='grid'>
                <div className='grid relative my-8 align-center   justify-center '>
                    <p className='text-center text-2xl font-semibold '>Top Brands on ZET</p>
                    <p className='text-center text-lg font-meidum'>We are trusted by best brand in the country</p>
                </div>

            </div>
            <div className=''>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 3000 }}
                >
                    <SwiperSlide>{Slide("/Banks/YesBank.webp")}</SwiperSlide>
                    <SwiperSlide>{Slide("/Banks/Amex.webp")}</SwiperSlide>
                    <SwiperSlide>{Slide("/Banks/Aufin.webp")}</SwiperSlide>
                    <SwiperSlide>{Slide("/Banks/Axis.webp")}</SwiperSlide>
                    <SwiperSlide>{Slide("/Banks/Bajaj.webp")}</SwiperSlide>
                    <SwiperSlide>{Slide("/Banks/BOB.webp")}</SwiperSlide>
                    <SwiperSlide>{Slide("/Banks/Icici.webp")}</SwiperSlide>
                    <SwiperSlide>{Slide("/Banks/Idfc.webp")}</SwiperSlide>
                    <SwiperSlide>{Slide("/Banks/IndusInd.webp")}</SwiperSlide>
                    <SwiperSlide>{Slide("/Banks/StandardChartered.webp")}</SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}
const Slide = (imageurl:string) => {
    return (
        <div className='py-2 align-center place-items-center border-2 border-black-200  rounded-lg '>
            <div className="mx-2 jusitfy-center ">
                <Image src={imageurl} width={200} height={64} alt={''}></Image>
            </div>
        </div>

    )
}
