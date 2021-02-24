import React, {useState} from 'react'
import {Link} from "react-router-dom";


const CourseCard = ({course, deleteCourse, updateCourse}) => {

    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(course.title)
   
    
    const saveCourse = (course) => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }



return (
    <div>
        
        <div className="row">        {
        
                <div className="card m-5" style={{width: "18rem", margin: "15px"}}>
                    <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">
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
                            
                        </h5>
                        <p className="card-text">Course Description</p>
                        <Link to="/editor" className="btn btn-primary">
                            {course.title}
                        </Link>


            {
                editing &&
                <i onClick={() => deleteCourse(course)} className="fas fa-trash float-right p-1"></i>
            }
           

            {
                editing &&
                <i onClick={() => saveCourse(course)} className="fas fa-check float-right p-1"></i>
                
            }

          
            {
                !editing &&
                <i onClick={() => setEditing(true)} className="fas fa-edit float-right p-1"></i>
            }
                    </div>
                </div>
            
        }
        </div>

    </div>
    )

}

export default CourseCard