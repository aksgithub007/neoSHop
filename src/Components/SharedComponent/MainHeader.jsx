import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./mainHeader.css";

function MainHeader() {
  return (
    <Navbar expand="lg" className="mainnavbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <h2
            className="mt-4 ms-5 fw-bold fs-2"
            style={{
              color: " #bb0100",
              letterSpacing: "0.8px",
              //   lineHeight: "45px",
            }}
          >
            Neo<span className="text-uppercase">Store</span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll navbar__collapse ">
          <Nav
            className="navbar_collapse"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Furniture</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/products">Home Decor</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Sale</Nav.Link>
            <Nav.Link href="#">More</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <div class="input-group mb-3 input_wrap">
              <input
                type="text"
                className="input"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button type="button" className="searchbutton">
                <AiOutlineSearch />
              </button>
            </div>
          </Form>
          <a href="#" className="mb-3">
            <FaUserAlt className="icon" />
          </a>
          <a href="#" className="mb-3">
            <AiFillHeart className="icon" />
          </a>
          <a href="#" className="mb-3">
            <RiShoppingBag2Fill className="icon" />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;
