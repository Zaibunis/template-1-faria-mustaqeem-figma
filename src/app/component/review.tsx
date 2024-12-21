import React from 'react'
import { Input } from "@/components/ui/input"
import Image from 'next/image'

const Review = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      
      <h1 className="text-[32px] text-black font-extrabold leading-[36px] md:text-5xl capitalize mr-auto">
        OUR HAPPY CUSTOMERS
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 ">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-white border-b-2 p-8 flex-col">
          <div className="flex items-center mb-3">
          <div className="flex space-x-1">
      {/* Repeat this SVG for the number of stars you want */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
            <h2 className="flex text-black text-lg title-font font-bold">
              Sarah M.
              <div className="flex items-center space-x-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white bg-green-500 rounded-lg ml-[10px]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>

</div>
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            &ldquo;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&rdquo;
            </p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3 border-b-2">
        <div className="flex rounded-lg h-full bg-white p-8 flex-col">
          <div className="flex items-center mb-3">
          
<div className="flex space-x-1">
      {/* Repeat this SVG for the number of stars you want */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
            <h2 className="flex text-black text-lg title-font font-bold">
              Alex K.
              <div className="flex items-center space-x-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white bg-green-500 rounded-lg ml-[10px]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>

</div>
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            &ldquo;Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.&rdquo;
            </p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3 border-b-2">
        <div className="flex rounded-lg h-full bg-white p-8 flex-col">
          <div className="flex items-center mb-3">
                
<div className="flex space-x-1 ">
      {/* Repeat this SVG for the number of stars you want */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
            <h2 className="flex text-black text-lg title-font font-bold">
              James L.
              <div className="flex items-center space-x-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white bg-green-500 rounded-lg ml-[10px]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>

</div>
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            &ldquo;As someone who&apos;s always on the lookout for unique fashion pieces, I&apos;m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.&rdquo;
            </p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='w-[1240px] h-[180px] bg-black ml-[50px] rounded-lg'>
<span className='text-[#FFFFFF] text-3xl font-extrabold mt-[30px]'>STAY UPTO DATE ABOUT<br /> OUR LATEST OFFERS</span>
<div className='flex'>
  <Image src={"/Frame (8).png"} width={24} height={24} alt=''/>
  </div>
 <div className='rounded-lg ml-[40px]'>
  <Input type="email" placeholder="Enter your email address" className='w-[349px] h-[48px]'/>
  </div>
  </div>
 
</section>

    </div>
  )
}

export default Review
