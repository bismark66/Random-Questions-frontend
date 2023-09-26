/** @format */
import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

const getQuestions = () =>
  new Promise((success, fail) => {
    axios
      .get(`${url}/`)
      .then(function (res) {
        success(res.data);
      })

      .catch(function (err) {
        fail(err);
      });
  });

const postQuestion = (allAboutQuestion) => {
  new Promise((success, fail) => {
    axios
      .post(`${url}/`, allAboutQuestion)
      .then(function (res) {
        success(res.data);
      })
      .catch(function (err) {
        fail(err);
      });
  });
};
const deleteQuestion = (Question) => {
  new Promise((success, fail) => {
    axios
      .delete(`${url}/${Question}?`)
      .then(function (res) {
        success(res.data);
      })
      .catch(function (err) {
        fail(err);
      });
  });
};

const HTTP_REQUESTS = { getQuestions, postQuestion, deleteQuestion };

export default HTTP_REQUESTS;
