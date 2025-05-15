import { useState } from "react";
import { Card, Collapse, Button } from "react-bootstrap";
import ButtonLink from "./ButtonLink";
import { card, cardImg, cardTitle, cardText, skillsText, cardBtn } from "../utils/classNames";

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
                <Card.Text className={cardText}>{project.description}</Card.Text>
                <Card.Text className={cardText}>
                    Technologies:<span className={skillsText}>{project.skills}</span>
                </Card.Text>
                <Card.Text className={cardText}>
                    <Button
                        variant="link"
                        className={cardBtn}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}>
                        {isOpen ? 'Read less' : 'Read more'}
                    </Button>
                    <Collapse in={isOpen}>
                        <Card.Text>{project.features}</Card.Text>
                    </Collapse>
                </Card.Text>
            </Card.Body>
            <ButtonLink link={project.gitHubLink} />
        </Card>
    );
};

export default ProjectCard;