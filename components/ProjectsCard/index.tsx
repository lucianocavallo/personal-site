import Image from "next/image";
import { Container } from "./styles";
import github from "../../public/images/github.svg"
import Link from "next/link";

const ProjectsCard = ({ title, url, image, description}) => {
  return (
    <Container>
      <h4>{title}</h4>
      <div>
        <Image src={image} alt={title} layout="responsive" />
      </div>
      <p>{description}</p>
      <div>
        <Link href={url} passHref>
          <a className="project-link">
            Ver proyecto
          </a>
        </Link>
        <Link href={url} passHref>
          <span>
            Ver C&oacute;digo
            <Image src={github} alt="github icon" width={32} />
          </span>
        </Link>
      </div>
    </Container>
  );
}

export default ProjectsCard;