import React, {useState, useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom'

import Question from "./questions/question";
import questionService from "../../services/question-service"
import quizService from "../../services/quiz-service"

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    useEffect(() => {
        // TODO: move this to a service file
        async function fetchData () {
            const response =  await questionService.findQuestionsForQuiz(quizId)
            setQuestions(response);
        } 
        fetchData();
        },[])
    
    const history = useHistory();
    const handleSubmit = async () => {
        setSubmitted(true);
        const response = await quizService.submitQuiz(quizId, questions);
        //history.push(`/courses/${courseId}/quizzes`)
    } 

    return(
        <div>
            <h2 className="m-1 p-1">Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                    <li key={question._id} className="mb-5">
                        <Question question={question} submitted={submitted}/>
                    </li>
                    )
                }
                <button type="button" onClick={handleSubmit}>Submit</button>
            </ul>
            
        </div>
    );
}

export default Quiz;