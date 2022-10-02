import React, { useState } from 'react';
import './VocabularyQuiez.css';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleScoreChange } from '../../store/actions';

export const VocabularyQuiez = () => {
  const { dictionary, score } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [questionIndex, setQuestionIndex] = useState(0);

  const handleClick = (correctAnswer) => {
    if (questionIndex < 9) {
      if (correctAnswer) {
        dispatch(handleScoreChange(10));
      }

      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      if (correctAnswer) {
        dispatch(handleScoreChange(10));
      }
      navigate('/score');
    }
  };

  return (
    <>
      <Card className="mt-5">
        <Card.Body>
          <div className="col-md-12 mt-2 text-center">
            <h3 className="word">{dictionary[questionIndex].questionText}</h3>
            {dictionary[questionIndex].answers.map((answer, i) => (
              <div className="d-flex flex-column">
                <Button className="button" onClick={() => handleClick(answer.correctAnswer)}>
                  {answer.answerText}
                </Button>
              </div>
            ))}
            <h6 className="main-header">
              Word <span>{questionIndex + 1}</span>
            </h6>
            <h6 className="score">Результат:{score}%</h6>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
