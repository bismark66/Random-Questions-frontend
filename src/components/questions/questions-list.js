/** @format */

import React from "react";
import { Card } from "react-bootstrap";

function Questionslist({ question, yourAnswer, answer, Date, handleDelete }) {
  // console.log("Question list has been called");
  return (
    <div>
      <Card
        style={{ width: "18rem", margin: "0px 10px 5px 10px" }}
        className="mb-2"
        bg={yourAnswer == answer ? "success" : "danger"}
      >
        <Card.Header>{"Your Question at " + Date}</Card.Header>
        <Card.Body>
          <Card.Title>{question}</Card.Title>
          <Card.Text>{yourAnswer}</Card.Text>
        </Card.Body>
        <Card.Link
          href="#"
          onClick={() => handleDelete(question)}
          style={{ textDecoration: "none", color: "#fff" }}
        >
          DELETE
        </Card.Link>
      </Card>
    </div>
  );
}

export default Questionslist;
