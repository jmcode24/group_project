import React, { useState } from 'react';
import {Form, InputGroup, FormControl, Button, Container } from 'react-bootstrap';
import { MdOutlineTitle } from 'react-icons/md';
import { GrDocumentNotes } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid';
import { addNotesAction } from '../actions/actions';

function GroupForm() {
  const [title, setTitle] = useState("");
  const [words, setWords] = useState("");

  const dispatch = useDispatch()

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleNoteChange = (e) => {
    setWords(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newNote = {
      id: uuid(),
      title: title,
      words: words,
    };

    dispatch(addNotesAction(newNote));

    setTitle('');
    setWords('');

  }

  return (
    <>
      <Container>
        <h1 className="text-center">Note<span className="text-danger">pad</span></h1>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Title</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3"><MdOutlineTitle /></InputGroup.Text>
            <FormControl type="text" value={title} onChange={handleTitleChange} />
          </InputGroup>
          <Form.Label >Notes</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3"><GrDocumentNotes /></InputGroup.Text>
            <FormControl type="text" as="textarea" row={3} value={words} onChange={handleNoteChange} />
          </InputGroup>
          <Button type="submit" className="w-100">Add Notes</Button>
        </Form>
      </Container>
    </>
  );
};

export default GroupForm;