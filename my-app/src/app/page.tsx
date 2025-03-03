"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Facebook, Twitter, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <Nav.Link><Facebook/></Nav.Link>
        <Nav.Link><Twitter/></Nav.Link>
        <Nav.Link><Pinterest/></Nav.Link>
        <Nav.Link><Instagram/></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link><HouseFill/></Nav.Link>
        <Nav.Link><Search/></Nav.Link>
        <Nav.Link><PersonFill/> </Nav.Link>
        <NavDropdown title={<Cart/>}>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

const IslandSnowLogo = () => (
  <div className="row">
    <div className="col">
      {/* Make sure this image is in /public so that /experience-islandsnow-bootstrap-logo.png works */}
      <img 
        src="/experience-islandsnow-bootstrap-logo.png" 
        alt="Island Snow Logo" 
        className="img-fluid rounded mx-auto d-block py-1"
      />
    </div>
  </div>
);

const MiddleMenu = () => (
  <div className="row justify-content-center pt-4">
    <div className="col-1">
      <div className="dropdown">
        <div className="dropdown-toggle"><strong>MEN</strong></div>
      </div>
    </div>
    <div className="col-1">
      <div className="dropdown">
        <div className="dropdown-toggle"><strong>WOMEN</strong></div>
      </div>
    </div>
    <div className="col-1">
      <div className="dropdown">
        <div className="dropdown-toggle"><strong>KIDS</strong></div>
      </div>
    </div>
    <div className="col-1">
      <div className="dropdown">
        <div className="dropdown-toggle"><strong>BRANDS</strong></div>
      </div>
    </div>
    <div className="col-1">
      <div className="dropdown-toggle"><strong>SEARCH</strong></div>
    </div>
  </div>
);

const FullWidthImage = () => (
  <div className="row justify-content-center">
    <div className="col">
      <img 
        src="/experience-islandsnow-bootstrap-main.png" 
        alt="Island Snow Main" 
        className="img-fluid rounded mx-auto d-block" 
      />
    </div>
  </div>
);

const FooterMenu = () => (
  <footer>
    <div className="container pt-4">
      <div className="row py-3">
        <div className="col">
          <div>NAVIGATION</div>
          <hr />
          <div>About Us</div>
          <div>Employment</div>
          <div>Videos</div>
        </div>
        <div className="col">
          <div>MAIN MENU</div>
          <hr />
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </div>
        <div className="col">
          <div>CONNECT</div>
          <hr />
          <div>Sign up for the latest updates</div>
          <input type="text" placeholder="Enter Email Address" />
          <div className="btn btn-dark mt-2">Join</div>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main>
      <Container>
        <TopMenu/>
        <IslandSnowLogo/>
        <MiddleMenu/>
        <FullWidthImage/>
        <FooterMenu/>
      </Container>
    </main>
  );
}