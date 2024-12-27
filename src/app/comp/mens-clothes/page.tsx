import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Input } from "@/components/ui/input";


const Page = () => {
  const reviews = [
    {
      name: 'Samantha D.',
      review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&rsquo;s become my favorite go-to shirt.",
      date: 'August 14, 2023',
    },
    {
      name: 'Ethan R.',
      review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer&rsquo;s touch in every aspect of this shirt.",
      date: 'Posted on August 16, 2023',
    },
    {
      name: 'Liam K.',
      review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer&rsquo;s skill. It&rsquo;s like wearing a piece of art that reflects my passion for both design and fashion.",
      date: 'Posted on August 18, 2023',
    },
    {
      name: 'Alex M.',
      review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&rsquo;m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: 'Posted on August 15, 2023',
    },
    {
      name: 'Olivia P.',
      review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It&rsquo;s evident that the designer poured their creativity into making this t-shirt stand out.",
      date: 'Posted on August 17, 2023',
    },
    {
      name: 'Ava H.',
      review: "I am not just wearing a t-shirt; I am wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      date: 'Posted on August 19, 2023',
    },
  ];
  
 
  return (
    <div>
      <header>
        <div className="w-full h-[38px] flex items-center justify-between bg-[#000000] text-[#FFFFFF] font-integral px-[55px]">
          {/* Text and Sign-Up Link */}
          <div className="flex items-center space-x-4">
            <span className="text-center ml-[400px]">Sign up and get 20% off your first order.</span>
            <div className="flex items-center underline text-[#FFFFFF] cursor-pointer">
              <span className="mr-2">Sign Up Now</span>
              <Image src="/Vector (2).png" alt="" width={20} height={20} className="ml-[300px]"/>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-[100px] py-4 bg-white border-b border-gray-300"> {/* Added border here */}
          {/* Logo */}
          <div>
            <Image src="/SHOP.CO.png" alt="Logo" width={141} height={22} />
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex items-center gap-x-12">
              <li>
                <Link href="/" className="hover:underline flex items-center gap-x-1 whitespace-nowrap">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <NavigationMenuLink></NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline whitespace-nowrap">
                  On Sale
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline whitespace-nowrap">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline whitespace-nowrap mr-3">
                  Brands
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right-Side Elements */}
          <div className="flex items-center gap-x-6">
            {/* Search Bar */}
            <div className="relative">
              <Image src="/Frame 3.png" alt="Search Icon" width={477} height={48} />
            </div>

            {/* Cart Icon */}
            <Image
              src="/Frame (3).png"
              alt="Cart"
              width={24}
              height={24}
              className="cursor-pointer"
            />

            {/* Profile Icon */}
            <Image
              src="/Frame (4).png"
              alt="Profile"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </header>

      {/* Breadcrumb Section */}
      <Breadcrumb className='mt-5 ml-[95px]'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Men</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>T-shirts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>


      <div className="flex items-start space-x-6 ml-[100px]"> 

  <div className="flex flex-col mt-[30px] gap-4">
    <div className="w-20 h-20 border border-gray-300 rounded-md overflow-hidden">
      <Image src="/image 2.png" width={152} height={167} alt="Thumbnail 1" />
    </div>
    <div className="w-20 h-20 border border-gray-300 rounded-md overflow-hidden">
      <Image src="/image 5.png" width={152} height={168}  alt="Thumbnail 2" />
    </div>
    <div className="w-20 h-20 border border-gray-300 rounded-md overflow-hidden">
      <Image src="/image 6.png" width={152} height={167}  alt="Thumbnail 3"/>
    </div>
  </div>

 
  <section className="text-gray-600 body-font overflow-hidden flex-1">
    <div className="container px-5 py-5 mx-auto"> 
      <div className="lg:w-full mx-auto flex flex-wrap">
        <Image
          alt="ecommerce"
          width={444}
          height={530}
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="/image 1.png"
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 className="text-black text-3xl title-font font-extrabold mb-1">
            One Life Graphic T-shirt
          </h1>
          <div className="flex flex-col mb-4">
            <div className="flex items-center mb-2">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-[24.71px] h-[24.71px] text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-[24.71px] h-[24.71px] text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-[24.71px] h-[24.71px] text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-[24.71px] h-[24.71px] text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-[24.71px] h-[24.71px] text-yellow-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-black text-sm ml-[9px]">4.5/</span>
              <span className="text-gray-500 text-sm">5</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <span className="font-bold text-black text-2xl">$260</span>
              <span className="line-through text-2xl ml-2">$300</span>
              <span className="text-red-500 bg-red-200 text-sm w-[58px] h-[28px] rounded-lg flex items-center justify-center">
                -40%
              </span>
            </div>
          </div>

          <p className="mb-5 text-sm whitespace-nowrap">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
            <br />
            breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color Selection */}
          <div className="mb-4">
            <h2 className="text-sm font-medium text-gray-600">Select Colors</h2>
            <div className="flex space-x-3 mt-2 border-b-2 mb-5">
              {/* First color with tick */}
              <button className="w-8 h-8 bg-[#4F4631] rounded-full border mb-5 relative">
                <Image
                  src="/Frame (14).png" 
                  width={12}
                  height={12}
                  alt="Selected"
                  className="w-4 h-4 absolute top-2 left-2"
                />
              </button>
              {/* Other colors */}
              <button className="w-8 h-8 bg-[#314F4A] rounded-full border mb-5"></button>
              <button className="w-8 h-8 bg-[#31344F] rounded-full border mb-5"></button>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <h2 className="text-sm font-medium text-gray-600">Choose Size</h2>
            <div className="flex space-x-3 mt-2 border-b-2 mb-5">
              <span className='bg-gray-100 rounded-full text-sm w-[86px] h-[46px] flex items-center justify-center text-gray-500 mb-5'>
                Small
              </span>
              <span className='bg-gray-100 rounded-full text-sm w-[105px] h-[46px] flex items-center justify-center text-gray-500 mb-5'>
                Medium
              </span>
              <span className='bg-gray-100 rounded-full text-sm w-[89px] h-[46px] flex items-center justify-center text-gray-500 mb-5'>
                Large
              </span>
              <span className='bg-black rounded-full text-sm w-[104px] h-[46px] flex items-center justify-center text-white mb-5'>
                X-Large
              </span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6 space-x-4">
            <div className="flex items-center justify-between border bg-gray-100 px-4 py-2 rounded-full w-[170px] h-[52px]">
              <button className="text-lg font-semibold text-black">-</button>
              <span className="text-sm text-center text-black">1</span>
              <button className="text-lg font-semibold text-black">+</button>
            </div>
            <button className="px-6 py-3 bg-black text-white text-sm rounded-full hover:bg-gray-800 w-[400px] h-[52px] flex items-center justify-center">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    <div className='flex flex-col mb-[25px]'>
 
  <div className='flex items-center justify-between mt-[20px]'>
    <span className='text-gray-500 border-b-2 border-gray-300 flex-1 text-center'>Product Details</span>
    <span className='text-black border-b-2 border-black flex-1 text-center'>Rating & Reviews</span>
    <span className='text-gray-500 border-b-2 border-gray-300 flex-1 text-center'>FAQs</span>
  </div>
</div>




<div className='ml-[70px] flex'>
  <h2 className='text-black font-semibold text-3xl'>All Reviews</h2>
  <span className='text-gray-500 ml-3 mt-2'>(451)</span>


<div className='flex  gap-7 ml-[700px]'>
<span className='bg-gray-100 font-semibold rounded-full text-sm w-[48px] h-[48px] flex items-center justify-center text-text-black mb-5'>
<Image src={"/Frame (10).png"} width={24} height={24} alt=''/>
    </span>
</div>


<div className='gap-7'>
<span className='bg-gray-100 font-semibold rounded-full text-sm w-[120px] h-[48px] flex items-center justify-center text-black mb-5'>
Latest
<Image src={"/Frame (9).png"} width={16} height={16} alt='' className='ml-3'/>
    </span>
</div>

<div className='gap-7'>
<span className='bg-black font-semibold rounded-full text-sm w-[166px] h-[48px] flex items-center justify-center text-white mb-5'>
Write a Review
    </span>
</div>
</div>


      
    
<div className="flex justify-between ml-[70px]">
  {/* Left Column with 3 Reviews */}
  <div className="w-full md:w-1/2 p-4">
    <div className="flex flex-col space-y-4">
      {reviews.slice(0, 3).map((review, index) => (
        <div key={index} className="border border-gray-200 p-4 rounded-lg">
          <div className="flex space-x-1 justify-start mb-4">
            {/* Rating Stars */}
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <h2 className="text-black text-lg title-font font-bold mb-3 flex items-center">
            {review.name}
            <div className="ml-3 flex items-center space-x-2">
              {/* Tick Mark (checkmark) SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white bg-green-500 rounded-lg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </h2>

          <p className="text-sm">
            {review.review}
          </p>
          <p className="text-sm mt-8">Posted on {review.date}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Spacer to create space between left and right columns */}
  <div className="w-8"></div> {/* Adjust width to change space between the columns */}

  {/* Right Column with 3 Reviews */}
  <div className="w-full md:w-1/2 p-4">
    <div className="flex flex-col space-y-4">
      {reviews.slice(3, 6).map((review, index) => (
        <div key={index} className="border border-gray-200 p-4 rounded-lg">
          <div className="flex space-x-1 justify-start mb-4">
            {/* Rating Stars */}
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <h2 className="text-black text-lg title-font font-bold mb-3 flex items-center">
            {review.name}
            <div className="ml-3 flex items-center space-x-2">
              {/* Tick Mark (checkmark) SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white bg-green-500 rounded-lg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </h2>

          <p className="text-sm">
            {review.review}
          </p>
          <p className="text-sm mt-8">Posted on {review.date}</p>
        </div>
      ))}
    </div>
  </div>
</div>
        
<button className="w-[230px] font-medium h-[52px] border-2 border-gray-100 text-black text-sm ml-[600px] mt-[20px] rounded-full">
  Load More Reviews
</button>



    <section className="py-10 bg-white">
      {/* Header */}
      <div className="text-center mb-8 relative">
        <h2 className="text-3xl font-extrabold text-black ml-[55px]">YOU MIGHT ALSO LIKE</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 px-4 md:px-8">
        {/* Product Card 1 */}
        <div className="text-center">
          <Image
            src="/Frame 32 (3).png"
            alt="T-shirt with Tape Details"
            width={200}
            height={200}
            className="mx-auto rounded-lg shadow"
          />
          <p className="mt-4 font-bold text-lg text-black ">Polo with Contrast Trims</p>
          <div className="text-yellow-400 text-sm my-1">
            ★★★★☆ <span className="text-black text-sm">4.0/</span>
            <span className="text-gray-500">5</span>
          </div>
          <div className="flex justify-center gap-2 text-gray-500">
            <span className="font-bold text-black">$212</span>
            <span className="line-through">$242</span>
            <span className="text-red-500 bg-red-200 text-sm w-[58px] h-[28px] rounded-lg flex items-center justify-center">
              -20%
            </span>
          </div>
       </div>

        {/* Product Card 2 */}
        <div className="text-center">
          <Image
            src="/Frame 33 (7).png"
            alt="Skinny Fit Jeans"
            width={200}
            height={200}
            className="mx-auto rounded-lg shadow"
          />
          <p className="mt-4 font-bold text-lg text-black ">Gradient Graphic T-shirt</p>
          <div className="text-yellow-400 text-sm my-1">
            ★★★☆☆ <span className="text-black text-sm">3.5/</span>
            <span className="text-gray-500">5</span>
          </div>
          <div className="flex justify-center gap-2 text-gray-500">
            <span className="font-bold text-black">$145</span>
            
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="text-center">
          <Image
            src="/Frame 34 (2).png"
            alt="Checkered Shirt"
            width={200}
            height={200}
            className="mx-auto rounded-lg shadow"
          />
          <p className="mt-4 font-bold text-lg text-black">Polo with Tipping Details</p>
          <div className="text-yellow-400 text-sm my-1">
            ★★★★☆ <span className="text-black text-sm">4.5/</span>
            <span className="text-gray-500">5</span>
          </div>
          <p className="font-bold text-black">$180</p>
        </div>

        {/* Product Card 4 */}
        <div className="text-center">
          <Image
            src="/Frame 38 (2).png"
            alt="Sleeve Striped T-shirt"
            width={200}
            height={200}
            className="mx-auto rounded-lg shadow"
          />
          <p className="mt-4 font-bold text-lg text-black">Black Striped T-shirt</p>
          <div className="text-yellow-400 text-sm my-1">
            ★★★☆☆ <span className="text-black text-sm">5.0/</span>
            <span className="text-gray-500">5</span>
          </div>
          <div className="flex justify-center gap-2 text-gray-500">
            <span className="font-bold text-black">$120</span>
            <span className="line-through">$150</span>
            <span className="text-red-500 bg-red-200 text-sm w-[58px] h-[28px] rounded-lg flex items-center justify-center">
              -30%
            </span>
          </div>
        </div>
      </div>

    
    

    </section>
    <div>
      {/* Newsletter Signup Section */}
      <div className="mb-[1px] w-full mr-[50px] bg-black rounded-lg py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Text Section */}
        <div className="text-left text-white mb-4 md:mb-0">
          <span className="text-3xl font-extrabold block mb-4">
            STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
          </span>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end space-y-4 w-full md:w-auto">
          {/* Email Input Section */}
          <div className="relative w-full md:w-[349px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Image src="/Frame (8).png" width={24} height={24} alt="Newsletter Icon" />
            </div>
            <Input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-[48px] pl-12 rounded-lg border-none"
            />
          </div>

          {/* Box Section */}
          <div className="relative w-full md:w-[349px] h-[48px] bg-white rounded-lg flex items-center pl-3">
            <span className="ml-12 text-black font-medium">
              Subscribe to Newsletter
            </span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-gray-600 body-font bg-gray-100">
        <div className="container border-b-2 border-gray-300 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <span className="text-3xl text-black font-extrabold mb-[10px]">SHOP.CO</span>
            <p className="mt-2 text-sm text-gray-500 mb-10">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
          </div>

          {/* Footer Links Section */}
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {/* Company Links */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li className="text-gray-600 hover:text-gray-800 mb-4">About</li>
                <li className="text-gray-600 hover:text-gray-800 mb-4">Features</li>
                <li className="text-gray-600 hover:text-gray-800 mb-4">Works</li>
                <li className="text-gray-600 hover:text-gray-800 mb-4">Career</li>
              </nav>
            </div>

            {/* Help Links */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                Help
              </h2>
              <nav className="list-none mb-10">
                <li className="text-gray-600 hover:text-gray-800 mb-4">Customer Support</li>
                <li className="text-gray-600 hover:text-gray-800 mb-4">Delivery Details</li>
                <li className="text-gray-600 hover:text-gray-800 mb-4">Terms & Conditions</li>
                <li className="text-gray-600 hover:text-gray-800 mb-4">Privacy Policy</li>
              </nav>
            </div>

            {/* FAQ Links */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                FAQ
              </h2>
              <nav className="list-none mb-10">
                <li className="text-gray-600 hover:text-gray-800 mb-4">Account</li>
                <li className="text-gray-600 hover:text-gray-800 mb-4">Manage Deliveries</li>
                <li className="text-gray-600 hover:text-gray-800 mb-4">Orders</li>
                <li className="text-gray-600 hover:text-gray-800 mb-4">Payments</li>
              </nav>
            </div>

            {/* Resources Links */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                Resources
              </h2>
              <nav className="list-none mb-10 ">
                <li className="text-gray-600 hover:text-gray-800 mb-4">Free eBooks</li>
                <li className="text-gray-600 hover:text-gray-800 mb-4">Development Tutorial</li>
                <li className="text-gray-600 hover:text-gray-800 mb-4">How to - Blog</li>
                <li className="text-gray-600 hover:text-gray-800 mb-4">Youtube Playlist</li>
              </nav>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap items-center justify-between">
            {/* Footer Text */}
            <p className="text-gray-500 text-sm text-center sm:text-left">
              Shop.co © 2000-2023, All Rights Reserved
            </p>

            {/* Footer Images */}
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <Image src="/Badge.png" width={46.61} height={30.03} alt="Badge 1" />
              <Image src="/Badge (1).png" width={46.61} height={30.03} alt="Badge 2" />
              <Image src="/Badge (2).png" width={46.61} height={30.03} alt="Badge 3" />
              <Image src="/Badge (3).png" width={46.61} height={30.03} alt="Badge 4" />
              <Image src="/Badge (4).png" width={46.61} height={30.03} alt="Badge 5" />
            </div>
          </div>
        </div>
      </footer>
   
</div>
</div>
   


  )
}

export default Page
