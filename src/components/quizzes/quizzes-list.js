import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service"

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect( () => {
        // TODO: implement this in a separate service file
        //fetch("http://localhost:5000/api/quizzes")
        async function fetchData () {
            const response =  await quizService.findAllQuizzes()
            setQuizzes(response);
        } 
        fetchData();
            
    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <div>
                                <tr>
                                    <td>
                                        <Link
                                            to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                            className="list-group-item">
                                            {quiz.title}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}
                                            className="list-group-item">
                                            Attempt History
                                        </Link>
                                    </td>
                                </tr>
                            </div>


                        )
                    })
                }
            </div>

            
        </div>
    )
}

export default QuizzesList;