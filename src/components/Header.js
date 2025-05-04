import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socials from "../constants/socials";

const Header = () => {
    return (
        <Navbar 
            collapseOnSelect 
            fixed="top" 
            expand="sm" 
            data-bs-theme="dark"
            className="py-2 px-4 bg-navbar border"
        >
            <Container fluid>
                <Navbar.Brand className="fs-3 fw-bold text-accent">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse 
                    id="responsive-navbar-nav"
                    className="justify-content-end me-4 fs-5"
                >
                    <Nav defaultActiveKey="/portfolio/">
                        {[
                            { label: 'Home', to: '/portfolio/' },
                            { label: 'Projects', to: '/portfolio/projects' }
                        ].map(( { label, to }) => (
                            <Nav.Link as={Link} to={to} key={to} className="me-3">
                                {label}
                            </Nav.Link>
                        ))}

                        <NavDropdown title="Contact" id="collapsible-nav-dropdown">
                            {socials.map(({ icon, url }) => (
                                <NavDropdown.Item
                                    key={url}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="d-flex justify-content-center py-2 social-item"
                                >
                                    <FontAwesomeIcon icon={icon} size="2x" className="social-icon"/>
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;