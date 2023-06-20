import Image from 'next/image';

export default function Block3() {
  return (
    <div>
      <div className=' relative flex  justify-center z-0 bg-sky-100'>
        <div className="absolute  top-0 left-0 z-10">
          <Image
            src="/Block3_Image/decImg.ead9275f.svg"
            width={341}
            height={452}
            alt="A Happy man with good earning"
          />
        </div>
        <div className='block flex px-10 py-8 z-40 justify-center'>
          <div className='grid'>
            <div className='grid relative my-8 align-center justify-center'>
              <p className='text-center text-2xl font-semibold'>Products on ZET</p>
              <p className='text-center text-lg font-medium'>We are trusted by the best brands in the country</p>
            </div>
            <div className='grid'>
              <div className='flex'>
                <div className='flex bg-green-100 rounded-lg p-6 hover:bg-stone-100 m-4'>

                  <Image
                    className='grayscale-0 transition-all duration-300'
                    src="/Block3_Image/CC.webp"
                    width={100}
                    height={100}
                    alt={''}
                  />
                  <div className='grid relative text-left pl-6 align-center'>
                    <p className='text-2xl font-semibold'>CREDIT CARDS</p>
                    <p className='text-lg font-medium'>100% Contactless Application Process with Instant Approval From Top Banks.</p>
                  </div>
                </div>


                <div className='flex bg-orange-100 p-6 rounded-lg hover:bg-stone-100 m-4'>
                  <Image src="/Block3_Image/Loan.webp" width={100} height={100} alt={''} />
                  <div className='grid relative pl-6 align-center justify-center'>
                    <p className='text-left text-2xl font-semibold'>LOANS</p>
                    <p className='text-left text-lg font-medium'>100% online process. Instant offers. Affordable Rate of Interest on loans.</p>
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div className='flex rounded-lg bg-pink-200 p-6 hover:bg-stone-100 m-4'>
                  <Image src="/Block3_Image/BNPL.webp" width={100} height={100} alt={''} />
                  <div className='grid relative pl-6 align-center justify-center'>
                    <p className='text-left text-2xl font-semibold'>BUY NOW PAY LATER</p>
                    <p className='text-left text-lg font-medium'>Short-term financing that allows consumers to make purchases and pay for them over time.</p>
                  </div>
                </div>
                <div className='flex rounded-lg bg-pink-100 p-6 hover:bg-stone-100 m-4'>
                  <Image src="/Block3_Image/AccountSave.webp" width={100} height={100} alt={''} />
                  <div className='grid relative pl-6 align-center justify-center'>
                    <p className='text-left text-2xl font-semibold'>SAVING ACCOUNTS</p>
                    <p className='text-left text-lg font-medium'>ZET offers a range of savings accounts that suit your personal needs for banking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 z-10">
          <Image
            src="/Block3_Image/decImg2.3cc2964a.svg"
            width={341}
            height={452}
            alt="A Happy man with good earning"
          />
        </div>
      </div>
    </div>
  );
}
