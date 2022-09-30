import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { TextField } from "../NumOfWordsComp/TextField";

export const RepeatWordsButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" className="m-3" onClick={handleShow}>
        Повторити слова
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Обрати кількість слів</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField />
          <Modal.Footer>
            <div class="col-md-12 text-center">
              <Button variant="primary" type="submit">
                Get Started
              </Button>
            </div>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};
