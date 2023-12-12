"use client"
import { useEffect, useState } from "react";
import { generalActions } from "@/slices";
import { useDispatch } from "react-redux";

let mobileSize: number = 860;

const useMobile = () => {
  const dispatch = useDispatch();

  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  dispatch(generalActions.setMobile(width < mobileSize));
};

export default useMobile;