"use client"; // Client-side rendering for event handlers

import React, { useEffect, useState } from "react";

type DressStyleCardProps = {
  title: string;
  url: string;
  className?: string;
};

const DressStyleCard = ({ title, url }: DressStyleCardProps) => {
  const [mounted, setMounted] = useState(false);

  // Set the state to true after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render the component once it's mounted to avoid hydration mismatch
  if (!mounted) return null;

  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div
      onClick={handleClick}
      className={
        "w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover"
      }
    >
      {title}
    </div>
  );
};

export default DressStyleCard;
