import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quiz-service"

const AttemptHistory = () => {
    const {courseId, quizId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect( () => {
        
        async function fetchData () {
            const response =  await quizService.findQuizAttemptById(quizId)
            setQuizzes(response);
           
        } 
        fetchData();
            
    }, [])

    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                        <table>
                                <tbody>
                                <tr>
                                    <th>Attempt</th>
                                    <th>Score</th>
                                </tr>


                {
                    quizzes.map((quiz,index) => {
                        return(
                            
                                    
                                
                                    <tr key={quiz._id}>
                                            <td>                                        
                                                {index + 1}
                                            </td>
                                           
                                            <td>
                                                {quiz.score.toFixed(0)}
                                            </td>
                                    </tr>
                              


                        )
                    })
                }
                  </tbody>
                            </table>
            </div>

            
        </div>
    )
}

export default AttemptHistory;