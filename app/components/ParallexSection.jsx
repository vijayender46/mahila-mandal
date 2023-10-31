"use client"
import Image from "next/image";
import React, { useState } from "react";

const ParallexSection = ({ parallexImg, headerText, subHeader, paragraph, link, customclass }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const sectionClasses = customclass+ ' ' +'flex w-full min-h-[600px] py-50 items-center';

  return (
    <section 
    className={sectionClasses}
    onError={() => setIsLoaded(false)}
    onLoad={() => setIsLoaded(true)}
    style={{
        'backgroundImage': `url(${parallexImg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
        <div className="container max-w-[768px] px-10 py-10 mx-auto text-center text-white">
          <h2 className="mb-2">{headerText}</h2>
          <h4 className="my-5 text-lg">{subHeader}</h4>
          <p className="text-white text-300 size-[13px]">{paragraph}</p>
          <a className="mt-5 inline-block" href={link}>Learn more</a>
        </div>
    </section>
  );
};

export default ParallexSection;