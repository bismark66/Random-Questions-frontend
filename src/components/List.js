/** @format */

import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Pagination from "react-bootstrap/Pagination";
import "./List.css";

function List({ item, correctAnswer, selectedAns }) {
  console.log(item);
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
