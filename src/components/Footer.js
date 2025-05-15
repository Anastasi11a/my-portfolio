import { Container, Col, Row, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socials from "../constants/socials";
import { footerContainer, rowCenter, footerText } from "../utils/classNames";

const Footer = () => {
    return (
        <Container fluid className={footerContainer}>
            <Row className={rowCenter}>
                <Col xs="auto">
                    <Nav>
                        {socials.map(({ icon, url }) => (
                            <Nav.Link
                                href={url}
                                key={url}
                                target="_blank"
                                className="footer-link"
                            >
                                <FontAwesomeIcon icon={icon} size="lg" />
                            </Nav.Link>
                        ))}
                    </Nav>
                </Col>
            </Row>
            <Row>
                <Col className={footerText}>
                    Anastasiia Alekseeva • © 2025
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;