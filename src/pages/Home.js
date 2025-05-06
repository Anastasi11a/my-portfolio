import { Button, Container, Col, Row, Image } from "react-bootstrap";

import avatar from '../assets/logo-transporent.png';
import cv from '../data/Alekseeva_Anastasiia.pdf';
import { content } from '../constants/homeContent';

const Home = () => {
    return (
        <Container fluid className="min-vh-100 d-flex flex-column justify-content-center align-items-center pt-5 bg-home">
            <Row className="align-items-center justify-content-center">
                <Col xs={4} md={3} className="text-center mb-4">
                    <Image
                        src={avatar}
                        alt="Anastasiia's Avatar"
                        fluid
                        roundedCircle
                        className="mx-auto d-block avatar-img"
                    />
                </Col>
            </Row>
            <Row>
                <Col className="text-center mb-5">
                    <h1 className="mb-3 fs-3 text-dark-text">{content.greeting}</h1>
                    <p className="mb-2 fs-3 fw-bold text-uppercase text-accent animated-fadeInUp">{content.role}</p>
                    <p className="mb-3 fs-4 fw-bold text-dark-text animated-fadeInUp">
                        {content.focus} <br/> {content.tagline}
                    </p>

                    <Button
                        href={cv}
                        download="cv.pdf"
                        variant="outline-info"
                        className="mt-3"
                    >
                        Download CV
                    </Button>
                </Col>
            </Row>
        </Container>
    )
};

export default Home;