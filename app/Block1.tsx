import React from 'react';
import Image from 'next/image';

export default function Block1() {
    return (
        <div>
            <div className="flex justify-center py-8 px-40">
                <div className="flex relative bg-sky-100 my-10 z-0 ">
                    <div className="grid m-8 ">
                        <div className="block text-4xl mb-3 leading-10 font-bold">
                            <h1>
                                Become a Financial Advisor and{' '}
                                <span className="text-blue-600">Earn Rs. 1 Lakh/Month</span>
                            </h1>
                        </div>
                        <div>
                            <p className="text-xl">No Investment required</p>
                        </div>
                        <div className="px-2 py-4">
                            <Image
                                src="/downloadBtnDark.a0f01343.svg"
                                width={142}
                                height={38}
                                alt=""
                            />
                        </div>
                    </div>
                    
                <div className=" relative -top-10 right-0 mr-9 mt-0 z-40">
                    <Image
                        src="/HeroImgNew.webp"
                        width={738}
                        height={701}
                        alt="A Happy man with good earning"
                    />
                </div>
                </div>


            </div>
        </div>
    );
}
