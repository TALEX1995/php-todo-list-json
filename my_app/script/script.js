console.log('JS OK', Vue)


// Destructuring createApp
const { createApp } = Vue


// Initialize vue app
const app = createApp({
    data () {
        return {
            tasks: [],
        }
    },

    created () {
        axios.get('http://localhost:80/php-todo-list-json/api/tasks/')
        .then((res) => {
            this.tasks = res.data
        })
    }


});


// Insert vue inside HTML
app.mount('#root');