import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor";
import Test from "./components/test";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"

function App() {

     
const WIDGETS_URL = process.env.REACT_APP_SERVER_URL; // to be replaced by HerokuURL
console.log('url from widget-service',WIDGETS_URL);
  
  return (

  
      <BrowserRouter>
          <div>
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/courses" component={CourseManager}/>
          {/* <Route path="/editor" exact={true} render={(props) => <CourseEditor {...props} name="CS5610"/>}/> */}
          <Route path="/courses/:courseId/quizzes" exact={true}>
                  <QuizzesList/>
          </Route>
          <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                  <Quiz/>
          </Route>
          <Route path={[
              "/courses/:layout/edit/:courseId",
              "/courses/:layout/edit/:courseId/modules/:moduleId",
              "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
              "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
              "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"
          ]}
                 exact={true}
                 render={(props) => <CourseEditor {...props}/>}/>
            
          </div>
      </BrowserRouter>
  );
}

export default App;
