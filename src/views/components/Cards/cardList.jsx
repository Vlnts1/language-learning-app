import React from 'react';
import { Card } from 'react-bootstrap';
import './card.css';
import { useSelector } from 'react-redux';
import './card.css';
import { WordCard } from './card';
export const CardList = () => {
  const { dictionary } = useSelector((state) => state);

  return (
    <>
      {dictionary.map((word, i) => (
        <WordCard word={word} index={i} />
      ))}
    </>
  );
};
