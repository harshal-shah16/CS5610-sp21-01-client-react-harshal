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
    const {topicId} = useParams()
    // TODO: move all state handling to widgets-reducer.js
    const [widget, setWidget] = useState("");
    console.log(widgets)
    useEffect(() => {
        // TODO: move all server communication to widgets-service.js
        // fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
        //     .then(response => response.json())
        //     .then(widgets => setWidgets(widgets))

        findWidgetsForTopic(topicId)
    }, [findWidgetsForTopic, topicId])
    
    
    return(
        <div>
            <i onClick={createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
            <h1>Widget List {widget.id}</h1>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item">
                            {
                                _widget.id === widget.id &&
                                    <>
                                        <i onClick={() => deleteWidget(_widget.id)} className="fas fa-trash float-right"></i>
                                        <i onClick={() => {
                                            updateWidget(_widget.id, widget)
                                        }} className="fas fa-check float-right"></i>
                                    </>
                            }
                            {
                                _widget.id !== widget.id &&
                                <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"></i>
                            }
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={widget}/>
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
    updateWidget: (newItem) => {
        widgetService.updateWidget(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_WIDGET", updateWidget: newItem}))
    },
    deleteWidget: (widgetToDelete) => {
        widgetService.deleteTopic(widgetToDelete._id)
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

