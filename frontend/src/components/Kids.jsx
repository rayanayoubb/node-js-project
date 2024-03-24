import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../images/kidslider1.PNG';
import img2 from '../images/kidslider2.PNG';
import img3 from '../images/kidslider3.PNG';

const Kids = () => {
    return ( 
        <Carousel indicators controls fade pause={false} interval={3000} className='my-5 mx-5' >
      {[
        { src: img1},
        { src: img2},
        { src: img3}
      ].map((item, index) => (
        <Carousel.Item key={index}>
          <img src={item.src} className='d-block w-100' alt='...' />
        </Carousel.Item>
      ))}
    </Carousel>
     );
}
 
export default Kids;