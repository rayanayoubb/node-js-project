import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import img1 from '../images/womenslider1.PNG';
import img2 from '../images/womenslider2.PNG';
import img3 from '../images/womenslider3.PNG';
import Categories from './Categories';

const Home = () => {
  return (
    <>
      <Carousel pause={false} interval={3000} style={{backgroundColor:'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))'}}>
        {[
          { src: img1, title: 'First slide label', text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' },
          { src: img2, title: 'Second slide label', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
          { src: img3, title: 'Third slide label', text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.' }
        ].map((item, index) => (
          <Carousel.Item key={index}>
            <div className="zoom-effect">
              <img src={item.src} className='d-block w-100' alt='...' />
            </div>
            <Carousel.Caption className='my-5'>
              <h1 className='mb-5 fs-1 fw-bold'>B U T T E R F L Y</h1>
              <h2 className='mb-5 lh-lg'>{item.title}</h2>
              <Button href="#categories" className="rounded-pill mx-2 btn-shop py-2 px-3 fs-4 fw-bold mt-5">
                Shop Here
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Categories Section */}
      <div id="categories">
        <Categories/>
      </div>
    </>
  );
}

export default Home;
