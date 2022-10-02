import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const RepeatWordsButton = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/test');
  };
  return (
    <>
      <Button variant="primary" className="m-3" type="submit" onClick={handleSubmit}>
        Повторити слова
      </Button>
    </>
  );
};
