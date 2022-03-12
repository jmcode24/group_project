import React, { useState } from 'react';
import {Form, InputGroup, FormControl, Button, Container} from 'react-bootstrap';
import { MdOutlineTitle } from 'react-icons/md';
import { GrDocumentNotes } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid';
import { addNotesAction } from '../actions/actions';

function GroupForm() {
  const [title, setTitle] = useState("");
  const [words, setWords] = useState("");
  // const [emptyfields, setEmptyFields] = useState(false)

  const dispatch = useDispatch()

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleNoteChange = (e) => {
    setWords(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!title.trim() || !words.trim()) {
    //   setEmptyFields(true)
    //   return emptyfields ? <Alert variant='warning'>Please fill in the blanks</Alert>:setEmptyFields(false)
    // }
    let newNote = {
      id: uuid(),
      title: title,
      words: words,
      date: new Date(),
    };

    dispatch(addNotesAction(newNote));

    setTitle('');
    setWords('');

  }

  return (
    <>
      <Container>
        <h1 className="text-center">Notepad</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Title</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3"><MdOutlineTitle /></InputGroup.Text>
            <FormControl type="text" required value={title} placeholder="a title" onChange={handleTitleChange} />
          </InputGroup>
          <Form.Label >Notes</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3"><GrDocumentNotes /></InputGroup.Text>
            <FormControl type="text" required as="textarea" row={4} placeholder="write notes here" value={words} onChange={handleNoteChange} />
          </InputGroup>
          <Button type="submit" className="w-100">Add Notes</Button>
        </Form>
      </Container>
    </>
  );
};

export default GroupForm;