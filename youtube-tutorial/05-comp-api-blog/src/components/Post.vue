<template>
  <h3 class="post__heading">{{ post.title }}</h3>
  <p class="post__body">{{ snippet }}</p>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "Post",
  props: ["post"],
  setup(props) {
    const snippet = computed(() => props.post.body.substring(0, 100) + "...");
    /* Always return objects */
    return { snippet };
  }
};
</script>

<style scoped>
.post__heading {
  font-weight: 300;
  font-size: 1.3rem;
}
.post__body {
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}
</style>
