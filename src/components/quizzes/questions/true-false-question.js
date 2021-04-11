import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState();
    const [grade, setGrade] = useState(false);
    const [correct, setCorrect] = useState(false)
    const handleGrade = () => {
        setGrade(true);
        if (answer === question.correct) {
            setCorrect(true)
        }
        else{
            setCorrect(false)
        }        
    }

    const handleClick = () => {
        setGrade(false);
        if (answer === question.correct) {
            setCorrect(true)
        }
        else{
            setCorrect(false)
        }
    }

    return (
        <div>
            
            <h4>
                {question.question}
                {   grade && correct  &&
                    <i className="fas fa-check ml-2"></i>
                    
                }
                {   
                    grade && !correct &&
                    <i className="fas fa-times ml-2"></i>
                    
                }
            </h4>
            <br/>
           
            <br/>
            <ul className="list-group">
            <li className={"list-group-item " + (grade? (correct? (answer === "true"? "list-group-item-success":""):  (answer === "true"? "list-group-item-danger":"list-group-item-success") ): "")}>
                <label><input
                    type="radio"
                    onClick={() => {
                        setAnswer("true");
                        handleClick();
                    }}
                    name={question._id}/>True
                    {   grade &&  "true" === question.correct  &&
                                        <i className="fas fa-check ml-2"></i>
                                        
                    }

                    {   grade && "true" === answer && "true" !== question.correct  &&
                                        <i className="fas fa-times ml-2"></i>
                                        
                    }
                </label>
               
            </li>
            <li className={"list-group-item " + (grade? (correct? (answer === "false"? "list-group-item-success":""):  (answer === "false"? "list-group-item-danger":"list-group-item-success") ): "")}>
                <br/>
                <label><input
                    type="radio"
                    onClick={() => {
                        setAnswer("false");
                        handleClick();

                    }}
                    name={question._id}/>False
                    {   grade && "false" === question.correct  &&
                                        <i className="fas fa-check ml-2"></i>
                                        
                    }

                    {   grade && "false" === answer && "false" !== question.correct  &&
                                        <i className="fas fa-times ml-2"></i>
                                        
                    }
                </label>
            </li>
            </ul>
            <br/>  
            <h4>Your Answer:  {JSON.stringify(answer)}</h4>
            <button type="button" onClick={handleGrade}>Grade</button>
        </div>
    )
}

export default TrueFalseQuestion;