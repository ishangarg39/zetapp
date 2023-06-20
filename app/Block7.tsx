import Image from 'next/image'
import React from 'react'

export default function Block7() {
    return (
        <div>
            <div className='   justify-center  object-fill '>
                <div className='relative  mt-20 z-10'><Image src="/AboutUs.webp" width={1440} height={532} alt={''}>
                </Image>
                    <div className='absolute pt-20  pl-20 top-2 z-40'>
                        <div>  <Image
                            src="/zet_logo_white.04e35c15.svg"
                            alt="Zet-logo"
                            loading="lazy"
                            width={100}
                            height={40}
                        ></Image>

                        </div>

                    </div>
                    <hr className='absolute align-center top-40 z-40 pt-20  pl-20 ' />

                    <div className='absolute flex  pt-40  pl-20 top-20 z-40'>
                        <div className='justify-center flex'>
                            <div className='grid ml-10  text-white'>
                                <p className='pb-10'>COMPANY</p>
                                <p>About Us</p>
                                <p>Partner with us</p>
                                <p>Blog</p>
                            </div>

                            <div className='grid  ml-20 text-white'>
                                <p className='pb-10'>LEGAL</p>
                                <p>Privay Policy</p>
                                <p>Terms of Use</p>
                            </div>

                            <div className='grid ml-20 text-white'>
                                <p className='pb-10'>CONTACT</p>
                                <p>hi@zetapp.in</p>
                                <p>+91-7417274072</p>

                            </div>

                            <div className='grid ml-20 text-white'>
                                <p className=''>SOCIAL</p>
                                <div className='flex'>
                                    <Image src="instagram.146ba33a.svg" width={32} height={32} alt={''}></Image>
                                    <Image src="linkedin.99e56649.svg" width={32} height={32} alt={''}></Image>
                                    <Image src="facebook.cccadfff.svg" width={32} height={32} alt={''}></Image>
                                    <Image src="TelegramImg.2d51b03f.svg" width={32} height={32} alt={''}></Image>
                                    <Image src="WhatsappImg.a5c0a9a6.svg" width={32} height={32} alt={''}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            </div>
            )
}
