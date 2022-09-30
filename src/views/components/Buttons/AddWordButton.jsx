import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const AddNewWordButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <Form.Label>Word</Form.Label>
              <Form.Control type="text" placeholder="Enter word" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Translation</Form.Label>
              <Form.Control type="text" placeholder="Enter Translation" />
            </Form.Group>
            <div class="col-md-12 mt-2 text-center">
              <Button variant="primary" type="submit">
                Add word
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
