"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    //Get Navigation timing
    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;

    // console.log(navigation);

    //Check if this is a fresh page load or reload
    if (navigation?.type === "reload" || navigation?.type === "navigate") {
      setHasAnimated(false);
    } else {
      setHasAnimated(true);
    }
  }, [scrollY]);
  // Transform video size and width based on scroll with eased transitions
  const videoScale = useTransform(scrollY, [0, 500], [0.9, 1], {
    ease: easeOut,
  });
  const videoWidth = useTransform(scrollY, [0, 500], ["85%", "100%"], {
    ease: easeOut,
  });
  const videoBorderRadius = useTransform(scrollY, [0, 500], [32, 0], {
    ease: easeOut,
  });

  // Enhanced content animations
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0, 1],
        delay: 0.6,
      },
    },
  };

  const videoContainerVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 1.2,
        ease: [0.25, 0.1, 0, 1],
      },
    },
  };
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="w-full flex justify-center items-center md:px-0 pt-32 md:pt-40 bg-white"
        initial={hasAnimated ? "visible" : "hidden"}
        animate="visible"
        variants={contentVariants}
      >
        <div className="md:max-w-3xl text-center px-4">
          <motion.h1
            variants={contentVariants}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            <motion.span className="inline-block">
              Empowering Businesses
            </motion.span>
            <br />
            <motion.span className="inline-block" variants={contentVariants}>
              to a Stronger Future
            </motion.span>
          </motion.h1>
          <motion.p
            variants={contentVariants}
            className="text-xl text-[#7b7b7b] mb-8"
          >
            We are a full-service digital innovation partner that <br /> helps
            businesses to achieve their goals through digital marketing.
          </motion.p>
          <motion.div
            initial={hasAnimated ? "visible" : "hidden"}
            animate="visible"
            variants={buttonVariants}
            className="flex gap-x-2 md:gap-x-6 justify-center mb-10"
          >
            <Link
              href="/projects"
              className="bg-black text-white px-5 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-medium transition-all hover:shadow-lg"
            >
              View our Work
            </Link>
            <Link
              href="/contact"
              className="bg-rose-500 text-white px-5 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-medium transition-all hover:shadow-lg"
            >
              Book a Meeting
            </Link>
          </motion.div>
        </div>
      </motion.div>
      {/* Video Container */}
      <motion.div
        className="flex justify-center w-full"
        initial={hasAnimated ? "visible" : "hidden"}
        animate="visible"
        variants={videoContainerVariants}
      >
        <motion.div
          style={{
            width: videoWidth,
            borderRadius: videoBorderRadius,
            scale: videoScale,
            overflow: "hidden",
          }}
          className="relative w-full md:w-auto"
        >
          <video
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
