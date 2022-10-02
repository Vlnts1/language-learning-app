import React from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './FinalScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { handleScoreChange } from '../../store/actions';

export const FinalScreen = () => {
  const { score, topScore } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    if (score > topScore) {
      dispatch(handleScoreChange(score));
    }
    dispatch(handleScoreChange(0));
  };
  return (
    <Container className="Container">
      <h3 className="score_header">Результати: {score} %</h3>
      <Button onClick={handleClick}>Назад до головної сторінки</Button>
    </Container>
  );
};
