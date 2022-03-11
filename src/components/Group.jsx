import React, { useState } from "react";
import {
  Card,
  Button,
  Modal,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteNotesAction, editNotesAction } from "../actions/actions";
import { MdOutlineTitle } from "react-icons/md";
import { GrDocumentNotes } from "react-icons/gr";

const Group = (props) => {
  const note = props.note;
  const index = props.index;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNotesAction(note.id));
  };

  const [title, setTitle] = useState(note.title);
  const [words, setWords] = useState(note.words);
  const [isShowing, setIsShowing] = useState(false);

  const handleSubmit = () => {
    let noteData = {
      id: note.id,
      title: title,
      words: words,
    };

    dispatch(editNotesAction(note.id, noteData));

    handleClose();
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return (
    <>
      <Card style={{ width: "15rem" }} className="mx-auto mb-2">
        <Card.Body key={index}>
          <Card.Subtitle className="mb-2 text-muted">
            <span className="fw-bold">Note #: </span><span className="text-info"> {index + 1}</span>
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            <span className="fw-bold text-center">Date added</span> <br/><span className="text-warning"> {note.date.toLocaleString()}</span>
          </Card.Subtitle>
          <Card.Title className="mb-1 p-1 text-dark">
            <span className="fw-bold">Note Title </span> <br/> <span className="text-success fst-italic p-2 h6 fw-bold"><u>{note.title}</u></span>
          </Card.Title>
          <Card.Text className="mb-4">{note.words}</Card.Text>
          <div className="d-flex justify-content-between bg-secondary p-2">
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="info" onClick={() => setIsShowing(true)}>Edit</Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              <MdOutlineTitle />
            </InputGroup.Text>
            <FormControl
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputGroup>
          <Form.Label>Notes</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              <GrDocumentNotes />
            </InputGroup.Text>
            <FormControl
              type="text"
              as="textarea"
              row={4}
              value={words}
              onChange={(e) => setWords(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Group;
