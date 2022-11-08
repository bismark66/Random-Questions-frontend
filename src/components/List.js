/** @format */

import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./List.css";

function List({ item, correctAnswer, selectedAns }) {
  return (
    <>
      <ListGroup.Item
        className="listitem"
        onClick={(e) => selectedAns(e)}
        as="li"
      >
        {item}
      </ListGroup.Item>
    </>
  );
}

export default List;
