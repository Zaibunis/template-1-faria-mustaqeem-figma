import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Hero() {
    return (
      <section className="relative bg-gray-100">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-8">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-black leading-tight text-black">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="mt-4 text-sm text-gray-600">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <div className="w-full sm:w-[284px] md:w-[284px] lg:w-[284px] h-[64px] bg-black text-white rounded-full mt-[20px] shadow-md flex justify-center items-center mb-[10px]">
                            <span className="text-lg font-medium mr-2">Shop Now</span>
                           
                        </div>
                        <div className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]">
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                200+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                International Brands
              </span>
            </div>
            <Separator className="ml-6 md:ml-0 h-12 md:h-full bg-black/10" orientation="vertical" />
            <div className="flex flex-col ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                2000+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                High-Quality Products
              </span>
            </div>
            <Separator className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10" orientation="vertical" />
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                30,000+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                Happy Customers
              </span>
            </div>
          </div>
          </div>
  
          {/* Right Content */}
<div className="lg:w-1/2 flex items-center justify-center relative">
  {/* Image */}
  <Image
    src="/g.jpeg"
    alt="Fashion Style"
    width={390} // Increase width but respect parent space
    height={448} // Adjust proportionally
    className="rounded-lg shadow-lg object-cover"
    priority
  />

<section className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]">
          <Image
            priority
            src="/icons/big-star.svg"
            height={104}
            width={104}
            alt="big star"
            className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]"
          />
          <Image
            priority
            src="/icons/small-star.svg"
            height={56}
            width={56}
            alt="small star"
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_3s_infinite]"
          />
        </section>
           
          </div>
        </div>
      </section>
    );
  }
  