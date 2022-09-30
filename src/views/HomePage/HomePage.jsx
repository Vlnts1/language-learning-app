import React from "react";
import { AddNewWordButton } from "../components/Buttons/AddWordButton";
import { RepeatWordsButton } from "../components/Buttons/RepeatWordsButton";
import { WordCard } from "../components/Cards/card";

export const Home = () => {
  return (
    <>
      <div class="col-md-12 mt-2 text-center">
        <AddNewWordButton />
        <RepeatWordsButton />
      </div>
      <div>
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
        <WordCard />
      </div>
    </>
  );
};
