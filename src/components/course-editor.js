import React from "react";
import { Link } from "react-router-dom";
import CourseRow from "./course-row";

const CourseEditor = ({ history, name }) => (
  <div className="container-fluid">
    <h1>
      <Link to="/courses/table">
        <i className="fas fa-arrow-left"></i>
      </Link>
      Course Editor
      <i
        className="fas fa-times float-right"
        onClick={() => history.goBack()}
      ></i>
    </h1>

    <div className="row bg-gradient bg-secondary px-2 py-2">
      <div className="col-md-4 text-white">
        <h2>
          <i
            className="pull-left fa fa-times p-1"
            onClick={() => history.goBack()}
          ></i>{" "}
          {history.location.state.title}
        </h2>
      </div>
      <div className="col-md-7">
        <ul className="nav nav-tabs nav-justified">
          <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="./">
              Build
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-white" href="./">
              Pages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="./">
              Theme
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white " href="./">
              Store
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="./">
              Apps
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="./">
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-1">
        <button className="btn btn-info btn-circle btn-sm" type="submit">
          <i className="float-right fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-4 bg-gradient bg-dark px-3 py-3">
        <ul className="list-group fw-bold">
          <li className="list-group-item bg-secondary text-white m-2 fw-bold modules">
            Module 1: jQuery
            <i className="pull-right fa fa-times"></i>
          </li>
          <li className="list-group-item active text-white m-2">
            Module 2 - React
            <i className="pull-right fa fa-times"></i>
          </li>
          <li className="list-group-item bg-secondary text-white m-2">
            Module 3 - Redux
            <i className="pull-right fa fa-times"></i>
          </li>
          <li className="list-group-item bg-secondary text-white m-2">
            Module 4 - Native
            <i className="pull-right fa fa-times"></i>
          </li>
          <li className="list-group-item bg-secondary text-white m-2">
            Module 5 - Angular
            <i className="pull-right fa fa-times"></i>
          </li>
          <li className="list-group-item bg-secondary text-white m-2">
            Module 6 - Node
            <i className="pull-right fa fa-times"></i>
          </li>
          <li className="list-group-item bg-secondary text-white m-2">
            Module 7 - Mongo
            <i className="pull-right fa fa-times"></i>
          </li>
          <li className="list-group-item bg-dark text-white m-2">
            <button
              className="float-right btn btn-info btn-circle btn-sm"
              type="submit"
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </div>

      <div className="col-8 mt-2">
        <ul className="nav nav-pills">
          <li className="nav-item fw-bold bg-secondary m-2 p-1">
            <a className="nav-link active text-white" href="./">
              Topic 1
            </a>
          </li>
          <li className="nav-item bg-secondary m-2 p-1">
            <a className="nav-link fw-bold text-white" href="./">
              Topic2{" "}
            </a>
          </li>
          <li className="nav-item bg-secondary m-2 p-1">
            <a className="nav-link text-white" href="./">
              Topic 3
            </a>
          </li>
          <li className="nav-item bg-secondary m-2 p-1">
            <a className="nav-link text-white" href="./">
              Topic 4
            </a>
          </li>
          <li className="nav-item bg-secondary m-2 p-1">
            <a className="nav-link text-white" href="./">
              <i className="fa fa-plus"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default CourseEditor;
