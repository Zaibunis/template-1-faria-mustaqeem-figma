import Image from "next/image"
import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
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

export default function Page(){
    return(
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
              <BreadcrumbPage>Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

  {/* Main Content */}
  <div className="flex-grow p-8">
  {/* Header Section */}
  <div className="flex items-center justify-between mb-6">
    <h1 className="text-3xl font-extrabold ml-[49px]">YOUR CART</h1>
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
            <p className="text-lg font-semibold flex items-center">
            Gradient Graphic T-shirt
  <Image
    src={"/Frame (15).png"}
    width={24}
    height={24}
    alt=""
    className="ml-[550px]"
  />
</p>
              <p className="text-sm text-gray-600">Size: Large</p>
              <p className="text-sm text-gray-600">Color: White</p>
              <p className="text-lg font-bold mt-3">$145</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            
          <div className="flex items-center bg-gray-200 rounded-full">
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
              alt="Checkered Shirt"
              className="w-20 h-20 rounded"
            />
            <div>
            <p className="text-lg font-semibold flex items-center">
            Checkered Shirt
  <Image
    src={"/Frame (15).png"}
    width={24}
    height={24}
    alt=""
    className="ml-[550px]"
  />
</p>
              <p className="text-sm text-gray-600">Size: Medium</p>
              <p className="text-sm text-gray-600">Color: Red</p>
              <p className="text-lg font-bold mt-3">$180</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-200 rounded-full">
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
              alt="Skinny Fit Jeans"
              className="w-20 h-20 rounded"
            />
            <div>
            <p className="text-lg font-semibold flex items-center">
            Skinny Fit Jeans
  <Image
    src={"/Frame (15).png"}
    width={24}
    height={24}
    alt=""
    className="ml-[550px]"
  />
</p>
              <p className="text-sm text-gray-600">Size: Large</p>
              <p className="text-sm text-gray-600">Color: Blue</p>
              <p className="text-lg font-bold mt-3">$240</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          
          <div className="flex items-center bg-gray-200 rounded-full">
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
      <div className="border p-6 rounded-lg bg-">
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
        <div className="relative w-full mb-4">
  <input
    type="text"
    placeholder="Add promo code"
    className="w-full border p-2 rounded pl-10"
  />
  <Image
    src="/Vector (3).png"
    width={24}
    height={24}
    alt="Promo Code Icon"
    className="absolute left-3 top-1/2 transform -translate-y-1/2"
  />
</div>

          <button className="w-[119px] h-[48px] bg-black text-white py-2 rounded-full mb-4">
            Apply
          </button>
          <button className="w-full bg-black text-white py-2 rounded">
            Go to Checkout →
          </button>
        </div>
      </div>
    </div>

        </div>
    )
}