"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "default";
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "default",
  size = "md",
}) => {
  const isDark = variant === "dark";

  const heightClasses = {
    sm: "h-8 sm:h-9",
    md: "h-[40px] sm:h-[46px] md:h-[50px]",
    lg: "h-12 sm:h-14 md:h-16",
  };

  return (
    <Link
      href="/"
      className="inline-flex items-center select-none group focus:outline-none shrink-0"
      aria-label="Swasth Jeevan Wellness Center Home"
    >
      <div className="relative shrink-0 transition-transform duration-200 group-hover:scale-[1.02]">
        <Image
          src={
            isDark
              ? "/images/brand/swasth-jeevan-logo-dark.svg"
              : "/images/brand/swasth-jeevan-logo.svg"
          }
          alt="Swasth Jeevan Wellness Center"
          width={320}
          height={80}
          className={`${heightClasses[size]} w-auto max-w-[210px] sm:max-w-[260px] md:max-w-none object-contain block`}
          priority
        />
      </div>
    </Link>
  );
};
