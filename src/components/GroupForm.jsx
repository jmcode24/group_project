import React, { useState } from 'react';
import {Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { MdOutlineTitle } from 'react-icons/md';
import { GrDocumentNotes } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid';
import { addNotesAction } from '../actions/actions';

function GroupForm() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const dispatch = useDispatch()

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newNote = {
      id: uuid(),
      title: title,
      note: note,
    };

    dispatch(addNotesAction(newNote));

    setTitle('');
    setNote('');

  }

  return (
    <>
      <h1>Note Form</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Label htmlFor="basic-url">Title</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3"><MdOutlineTitle /></InputGroup.Text>
        <FormControl id="basic-url" aria-describedby="basic-addon3" value={title} onChange={handleTitleChange} />
      </InputGroup>
      <Form.Label htmlFor="basic-url">Notes</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3"><GrDocumentNotes /></InputGroup.Text>
        <FormControl as="textarea" row={3} aria-describedby="basic-addon3" value={note} onChange={handleNoteChange} />
      </InputGroup>
      <Button className="w-100">Add Notes</Button>
      </Form>
    </>
  );
};

export default GroupForm;