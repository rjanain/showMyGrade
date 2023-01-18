import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
function Header(props) {
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
        <FaGraduationCap size={"2rem"} className="mx-1" />
          Show My Grade
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav as="ul" activeKey={location?.pathname}>
            <Nav.Item as="li">
              <Nav.Link as={Link} className="nav-link" eventKey={"/"} to={"/"}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                className="nav-link"
                eventKey={"/marks"}
                to={"/marks"}
              >
                Marks
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                className="nav-link"
                eventKey={"/response"}
                to={"/response"}
              >
                Response
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                className="nav-link"
                eventKey={"/contact"}
                to={"/contact"}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Nav as="ul" className="ms-md-auto">
            <Nav.Item as="li">
              <NavDropdown 
              title="Sign in as" 
              id="profile-navbar-dropdown">
                <NavDropdown.Item eventKey="4.1">
                Email: {"<?= user_email  ?>"}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.2">
                  Type: {"<?= user_type  ?>"}
                  </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link
                className="me-3 me-lg-0"
                href="https://www.math.iitb.ac.in/"
                target="_blank"
              >
                <FaUniversity size="1.5rem" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
