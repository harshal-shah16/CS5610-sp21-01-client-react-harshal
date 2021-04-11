import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        // TODO: move this to a service file
        fetch(`http://localhost:5000/api/quizzes/${quizId}/questions`)
            .then(response => response.json())
            .then(questions => setQuestions(questions))
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