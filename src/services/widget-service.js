
const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001063955/courses";
const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001063955/modules";
const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001063955/lessons";
const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/001063955/topics";
const WIDGETS_URL = process.env.SERVER_URL; // to be replaced by HerokuURL
console.log('url from widget-service',WIDGETS_URL);
export const createWidget = (tid, widget) =>
    fetch(`${WIDGETS_URL}/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const updateWidget= (wid, widget) =>
    fetch(`${WIDGETS_URL}/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findWidgetsForTopic = (tid) =>
 
    fetch(`${WIDGETS_URL}/topics/${tid}/widgets`)
        .then(response => response.json());
    
export const deleteWidget = (wid) =>
    fetch(`${WIDGETS_URL}/widgets/${wid}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

export const findWidgetById = (wid) =>
 
    fetch(`${WIDGETS_URL}/widgets/${wid}`)
        .then(response => response.json());       
        
export const findAllWidgets = () =>
 
    fetch(`${WIDGETS_URL}/widgets`)
        .then(response => response.json());       



const api = {
    createWidget, findWidgetsForTopic, findAllWidgets, findWidgetById, updateWidget, deleteWidget
}

export default api;