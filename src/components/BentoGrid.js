"use client";
import { cn } from "./ui/utils";
import React , {useState} from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import SeatGrid from "./SeatGrid";
import TrainSeats from "./TrainSeats";
import Carousel from "./ui/crousel";
// import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    (<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon} />
      ))}
    </BentoGrid>)
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    (<motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black">
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-green-800 flex-shrink-0" />
        <div className="w-full rounded-full text-white" >
          seats available
        </div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 ml-auto bg-white dark:bg-black">
        <div className="w-full bg-gray-100 rounded-full dark:bg-neutral-900 text-white" >
          seats booked 
        </div>
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-red-500 to-red-900 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black">
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full rounded-full text-white" >
          seats booked by you
        </div>
      </motion.div>
    </motion.div>)
  );
};

const SkeletonFour = () => {
  return (
    <TrainSeats numSeats={"6"}/>
  );
};

const SkeletonThree = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const arr = [
    <div className="p-1 rounded-lg shadow-md text-white">
      <h2 className="text-md font-semibold">Number of Selected Seats</h2>
      <p className="text-gray-400">{currentIndex+1}</p>
    </div>,
    <div className="p-1 rounded-lg shadow-md text-white">
      <h2 className="text-md font-semibold">Price of Single Seat</h2>
      <p className="text-gray-400">{100}</p>
    </div>,
    <div className="p-1 rounded-lg shadow-lg text-white">
      <h2 className="text-lg font-bold">Total Price</h2>
      <p className="text-xl font-bold text-blue-600">{(currentIndex+1)*100}</p>
    </div>
  ];
  return (
    <div className="grid grid-cols-3 gap-4 w-full h-full">
       {/* Other div with 1-column span */}
  <div className="col-span-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col space-y-2">
    {arr.map((item, i) => (
      <div
        key={"skelenton-two" + i}
        style={{
          maxWidth: "100%",
        }}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-neutral-100 dark:bg-black w-full text-white">
        {item}
      </div>
    ))}

    {/* <div className="flex justify-center text-white mt-2">
      <button className="rounded-xl bg-blue-600 p-2 w-full">
        BOOK
      </button>
    </div> */}
  </div>
  {/* Carousel with 2-column span */}
  <div className="col-span-2 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col space-y-2">
    <Carousel setCurrentIndex={setCurrentIndex} currentIndex={currentIndex}/>
  </div>
</div>

  );
};


const items = [
  {
    header: <SkeletonFour />,
    className: "md:col-span-2",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: <SkeletonThree />,
    className: "md:col-span-3",
  },
];
