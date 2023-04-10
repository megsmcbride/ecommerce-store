import React from "react";
import Link from "next/link";
import { urlFor } from '../src/pages/index'

const Banner = ({ banner }) => {
  console.log("asdf ",banner)
  return (
    <div className="banner-container">
      <div className="banner-text-container">
        <h3>{banner.midText}</h3>
        <Link href="./product">
          <button>{banner.buttonText}</button>
        </Link>
        {/* loop of 3+ images with ^ above */}
      </div>
      <img alt="essential oils" src={urlFor(banner.image)} />
    </div>
  );
};

export default Banner;
