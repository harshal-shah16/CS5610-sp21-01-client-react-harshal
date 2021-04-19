require('dotenv').config()
const QUIZZES_URL = process.env.REACT_APP_NODE_SERVER_URL;
const findQuestionsForQuiz = (qid) => {
   return fetch(`${QUIZZES_URL}/${qid}/questions`)
      .then(response => response.json())
}


const api = {
   findQuestionsForQuiz
}
export default api;