import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { watchImg } from "../utils";
import VideoCarousel from "./VIdeoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <section
      id="#highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 md:flex w-full items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">Watch the film</p>
            <img src={watchImg} alt="Image" />
            <p className="link">Watch the event</p>
            <img src={watchImg} alt="Image" />
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
