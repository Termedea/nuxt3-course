/* View app, controls the whole or part of a webpage */
/* vue-object has a function called createApp */

/* 
React equivalent
ReactDOM.render(
  <React.StrictMode>    
      <App />    
  </React.StrictMode>,
  document.getElementById('root')
); 
*/

const app = Vue.createApp({
  /* Createapp takes data, functions, component template that will be rendered in the app element.*/
  //template: '<h2>Vue controls this</h2>'
  /* Data function. Properties returned are accessible in template */
  data() {
    return {
      showBooks: false,
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45
    };
  },
  methods: {
    changeTitle(title) {
      console.log('you clicked me');
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    }
  }
});

/* Mounts whatever is in the app.template into the #app-div. The div will get the attribute data-v-app to show that it is where the vue template is rendered */
app.mount('#app');
