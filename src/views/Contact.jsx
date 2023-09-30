import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
        <Form className="p-4">
            <Form.Group className="mb-3">
              <Form.Label>¿Te podemos ayudar en algo?</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <Button variant="primary" type="submit">
              Enviar
            </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
