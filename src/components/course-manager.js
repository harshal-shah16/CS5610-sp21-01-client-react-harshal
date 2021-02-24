import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

export default class CourseManager
  extends React.Component {
  state = {
    courses: []
  }

  componentDidMount() {
    courseService.findAllCourses()
        .then(courses => this.setState({courses}))
        
  }

  updateCourse = (course) => {
    courseService.updateCourse(course._id, course)
        .then(status => {
            this.setState((prevState) => {
                let nextState = {...prevState}
                nextState.courses = prevState.courses.map(c => {
                    if(c._id === course._id) {
                        return course
                    } else {
                        return c
                    }
                })
                return nextState
            })
        })
  }

  deleteCourse = (course) => {
    
    courseService.deleteCourse(course._id)
        .then(status => {
          this.setState((prevState) => ({
            courses: prevState.courses.filter(c => c._id !== course._id)
          }))
        })
  }

  addCourse = (newCourseTitle) => {
   
    
    const newCourse = {
      title: newCourseTitle,
      owner: "me",
      lastModified: "2/10/2021"
    }
    courseService.createCourse(newCourse)
        .then(actualCourse => {
          this.state.courses.push(actualCourse)
          this.setState(this.state)
        })
  }

  render() {
    return(
      <div>
       
        <Route path="/courses/table" exact={true} >
          <CourseTable
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              addCourse={this.addCourse}
              courses={this.state.courses}/>
        </Route>
        
        <Route path="/courses/grid" exact={true} >
          <CourseGrid 
          updateCourse={this.updateCourse}
          deleteCourse={this.deleteCourse}
          addCourse={this.addCourse}
          courses={this.state.courses}/>
        </Route>
    
      </div>
    )
  }
}
