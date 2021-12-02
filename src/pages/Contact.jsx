import React from "react";
import Navbar1 from "../components/Navbar";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <div className="vh-100">
      <Navbar1 />
      <Container>
        <h3>
          Contact <span className="text-primary">Hackflix</span>{" "}
        </h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          iure reprehenderit impedit iusto veritatis obcaecati totam eaque
          accusamus! Saepe ipsa, voluptatum eligendi quo ipsam praesentium
          maiores exercitationem natus repellendus. Repellat. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Explicabo iure reprehenderit
          impedit iusto veritatis obcaecati totam eaque accusamus! Saepe ipsa,
          voluptatum eligendi quo ipsam praesentium maiores exercitationem natus
          repellendus. Repellat
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam
          dicta debitis. Excepturi officia vel, architecto maxime esse soluta
          aliquam maiores consequuntur ipsam! Ipsam laboriosam voluptas
          voluptates optio, ab harum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime ullam dicta debitis. Excepturi officia vel,
          architecto maxime esse soluta aliquam maiores consequuntur ipsam!
          Ipsam laboriosam voluptas voluptates optio
        </p>
      </Container>
    </div>
  );
}

export default Contact;
