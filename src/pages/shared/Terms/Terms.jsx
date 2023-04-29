import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Terms And Condition</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia
        perspiciatis aut excepturi temporibus cupiditate repellat error
        necessitatibus sint ipsa voluptatem consectetur fugit quis, dolorum
        blanditiis asperiores dolore vero. Alias quis fugit quidem odit minus
        ratione illum voluptatum doloribus eveniet, cum natus molestias ullam,
        explicabo ut consequatur velit repellendus deserunt?
      </p>
      <p>
        Go back to <Link to="/register">Regiser</Link>
      </p>
    </Container>
  );
};

export default Terms;
