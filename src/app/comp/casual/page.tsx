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
  const colors = ["red", "green", "blue", "orange", "yellow", "purple", "pink", "black", "white"];
  const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"];
  const styles = ["Casual", "Formal" , "Party" , "Gym"];

  return (
    <div className="w-64 bg-white shadow-lg p-4 space-y-6 mt-[10px] ml-[20px] ">
    <h2 className="text-xl font-bold mb-[30px] border-b-2 flex items-center justify-between">
      Filters
      <Image src={"/Frame (11).png"} width={24} height={24} alt="" />
    </h2>

      {/* Categories */}
      <div>
      
        <ul className="space-y-2 border-b-2">
          {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map((category) => (
            <li key={category}>
              <button className="text-gray-700 hover:underline">{category}</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-lg font-semibold">Price</h3>
        <div className="flex items-center space-x-2 border-b-2">
          <span>$50</span>
          <input type="range" min="50" max="200" defaultValue="125" className="w-full" />
          <span>$200</span>
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="text-lg font-semibold">Colors</h3>
        <div className="flex flex-wrap gap-2 border-b-2 mb-5">
          {colors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              className="w-6 h-6 rounded-full border"
            ></button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-5">Size</h3>
        <div className="flex flex-wrap gap-2 border-b-2">
          {sizes.map((size) => (
            <button
              key={size}
              className="border px-4 py-2 text-sm bg-gray-100 text-gray-500 rounded-full"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Style */}
      <div>
        <h3 className="text-lg font-semibold mb-5">Dress Style</h3>
        <ul className="space-y-2">
          {styles.map((style) => (
            <li key={style}>
              <button className="text-gray-700 hover:underline">{style}</button>
            </li>
          ))}
        </ul>
      </div>
      <button className="text-white bg-black rounded-full w-[247px] h-[48px] mr-[30px] border-b-2 mb-[10px]">Apply Filter</button>
    </div>
  );
};

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
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8 mb-[20px]">
  {/* Product Card 1 */}
  <div className="text-center">
    <Image
      src="/Frame 32.png"
      alt="T-shirt with Tape Details"
      width={200}
      height={200}
      className="mx-auto rounded-lg shadow"
    />
    <p className="mt-4 font-bold text-lg text-black">T-shirt with Tape Details</p>
    <div className="text-yellow-400 text-sm my-1">
      ★★★★☆ <span className="text-black text-sm">4.4/</span>
      <span className="text-gray-500">5</span>
    </div>
    <p className="font-bold text-black">$120</p>
  </div>

  {/* Product Card 2 */}
  <div className="text-center">
    <Image
      src="/Frame 33 (5).png"
      alt="Skinny Fit Jeans"
      width={200}
      height={200}
      className="mx-auto rounded-lg shadow"
    />
    <p className="mt-4 font-bold text-lg text-black">Skinny Fit Jeans</p>
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

  {/* Product Card 3 */}
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

  {/* Product Card 4 */}
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

  {/* Product Card 5 */}
  <div className="text-center">
    <Image
      src="/Frame 32 (2).png"
      alt="Vertical Striped Shirt"
      width={200}
      height={200}
      className="mx-auto rounded-lg shadow"
    />
    <p className="mt-4 font-bold text-lg text-black">Vertical Striped Shirt</p>
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
  </div>

  {/* Product Card 6 */}
  <div className="text-center">
    <Image
      src="/Frame 33 (6).png"
      alt="Courage Graphic T-shirt"
      width={200}
      height={200}
      className="mx-auto rounded-lg shadow"
    />
    <p className="mt-4 font-bold text-lg text-black">Courage Graphic T-shirt</p>
    <div className="text-yellow-400 text-sm my-1">
      ★★★☆☆ <span className="text-black text-sm">4.0/</span>
      <span className="text-gray-500">5</span>
    </div>
    <p className="font-bold text-black">$145</p>
  </div>

  {/* Product Card 7 */}
  <div className="text-center">
    <Image
      src="/Frame 34 (1).png"
      alt="Loose Fit Bermuda Shorts"
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
  </div>

  {/* Product Card 8 */}
  <div className="text-center">
    <Image
      src="/Frame 38 (1).png"
      alt="Faded Skinny Jeans"
      width={200}
      height={200}
      className="mx-auto rounded-lg shadow"
    />
    <p className="mt-4 font-bold text-lg text-black">Faded Skinny Jeans</p>
    <div className="text-yellow-400 text-sm my-1">
      ★★★☆☆ <span className="text-black text-sm">4.5/</span>
      <span className="text-gray-500">5</span>
    </div>
    <p className="font-bold text-black">$210</p>
  </div>

  {/* Product Card 9 */}
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


  <button className="rounded-full text-black border-b-2 w-[110px] h-[36px] flex items-center justify-center gap-2">
  <Image src="/arrow-left.png" width={20} height={20} alt="" />
  Previous
</button>

<div>
<span className="bg-gray-100 text-black w-[40px] h-[40px] rounded-full">1</span>
<span className="text-gray-500">2</span>
<span className="text-gray-500">3</span>

<span>...</span>

<span className="text-gray-500">8</span>
<span className="text-gray-500">9</span>
<span className="text-gray-500">10</span>
</div>

<button className="rounded-full text-black border-b-2 w-[110px] h-[36px] flex items-center justify-center gap-2">
  Next
  <Image src="/arrow-right.png" width={20} height={20} alt="" />
</button>


    

   
  {/* Newsletter Signup */}
    <div className=" mb-[30px] w-full mr-[50px] bg-black rounded-lg py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
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
</div>
</div>
      </main>
    </div>
  );
}
