import { Link } from 'react-router-dom';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { githubLink } from '../utils/classNames';

const ButtonLink = ({ link }) => {
    return (
        <Container className={githubLink}>
            <OverlayTrigger 
                placement='bottom'
                overlay={<Tooltip id='tooltip-github'>go to GitHub repository</Tooltip>}
            >
                <Link to={link} alt='GitHub link' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} size='2x' className="github-icon" />
                </Link>
            </OverlayTrigger>
        </Container>
    );
};

export default ButtonLink;