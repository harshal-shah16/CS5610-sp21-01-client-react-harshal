import React , {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from "../services/topic-service"


const TopicPills = (
    {
        topics=[],
        createTopic,
        updateTopic,
        deleteTopic,
        findTopicsForLesson
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {        
        findTopicsForLesson(lessonId)
        updateTopic(updateTopic)
    
    }, [findTopicsForLesson, lessonId, updateTopic])
        // console.log(layout)
        // console.log(courseId);
        // console.log('moduleIDis', moduleId);
        // console.log('lessonidis', lessonId);
        return(<div>
        <h2>Topics</h2>
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item active" key={topic._id} data-toggle="tab">
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${topic._id}`}
                            item={topic}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}/>
                    </li>
                )
            }
             <li className="list-group-item">
                <i onClick={() => createTopic(lessonId)} className="fas fa-plus fa-2x"></i>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
        topicService.createTopic(lessonId, {title: 'New Topic'})
            .then(topic => dispatch({type: "CREATE_TOPIC", topic: topic}))
        
    },
    updateTopic: (newItem) => {
        topicService.updateTopic(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newItem}))
    },
    deleteTopic: (topicToDelete) => {
        topicService.deleteTopic(topicToDelete._id)
            .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
    },
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics: topics  
        }))
    }
})

const pm = connect(stpm, dtpm)

export default pm(TopicPills)