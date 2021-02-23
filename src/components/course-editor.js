import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history,name}) =>
  <h1>
      
      <Link to="/courses/table">
        <i className="fas fa-arrow-left"></i>
      </Link>
      Course Editor {name}
      <i className="fas fa-times float-right"
         onClick={() => history.goBack()}></i>
  </h1>

export default CourseEditor