import { Context } from "context/context";
import React, { useContext } from "react";
import { Container } from "./styles";

const Footer = () => {
  const { lang } = useContext(Context);
  return (
    <Container>
      <p>
        {lang === "es"
          ? "lucianocavallo © 2022. Todos los derechos reservados."
          : "lucianocavallo © 2022. All rights reserved."}
      </p>
    </Container>
  );
};

export default Footer;
