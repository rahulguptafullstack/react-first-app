import React from 'react';
import { Form,Col,Button, Container, Row } from 'react-bootstrap';

export class ContactUs extends React.Component {
    render() {
      return (
        <div className="fluid"> 
        <h3>Contact Us</h3>
        <Container>
          <Row>
            <Form>
            <Form.Group controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Name" />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Subject</Form.Label>
                <Form.Control placeholder="Subject" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Message</Form.Label>
                <Form.Control placeholder="Message" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select">
                    <option>Choose State</option>
                    <option>Rajasthan</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </Row>
          </Container>
      </div>
      );
    }
}