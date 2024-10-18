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
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black">
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>)
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    (<motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"></motion.div>
      ))}
    </motion.div>)
  );
};

const SkeletonFour = () => {

  const [seats, setSeats] = useState([
    { seatNumber: 1, rowNumber: 1, isBooked: false, isBookedByYou: false },
    { seatNumber: 2, rowNumber: 1, isBooked: true, isBookedByYou: false },
    { seatNumber: 3, rowNumber: 1, isBooked: false, isBookedByYou: true },
    { seatNumber: 4, rowNumber: 1, isBooked: false, isBookedByYou: false },
    { seatNumber: 5, rowNumber: 1, isBooked: true, isBookedByYou: false },
    { seatNumber: 6, rowNumber: 1, isBooked: false, isBookedByYou: false },
    { seatNumber: 7, rowNumber: 1, isBooked: false, isBookedByYou: false },
    // Add more seat objects as per your requirement
  ]);

  // Handle seat click (for example, to book or unbook a seat)
  const handleSeatClick = (clickedSeat) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.seatNumber === clickedSeat.seatNumber
          ? { ...seat, isBookedByYou: !seat.isBookedByYou }
          : seat
      )
    );
  };


  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <TrainSeats/>
  );
};

const items = [
  {
    // title: "Sentiment Analysis",
    // description: (
    //   <span className="text-sm">
    //     Understand the sentiment of your text with AI analysis.
    //   </span>
    // ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI Content Generation",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automated Proofreading",
    description: (
      <span className="text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  

  // {
  //   title: "Text Summarization",
  //   description: (
  //     <span className="text-sm">
  //       Summarize your lengthy documents with AI technology.
  //     </span>
  //   ),
  //   header: <SkeletonFive />,
  //   className: "md:col-span-1",
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];
