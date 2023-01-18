import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaComments, FaHiking, FaIdCard, FaMailBulk, FaUserAstronaut } from "react-icons/fa";

function Home() {

  return (
    <> 
      <Container
        fluid
        className="p-3 mb-3 bg-light d-flex flex justify-content-evenly align-items-center"
      >
        <Container className="p-5">
          <Row>
            <Col md={{ span: 6 }}>
            <h1>Show My Grade Server</h1>
            <p>
              This website has been developed to track your marks obtained in exams for the course MA1XX. Click on Mark to see your marks in all exam. 
            </p>
            </Col>
            
            <Col md={{ span: 4, offset: 2 }}>
            <Card >
            <Card.Body>
            <Card.Title>{"<?= user_roll  ?>"}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            {"<?= user_email  ?>"}
            </Card.Subtitle>
            </Card.Body>
              <Card.Body className="text-center">
              <Button variant="primary" href="/marks">Check Your Performance</Button>
              </Card.Body>
           </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className="p-3 bg-light"
      >
      <Container>
      <Row>
          <Col xl={3} sm={6} mb={3} className="mb-3">
          <Card className="bg-primary text-white o-hidden h-100">
            <Card.Header>User Name</Card.Header>
            <Card.Body>
              <div className="card-body-icon">
                <FaUserAstronaut />
              </div>
              <Card.Text>
              {"<?= user_name  ?>"}
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>

          <Col xl={3} sm={6} mb={3} className="mb-3">
          <Card className="bg-success text-white o-hidden h-100">
            <Card.Header>User Email</Card.Header>
            <Card.Body>
              <div className="card-body-icon">
                <FaMailBulk />
              </div>
              <Card.Text>
              {"<?= user_email  ?>"}
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>


          <Col xl={3} sm={6} mb={3} className="mb-3">
          <Card className="bg-warning text-white o-hidden h-100">
            <Card.Header>Roll No</Card.Header>
            <Card.Body>
              <div className="card-body-icon">
                <FaIdCard />
              </div>
              <Card.Text>
              {"<?= user_roll  ?>"}
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>



          <Col xl={3} sm={6} mb={3} className="mb-3">
          <Card className="bg-danger text-white o-hidden h-100">
            <Card.Header>Tutorial</Card.Header>
            <Card.Body>
              <div className="card-body-icon">
              <FaHiking />
              </div>
              <Card.Text>
              {"<?= user_tut  ?>"}
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>

          <Col xl={3} sm={6} mb={3} className="mb-3">
          <Card className="bg-dark text-white o-hidden h-100">
            <Card.Header>Division</Card.Header>
            <Card.Body>
              <div className="card-body-icon">
                <FaComments />
              </div>
              <Card.Text>
              {"<?= user_div  ?>"}
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          
        </Row>
      </Container>

      </Container>
    </>
  );
}

export default Home;