import { Container, Col, Row, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socials from "../constants/socials";

const Footer = () => {
    return (
        <Container fluid className="w-100 p-3 bg-footer border-top border-black">
            <Row className="justify-content-center">
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
                <Col className="text-center text-uppercase text-light fs-6 mb-2 mt-2 pb-3 footer-text">
                    Anastasiia Alekseeva • © 2025
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;