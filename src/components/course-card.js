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
  
    <div className="row">
      {
        <div className="card m-5" style={{ width: "18rem", margin: "15px" }}>
          <img
            src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {!editing &&
              <> 
              (
                 <Link to={`/courses/card/edit/${course._id}`}>
                  {course.title}
                 </Link>
              )

              </>
              }
              {editing && (
                <input
                  className="form-control"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              )}
            </h5>
            <p className="card-text">
                  <Link to={`/courses/${course._id}/quizzes`}>
                      Quizzes
                 </Link>
            </p>
            <Link
              className="btn btn-primary"
              to={{
                pathname: `/courses/card/edit/${course._id}`,
                state: {
                  title: title,
                },
              }}
            >
              {course.title}
            </Link>

            {editing && (
              <i
                onClick={() => deleteCourse(course)}
                className="fas fa-times fa-2x float-right p-1"
              ></i>
            )}

            {editing && (
              <i
                onClick={() => saveCourse(course)}
                className="fas fa-check fa-2x float-right p-1"
              ></i>
            )}

            {!editing && (
              <i
                onClick={() => setEditing(true)}
                className="fas fa-edit fa-2x float-right p-1"
              ></i>
            )}
          </div>
        </div>
      }
    </div>
  
);

}

export default CourseCard