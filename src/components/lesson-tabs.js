import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../services/lesson-service"
import topicService from "../services/topic-service"



const LessonTabs = (
    {
        lessons=[],
        createLesson,
        updateLesson,
        deleteLesson,
        findLessonsForModule
    }) => {
    const {layout, courseId, moduleId} = useParams();
   //console.log('moduleID from lesson-tabs is ',moduleId)

   const [selectedId, setSelectedId] = useState("");

    const changeSelectedId = (id) => {
       
        setSelectedId(id);
    }
    
    useEffect(() => {        
        findLessonsForModule(moduleId)    
    }, [findLessonsForModule, moduleId])

        return(<div>
        <h2>Lessons</h2>
        <ul className="nav nav-tabs" activekey="/home">
            {
                lessons.map(lesson =>
                    //<li className="nav-item" href="/home" key={lesson._id} eventkey={lesson._id}>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            item={lesson}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            courseId={courseId}
                            key = {lesson._id}
                            id = {lesson._id}
                            select={changeSelectedId}
                            selectedId = {selectedId}/>
                    //</li>
                )
            }
             <li className="list-group-item">
                <i onClick={() => createLesson(moduleId)} className="fas fa-plus"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    createLesson: (moduleId) => {
        lessonService.createLesson(moduleId, {title: 'New Lesson'})
            .then(lesson => dispatch({type: "CREATE_LESSON", lesson: lesson}))
        
    },
    updateLesson: (newItem) => {
        lessonService.updateLesson(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_LESSON", updateLesson: newItem}))
    },
    deleteLesson: (lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete._id)
            .then(status => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
    },
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons: lessons  
        }))
        topicService.findTopicsForLesson(undefined)
        .then(topics => dispatch({type: "FIND_TOPICS_FOR_LESSON", topics: topics}))
    }
})

const pm = connect(stpm, dtpm)

export default pm(LessonTabs)