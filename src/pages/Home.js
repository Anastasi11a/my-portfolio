import { Button, Container, Col, Row, Image } from "react-bootstrap";

import avatar from '../assets/avatar.jpg';
import cv from '../data/Alekseeva_Anastasiia.pdf';
import { content } from '../constants/homeContent';
import { itemStyles } from '../styles';

const Home = () => {
    const { containerHome, colHome, image, header, bioFirstRow, bioSecondRow, btn } = itemStyles;

    return (
        <Container fluid style={containerHome}>
            <Row className="align-items-center justify-content-center">
                <Col xs="auto" style={colHome}>
                    <Image
                        src={avatar}
                        alt="Anastasiia's Avatar"
                        fluid
                        style={image}
                    />
                </Col>
            </Row>

            <Row>
                <Col className="text-center mb-5">
                    <h1 style={header}>{content.greeting}</h1>
                    <p style={bioFirstRow}>{content.bio1}</p>
                    <p style={bioSecondRow}>{content.bio1}</p>

                    <Button
                        href={cv}
                        download="cv.pdf"
                        variant="outline-info"
                        style={btn}
                    >
                        Download CV
                    </Button>
                </Col>
            </Row>
        </Container>
    )
};

export default Home;