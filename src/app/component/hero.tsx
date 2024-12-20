import Image from "next/image";

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
            <div className="w-full sm:w-[284px] md:w-[284px] lg:w-[284px] h-[64px] bg-black text-white rounded-full mt-[20px] shadow-md flex justify-center items-center">
                            <span className="text-lg font-medium mr-2">Shop Now</span>
                           
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

  {/* Floating Elements as Images */}
  <div className="absolute top-4 left-8 w-16 h-16 rounded-full shadow-lg">
    <Image
      src="/Vector (1).png" // Replace with the floating image path
      alt="Floating Icon FN"
      width={64} // Adjusted size (16x16 Tailwind unit in pixels)
      height={64}
      className="rounded-full object-cover"
    />
  </div>

  <div className="absolute bottom-12 right-12 w-16 h-16 rounded-full shadow-lg">
    <Image
      src="/Vector.png" // Replace with the floating image path
      alt="Floating Icon AS"
      width={64}
      height={64}
      className="rounded-full object-cover"
    />
  </div>

           
          </div>
        </div>
      </section>
    );
  }
  