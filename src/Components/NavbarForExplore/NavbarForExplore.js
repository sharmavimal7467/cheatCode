
import "./NavbarForExplore.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarForExplore = () =>{
    return(
        <div>

<Navbar collapseOnSelect expand="lg" className="bg-white navBorder">
      <Container className="contWidth">
        <Navbar.Brand href="#home"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhtEKru5U-_us1IklDV_ATI5pp0D-gXEHFg&s" alt="Logo not found" className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/explore">Explore</Nav.Link>
            <Nav.Link href="/problem">Problem</Nav.Link>
            <Nav.Link href="#Content">Content</Nav.Link>
            <Nav.Link href="#Discuss">Discuss</Nav.Link>
            <NavDropdown title="Interview" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#Interview/3.1">Online</NavDropdown.Item>
              <NavDropdown.Item href="#Interview/3.2">
                Assessment
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Store" id="collapsible-nav-dropdown" class="custom-dropdown">
              <NavDropdown.Item href="#Store/3.1">Redeem</NavDropdown.Item>
              <NavDropdown.Item href="#Store/3.2">
                Premium
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Register</Nav.Link>
            <Nav.Link href="#deets">Sign in</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="cstBtn">
              Preminum
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    )
}

export default NavbarForExplore;