import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";

const WordCard = () => {
  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>Слово</Card.Title>
        <Card.Text>Переклад</Card.Text>
      </Card.Body>
    </Card>
  );
};

export { WordCard };
