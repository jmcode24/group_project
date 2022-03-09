import React from 'react';
import { Card } from "react-bootstrap";


const Group = (props) => {
  const note = props.note;
  const index = props.index

  return (
    <>
    <h1>Notes Here</h1>
    <Card style={{ width: '18rem' }}>
    <Card.Body key={index}>
      <Card.Title>{note.title}</Card.Title>
      <Card.Text>{note.words}</Card.Text>
    </Card.Body>
  </Card>
    </>
  );
}

export default Group;