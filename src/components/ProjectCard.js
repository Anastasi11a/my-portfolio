import { useState } from "react";
import { Card, Collapse, Button } from "react-bootstrap";
import ButtonLink from "./ButtonLink";
import { card, cardImg, cardTitle, cardText, skillsTxt } from "../utils/classNames";

const ProjectCard = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card className={card}>
            <a 
                href={project.visitLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-decoration-none">
                <Card.Body>
                    <Card.Title className={cardTitle}>
                        {project.title}
                    </Card.Title>
                    <Card.Img src={project.img} alt={project.title} className={cardImg} />
                </Card.Body>
            </a>
            <Card.Body>
                <Card.Text className={cardText}>
                    <div className={skillsTxt}>{project.description}</div>
                    <div className={skillsTxt}>
                        <strong>Technologies: </strong>{project.skills}
                    </div>

                    <div className={skillsTxt}>
                        <Button
                            variant="link"
                            size="md"
                            className="p-0 text-light mt-1"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}>
                            {isOpen ? 'Read less' : 'Read more'}
                        </Button>
                        <Collapse in={isOpen}>
                            <div>{project.features}</div>
                        </Collapse>
                    </div>
                    <div>GitHub repository: <ButtonLink link={project.gitHubLink} /></div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;