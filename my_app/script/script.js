console.log('JS OK', Vue)


// Destructuring createApp
const { createApp } = Vue


// Initialize vue app
const app = createApp({
    data () {
        return {
            tasks: ['HTML', 'CSS', 'Axios', 'Vue', 'PHP', 'Javascript'],
        }
    }


});


// Insert vue inside HTML
app.mount('#root');