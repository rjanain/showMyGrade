import { Container } from "react-bootstrap";
function Response() {
  return (
    <>
      <Container
        fluid
        className="p-3 d-flex flex justify-content-evenly align-items-center"
      >
        <Container className="p-5 mb-1 bg-light rounded-3">
          <h1 className="header">Grader Response</h1>
          <p>You can check grader response in the below table, if any.</p>
        </Container>
      </Container>
    </>
  );
}

export default Response;
