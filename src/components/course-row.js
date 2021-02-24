import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
  {
    course,
    lastModified="1/1/2021",
    owner="who knows?",
      deleteCourse,
      updateCourse
  }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return(
        <tr>
        <th scope="row" style={{"width": "40%"}}>
            {
                !editing &&
                <Link to="/editor">
                    {course.title}
                </Link>
            }
            {
                editing &&
                <input
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}/>
            }
        </th>
        <td  className="text-center d-none d-md-block" style={{"width": "20%"}}>{course.owner}</td>
        <td  className="text-center d-none d-lg-block" style={{"width": "20%", "text-align":"right"}}>{course.lastModified}</td>
        <td  className="text-center" style={{"width": "20%"}}>
            
            {
                editing &&
                <i onClick={() => saveCourse()} className="fas fa-check fa-2x mr-2"></i>
            }

            {
                editing &&
               <i onClick={() => deleteCourse(course)} className="fas fa-times fa-2x"></i>

            }

            {
                !editing &&
                <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x"></i>
            }


        </td>
    </tr>)
}

export default CourseRow