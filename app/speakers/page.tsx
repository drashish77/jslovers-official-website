"use client";
import SpeakerCard from "@/components/Speakers/SpeakerCard";
import SpeakerHero from "@/components/Speakers/SpeakerHero";
import data from "./data.json";
import React from "react";
import SpeakerMobileCard from "@/components/Speakers/SpeakerMobile";

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

const Speakers = () => {
  return (
    <div className="container min-h-[70vh] mt-20 mb-40">
      <SpeakerHero />
      <div className="hidden md:grid mx-10 md:mx-0 md:grid-cols-4 gap-10 justify-between mt-28">
        {data.map((i) => (
          <div className="justify-center mb-10" key={i.id}>
            <SpeakerCard
              id={i.id}
              name={i.name}
              designation={i.designation}
              desc={i.desc}
              links={i.links}
              img={i.img}
            />
          </div>
        ))}
      </div>
      <div className="sm:hidden mt-20">
        <SpeakerMobileCard />
      </div>
    </div>
  );
};

export default Speakers;
