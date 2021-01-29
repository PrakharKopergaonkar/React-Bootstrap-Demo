import './App.css';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId="FormEmail">
                <Form.Label> Email Address </Form.Label>
                <Form.Control type="email" placeholder="Example@email.com"/>
                <Form.Text className="text-muted"> 
                  We will never share your email Address with anyone.
                </Form.Text> 
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId="FormPassword">
                <Form.Label> Password </Form.Label>
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="secondary" type="submit"> Login </Button>
        </Form>
        <Card className="mb-3" style={{color: "#000"}}>
          <Card.Img src="https://picsum.photos/400/100" />
          <Card.Body>
            <Card.Title> 
            Card Example
            </Card.Title>
            <Card.Text>
              This is an example of react bootstrap cards
            </Card.Text>
            <Button variant="primary"> Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item> Test1 </Breadcrumb.Item>
          <Breadcrumb.Item> Test2 </Breadcrumb.Item>
          <Breadcrumb.Item> Test3 </Breadcrumb.Item>  
        </Breadcrumb>      
        <Alert variant="success"> This is a Button</Alert>
        <Button> Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
