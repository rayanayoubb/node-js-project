import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Summary from './Summary';
import Products from './Products';
import Orders from './Orders';
import Users from './Users';

const Dashboard = () => {
    return ( 
        <Container fluid>
      <Row >
        <Col sm={3}>
        <Nav defaultActiveKey="/admin" className="flex-column side-navbar mx-5 fs-5">
      <Nav.Link className="custom-side-nav-link mt-5" href="/admin/summary">Summary</Nav.Link>
      <Nav.Link className="custom-side-nav-link mt-4" href="/admin/products">Products</Nav.Link>
      <Nav.Link className="custom-side-nav-link mt-4" href="/admin/orders">Orders</Nav.Link>
      <Nav.Link className="custom-side-nav-link mt-4" href="/admin/users">Users</Nav.Link>
    </Nav>
        </Col>
        <Col sm={9}>
                    <Routes>
            <Route path="products" element={<Products />}/> 
            <Route path="summary" element={<Summary />}/> 
            <Route path="orders" element={<Orders />}/> 
            <Route path="users" element={<Users />}/> 
                    </Routes>

                </Col>
      </Row>
    </Container>
    );
}
 
export default Dashboard;