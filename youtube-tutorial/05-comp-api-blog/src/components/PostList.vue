<template>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id" class="post-list__item">
      <Post :post="post" />
    </li>
  </ul>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import Post from "./Post.vue";
export default {
  props: ["posts"],
  /* Object with actual imported components, not strings.  */
  components: { Post },
  /* To access posts within setup function add setup and pass in props */
  setup(props) {
    onMounted(() => console.log("Component mounted"));
    onUnmounted(() => console.log("Component unmounted"));
    onUpdated(() => console.log("Component updated"));
  }
};
</script>

<style scoped>
.post-list__item {
  list-style-type: none;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(var(--color-primary), 0.1);
}
</style>
