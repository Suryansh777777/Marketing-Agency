"use client";

import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="w-full shadow-2xl  ">
      <InlineWidget
        styles={{ height: "1000px" }}
        url="https://calendly.com/suryanshchourasia12/website-development"
      />
    </div>
  );
};

export default Calendly;
