/** @format */

import React from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import List from "./List";
import "./Question.css";

function Question(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton={props.handleClose}>
          <Modal.Title>Random Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modalQuestion">{props.question}</p>
          <ListGroup as="ol">
            {props.answers.map((element) => {
              return (
                <List
                  correctAnswer={props.correctAnswer}
                  selectedAns={(e) => props.selectedAns(e)}
                  item={element}
                />
              );
            })}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => props.handleSave()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Question;
