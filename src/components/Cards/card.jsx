import React from 'react';
import { Card } from 'react-bootstrap';
import './card.css';

const WordCard = ({ word, item }) => {
  return (
    <Card className="card" key={item}>
      <Card.Body>
        <Card.Title>{word.questionText}</Card.Title>
        <Card.Text>{word.questionTranslate}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export { WordCard };
