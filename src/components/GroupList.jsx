import React from "react";
import Group from "./Group";
import { connect } from "react-redux";
import { Container, Row} from 'react-bootstrap';

class GroupList extends React.Component {
  render() {
    const notes = this.props.notes;

    return (
      <Container>
        <Row className="mt-3 mb-2">
          <h3 className="text-center text-secondary">{notes.length ? 'Notes Added' : ''}</h3>
          {this.props.notes.map((note, index) => {
            return <Group key={note.id} note={note} index={index} />;
          })}
        </Row>
      </Container>
    );
  }
}
const sendDataAsProps = (state) => {
  return { notes: state.notes };
};

export default connect(sendDataAsProps)(GroupList);
