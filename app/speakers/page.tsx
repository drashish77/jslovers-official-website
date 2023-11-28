import SpeakerCard from "@/components/Speakers/SpeakerCard";
import SpeakerHero from "@/components/Speakers/SpeakerHero";
import data from "./data.json";
import React from "react";

const Speakers = () => {
  return (
    <div className="container min-h-[70vh] mb-40">
      <SpeakerHero />
      <div className="grid grid-cols-4 gap-10 justify-between mt-20">
        {data.map((i) => (
          <div className="justify-center" key={i.id}>
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
    </div>
  );
};

export default Speakers;
