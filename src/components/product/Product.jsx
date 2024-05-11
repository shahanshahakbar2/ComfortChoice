import React from "react";
import "./product.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s1 from "../../assests/s5.webp";
import s2 from "../../assests/s2.webp";
import s3 from "../../assests/s3.webp";
import s4 from "../../assests/s4.webp";
import s5 from "../../assests/s5.webp";
import s6 from "../../assests/s6.webp";

const Product = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        <div className='card'>
          <div className='card-box'>
            <img className='product--image' src={s1} alt='product' />
            <p>I am a Product</p>
            <p className='price'>$124</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-box'>
            <img className='product--image' src={s2} alt='product' />
            <p>I am a Product</p>
            <p className='price'>$124</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-box'>
            <img className='product--image' src={s3} alt='product' />
            <p>I am a Product</p>
            <p className='price'>$124</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-box'>
            <img className='product--image' src={s4} alt='product' />
            <p>I am a Product</p>
            <p className='price'>$124</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-box'>
            <img className='product--image' src={s5} alt='product' />
            <p>I am a Product</p>
            <p className='price'>$124</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-box'>
            <img className='product--image' src={s6} alt='product' />
            <p>I am a Product</p>
            <p className='price'>$124</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Product;
