"use client";

import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import Calendly from "@/components/Calendly";
import Navbar from "@/components/Navbar";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <div
        className=" bg-white
    flex flex-col  w-full  
     overflow-clip inset-0 -z-10 pt-20 md:pt-0  my-14
    "
      >
        <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto  ">
          <div className="md:w-2/5">
            <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold ">
              Let&apos;s Meet
            </h1>
            <p className="text-xl text-neutral-500 py-8">
              We are always excited to meet new people and discuss new projects.
              Please feel free to book a meeting with us.
            </p>

            {[
              {
                title: "Development ",
                description:
                  "Turn your ideas into reality with our development services.",
              },

              {
                title: "Free Consultation",
                description:
                  "Get expert advice on how to improve your business and increase your online presence.",
              },
              {
                title: "Technical Support",
                description:
                  "Get technical support for your website or application.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={checkItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 1.8 }}
                className="flex gap-x-4 py-4"
              >
                <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                <ul>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <div className="text-lg text-[#7b7b7b] mb-4">
                    {item.description}
                  </div>
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="md:w-1/2 ">
            <Calendly />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
