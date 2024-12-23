import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import * as motion from "framer-motion/client";


const DressStyle = () => {
  return (
    <div className="px-4 xl:px-0">
      <section className="max-w-frame mx-auto bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center">
        <motion.h2
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        className="text-[32px] leading-[36px] font-extrabold text-black md:text-5xl mb-8 md:mb-14 capitalize"
            
          
        >
          BROWSE BY DRESS STYLE
        </motion.h2>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row md:h-[289px] space-y-4 sm:space-y-0 sm:space-x-5 mb-4 sm:mb-5"
        >
         <Image 
         src={"/Frame 61.png"}
         width={407}
         height={289}
         alt=""
         />
          <Image 
         src={"/Frame 62.png"}
         width={629}
         height={289}
         alt=""
         />
        </motion.div>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row md:h-[289px] space-y-5 sm:space-y-0 sm:space-x-5"
        >
          <Image 
         src={"/Frame 64.png"}
         width={629}
         height={289}
         alt=""
         />
          <Image 
         src={"/Frame 63.png"}
         width={407}
         height={289}
         alt=""
         />
        </motion.div>
      </section>
    </div>
  );
};

export default DressStyle;