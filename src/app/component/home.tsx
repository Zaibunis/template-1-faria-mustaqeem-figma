import Image from "next/image";
import Link from "next/link";
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

export default function Home() {
  return (
    <div>
      <header>
        {/* Top Bar */}
        <div className="w-full h-[38px] flex items-center justify-center bg-black text-white font-integral px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-screen-xl space-y-2 sm:space-y-0 sm:px-6">
            <span className="text-center text-sm sm:text-base">
              Sign up and get 20% off your first order.
            </span>
            <div className="flex items-center space-x-2 underline cursor-pointer text-sm sm:text-base">
              <span>Sign Up Now</span>
              <Image src="/Vector (2).png" alt="" width={20} height={20} />
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-8 lg:px-24 py-4 bg-white">
          {/* Logo */}
          <div>
            <Image src="/SHOP.CO.png" alt="Logo" width={141} height={22} />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-x-6 lg:gap-x-12">
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
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
                <Link href="/" className="hover:underline whitespace-nowrap">
                  Brands
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right-Side Elements */}
          <div className="flex items-center gap-x-4 sm:gap-x-6 mt-4 md:mt-0">
            {/* Search Bar */}
            <div className="hidden sm:block relative">
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
      </header>
    </div>
  );
}
