import React, {useState} from "react";
import CourseRow from "./course-row";
import { Link } from "react-router-dom";


const Test = () => {
    const [m, n] = useState(false)
    return(<div>
            {  m && <span onClick={() => n(false)}>O</span>}
            { !m && <span onClick={() => n(true) }>P</span>}
        </div>)
        }
export default Test;