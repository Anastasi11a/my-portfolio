import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import socials from "../constants/socials";

const Header = () => {
    return (
        <Navbar collapseOnSelect fixed="top" expand="sm" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand>Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" defaultActiveKey="/portfolio/">
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
                                >
                                    <FontAwesomeIcon icon={icon} size="2x" />
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