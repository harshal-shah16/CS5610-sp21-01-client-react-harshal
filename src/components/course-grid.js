import React, {useState} from 'react'
import {Link} from "react-router-dom";
import CourseCard from "./course-card";




const CourseGrid = ({courses, deleteCourse, updateCourse, addCourse}) => {

    const [title, setTitle] = useState("");

    const handleClick = async () => {
        
        console.log(title)
        
        if (title !== "") {
            await addCourse(title)
            console.log(title)
            setTitle("")
           
            }
    }

    
    


    return (
        <div>
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary title-bar">
        <div className="col-1">
          <i className="fa fa-bars fa-2x"></i>
        </div>
        <div className="col-2 d-none d-lg-block">
          <h4>Course Manager</h4>
        </div>
        
        <div className="col-7">
          <input
            className="new-course form-control course-title font-italic"
            placeholder="New Course title"              
            onChange={(e) => setTitle(e.target.value)}
            value={title}            
           
          />
         
        </div>
        <div className="col-2 px-2 py-2 text-left">
          <button className="btn btn-danger btn-circle btn-sm" type="submit">
            <i  onClick={handleClick} className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </nav>
    
        <Link to="/courses/table">
            <i className="fas fa-2x fa-list floating-grid-btn float-right"></i>
        </Link>
      
        <div className="row p-2">
        {
            courses.map(course =>
                <CourseCard 
                key={course._id}
                course={course} 
                updateCourse={updateCourse}
                deleteCourse={deleteCourse} />
            )
        }
        <button className="btn btn-danger btn-circle floating float-right mr-5" type="submit">
              <i onClick={handleClick} className="fa fa-plus btn-float" aria-hidden="true"></i>
        </button>
        </div>

    </div>
    )
}

export default CourseGrid