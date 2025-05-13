import { Container, Col, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { projectsList } from "../constants/projectsList";
import { section, projectsContainer } from '../utils/classNames';

const Projects = () => {
    return (
        <section className={section}>
            <Container fluid className={projectsContainer}>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {projectsList.map((project, i) => (
                        <Col key={i}>
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;