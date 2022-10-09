import React from 'react';
import { AddNewForm } from '../../components/Buttons/AddNewForm';
import { CardList } from '../../components/Cards/cardList';
import { RepeatWordsButton } from '../../components/Buttons/RepeatWordsButton';

export const Home = () => {
  return (
    <>
      <div className="col-md-12 mt-2 text-center">
        <AddNewForm />
        <RepeatWordsButton />
      </div>
      <>
        <CardList />
      </>
    </>
  );
};
