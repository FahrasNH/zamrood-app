import { useEffect, useState } from "react";
// ** Other Imports */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface WindowSize {
  width: number;
  height: number;
}

interface ScrollChange {
  bgColor: string;
  color: string;
  scroll: boolean;
}

export const useWindowDimensions = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => 
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export const useScrollChange = (): ScrollChange => {
  const [scrollChange, setScrollChange] = useState<ScrollChange>({
    bgColor: "transparent",
    color: "#FAF9F5",
    scroll: false,
  });

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setScrollChange({
          bgColor: "#FAF9F5",
          color: "#0B7373",
          scroll: true,
        });
      } else {
        setScrollChange({
          bgColor: "bg-transparent",
          color: "#FAF9F5",
          scroll: false,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollChange;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const indFormatter = (currency: number): string => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  const formattedValueWithIDR = `IDR ${formatter.format(currency).replace('Rp', '')}`;

  return formattedValueWithIDR.replace(/\./g, ',');
};