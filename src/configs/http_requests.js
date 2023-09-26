/** @format */
import axios from "axios";
//const axios = require("axios");
const url = "http://localhost:4000";

const getQuestions = () =>
  new Promise((success, fail) => {
    axios
      .get(`${url}/`)
      .then(function (res) {
        // console.log(res);
        success(res.data);
        // return res.data;
      })

      .catch(function (err) {
        fail(err);
      });
  });

const postQuestion = (allAboutQuestion) => {
  // console.log(allAboutQuestion);
  new Promise((success, fail) => {
    axios
      .post(`${url}/`, allAboutQuestion)
      .then(function (res) {
        // console.log(res);
        success(res.data);
      })
      .catch(function (err) {
        fail(err);
      });
  });
};
const deleteQuestion = (Question) => {
  // console.log(Question);
  new Promise((success, fail) => {
    axios
      .delete(`${url}/${Question}?`)
      .then(function (res) {
        // console.log("this is res", res);
        success(res.data);
      })
      .catch(function (err) {
        fail(err);
      });
  });
};

const HTTP_REQUESTS = { getQuestions, postQuestion, deleteQuestion };

export default HTTP_REQUESTS;
