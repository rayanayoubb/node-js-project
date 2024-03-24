import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../slices/authSlice";
import { toast } from "react-toastify";

const NavBar = () => {

  const dispatch = useDispatch();
  const auth  = useSelector((state) => state.auth);

    return ( 
        <Navbar expand="lg" id="nav-bar">
        <Container fluid>
          <Navbar.Brand className="mx-5 fs-3">
            <Link to="/" style={{ textDecoration: 'none', color: 'Black' }}>
                Butterfly
                </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{color:'Black',}}/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', }}
              navbarScroll
            >
                <NavDropdown title="Shop" id="navbarScrollingDropdown" className="custom-dropdown-title ms-5 custom-dropdown-menu">
                <NavDropdown.Item><Link to="/women" className="custom-link">Women</Link></NavDropdown.Item>
                <NavDropdown.Item>
                <Link to="/men" className="custom-link">Men</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                <Link to="/kids" className="custom-link">Kids</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="custom-nav-link ms-5">
                <Link to="/contact">Contact Us</Link>
                </Nav.Link>
              <Nav.Link className="custom-nav-link ms-5">
                <Link to="/about">About Us</Link>
                </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
                              {
                  auth._id ? <Nav.Link className="custom-nav-link1 ms-5">
                  <Link to="/" onClick={() => {
                    dispatch(logoutUser(null));
                    toast.warning("Logged out!", {position: "bottom-left"});
                    }}>Logout</Link>
                  </Nav.Link> :
                  <Link to="/login" className="custom-nav-icon">
                    <div className="nav-bag mt-1 mx-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                      </svg>
                    </div>
                  </Link>
                }
                <Link to="/favorite">
                  <div className="nav-bag mt-1 mx-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-heart-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                  </div>        
              </Link>

              <Link to="/cart" >
            <div className="nav-bag mt-1 mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg>
                <span className="bag-quantity">
                    <span>3</span>
                </span>
        </div>        
        </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        );
}
 
export default NavBar;