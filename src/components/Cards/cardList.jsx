import React from 'react';
import './card.css';
import { useSelector } from 'react-redux';
import './card.css';
import { WordCard } from './card';
export const CardList = () => {
  const { dictionary } = useSelector((state) => state);

  return (
    <>
      {dictionary.map((word, item) => (
        <WordCard key={item} word={word} />
      ))}
    </>
  );
};
