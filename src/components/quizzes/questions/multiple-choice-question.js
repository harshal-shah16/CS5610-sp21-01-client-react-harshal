import React, {useState, useEffect} from "react";

const MultipleChoiceQuestion = ({question, submitted}) => {


    
    const [answer, setAnswer] = useState();
    const [grade, setGrade] = useState(false);
    const [correct, setCorrect] = useState(false)
    // const handleGrade = () => {
    //     setGrade(true);
    //     if (answer === question.correct) {
    //         setCorrect(true)
    //     }
    //     else{
    //         setCorrect(false)
    //     }        
    // }
    useEffect(() => {
        if (submitted) {
            setGrade(true);
            if (answer === question.correct) {
                       setCorrect(true)
                     }
            else {
                        setCorrect(false)
            }      
        }},
    [submitted]);
    
    const handleClick = (choice) => {
        setAnswer(choice);
        question.answer = choice;
        setGrade(false);
        if (answer === question.correct) {
            
            setCorrect(true)
        }
        else{
            setCorrect(false)
        }
        
        
    }

    
    return(
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
            <ul className="list-group">
            {
            
                question.choices.map((choice, index) => {
                    return(
                        <li key={index} className={"list-group-item " + (grade? (correct? (answer === choice? "list-group-item-success":""):  (choice === answer? "list-group-item-danger": choice === question.correct? "list-group-item-success":"") ): "")}>
                            <div>
                                <label>
                                    <input 
                                        className = "m-2" 
                                        type="radio"
                                        onClick={() => {
                                            //setAnswer(choice, () => handleClick)
                                            // setAnswer(choice);
                                            handleClick(choice);
                                        }}
                                        name={question._id}/>
                                    {choice} 
                                    {   grade && choice === question.correct  &&
                                        <i className="fas fa-check ml-2"></i>
                                        
                                    }
                                    {   
                                        grade && choice === answer && choice !== question.correct &&
                                        <i className="fas fa-times ml-2"></i>
                                        
                                    }
                                </label>
                            </div>
                        </li>
                     
                    )
                })
                
               
            }
             
            </ul>
            <br/>  
            <h4>Your Answer:  {JSON.stringify(answer)}</h4>
            {/* <button type="button" onClick={handleGrade}>Grade</button> */}
            
        </div>
    )
}

export default MultipleChoiceQuestion;