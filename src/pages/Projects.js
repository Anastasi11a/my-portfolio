import { Container, Col, Row, Card } from "react-bootstrap";
import ButtonLink from "../components/ButtonLink";
import { projectsList } from "../constants/projectsList";
import {
    sectionClass,
    projectsContainer, 
    cardClass, 
    cardImgClass, 
    cardTitleClass, 
    cardTextClass, 
    skillsTxtClass
} from '../utils/classNames';

const Projects = () => {
    return (
        <section className={sectionClass}>
            <Container fluid className={projectsContainer}>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {projectsList.map((project, i) => (
                        <Col key={i}>
                            <Card className={cardClass}>
                                <a href={project.visitLink} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                    <Card.Body>
                                        <Card.Title className={cardTitleClass}>{project.title}</Card.Title>
                                        <Card.Img src={project.img} alt={project.title} className={cardImgClass} />
                                    </Card.Body>
                                </a>
                                <Card.Body>
                                    <Card.Text className={cardTextClass}>
                                        <strong>Description:</strong>
                                        <div className={skillsTxtClass}>{project.description}</div>
                                        <strong>Features:</strong>
                                        <div className={skillsTxtClass}>{project.features}</div>
                                        <strong>Technologies used:</strong>
                                        <div className={skillsTxtClass}>{project.skills}</div>
                                        <div className="mt-2">
                                            GitHub repository: <ButtonLink link={project.gitHubLink} />
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;