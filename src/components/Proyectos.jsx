import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Proyectos = () => {
  return (
    <section className="proyectos">
      <article className="container">
        <hr />
        <h1 className="about-title">Proyectos</h1>
        <div className="container">
          <Row xs={1} md={2} className="g-4">
              <Col>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
          </Row>
        </div>
      </article>
    </section>
  );
};

export default Proyectos;
