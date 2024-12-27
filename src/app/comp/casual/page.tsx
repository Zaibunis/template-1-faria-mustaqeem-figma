import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";


const Filters = () => {
  const colors = [ "green", "red" , "yellow", "orange" , "lightblue" , , "darkblue" ,  "purple", "pink",  "white"  , "black"];
  const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];
  const styles = ["Casual", "Formal" , "Party" , "Gym"];

  return (
    <div className="w-64 bg-white rounded-md border border-gray-300 p-4 space-y-6 mt-[10px] ml-[20px]">
    <h2 className="text-xl font-bold mb-[30px] border-b-2 flex items-center justify-between pb-2">
      Filters
      <Image src={"/Frame (11).png"} width={24} height={24} alt="" />
    </h2>
  
   {/* Categories */}
<div>
  <ul className="space-y-2 border-b-2 pb-2 mb-4">
    {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map((category) => (
      <li key={category} className="flex items-center justify-between">
        <button className="text-gray-700 hover:underline">{category}</button>
        <Image src={"/Frame (13).png"} width={16} height={16} alt="" />
      </li>
    ))}
  </ul>
</div>

  
    {/* Price Filter */}
    <div>
      <h3 className="text-lg font-semibold flex items-center pb-2 mb-4">
        Price
        <Image src={"/Frame (12).png"} width={16} height={16} alt="" className="ml-[150px]" />
      </h3>
  
      <div className="flex items-center space-x-2 border-b-2 pb-2 mb-4">
        <span>$50</span>
        <input type="range" min="50" max="200" defaultValue="125" className="w-full" />
        <span>$200</span>
      </div>
    </div>
  
    {/* Colors */}
<div>
  <h3 className="text-lg font-semibold flex items-center pb-2 mb-4">
    Colors
    <Image src={"/Frame (12).png"} width={16} height={16} alt="" className="ml-[150px]" />
  </h3>
  <div className="flex flex-wrap gap-4 mb-4">
    {colors.slice(0, 5).map((color) => (
      <button
        key={color}
        style={{ backgroundColor: color }}
        className="w-6 h-6 rounded-full border relative flex items-center justify-center"
      >
        {color === "darkblue" && (
          <Image
            src="/tick.png"
            alt="Tick"
            width={12}
            height={12}
            className="absolute"
          />
        )}
      </button>
    ))}
  </div>
  <div className="flex flex-wrap gap-4">
    {colors.slice(5).map((color) => (
      <button
        key={color}
        style={{ backgroundColor: color }}
        className="w-6 h-6 rounded-full border relative flex items-center justify-center"
      >
        {color === "darkblue" && (
          <Image
            src="/Frame (14).png"
            alt="Tick"
            width={12}
            height={12}
            className="absolute"
          />
        )}
      </button>
    ))}
  </div>
</div>

   {/* Sizes */}
<div>
  <h3 className="text-lg font-semibold flex items-center pb-2 mb-4">
    Size
    <Image src={"/Frame (12).png"} width={16} height={16} alt="" className="ml-[150px]" />
  </h3>
  <div className="flex flex-wrap gap-2 mb-4">
    {sizes.map((size) => (
      <button
        key={size}
        className={`border px-4 py-2 text-sm rounded-full ${
          size === "Large" ? "bg-black text-white" : "bg-gray-100 text-gray-500"
        }`}
      >
        {size}
      </button>
    ))}
  </div>
</div>

  {/* Dress Style */}
<div>
  <h3 className="text-lg font-semibold flex items-center pb-2 mb-4">
    Dress Style
    <Image src={"/Frame (12).png"} width={16} height={16} alt="" className="ml-[100px]" />
  </h3>
  <div className="space-y-2 pb-2 mb-4">
    {styles.map((style) => (
      <div key={style} className="flex items-center justify-between">
        <button className="text-gray-700 hover:underline">{style}</button>
        <Image src={"/Frame (13).png"} width={16} height={16} alt="" />
      </div>
    ))}
  </div>


  <button className="text-white bg-black rounded-full w-[247px] h-[48px] border border-gray-300 mb-[10px] ml-0">
  Apply Filter
</button>

</div>

  
  
  </div>
  )
}  

export default function Casual() {
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
                alt=""
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
              <li>
                <Link
                  href="/comp/mens-clothes"
                  className="hover:underline flex items-center gap-x-1 whitespace-nowrap"
                >
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
              <BreadcrumbPage>Casual</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <main className="flex">
        {/* Filter Menu */}
        <aside>
          <Filters />
        </aside>

       {/* Main Content */}
<div className="flex-grow p-8">
  {/* Header Section */}
  <div className="flex items-center justify-between mb-6">
    <h1 className="text-2xl font-bold">Casual</h1>
    <div className="text-sm text-gray-500 flex items-center space-x-4">
      <span>Showing 1-10 of 100 Products</span>
      <span>
        Sort by:
        <NavigationMenu className="inline-block text-black ml-2">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Most Popular</NavigationMenuTrigger>
              <NavigationMenuContent>
                {/* Add dropdown content here */}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </span>
    </div>
  </div>

{/* Product Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 px-4 md:px-8 mb-[20px]">
  {/* Product Card 1 */}
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

 {/* Product Card 2 */}
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

 {/* Product Card 3 */}
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

  {/* Product Card 4 */}
         <div className="text-center">
           <Image
             src="/Frame 33 (5).png"
             alt="Skinny Fit Jeans"
             width={200}
             height={200}
             className="mx-auto rounded-lg shadow"
           />
           <p className="mt-4 font-bold text-lg text-black ">Skinny Fit Jeans</p>
           <div className="text-yellow-400 text-sm my-1">
             ★★★☆☆ <span className="text-black text-sm">3.5/</span>
             <span className="text-gray-500">5</span>
           </div>
           <div className="flex justify-center gap-2 text-gray-500">
             <span className="font-bold text-black">$240</span>
             <span className="line-through">$260</span>
             <span className="text-red-500 bg-red-200 text-sm w-[58px] h-[28px] rounded-lg flex items-center justify-center">
               -20%
             </span>
           </div>
         </div>

   {/* Product Card 5 */}
          <div className="text-center">
            <Image
              src="/Frame 34.png"
              alt="Checkered Shirt"
              width={200}
              height={200}
              className="mx-auto rounded-lg shadow"
            />
            <p className="mt-4 font-bold text-lg text-black">Checkered Shirt</p>
            <div className="text-yellow-400 text-sm my-1">
              ★★★★☆ <span className="text-black text-sm">4.4/</span>
              <span className="text-gray-500">5</span>
            </div>
            <p className="font-bold text-black">$180</p>
          </div>
  

  {/* Product Card 6 */}
          <div className="text-center">
            <Image
              src="/Frame 38.png"
              alt="Sleeve Striped T-shirt"
              width={200}
              height={200}
              className="mx-auto rounded-lg shadow"
            />
            <p className="mt-4 font-bold text-lg text-black">Sleeve Striped T-shirt</p>
            <div className="text-yellow-400 text-sm my-1">
              ★★★☆☆ <span className="text-black text-sm">3.5/</span>
              <span className="text-gray-500">5</span>
            </div>
            <div className="flex justify-center gap-2 text-gray-500">
              <span className="font-bold text-black">$130</span>
              <span className="line-through">$160</span>
              <span className="text-red-500 bg-red-200 text-sm w-[58px] h-[28px] rounded-lg flex items-center justify-center">
                -30%
              </span>
            </div>
          </div>
       

   {/* Product Card 7 */}
          <div className="text-center">
            <Image
              src="/Frame 32 (2).png"
              alt="T-shirt with Tape Details"
              width={200}
              height={200}
              className="mx-auto rounded-lg shadow"
            />
            <p className="mt-4 font-bold text-lg text-black ">Vertical Striped Shirt</p>
            <div className="text-yellow-400 text-sm my-1">
              ★★★★☆ <span className="text-black text-sm">5.0/</span>
              <span className="text-gray-500">5</span>
            </div>
            <div className="flex justify-center gap-2 text-gray-500">
              <span className="font-bold text-black">$212</span>
              <span className="line-through">$232</span>
              <span className="text-red-500 bg-red-200 text-sm w-[58px] h-[28px] rounded-lg flex items-center justify-center">
                -20%
              </span>
            </div>

               {/* Border after the product grid */}
  <div className="border-t-2 border-gray-300 mt-8 pt-4"></div>
          </div>

  {/* Product Card 8 */}
         <div className="text-center">
           <Image
             src="/Frame 33 (6).png"
             alt="Skinny Fit Jeans"
             width={200}
             height={200}
             className="mx-auto rounded-lg shadow"
           />
           <p className="mt-4 font-bold text-lg text-black ">Courage Graphic T-shirt</p>
           <div className="text-yellow-400 text-sm my-1">
             ★★★☆☆ <span className="text-black text-sm">4.0/</span>
             <span className="text-gray-500">5</span>
           </div>
             <span className="font-bold text-black">$145</span>

                {/* Border after the product grid */}
  <div className="border-t-2 border-gray-300 mt-8 pt-4"></div>
         </div>

  {/* Product Card 9 */}
         <div className="text-center">
           <Image
             src="/Frame 34 (1).png"
             alt="Checkered Shirt"
             width={200}
             height={200}
             className="mx-auto rounded-lg shadow"
           />
           <p className="mt-4 font-bold text-lg text-black">Loose Fit Bermuda Shorts</p>
           <div className="text-yellow-400 text-sm my-1">
             ★★★★☆ <span className="text-black text-sm">3.0/</span>
             <span className="text-gray-500">5</span>
           </div>
           <p className="font-bold text-black">$80</p>

            {/* Border after the product grid */}
  <div className="border-t-2 border-gray-300 mt-8 pt-4"></div>
         </div>

         
 
  <button className="rounded-full border-2 border-gray-100 text-black  w-[110px] h-[36px] flex items-center justify-center gap-2">
  <Image src="/arrow-left.png" width={20} height={20} alt="" />
  Previous
</button>

<div className="flex items-center space-x-5">
  {/* Active Page */}
  <span className="bg-gray-300 text-black w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold cursor-pointer">
    1
  </span>
  
  {/* Page Number */}
  <span className="text-gray-500 cursor-pointer hover:text-black transition-colors duration-300">2</span>
  
  {/* Page Number */}
  <span className="text-gray-500 cursor-pointer hover:text-black transition-colors duration-300">3</span>
  
  {/* Ellipsis for skipped pages */}
  <span className="text-gray-500">...</span>
  
  {/* Page Numbers */}
  <span className="text-gray-500 cursor-pointer hover:text-black transition-colors duration-300">8</span>
  <span className="text-gray-500 cursor-pointer hover:text-black transition-colors duration-300">9</span>
  <span className="text-gray-500 cursor-pointer hover:text-black transition-colors duration-300">10</span>
</div>


<button className="rounded-full border-2 border-gray-100 ml-[200px] text-black w-[110px] h-[36px] flex items-center justify-center gap-2">
  Next
  <Image src="/arrow-right.png" width={20} height={20} alt="" />
</button>

{/* Newsletter Signup Section */}
<div className="mb-[30px] w-full mr-[400px] bg-black rounded-lg py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
  {/* Text Section */}
  <div className="text-left text-white mb-4 md:mb-0">
    <span className="text-3xl font-extrabold block mb-4">
      STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
    </span>
  </div>

  {/* Right Section */}
  <div className="flex flex-col items-end space-y-4 w-full md:w-[349px]">
    {/* Email Input Section */}
    <div className="relative w-full">
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
    <div className="relative w-full h-[48px] bg-white rounded-lg flex items-center pl-3">
      <span className="ml-12 text-black font-medium">
        Subscribe to Newsletter
      </span>
    </div>
  </div>
</div>
<br/>
<br/>

{/* Footer Section */}
<footer className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto px-5 py-24 flex flex-col md:flex-row md:items-start lg:items-start justify-between">
    {/* Footer Text */}
    <div className="w-full md:w-1/4 text-center md:text-left">
      <span className="text-3xl text-black font-extrabold mb-[10px]">SHOP.CO</span>
      <p className="mt-2 text-sm text-gray-500 mb-10">
        We have clothes that suits your style and which you're proud to wear. From women to men.
      </p>
    </div>

    {/* Footer Links Section */}
    <div className="flex flex-wrap w-full md:w-3/4 mt-10 md:mt-0 md:text-left text-center">
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
      </main>
    </div>
  );
}
