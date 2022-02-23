import Image from 'next/image';
import { Container } from './styles';
import github from '@/images/socials/github.svg';

const ProjectsCard = ({
  title,
  url,
  githubLink,
  image,
  description,
  lang,
  themed,
}) => {
  return (
    <Container themed={themed}>
      <h4>{title}</h4>
      <div>
        <Image src={image} alt={title} layout="responsive" />
      </div>
      <p>{description}</p>
      <div>
        <a href={url} target="_blank" rel="noreferrer" className="project-link">
          {lang === 'es' ? 'Ver proyecto' : 'Live project'}
        </a>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <span>
            <p>{lang === 'es' ? 'Ver código' : 'See code'}</p>
            <Image src={github} alt="github icon" width={32} />
          </span>
        </a>
      </div>
    </Container>
  );
};

export default ProjectsCard;
