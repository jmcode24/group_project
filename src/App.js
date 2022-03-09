import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import GroupForm from './components/GroupForm';
import GroupList from './components/GroupList';

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md='4'> <GroupForm /> </Col>
          <Col md='8'> <GroupList /> </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
