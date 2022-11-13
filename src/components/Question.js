/** @format */

import React from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import List from "./List";
import "./Question.css";
//import ListGroup from "react-bootstrap/ListGroup";

function Question({
  correctAnswer,
  answers,
  question,
  handleShow,
  handleClose,
  show,
  handleSave,
  selectedAns,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton={handleClose}>
          <Modal.Title>Random Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modalQuestion">{question}</p>
          <ListGroup as="ol">
            {answers.map((element) => {
              return (
                <List
                  correctAnswer={correctAnswer}
                  selectedAns={(e) => selectedAns(e)}
                  item={element}
                />
              );
            })}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Question;
