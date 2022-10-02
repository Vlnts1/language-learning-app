import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { handleAddNewWordChange } from '../../../store/actions';

export const AddNewWordButton = () => {
  const { dictionary } = useSelector((state) => state);
  console.log(dictionary);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleTranslationChange = (e) => {
    setTranslation(e.target.value);
  };

  const handleAddNewWordSubmit = () => {
    dispatch(
      handleAddNewWordChange({
        questionText: word,
        questionTranslate: translation
      })
    );

    setWord('');
    setTranslation('');
  };

  return (
    <>
      <Button variant="primary" className="m-3" onClick={handleShow}>
        Добавити новe слово
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Додати нове слово</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Слово</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter word"
                value={word}
                onChange={(e) => handleWordChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Переклад</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Translation"
                value={translation}
                onChange={(e) => handleTranslationChange(e)}
              />
            </Form.Group>
            <div class="col-md-12 mt-2 text-center">
              <Button variant="primary" type="submit" onClick={handleAddNewWordSubmit}>
                Додати слово
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
