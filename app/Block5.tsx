import Image from 'next/image'
import React from 'react'

export default function Block5() {
    return (
        <div>
            <div className='relative py-8 px-40 flex'>
                <div className="relative z-10 grid">
                    <p className='font-semibold text-center text-2xl'>Why <span className='text-blue-700'>Choose US</span>
                    </p>
                    <p className='text-center'>Why we are loved by our customers</p>
                    <Image className='relative z-30 ' src="/Block5_Image/whyUsHero.webp" width={277} height={374} alt={''} />
                    <Image className="absolute z-20 place-items-center" src="/Block5_Image/bgImg.webp" width={140} height={4} alt={''} />
                </div>

                <div>
                    <div className="relative py-5 px-7 z-10 grid">
                        <Image className=' ' src="/Block5_Image/zero_investment.d5743aab.svg" width={70} height={70} alt={''} />
                        <p className='font-semibold text-left text-2xl'>Zero Ivestment
                        </p>
                        <p>Build your business without any investment</p>
                    </div>

                    <div className="relative py-5 px-7 z-10 grid">

                        <Image className=' ' src="/Block5_Image/Fin_products.0e8a0582.svg" width={70} height={70} alt={''} />
                        <p className='font-semibold text-left text-2xl'>Limitless Earnings
                        </p>
                        <p>Direct Payout in your bank account in short time
                        </p>
                    </div>

                    <div className="relative py-5 px-7 z-10 grid">

                        <Image className=' ' src="/Block5_Image/customerSupport.5780cd23.svg" width={70} height={70} alt={''} />
                        <p className='font-semibold text-left text-2xl'>Customer Support


                        </p>
                        <p>Access tools and content to build relationship

                        </p>
                    </div>
                </div>

                <div>
                    <div className="relative py-5 px-7 z-10 grid">
                        <Image className=' ' src="/Block5_Image/quick_payout.1d689e09.svg" width={70} height={70} alt={''} />
                        <p className='font-semibold text-left text-2xl'>Quick Payout


                        </p>
                        <p>Direct Payout in your bank account in short time

                        </p>
                    </div>

                    <div className="relative py-5 px-7 z-10 grid">

                        <Image className=' ' src="/Block5_Image/Icon_support.c8382fc1.svg" width={70} height={70} alt={''} />
                        <p className='font-semibold text-left text-2xl'>Training & Upskilling
                        </p>
                        <p>Get trained by finance and sales experts</p>
                    </div>

                    <div className="relative py-5 px-7 z-10 grid">

                        <Image className=' ' src="/Block5_Image/financialProduct.1b3d6eec.svg" width={70} height={70} alt={''} />
                        <p className='font-semibold text-left text-2xl'>Financial Products


                        </p>
                        <p>Trustworthy & high-rated products & categories

                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}
