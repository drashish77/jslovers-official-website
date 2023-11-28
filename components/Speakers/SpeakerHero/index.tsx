import CustomButton from "@/components/Button";
import Image from "next/image";
import React from "react";

const SpeakerHero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row  mt-5">
      <div className="left md:w-1/2 mt-10 sm:mt-0">
        <h1 className="title speaker-title text-center sm:text-left text-5xl sm:text-[4.688rem]">
          Speakers
        </h1>
        <p className="text-base text-center sm:text-left sm:text-[18px] leading-[1.5] font-medium md:w-[80%] my-6">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="flex justify-center sm:justify-start">
          <CustomButton>Contact Us</CustomButton>
        </div>
      </div>
      <div className="relative grid place-items-center right md:w-1/2">
        <div className="flex relative gap-2 sm:gap-5  mb-2 sm:ml-16 sm:mb-5 items-end">
          <div className="absolute top-5 sm:top-10  -left-14 sm:-left-24">
            <Image
              src="/images/speakers/lens.svg"
              alt=""
              width={60}
              height={60}
              className="w-[40px] md:w-[80px]"
              priority={true}
            />
          </div>
          <div className="frame relative border-[5px] w-[75px] h-[84px] sm:w-36 sm:h-40 rounded-lg">
            <Image
              src="/images/speakers/pic-1.jpg"
              fill
              alt=""
              className="object-contain p-1 sm:p-2"
              priority={true}
            />
          </div>
          <div className="absolute top-2 -right-10 sm:top-5 sm:-right-20">
            <Image
              src="/images/speakers/heart.svg"
              alt=""
              width={60}
              height={60}
              className="w-[40px] md:w-[80px]"
              priority={true}
            />
          </div>
          <div className="frame relative border-[5px] w-[46px] h-[56px] md:w-[88px] md:h-[107px] rounded-lg">
            <Image
              src="/images/speakers/pic-2.jpg"
              fill
              alt=""
              className="object-contain p-[2px] sm:p-1"
              priority={true}
            />
          </div>
          <div className="relative">
            <div className="absolute -bottom-16 sm:-bottom-32  frame border-[5px] w-[75px] h-[90px] md:w-36 md:h-44 rounded-lg">
              <Image
                src="/images/speakers/pic-5.svg"
                fill
                alt=""
                className="object-contain p-1 sm:p-2"
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className="flex relative gap-2 -ml-10 md:ml-0 md:gap-5 items-start">
          <div className="absolute bottom-20 -left-16 sm:bottom-32 sm:-left-28">
            <Image
              src="/images/speakers/cloud.svg"
              alt=""
              width={60}
              height={60}
              className="w-[50px] md:w-[80px]"
              priority={true}
            />
          </div>
          <div className="absolute bottom-3 -right-16 sm:bottom-10 sm:-right-28">
            <Image
              src="/images/speakers/pencil.svg"
              alt=""
              width={60}
              height={60}
              priority={true}
              className="w-[40px] md:w-[80px]"
            />
          </div>
          <div className="absolute -bottom-2 left-5 sm:-bottom-5 sm:left-10">
            <Image
              src="/images/speakers/star.svg"
              alt=""
              width={60}
              height={60}
              priority={true}
              className="w-[40px] md:w-[80px]"
            />
          </div>
          <div className="frame relative border-[5px] w-[75px] h-[90px] md:w-36 md:h-44 rounded-lg">
            <Image
              src="/images/speakers/pic-3.jpg"
              fill
              alt=""
              className="object-contain p-1 sm:p-2"
              priority={true}
            />
          </div>
          <div className="frame relative border-[5px] w-[85px] h-[124px] sm:w-40 sm:h-60 rounded-lg">
            <Image
              src="/images/speakers/pic-4.svg"
              fill
              alt=""
              className="object-contain p-1 sm:p-2"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerHero;
