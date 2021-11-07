import React from "react";
import Navbar1 from "../components/Navbar";
import { Container } from "react-bootstrap";
import "./About.css"

function About() {
  return (
    <div className="vh-100">
      <Navbar1 />
      <Container>
        <h4>About <span className="text-primary">Hackflix</span> </h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          iure reprehenderit impedit iusto veritatis obcaecati totam eaque
          accusamus! Saepe ipsa, voluptatum eligendi quo ipsam praesentium
          maiores exercitationem natus repellendus. Repellat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          iure reprehenderit impedit iusto veritatis obcaecati totam eaque
          accusamus! Saepe ipsa, voluptatum eligendi quo ipsam praesentium
          maiores exercitationem natus repellendus. Repellat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam
          dicta debitis. Excepturi officia vel, architecto maxime esse soluta
          aliquam maiores consequuntur ipsam! Ipsam laboriosam voluptas
          voluptates optio, ab harum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam
          dicta debitis. Excepturi officia vel, architecto maxime esse soluta
          aliquam maiores consequuntur ipsam! Ipsam laboriosam voluptas
          voluptates optio, ab harum?
        </p>
      </Container>
    </div>
  );
}

export default About;
