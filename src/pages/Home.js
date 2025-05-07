import { useState } from "react";
import { Button, Container, Col, Row, Image } from "react-bootstrap";

import avatar from '../assets/avatar.png';
import cv from '../data/Alekseeva_Anastasiia.pdf';
import { content } from '../constants/homeContent';
import {
    containerClass,
    centeredRowClass,
    imageWrapperClass,
    imageClass,
    greetingClass,
    roleClass,
    taglineClass,
} from '../utils/classNames';

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Container fluid className={containerClass}>
            <Row className={centeredRowClass}>
                <Col xs={4} md={3} className={imageWrapperClass}>
                    <Image
                        src={avatar}
                        alt="Anastasiia's Avatar"
                        fluid
                        className={`${imageClass} 
                            ${isHovered ? 'rounded' : 'rounded-circle'}
                        `}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </Col>
            </Row>
            <Row>
                <Col className="text-center mb-5">
                    <h1 className={greetingClass}>{content.greeting}</h1>
                    <p className={roleClass}>{content.role}</p>
                    <p className={taglineClass}>
                        {content.focus} <br/> {content.tagline}
                    </p>

                    <Button
                        href={cv}
                        download="cv.pdf"
                        variant="outline-info"
                        className="mt-4"
                    >
                        Download CV
                    </Button>
                </Col>
            </Row>
        </Container>
    )
};

export default Home;