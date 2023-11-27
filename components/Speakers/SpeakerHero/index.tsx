import CustomButton from "@/components/Button";
import React from "react";

const SpeakerHero = () => {
  return (
    <section className="flex mt-20">
      <div className="left w-1/2 ">
        <h1 className="title speaker-title">Speakers</h1>
        <p className="text-[18px] leading-[1.5] font-medium w-[80%] my-6">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <CustomButton>Contact Us</CustomButton>
      </div>
      <div className="right w-1/2"></div>
    </section>
  );
};

export default SpeakerHero;
