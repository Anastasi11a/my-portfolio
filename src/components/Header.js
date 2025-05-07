import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import socials from "../constants/socials";
import {
    navbarClass,
    brandClass,
    navCollapseClass,
    socialItemClass,
} from '../utils/classNames';

const Header = () => {
    const navItems = [
        { label: 'Home', to: '/portfolio/' },
        { label: 'Projects', to: '/portfolio/projects' }
    ];

    return (
        <Navbar  
            collapseOnSelect 
            fixed="top" 
            expand="sm" 
            data-bs-theme="dark"
            className={navbarClass}
        >
            <Container fluid>
                <Navbar.Brand className={brandClass}>
                    Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse 
                    id="responsive-navbar-nav"
                    className={navCollapseClass}
                >
                    <Nav defaultActiveKey="/portfolio/">
                        {navItems.map(( { label, to }) => (
                            <Nav.Link 
                                as={Link} 
                                to={to} 
                                key={to} 
                                className="me-3"
                            >
                                {label}
                            </Nav.Link>
                        ))}

                        <NavDropdown 
                            title="Contact" 
                            id="collapsible-nav-dropdown"
                        > 
                            {socials.map(({ icon, url }) => (
                                <NavDropdown.Item
                                    key={url}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={socialItemClass}
                                >
                                    <FontAwesomeIcon 
                                        icon={icon} 
                                        size="2x" 
                                        className="social-icon"
                                    />
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