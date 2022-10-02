import React from 'react';
import { Card } from 'react-bootstrap';
import './card.css';

const WordCard = ({ word, i }) => {
  return (
    <Card className="card">
      <Card.Body key={i}>
        <Card.Title>{word.questionText}</Card.Title>
        <Card.Text>{word.questionTranslate}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export { WordCard };
