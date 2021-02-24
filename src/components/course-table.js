import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends
  React.Component {

    constructor(props) {
      super(props);
      this.state = {
        title: ""
      };
      this.handleClick = this.handleClick.bind(this);
    }
    
   async handleClick() {
      
      if (this.state.title !== "") {
      await this.props.addCourse(this.state.title)
      //console.log(this.state.title)
      this.setState({title:""})
      //console.log(this.state.title)
      }
    }
  

  render() {
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
              onChange={(e) => this.setState({ title: e.target.value })}
              value={this.state.title}
            />
          </div>
          <div className="col-2 px-2 py-2 text-left">
            <button className="btn btn-danger btn-circle btn-sm" type="submit">
              <i
                onClick={this.handleClick}
                className="fa fa-plus"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </nav>
        {/* <div className="row border border-secondary px-2 py-2 header position-static">
          <div className="col-4 d-none d-sm-block text-center">
            <h5 className="font-weight-bold">Title</h5>
          </div>
          <div className="col-6 d-block d-sm-none">
            <h5 className="font-weight-bold">Title</h5>
          </div>
          <div className="col-2 d-none d-sm-block">
            <span className="font-weight-bold">Owned By</span>
            <span>
              <i className="fa fa-sort-down"></i>
            </span>
          </div>
          <div className="col-2 d-none d-lg-block text-center">
            <p className="font-weight-bold">Last Modified</p>
          </div>
          <div className="col-3 d-none d-sm-block text-center">
            <i className="fa fa-sort"></i>
          </div>
          <div className="col-4 d-block text-center d-sm-none">
            
          </div>
          <div className="col-1"></div>
        </div> */}

        <table className="table m-3 p-3 table-hover table-striped">
          <thead>
            <tr>
            <th scope="col">
              <h5>Title</h5>
            </th>
            <th scope="col" className="text-center d-none d-md-block">
              <h5>Owned By</h5>
            </th>
            <th scope="col" className="text-center d-none d-lg-block">
              <h5>Last Modified</h5>
            </th>
            <th scope="col" className="text-center">
              <i class="fas fa-folder-open fa-2x mr-3"></i>
              <i className="fa fa-sort fa-2x mr-3"></i>
              <Link to="/courses/grid">
                <i className="fas fa-th fa-2x"></i>
              </Link>
            </th>
            </tr>
          </thead>
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
        <button
          className="btn btn-danger btn-circle floating float-right mr-5"
          type="submit"
        >
          <i
            onClick={this.handleClick}
            className="fa fa-plus btn-float"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    );
  }
}