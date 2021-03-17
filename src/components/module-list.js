import React, {useEffect, useState}from 'react';
import {connect, Provider} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import {findModulesForCourse, createModule} from "../services/module-service";
import moduleService from "../services/module-service"
import lessonService from "../services/lesson-service"
import topicService from "../services/topic-service"

const ModuleList = (
    {
        modules=[],
        createModule,
        updateModule,
        deleteModule,
        findModulesForCourse
    }) => {

    const {layout, courseId} = useParams();
    const [title, setTitle] = useState("");
    const [selectedId, setSelectedId] = useState("");

    const changeSelectedId = (id) => {
        //console.log(id);
        setSelectedId(id);
    }
   
   
    useEffect(() => {        
        findModulesForCourse(courseId)
    }, [courseId, findModulesForCourse])
    return(<div>
        <h2>Module List</h2>
        {/* <ul>
            <li>layout: {layout}</li>
            <li>courseId: {courseId}</li>
            
        </ul> */}


        <ul className="list-group">
            {   
             
                modules.map(module =>
                    //<li className="list-group-item target" key={module._id} eventkey={module._id}>
                        <EditableItem                        
                            to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                            deleteItem={deleteModule}
                            updateItem={updateModule}
                            item={module}
                            courseId={courseId}
                            type="module"
                            key = {module._id}
                            id = {module._id}
                            select={changeSelectedId}
                            selectedId = {selectedId}/>
                    //</li>
                )
            }
            <li className="list-group-item ml-1">
                <i onClick={() => createModule(courseId)} className="fas fa-plus"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    
    modules: state.moduleReducer.modules
})
const dtpm = (dispatch) => ({
    createModule: (courseId) => {
        moduleService.createModule(courseId, {title: 'New Module'})
            .then(module => dispatch({type: "CREATE_MODULE", module: module}))
        
    },
    updateModule: (newItem) => {
        moduleService.updateModule(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_MODULE", updateModule: newItem}))
    },
    deleteModule: (moduleToDelete) => {
        moduleService.deleteModule(moduleToDelete._id)
            .then(status => dispatch({type: "DELETE_MODULE", moduleToDelete: moduleToDelete}))
    },
    findModulesForCourse: (courseId) => {
        moduleService.findModulesForCourse(courseId)
            .then(modules => dispatch({
                type: "FIND_MODULES_FOR_COURSE",
                modules: modules  
        }))

        // lessonService.findLessonsForModule(undefined)
        // .then(lessons => dispatch({type: "FIND_LESSONS_FOR_MODULE", lessons: lessons}))
        // topicService.findTopicsForLesson(undefined)
        // .then(topics => dispatch({type: "FIND_TOPICS_FOR_LESSON", topics: topics}))
    }
})

export default connect(stpm, dtpm)(ModuleList)