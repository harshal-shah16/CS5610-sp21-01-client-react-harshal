import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionService from "../../services/question-service"

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        // TODO: move this to a service file
        async function fetchData () {
            const response =  await questionService.findQuestionsForQuiz(quizId)
            setQuestions(response);
        } 
        fetchData();
        },[])

    return(
        <div>
            <h2 className="m-1 p-1">Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                    <li key={question._id} className="mb-5">
                        <Question question={question}/>
                    </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Quiz;