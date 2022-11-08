/** @format */

import React from "react";
import { Card } from "react-bootstrap";

function Questionslist(props) {
  const { Question, yourAnswer, answer, Date } = props;
  // console.log(answer);
  return (
    <div>
      <Card
        style={{ width: "18rem", margin: "0px 10px 5px 10px" }}
        className="mb-2"
        bg={yourAnswer == answer ? "success" : "danger"}
      >
        <Card.Header>{"Your Question at " + Date}</Card.Header>
        <Card.Body>
          <Card.Title>{props.question}</Card.Title>
          <Card.Text>{props.yourAnswer}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Questionslist;
