import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ButtonLink = ({ link }) => {
    return (
        <Link
            to={link}
            alt='GitHub link'
            target='_blank'
            className='btn btn-outline-light'
        >
            <FontAwesomeIcon icon={faGithub} size='2x' />
        </Link>
    );
};

export default ButtonLink;