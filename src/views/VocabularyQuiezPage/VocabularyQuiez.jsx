import React from "react";
import "./VocabularyQuiez.css";
import { Button, Card } from "react-bootstrap";

export const VocabularyQuiez = () => {
  return (
    <>
      <Card className="mt-5">
        <Card.Body>
          <div class="col-md-12 mt-2 text-center">
            <h2 className="main-header">Words 1</h2>
            <h3 className="word">Word</h3>
            <div className="d-flex flex-column">
              <Button className="button">Answer 1</Button>
              <Button className="button">Answer 2</Button>
              <Button className="button">Answer 3</Button>
              <Button className="button">Answer 4</Button>
            </div>
            <h6 className="score">Результат: 2/10</h6>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
