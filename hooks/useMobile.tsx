"use client"
import { useEffect, useState } from "react";

let mobileSize: number = 860;

const useMobile = (): boolean => {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize)
  }, []);

  return (width < mobileSize);
};

export default useMobile;