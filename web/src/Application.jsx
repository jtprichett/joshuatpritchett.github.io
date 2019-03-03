import React from 'react';
import { Container } from 'reactstrap';
import Title from './components/Title';
import './css/Application.css';

const Application = () => {
  return (
    <Container>
      <div className="Application">
        <Title />
      </div>
    </Container>
  );
};

export default Application;
