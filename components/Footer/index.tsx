import Image from "next/image";
import React from "react";
import data from "./data.json";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="relative z-30  pb-10 pt-10 ">
      <div className=" bottom-0  md:container">
        <div className="flex flex-col justify-between pb-10 pl-5 md:flex-row  md:pl-0">
          <div className="relative h-12 w-36">
            <Image
              fill
              alt=""
              src="/images/logo.svg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="mt-12 grid grid-cols-1 md:mt-0  md:w-[50%] md:grid-cols-2 2xl:w-auto">
            <div className="flex justify-between">
              <div className="space-y-6 text-base tracking-[0.15px] md:space-y-5 md:text-xl">
                {data.map((item) => {
                  return (
                    <Link
                      href={item.link}
                      className="flex items-center"
                      key={item.id}
                    >
                      <div className="cursor-pointer" key={item.id}>
                        <h3 className="">{item.heading}</h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="mr-8 block md:hidden">
                <h3 className="mb-5 text-xl">Sponsers</h3>
                <Link
                  href="https://www.amazon.com"
                  target="_blank"
                  className="flex items-center"
                >
                  <Image
                    src="/images/amazon.svg"
                    width={70}
                    height={70}
                    alt="amazon logo"
                    className="object-contain"
                  />
                </Link>
                <Link
                  href="https://ibm.com/"
                  target="_blank"
                  className="mt-5 flex items-center"
                >
                  <Image
                    src="/images/ibm.svg"
                    width={70}
                    height={70}
                    alt="logo of ibm"
                    className="object-contain"
                  />
                </Link>
                <Link
                  href="https://microsoft.com/"
                  target="_blank"
                  className="mt-5 flex items-center"
                >
                  <Image
                    src="/images/microsoft.svg"
                    width={70}
                    height={70}
                    alt="logo of microsoft"
                    className="object-contain"
                  />
                </Link>
                <Link
                  href="https://razorpay.com/"
                  target="_blank"
                  className="mt-5 flex items-center"
                >
                  <Image
                    src="/images/razorpay.svg"
                    width={70}
                    height={70}
                    alt="logo of razorpay"
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
            {/* <div className="flex justify-between">
              <div className="space-y-6 text-base tracking-[0.15px] md:space-y-5 md:text-xl">
                {data.map((item) => {
                  return (
                    <Link
                      href={item.link}
                      className="flex items-center"
                      key={item.id}
                    >
                      <div className="cursor-pointer" key={item.id}>
                        <h3 className="">{item.heading}</h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="mr-8 block md:hidden">
                <h3 className="mb-5 text-xl">Sponsers</h3>
                <Link
                  href="https://www.amazon.com"
                  target="_blank"
                  className="flex items-center"
                >
                  <Image
                    src="/images/amazon.svg"
                    width={70}
                    height={70}
                    alt="amazon logo"
                    className="object-contain"
                  />
                </Link>
                <Link
                  href="https://ibm.com/"
                  target="_blank"
                  className="mt-5 flex items-center"
                >
                  <Image
                    src="/images/ibm.svg"
                    width={70}
                    height={70}
                    alt="logo of ibm"
                    className="object-contain"
                  />
                </Link>
                <Link
                  href="https://microsoft.com/"
                  target="_blank"
                  className="mt-5 flex items-center"
                >
                  <Image
                    src="/images/microsoft.svg"
                    width={70}
                    height={70}
                    alt="logo of microsoft"
                    className="object-contain"
                  />
                </Link>
                <Link
                  href="https://razorpay.com/"
                  target="_blank"
                  className="mt-5 flex items-center"
                >
                  <Image
                    src="/images/razorpay.svg"
                    width={70}
                    height={70}
                    alt="logo of razorpay"
                    className="object-contain"
                  />
                </Link>
              </div>
            </div> */}
          </div>
          <div className="hidden md:block">
            <h3 className="mb-5 text-xl">Sponcers</h3>
            <Link
              href="https://www.amazon.com"
              target="_blank"
              className="flex items-center"
            >
              <Image
                src="/images/amazon.svg"
                width={120}
                height={120}
                alt="Amazon logo"
                className="object-contain"
              />
            </Link>
            <Link
              href="https://ibm.com/"
              target="_blank"
              className="mt-5 flex items-center"
            >
              <Image
                src="/images/ibm.svg"
                width={80}
                height={80}
                alt="logo of ibm"
                className="object-contain"
              />
            </Link>
            <Link
              href="https://microsoft.com/"
              target="_blank"
              className="mt-5 flex items-center"
            >
              <Image
                src="/images/microsoft.svg"
                width={120}
                height={120}
                alt="logo of microsoft"
                className="object-contain"
              />
            </Link>
            <Link
              href="https://razorpay.com/"
              target="_blank"
              className="mt-5 flex items-center"
            >
              <Image
                src="/images/razorpay.svg"
                width={120}
                height={120}
                alt="logo of razorpay"
                className="object-contain"
              />
            </Link>
          </div>
        </div>
        <hr className="dark:border-gray-700 my-6 hidden border-b-[1px] border-[#A6A6A6] sm:mx-auto md:block lg:my-2" />
        <div className="flex flex-col-reverse sm:items-center sm:justify-between md:flex-row">
          <p className="text text-center text-xs font-light text-black/75 md:text-left md:text-xl md:text-black">
            All rights reserved. | JSLovers Meetup community.
          </p>
          <hr className="y-200 dark:border-gray-700 mx-6 my-6 sm:mx-auto lg:my-8" />
          <div className="mx-6 mt-4 flex items-center justify-between space-x-6 sm:mt-0 sm:justify-center">
            <h5 className="  text-gray-900 text-sm font-semibold uppercase dark:text-black">
              Follow us
            </h5>
            <div className="flex gap-3">
              <Link
                href="https://www.linkedin.com/company/jslovers"
                target="_blank"
                className="relative rounded-full bg-black-100  p-1"
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
                href="https://www.facebook.com/groups/214962899049425/"
                target="_blank"
                className=""
              >
                <div className="relative rounded-full bg-black-100  p-1">
                  <Image
                    src="/images/contacts/socials/facebook.svg"
                    width={25}
                    height={25}
                    alt="facebook logo"
                    className="object-contain"
                  />
                </div>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                href="https://twitter.com/jslovers_del"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-black"
              >
                <div className="relative rounded-full bg-black-100 p-1">
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

              <Link
                href="https://instagram.com/jslovers_del"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-black"
              >
                <div className="relative rounded-full bg-black-100  p-1">
                  <Image
                    src="/images/contacts/socials/instagram.svg"
                    width={25}
                    height={25}
                    alt="Instagram logo"
                    className="object-contain"
                  />
                </div>
                <span className="sr-only">Instagram account</span>
              </Link>
              <Link
                href="https://www.meetup.com/jslovers/"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-black"
              >
                <div className="relative rounded-full bg-black-100  p-1">
                  <Image
                    src="/images/contacts/socials/meet.svg"
                    width={25}
                    height={25}
                    alt="Instagram logo"
                    className="object-contain"
                  />
                </div>
                <span className="sr-only">Meetup account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
