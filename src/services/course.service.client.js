
function CourseService() {
    this.createCourse = createCourse;
    this.findAllUsers = findAllCourses;
    this.findUserById = findCourseById;
    this.deleteUser = deleteCourse;
    this.updateUser = updateCourse;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001063955/users';
    let self = this;

    function createCourse(course) {
        return fetch(self.url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        }).then(function(response) {
            return response.json()
        })

    }
    function findAllCourses() {
        return fetch(self.url)
            .then(function (response) {
            return response.json()
        })

    }
    function findCourseById(id) {
        return fetch(`${self.url}/${id}`)
            .then(function (response) {
                return response.json()
            })

    }
    function updateCourse(id, course) {

        return fetch(`${self.url}/${id}`, {
            method:'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(id)
        }).then(response => response.json())
    }

    function deleteCourse(id) {
        return fetch (`${self.url}/${id}`,
                      {
                          method:'DELETE'
                      })

    }
}
