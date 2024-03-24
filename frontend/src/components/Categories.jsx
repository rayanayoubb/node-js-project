import { Container, Button, Col, Row } from "react-bootstrap";
import Products from './Products';
import { useState } from "react";
import img1 from '../images/womenslider1.PNG';
import img2 from '../images/womenslider2.PNG';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('tops');

  // Sample product data for each category
  const productsByCategory = {
    tops: [
      { name: 'Top 1', description: 'Description of Top 1', price: 20, image: img1 },
      { name: 'Top 2', description: 'Description of Top 2', price: 25, image: img2 },
      { name: 'Top 2', description: 'Description of Top 2', price: 25, image: img2 },
      { name: 'Top 2', description: 'Description of Top 2', price: 25, image: img2 },
      { name: 'Top 2', description: 'Description of Top 2', price: 25, image: img2 },
      { name: 'Top 2', description: 'Description of Top 2', price: 25, image: img2 },
      // Add more products as needed
    ],
    bottoms: [
      { name: 'Bottom 1', description: 'Description of Bottom 1', price: 30, image: 'bottom1.jpg' },
      { name: 'Bottom 2', description: 'Description of Bottom 2', price: 35, image: 'bottom2.jpg' },
      // Add more products as needed
    ],
    shoes: [
      { name: 'Shoes 1', description: 'Description of Shoes 1', price: 50, image: 'shoes1.jpg' },
      { name: 'Shoes 2', description: 'Description of Shoes 2', price: 55, image: 'shoes2.jpg' },
      // Add more products as needed
    ],
    accessories: [
      { name: 'Accessory 1', description: 'Description of Accessory 1', price: 15, image: 'accessory1.jpg' },
      { name: 'Accessory 2', description: 'Description of Accessory 2', price: 20, image: 'accessory2.jpg' },
      // Add more products as needed
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="my-5 mx-5 row text-center">
      <Container fluid>
        <div className="collection-container">
          <h3 className="fw-bold">Collection</h3>
          <hr className="hr-bold" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="circle-container">
            <div className="circle"></div>
          </div>
        </div>
      </Container>
      <h1 className="fw-bolder">Our Top Collection</h1>
      <Container fluid>
        <Row className="justify-content-center align-items-center" style={{gap: '1rem'}}>
          <Col xs={12} sm={6} md={3} lg={2} xl={2} className="my-5">
            <Button onClick={() => handleCategoryClick('tops')} className="rounded mx-2 py-2 px-3 fs-5 fw-bold" style={{backgroundColor:'#b30000', borderColor:'transparent', width: '100%' }}>
              Tops
            </Button>
          </Col>
          <Col xs={12} sm={6} md={3} lg={2} xl={2} className="my-5">
            <Button onClick={() => handleCategoryClick('bottoms')} className="roundedmx-2 py-2 px-3 fs-5 fw-bold btn-categories" style={{ width: '100%' }}>
              Bottoms
            </Button>
          </Col>
          <Col xs={12} sm={6} md={3} lg={2} xl={2} className="my-5">
            <Button onClick={() => handleCategoryClick('shoes')} className="rounded mx-2 py-2 px-3 fs-5 fw-bold btn-categories" style={{ width: '100%' }}>
              Shoes
            </Button>
          </Col>
          <Col xs={12} sm={6} md={3} lg={2} xl={2} className="my-5">
            <Button onClick={() => handleCategoryClick('accessories')} className="rounded mx-2 py-2 px-3 fs-5 fw-bold btn-categories" style={{ width: '100%' }}>
              Accessories
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center my-5 me-5" style={{gap: '9rem'}}>
          {productsByCategory[selectedCategory].map((product, index) => (
            <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
              <Products {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Categories;