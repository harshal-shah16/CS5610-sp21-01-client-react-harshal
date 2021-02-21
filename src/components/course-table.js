import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends
  React.Component {

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-primary title-bar">
          <div class="col-1">
            <i class="fa fa-bars fa-2x"></i>
          </div>
          <div class="col-3 d-none d-sm-flex">
            <h4>Course Manager</h4>
          </div>
          <div class="col-5">
            <input
              class="form-control course-title font-italic"
              placeholder="New Course title"
            />
          </div>
          <div class="col-2 px-2 py-2 text-left">
            <button class="btn btn-danger btn-circle btn-sm" type="submit">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </nav>
        <div class="row border border-secondary px-2 py-2 header position-static">
            <div class="col-4 d-none d-sm-block text-center">
                <h5 class="font-weight-bold">Title</h5>
            </div>
            <div class="col-6 d-block d-sm-none text-center">
                <h5 class="font-weight-bold">Title</h5>
            </div>
            <div class="col-3 d-none d-sm-block text-center">
                <span class="font-weight-bold">Owned By</span>
                <span><i class="fa fa-sort-down"></i></span>
            </div>
            <div class="col-2 d-none d-sm-block text-center">
                <p class="font-weight-bold">Last Modified</p>
            </div>
            <div class="col-3 d-none d-sm-block text-center">
                <i class="fa fa-sort"></i>
            </div>
            <div class="col-6 d-block text-center d-sm-none">
                <i class="fa fa-sort"></i>
            </div>
        </div>
        <Link to="/courses/grid">
          <i className="fas fa-th float-right fa-2x"></i>
        </Link>
        <h2>Course Table</h2>
        <table className="table">
          <thead></thead>
          <tbody>
            {this.props.courses.map((course) => (
              <CourseRow
                key={course._id}
                deleteCourse={this.props.deleteCourse}
                updateCourse={this.props.updateCourse}
                course={course}
                title={course.title}
                lastModified={course.lastModified}
                owner={course.owner}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}