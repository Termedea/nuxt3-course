<template>
  <!-- Script and style are optional but every component needs to have a template (react render) -->
  <!-- Template created here instead of in HTML page as in previous sections -->

  <div class="app">
    <h1 class="app__title">{{ title }}</h1>
    <h2>
      <a
        href="https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3"
      >
        Composer API part 2
      </a>
    </h2>
    <!-- Template refs are instead of dom-queries -->
    <input type="text" ref="name" />
    <button @click="toggleModal">Click me</button>
    <!-- Props are optional, child will receive them as undefined.  -->
    <Modal
      :highlight="true"
      :title="header"
      :body="body"
      @click="toggleModal"
      v-if="showModal"
    />
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
/* Optional object, but is almost always used. Exports data similarly to object in createapp. Can use data and methods here too.*/
export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'My first Vue App',
      showModal: false,
      header: 'Sign up!',
      body: 'Some text for the modal. '
    };
  },
  methods: {
    handleClick() {
      /* the $ref-object holds all references set in template */
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC&family=Radio+Canada&display=swap');
/* Global styles */

.app {
  max-width: 70rem;
  margin: 10rem auto;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #eee;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
}

.app__title {
  font-family: 'Alegreya Sans SC', Avenir, Helvetica, Arial, sans-serif;
  padding: 0.3rem;

  border-bottom: 1px solid rgba(0, 128, 128, 0.1);
  margin-top: 0;
}
input,
button {
  border: 1px solid rgb(176, 217, 217);
  font-size: 1.3rem;
  outline: 0;
  background: white;
  padding: 0.3rem 0.4rem;
  font-family: 'Radio Canada', Helvetica, Arial, sans-serif;
  margin-left: 4px;
  color: #666;
}
input:focus,
button:focus {
  border: 1px solid rgb(75, 120, 120);
  box-shadow: 0 0 10px 1px rgb(176, 217, 217);
}
</style>
