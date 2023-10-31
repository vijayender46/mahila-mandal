"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ImageTitleParagraph = ({ 
        imageSrc, 
        title, 
        paragraph, 
        divClass,
        subTitle,
        href,
        quotes,
        hrefText,
        hrefClass
    }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={divClass}>
        <div className="mm-textImg-img w-1/2">
            <Image
                src={imageSrc}
                alt={title}
                onError={() => setIsLoaded(false)}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
      {isLoaded && (
        <div className="mm-textImg-text mm-section-title w-1/2">
            <h4 className="mm-subtitle">{subTitle}</h4>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <div className="mm-para-quotes"><span>{quotes}</span></div>
            <Link className={hrefClass} href={href} alt='Discover More'>{hrefText}</Link>
        </div>
      )}
    </div>
  );
};

export default ImageTitleParagraph;