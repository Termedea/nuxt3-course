<template>
  <div class="backdrop">
    <div class="modal" :class="highlight && 'modal--highlight'">
      <h3 class="modal__title">{{ title }}</h3>
      <p class="modal__body">{{ body }}</p>
    </div>
  </div>
</template>
<script>
/* Define propnames that we accept */
export default {
  props: ['title', 'body', 'highlight']
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.modal {
  width: 400px;
  border-radius: 1rem;
  background: white;
  border: 1px solid #777;
  margin: 100px auto;
  min-height: 200px;
  text-align: center;
  color: teal;
}
.modal--highlight {
  background: rgb(236, 181, 71);
  color: white;
}
.modal__title {
  font-size: 2.34rem;
  margin-top: 0.3em;
  margin-bottom: 0.6rem;
}

.modal__body {
  font-size: 1.3rem;
}
</style>
