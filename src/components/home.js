import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    
    <h1>Home</h1>
    <div className="list-group">
      <Link to="/courses/table" className="list-group-item">
        Courses Table
      </Link>
      <Link to="/courses/card" className="list-group-item">
        Courses Grid
      </Link>
      {/* <Link to="/editor" className="list-group-item">
        Course Editor
      </Link> */}

      <Link
        to={{
          pathname: "/courses/table/",
          state: {
            title: "CS5610",
          },
        }} className="list-group-item"
      > Course Editor       
      </Link>
    </div>
  </>
);

export default Home;
