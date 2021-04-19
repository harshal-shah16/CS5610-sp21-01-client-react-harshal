require('dotenv').config()
const QUIZZES_URL = process.env.NODE_SERVER_URL;

const findAllQuizzes = () => {
   return fetch(QUIZZES_URL)
      .then(response => response.json())
}
const findQuizById = (qid) => {
   return fetch(`${QUIZZES_URL}/${qid}`)
      .then(response => response.json())
}


const findQuizAttemptById = (quizId) => {
   return fetch(`${QUIZZES_URL}/${quizId}/attempts`)
      .then(response => response.json())
}


const submitQuiz = (quizId, questions) => {
   fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
     method: 'POST',
     body: JSON.stringify(questions),
     headers: {
       'content-type': 'application/json'
     }
   }).then(response => response.json())
     .then(result => console.log(result))
  }
  

const api = {
   findAllQuizzes, findQuizById, submitQuiz, findQuizAttemptById
}
export default api;