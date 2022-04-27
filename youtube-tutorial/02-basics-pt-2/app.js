const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      onlyFavs: false,
      url: 'http://www.thenetninja.co.uk',
      books: [
        {
          title: 'Name of the Wind',
          author: 'Patrick Rothfuss',
          isFav: true
        },
        {
          title: 'The Way of Kings',
          author: 'Brandon Sanderson',
          isFav: false
        },
        {
          title: 'The Final Empire',
          author: 'Brandon Sanderson',
          isFav: false
        }
      ],
      x: 0,
      y: 0
    };
  },
  methods: {
    handleEvent(e) {
      if (e.type === 'mousemove') {
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
    },
    toggleFav(book) {
      /* It knows this is the book in the object */
      book.isFav = !book.isFav;
    }
  },
  computed: {
    /* value can be access in the template */
    /* Works as normal data properties, but this is a property that depends on data.  */
    filteredBooks() {
      return this.books.filter((book) => book.isFav === true);
    }
  }
});

/* Mounts whatever is in the app.template into the #app-div. The div will get the attribute data-v-app to show that it is where the vue template is rendered */
app.mount('#app');
