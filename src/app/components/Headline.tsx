import React from "react";

interface HeadlineProps {
  text: string;
  className?: string;
}

const Headline: React.FC<HeadlineProps> = ({ text, className = "" }) => (
  <h1 className={`text-3xl sm:text-4xl md:text-6xl font-bold leading-tight font-montserrat ${className}`}>
    {text}
  </h1>
);

export default Headline;
