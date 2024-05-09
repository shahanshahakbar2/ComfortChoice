import React from 'react';
import './section.css';
import picture from '../../assests/picture.webp'

const Section = () => {
  return (
    <>
      <div className='section'>
<h1>CRAFTED FOR EXCELLENCE</h1>
<p className='paragraph'>
We pride ourselves on offering adult toys of unparalleled excellence, ensuring the ultimate experience every time. From luxurious materials to expert craftsmanship, each product is curated to elevate your intimate moments to new heights. Explore our collection and discover the perfect companion for your desires

</p>    
  <img src={picture} alt='' />
      </div>
    </>
  )
}

export default Section