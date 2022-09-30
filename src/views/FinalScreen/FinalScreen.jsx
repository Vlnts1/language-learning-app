import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./FinalScreen.css";

export const FinalScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <Container className="Container">
      <h3 className="score_header">Результати: 3</h3>
      <Button onClick={handleClick}>Назад до головної сторінки</Button>
    </Container>
  );
};
