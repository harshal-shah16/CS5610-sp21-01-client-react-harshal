import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom"
import widgetService from "../../services/widget-service"

const WidgetList = ({
        widgets=[],
        createWidget,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic
}) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    
    // TODO: move all state handling to widgets-reducer.js
    const [widget, setWidget] = useState({});

    
    //console.log('staet from widget list is', widgets)
    useEffect(() => {
        // TODO: move all server communication to widgets-service.js
        // fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
        //     .then(response => response.json())
        //     .then(widgets => setWidgets(widgets))

        findWidgetsForTopic(topicId)
       
    }, [findWidgetsForTopic, topicId])
    
    
    return(
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus float-right fa-2x m-2 p-1"></i>
            <h3>Widget List for selected Topic</h3>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item mr-3 mb-2">
                            {
                                _widget.id === widget.id &&
                                    <>
                                        <i onClick={() => deleteWidget(_widget.id)} className="fas fa-trash float-right m-2 p-1"></i>
                                        <i onClick={() => {
                                            setWidget({});
                                            updateWidget(_widget.id, widget)
                                        }} className="fas fa-check float-right m-2 p-1"></i>
                                    </>
                            }
                            {
                                _widget.id !== widget.id &&
                                <i onClick={() => {
                                    //setWidget({});
                                    setWidget(_widget)}} className="fas fa-cog float-right m-2 p-1"></i>
                            }
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                to={`topics/${topicId}`}
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={_widget}/>
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={_widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({
    createWidget: (topicId) => {
        widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget"})
            .then(widget => dispatch({type: "CREATE_WIDGET", widget: widget}))
        
    },
    updateWidget: (wid, newItem) => {
        widgetService.updateWidget(wid, newItem)
            .then(status => dispatch({type: "UPDATE_WIDGET", updateWidget: newItem}))
    },
    deleteWidget: (widgetToDelete) => {
        widgetService.deleteWidget(widgetToDelete)
            .then(status => dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete}))
    },
    findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: widgets  
        }))
    }
})

const pm = connect(stpm, dtpm)

export default pm(WidgetList)

