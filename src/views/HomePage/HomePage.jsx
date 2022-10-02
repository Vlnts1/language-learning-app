import React from 'react';
import { AddNewWordButton } from '../components/Buttons/AddWordButton';
import { RepeatWordsButton } from '../components/Buttons/RepeatWordsButton';
import { CardList } from '../components/Cards/cardList';

export const Home = () => {
  return (
    <>
      <div className="col-md-12 mt-2 text-center">
        <AddNewWordButton />
        <RepeatWordsButton />
      </div>
      <>
        <CardList />
      </>
    </>
  );
};
