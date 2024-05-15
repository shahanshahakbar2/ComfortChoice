import React from "react";
import "./aside.css";
import pic1 from "../../assests/pic1.webp";
import pic2 from "../../assests/pic2.webp";
import image1 from "../../assests/image1.webp";

const Aside = () => {
  return (
    <>
      <div
        className="image"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <img src={image1} alt="pic" /> */}
      </div>
      <div className="aside">
        <h1>Our Story</h1>
        <div className="aside1">
          <div className="p1">
            welcome to Pleasureyourself , where we believe that sexual wellness
            is an essential part of overall well-being. Our platform is
            dedicated to providing a judgment-free space where individuals can
            explore their desires, preferences, and curiosities with confidence
            and respect. We offer a wide range of carefully curated sexual
            products designed to enhance pleasure, promote intimacy, and
            prioritize safety. But our commitment goes beyond just selling
            products; we're here to spark conversations, challenge taboos, and
            foster a culture of sexual empowerment. Whether you're seeking
            education, advice, or simply browsing for your next adventure, we're
            here to support you every step of the way. Join us on this journey
            towards a healthier, happier, and more fulfilling sexual experience.
          </div>
          <div className="img1">
            <img src={pic1} alt="pic" />
          </div>
        </div>
        <div className="aside2">
          <div className="img2">
            <img src={pic2} alt="pic" />
          </div>
          <div className="p2">
            We believe that pleasure knows no bounds and that everyone deserves
            access to safe, satisfying experiences. Whether you identify as
            male, female, non-binary, or anywhere in between, our inclusive
            selection is here to empower you on your journey towards sexual
            fulfillment. Explore our offerings and discover the possibilities
            that await you.
            <br />
            <br />
            <button>
              <a href="#shop">Shop Now</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
