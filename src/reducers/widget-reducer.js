const initialState = {
    widgets: [
        
    ]
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                topics: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "DELETE_WIDGET":
            
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    if(widget._id !== action.widgetToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if(widget._id === action.updateWidget._id) {
                        
                        return action.updateWidget
                        
                    } else {
                        return widget
                    }
                })
            }
        case "FIND_WIDGETS_FOR_TOPICS":
                return {
                    ...state,
                    widgets: action.widgets
                }
        default:
            return state
    }
}

export default widgetReducer