console.log('JS OK', Vue)


// Destructuring createApp
const { createApp } = Vue


// Initialize vue app
const app = createApp({
    data () {
        return {
            tasks: [],
            newTask: '',
        }
    },

    created () {
        axios.get('http://localhost:80/php-todo-list-json/api/tasks/')
        .then((res) => {
            this.tasks = res.data
        })
    },

    methods: {
        addTask() {
            const data = {task : this.newTask}

            // Config
            const config = {
                headers: {'Content-Type' : 'multipart/form-data'}
            }

            axios.post('http://localhost:80/php-todo-list-json/api/tasks/', data, config)
            .then(res => {
                this.tasks = res.data
                this.newTask = ''
            })
        }
    }
});


// Insert vue inside HTML
app.mount('#root');