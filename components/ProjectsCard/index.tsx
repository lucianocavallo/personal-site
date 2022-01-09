import Image from "next/image";
import { Container } from "./styles";
import github from "@/images/socials/github.svg"
import Link from "next/link";

const ProjectsCard = ({ title, url, githubLink, image, description }) => {
  return (
    <Container>
      <h4>{title}</h4>
      <div>
        <Image
          src={image}
          alt={title}
          layout="responsive"
        />
      </div>
      <p>{description}</p>
      <div>
        <Link href={url} passHref>
          <a className="project-link">
            Ver proyecto
          </a>
        </Link>
        <Link href={githubLink} passHref>
          <a>
            <span>
              <p>Ver C&oacute;digo</p>
              <Image src={github} alt="github icon" width={32} />
            </span>
          </a>
        </Link>
      </div>
    </Container>
  );
}

export default ProjectsCard;
