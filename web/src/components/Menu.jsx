import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import '../css/Menu.css';

const Menu = () => {
  return (
    <ListGroup>
      <ListGroupItem>
        <a href="https://github.com/JoshuaTPritchett/website"> code </a>
      </ListGroupItem>
      <ListGroupItem>
        <a href="mailto:jpritchett757@gmail.com"> contact </a>
      </ListGroupItem>
    </ListGroup>
  );
};

export default Menu;
