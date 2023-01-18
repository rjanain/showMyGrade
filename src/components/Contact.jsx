import { Container } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Container
        fluid
        className="p-3 d-flex flex justify-content-evenly align-items-center"
      >
        <Container className="p-5 mb-1 bg-light rounded-3">
          <h1 className="header">About</h1>
          <p>This CREB session has been developed for internal purpose</p>
        </Container>
      </Container>
    </>
  );
}

export default Contact;
