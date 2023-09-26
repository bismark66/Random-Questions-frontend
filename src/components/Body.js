/** @format */
import React, { useEffect, useState } from "react";
import http_requests from "../configs/http_requests";
//import getQuestions from "../configs/http_requests";
import NavBar from "./Nav";
import Question from "./Question";
import Questionslist from "./questions/questions-list";
import "./Body.css";

function Body() {
  const url = process.env.REACT_APP_EXTERNAL_API_URL;

  const [questionBank, setQuestionBank] = useState([]);
  const [deleteState, setDeleteState] = useState(false);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState({
    ques: "",
    ans: [],
    level: "",
    correctans: "",
  });

  const [postResponse, setPostResponse] = useState({
    Question: "",
    Answer: "",
    yourAnswer: "",
  });

  const handleShow = () => setShow(true);
  const { ques, ans, level, correctans } = query;

  function getLevel(e) {
    e
      ? setQuery((query) => ({
          ...query,
          level: e,
        }))
      : setQuery((query) => ({
          ...query,
          level: "easy",
        }));
    // console.log(question.level);
    return query.level;
  }

  function reShuffle(items) {
    for (let i = items.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let k = items[i];
      items[i] = items[j];
      items[j] = k;
    }
    return items;
  }

  const handleSave = async () => {
    http_requests.postQuestion(postResponse);
    setShow(false);
  };

  useEffect(() => {
    getQuestions();
    async function fetchQuestion() {
      const response = await fetch(url + getLevel());
      const jsonResponse = await response.json();

      const { correctAnswer, question, incorrectAnswers } = jsonResponse[0];

      let answerArray = [];
      answerArray.push(incorrectAnswers, correctAnswer);
      answerArray = [].concat(answerArray[0], answerArray[1]);
      // console.log(answerArray);

      reShuffle(answerArray);

      // console.log(answerArray);
      let updateSetQuery = {};

      updateSetQuery = {
        ques: question,
        ans: answerArray,
        correctans: correctAnswer,
      };

      setQuery((query) => ({
        ...query,
        ...updateSetQuery,
      }));
    }

    fetchQuestion();
    getLevel();
  }, [show]);

  const getQuestions = async () => {
    let results = await http_requests.getQuestions();
    setQuestionBank(results);
  };

  useEffect(() => {
    getQuestions();

    setDeleteState(false);
  }, [deleteState]);

  const handleDelete = async (Question) => {
    await http_requests.deleteQuestion(Question);
    setDeleteState(true);
  };

  function selectedAns(e) {
    let clickedAnswer = e.target;
    let yourChosenAnswer = e.target.textContent;

    let updatePostResonse = {};
    updatePostResonse = {
      Question: ques,
      yourAnswer: yourChosenAnswer,
      Answer: correctans,
    };

    setPostResponse((postResponse) => ({
      ...postResponse,
      ...updatePostResonse,
    }));

    if (clickedAnswer.innerText == correctans) {
      clickedAnswer.style.cssText += "background-color:green;color:white";
    } else {
      clickedAnswer.style.cssText += "background-color:red;color:white";

      let parentchildren = clickedAnswer.parentElement.children;

      Object.entries(parentchildren).map(([child, value]) => {
        if (value.innerText == correctans) {
          value.style.cssText += "color:white;background-color:green";
        }
      });
    }
  }

  return (
    <div>
      <NavBar alterShow={() => setShow(true)} getLevel={getLevel} />
      <hr />
      <Question
        correctAnswer={correctans}
        show={show}
        question={ques}
        answers={ans}
        handleClose={() => setShow(false)}
        handleShow={handleShow}
        handleSave={handleSave}
        selectedAns={selectedAns}
      />
      <div className="questionBankBox">
        {questionBank.map((question) => {
          return (
            <Questionslist
              yourAnswer={question.yourAnswer}
              answer={question.Answer}
              question={question.Question}
              Date={question.Date}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
