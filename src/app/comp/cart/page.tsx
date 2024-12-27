import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div>
      <header>
        <div className="w-full h-[38px] flex items-center justify-between bg-[#000000] text-[#FFFFFF] font-integral px-[55px]">
          <div className="flex items-center space-x-4">
            <span className="text-center ml-[400px]">
              Sign up and get 20% off your first order.
            </span>
            <div className="flex items-center underline text-[#FFFFFF] cursor-pointer">
              <span className="mr-2">Sign Up Now</span>
              <Image
                src="/Vector (2).png"
                alt="Sign Up Icon"
                width={20}
                height={20}
                className="ml-[300px]"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-[100px] py-4 bg-white">
          {/* Logo */}
          <div>
            <Image src="/SHOP.CO.png" alt="Logo" width={141} height={22} />
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex items-center gap-x-12">
              {/* Shop dropdown with NavigationMenu */}
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>
                          <Link href="/comp/casual" passHref>
                            <div className="block px-4 py-2">Casual</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                          <Link href="/comp/cart" passHref>
                            <div className="block px-4 py-2">Cart</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink>
                          <Link href="/comp/mens-clothes" passHref>
                            <div className="block px-4 py-2">Mens Clothes</div>
                          </Link>
                        </NavigationMenuLink>
                        {/* Add other items here */}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>

              {/* Other links */}
              <li>
                <Link href="/" passHref>
                  <div className="hover:underline whitespace-nowrap">
                    On Sale
                  </div>
                </Link>
              </li>

              <li>
                <Link href="/" passHref>
                  <div className="hover:underline whitespace-nowrap">
                    New Arrivals
                  </div>
                </Link>
              </li>

              <li>
                <Link href="/" passHref>
                  <div className="hover:underline whitespace-nowrap mr-3">
                    Brands
                  </div>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right-Side Elements */}
          <div className="flex items-center gap-x-6">
            <div className="relative">
              <Image
                src="/Frame 3.png"
                alt="Search Icon"
                width={477}
                height={48}
              />
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

        {/* Breadcrumb Section */}
        <Breadcrumb className="mt-5 ml-[95px]">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      {/* Main Content */}
      <div className="flex-grow p-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl mb-0 font-extrabold ml-[49px]">YOUR CART</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10">
        {/* Left: Cart Items */}
        <div className="md:col-span-2 space-y-4">
        {/* Cart Item 1 */}
<div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
  <div className="flex items-center space-x-4">
    <Image
      src="/Frame 33 (7).png"
      width={124}
      height={124}
      alt="Gradient Graphic T-shirt"
      className="w-20 h-20 rounded"
    />
    <div>
      <p className="text-lg font-semibold">Gradient Graphic T-shirt</p>
      <p className="text-sm text-gray-600">Size: Large</p>
      <p className="text-sm text-gray-600">Color: White</p>
      <p className="text-lg font-bold mt-3">$145</p>
    </div>
  </div>

  {/* Right section with image above the quantity buttons */}
  <div className="relative flex items-center space-x-4">
    {/* Image on top of -1+ buttons */}
    <Image
      src={"/Frame (15).png"}
      width={24}
      height={24}
      alt="Image"
      className="absolute -top-10 left-1/2 transform mt-2 mb-5 -translate-x-1/2" 
    />

    {/* Quantity buttons with borders */}
    <div className="flex items-center bg-gray-200 rounded-full border border-gray-300">
      <button className="w-10 h-10 flex items-center justify-center text-black border-r border-gray-300">
        -
      </button>
      <span className="w-12 text-center text-black bg-gray-100 flex items-center justify-center">
        1
      </span>
      <button className="w-10 h-10 flex items-center justify-center text-black border-l border-gray-300">
        +
      </button>
    </div>
  </div>
</div>
  {/* Cart Item 2 */}
  <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
  <div className="flex items-center space-x-4">
    <Image
      src="/Frame 34.png"
      width={124}
      height={124}
      alt="Gradient Graphic T-shirt"
      className="w-20 h-20 rounded"
    />
    <div>
      <p className="text-lg font-semibold">Checkered Shirt</p>
      <p className="text-sm text-gray-600">Size: Medium</p>
      <p className="text-sm text-gray-600">Color: Red</p>
      <p className="text-lg font-bold mt-3">$180</p>
    </div>
  </div>

  {/* Right section with image above the quantity buttons */}
  <div className="relative flex items-center space-x-4">
    {/* Image on top of -1+ buttons */}
    <Image
      src={"/Frame (15).png"}
      width={24}
      height={24}
      alt="Image"
      className="absolute -top-10 left-1/2 transform mt-2 mb-5 -translate-x-1/2" 
    />

    {/* Quantity buttons with borders */}
    <div className="flex items-center bg-gray-200 rounded-full border border-gray-300">
      <button className="w-10 h-10 flex items-center justify-center text-black border-r border-gray-300">
        -
      </button>
      <span className="w-12 text-center text-black bg-gray-100 flex items-center justify-center">
        1
      </span>
      <button className="w-10 h-10 flex items-center justify-center text-black border-l border-gray-300">
        +
      </button>
    </div>
  </div>
</div>
{/* Cart Item 3 */}
<div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
  <div className="flex items-center space-x-4">
    <Image
      src="/Frame 33 (5).png"
      width={124}
      height={124}
      alt="Gradient Graphic T-shirt"
      className="w-20 h-20 rounded"
    />
    <div>
      <p className="text-lg font-semibold">Skinny Fit Jeans</p>
      <p className="text-sm text-gray-600">Size: Large</p>
      <p className="text-sm text-gray-600">Color: Blue</p>
      <p className="text-lg font-bold mt-3">$240</p>
    </div>
  </div>

  {/* Right section with image above the quantity buttons */}
  <div className="relative flex items-center space-x-4">
    {/* Image on top of -1+ buttons */}
    <Image
      src={"/Frame (15).png"}
      width={24}
      height={24}
      alt="Image"
      className="absolute -top-10 left-1/2 transform mt-2 mb-5 -translate-x-1/2" 
    />

    {/* Quantity buttons with borders */}
    <div className="flex items-center bg-gray-200 rounded-full border border-gray-300">
      <button className="w-10 h-10 flex items-center justify-center text-black border-r border-gray-300">
        -
      </button>
      <span className="w-12 text-center text-black bg-gray-100 flex items-center justify-center">
        1
      </span>
      <button className="w-10 h-10 flex items-center justify-center text-black border-l border-gray-300">
        +
      </button>
    </div>
  </div>
</div>
</div>

        {/* Right: Order Summary */}
        <div className="border p-6 rounded-lg bg-white">
          <h3 className="text-lg font-semibold mb-6">Order Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-bold">$565</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Discount (-20%)</p>
              <p className="text-red-500">- $113</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Delivery Fee</p>
              <p className="font-bold">$15</p>
            </div>
            <div className="flex justify-between border-t pt-4">
              <p className="text-lg font-semibold">Total</p>
              <p className="text-lg font-bold">$467</p>
            </div>
          </div>
          <div className="mt-6">
  <div className="flex items-center justify-between mb-4">
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Add promo code"
        className="w-full border p-2 rounded-full pl-10"
      />
      <Image
        src="/Vector (3).png"
        width={24}
        height={24}
        alt="Promo Code Icon"
        className="absolute left-3 top-1/2  transform -translate-y-1/2"
      />
    </div>
    {/* Apply Button on the right */}
    <button className="w-[119px] h-[48px] bg-black text-white py-2 rounded-full ml-4">
      Apply
    </button>
  </div>

  <button className="w-[360px] h-[60px] bg-black text-white py-2 rounded-full mt-4 flex justify-center items-center">
  <span className="mr-2">Go to Checkout</span>
  <Image src={"/arrow-down-bold 1.png"} width={24} height={24} alt="Arrow Icon" />
</button>

</div>
        </div>
      </div>


  {/* Newsletter Signup */}
  <div className="w-full bg-black rounded-lg py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
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

              <footer className="text-gray-600 body-font bg-gray-100">
          <div className="container border-b-2 border-gray-300 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <span className=" text-3xl text-black font-extrabold mb-[10px]">SHOP.CO</span>
              <p className="mt-2 text-sm text-gray-500 mb-10">
              We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
               
                <span className="ml-3 text-black bg-white">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </span>
        
                <span className="text-white bg-black ml-3 rounded-lg">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </span>
        
                <span className="ml-3 text-black bg-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </span>
                <span className="ml-3 text-black bg-white">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 007.88 10.92c.58.1.79-.25.79-.56v-2.01c-3.21.7-3.89-1.55-3.89-1.55-.53-1.36-1.3-1.73-1.3-1.73-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.76.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.73 0-1.26.45-2.28 1.2-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.14 11.14 0 015.78 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.2 1.82 1.2 3.08 0 4.46-2.7 5.44-5.27 5.72.42.37.78 1.1.78 2.22v3.3c0 .31.2.67.79.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"
            />
          </svg>
        </span>
        
              </span>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                Company
                </h2>
                <nav className="list-none mb-10">
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                   About          
                 
                  </li>
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                   Features
                  </li>
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                   Works
                  </li>
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                   Career
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                Help
                </h2>
                <nav className="list-none mb-10">
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                    Customer Support
        
                  </li>
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                   Delivery Details
                  </li>
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                    Terms & Conditions
                  </li>
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                   Privacy Policy
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                FAQ
                </h2>
                <nav className="list-none mb-10">
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                   Account
        
                  </li>
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                    Manage Deliveries
                  </li>
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                    Orders
                  </li>
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                   Payments
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                Resources
                </h2>
                <nav className="list-none mb-10 ">
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                    Free eBooks
        
                  </li>
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                   Development Tutorial
                  </li>
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                    How to - Blog
                  </li>
                  <li className="text-gray-600 hover:text-gray-800 mb-4">
                    Youtube Playlist
                  </li>
                </nav>
              </div>
            </div>
          </div>
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
  );
}
