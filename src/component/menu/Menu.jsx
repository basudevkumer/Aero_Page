import { Container, Navbar, Nav, Image, Button } from "react-bootstrap";
import "../menu/menuPart.css";
import Logo from "../../assets/logo.png";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Menu() {
  return (
    <Navbar expand="lg" className=" py-4 ">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <Image src={Logo} className="navlogo " />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" navMain">
            <Nav.Link href="#home" className="navText">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="navText">
              About
            </Nav.Link>{" "}
            <Nav.Link href="#service" className="navText">
              Service
            </Nav.Link>
            <Nav.Link href="#contact" className="navText">
              {" "}
              Contact
            </Nav.Link>
          </Nav>
          <Button variant="" className="downloadButton ms-auto">
            {" "}
            <FaCloudDownloadAlt className="downloadIcon" /> Download
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
