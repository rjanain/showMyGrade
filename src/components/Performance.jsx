import { Card, Container } from "react-bootstrap";
import { FaDeezer } from "react-icons/fa";
import MarkTable from "./Data/MarkTable";

function Performance() {
  
  return (
    <>
      <Container
        fluid
        className="p-3 bg-light d-flex flex justify-content-evenly align-items-center"
      >
        <Container className="p-5">
          <h1 className="header">Performence Report</h1>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>For {"<?= user_name  ?>"}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
            {"<?= user_roll  ?>"}
            </Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>

      <Container
        fluid
        className="p-3 d-flex flex justify-content-evenly align-items-center"
      >
          <Card>
            <Card.Header as={"h5"}>
             <FaDeezer size={"1.5rem"}/>{" "}Report Card
            </Card.Header>
            <Card.Body>
              <Card.Text>
              From the below table you can check your marks. If you notice any
            discrepency please submit a response throgh the google form by
            clicking here.
              </Card.Text>
              <hr/>
              <MarkTable/>
            </Card.Body>
          </Card>
      </Container>


    </>
  );
}

export default Performance;