import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <div
      style={{
        background:
        'linear-gradient(to top right, #b30000, rgba(179, 0, 0, 0.5))'
      }}
    >
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12}>
            <Card
              className="text-white my-5 mx-auto"
              style={{
                borderRadius: "1rem",
                maxWidth: "400px",
                background: "black"
              }}
            >
              <Card.Body className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">
                  Please enter your email and password!
                </p>
                <Form className="w-100" onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label className="text-white">Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={handleEmailChange}
                      size="m"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="text-white">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={handlePasswordChange}
                      size="m"
                    />
                  </Form.Group>
                  <p className="small mb-3 pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <div className="d-flex justify-content-center"> {/* Center the button */}
  <Button
  className="mx-5 px-5"
    variant="outline-light"
    size="lg"
    disabled={auth.loginStatus === "pending"}
    type="submit"
  >
    {auth.loginStatus === "pending" ? "Submitting" : "Login"}
  </Button>
</div>
                  {auth.loginStatus === "rejected" ? (
                    <Alert style={{
                        color: "red",
                        backgroundColor: "black"
                      }} className="mt-3">
                      {auth.loginError}
                    </Alert>
                  ) : null}
                </Form>
                <div className="d-flex flex-row">
                  <Button href="#!" variant="none" className="m-3" style={{ color: "white" }}>
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button href="#!" variant="none" className="m-3" style={{ color: "white" }}>
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button href="#!" variant="none" className="m-3" style={{ color: "white" }}>
                    <i className="fab fa-google"></i>
                  </Button>
                </div>
                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-white-50 fw-bold" onClick={() => {window.location.href="/signup"}}>
                        SignUp
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
