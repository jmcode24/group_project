import React, { useState } from 'react';
import {Form, InputGroup, FormControl, Button, Container, Alert} from 'react-bootstrap';
import { MdOutlineTitle } from 'react-icons/md';
import { GrDocumentNotes } from 'react-icons/gr';
import { RiEmotionUnhappyLine, RiEmotionHappyLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid';
import { addNotesAction } from '../actions/actions';

function GroupForm() {
  const [title, setTitle] = useState("");
  const [words, setWords] = useState("");
  const [emptyInputs, setEmptyInputs] = useState(false);
  const [noEmptyInputs, setNoEmptyInputs] = useState(false);
  
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleNoteChange = (e) => {
    setWords(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!title || !words) {
      setEmptyInputs(true);
      setTimeout(() => {
        setEmptyInputs(false);
      }, 3000);
    } else {
      let newNote = {
        id: uuid(),
        title: title,
        words: words,
        date: new Date(),
      };

      setNoEmptyInputs(true);
      setTimeout(() => {
        setNoEmptyInputs(false);
      }, 3000);
  
      dispatch(addNotesAction(newNote));
    }

    setTitle('');
    setWords('');

  }

  return (
    <>
      <Container>
        <h1 className="text-center">Notepad</h1>
        {!emptyInputs ? '' : <Alert variant='danger'><RiEmotionUnhappyLine/> Please fill out all fields</Alert> }
        {!noEmptyInputs ? '' : <Alert variant='success'><RiEmotionHappyLine/> Note successfully added</Alert> }
        <Form onSubmit={handleSubmit}>
          <Form.Label>Title</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3"><MdOutlineTitle /></InputGroup.Text>
            <FormControl type="text"  value={title} placeholder="a title" onChange={handleTitleChange} />
          </InputGroup>
          <Form.Label >Note</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3"><GrDocumentNotes /></InputGroup.Text>
            <FormControl type="text"  as="textarea" row={4} placeholder="write notes here" value={words} onChange={handleNoteChange} />
          </InputGroup>
          <Button type="submit" className="w-100">Add Note</Button>
        </Form>
      </Container>
    </>
  );
};

export default GroupForm;