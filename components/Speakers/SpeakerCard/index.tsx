import Image from "next/image";
import Link from "next/link";
import React from "react";
export interface Speakers {
  id: number;
  name: string;
  designation: string;
  desc: string;
  links: Link[];
  img: Img;
}

export interface Img {
  src: string;
  alt: string;
}

export interface Link {
  twitter?: string;
  linkedin?: string;
  github?: string;
}

const SpeakerCard = (data: Speakers) => {
  const { name, designation, desc, links, img } = data;
  return (
    <div>
      <div className="">
        <div className="relative">
          <div className="relative w-[277px] h-[277px] border-[3px] rounded-md">
            <Image
              src="/images/speakers/pic-1.jpg"
              fill
              alt=""
              className="object-contain p-2 sm:p-4"
              priority={true}
            />
          </div>
          <div className="absolute border__speaker right-4 -bottom-3 w-[277px] h-[277px] border-[3px] border-t-0 border-l-0"></div>
        </div>
        <h4 className="text-[40px] w-[75%] leading-[46px] font-bold text-black my-2 mt-8">
          {name}
        </h4>
        <h6 className="text-[18px] font-normal ">{designation}</h6>
        <p className="text-[14px] font-medium my-2">{desc}</p>
        <div className="flex gap-3 mt-3">
          <Link
            href="https://www.facebook.com/groups/214962899049425/"
            target="_blank"
            className=""
          >
            <div className="relative ">
              <Image
                src="/images/contacts/socials/github.svg"
                width={25}
                height={25}
                alt="facebook logo"
                className="object-contain"
              />
            </div>
            <span className="sr-only">Facebook page</span>
          </Link>
          <Link
            href="https://www.linkedin.com/company/jslovers"
            target="_blank"
            className="relative "
          >
            <Image
              src="/images/contacts/socials/linkedin.svg"
              width={25}
              height={25}
              alt="Linkedin logo"
              className="object-contain"
            />
            <span className="sr-only">LinkedIn page</span>
          </Link>

          <Link
            href="https://twitter.com/jslovers_del"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-black"
          >
            <div className="relative">
              <Image
                src="/images/contacts/socials/twitter.svg"
                width={25}
                height={25}
                alt="twitter icon"
                className="object-contain"
              />
            </div>
            <span className="sr-only">Twitter page</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
