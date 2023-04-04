import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-text-container">
        <h3> discover your wellness</h3>
        <Link href="./product">
          <button>shop now</button>
        </Link>
        {/* loop of 3+ images with ^ above */}
      </div>
      <img alt="essential oils" src="" className="banner-image" />
    </div>
  );
};

export default Banner;
