<template>
  <div class="home">
    <h1 class="home__title">
      <a href="https://www.youtube.com/watch?v=0FwBjPeLqQ8&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=11">Blog</a>
    </h1>
    <button class="home__button" @click="showPosts = !showPosts">
      <span v-if="showPosts">Hide posts</span><span v-else>Show posts</span>
    </button>

    <PostList v-if="showPosts" :posts="posts" />
    <button class="home__button" @click="posts.pop()">Delete post</button>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import { ref } from "@vue/reactivity";
export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        id: 1,
        title: "Welcome to the blog",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 2,
        title: "Top 5 CSS tips",
        body: "Non curabitur gravida arcu ac tortor dignissim. Posuere urna nec tincidunt praesent semper feugiat nibh. Vel turpis nunc eget lorem dolor sed viverra ipsum. Cras semper auctor neque vitae tempus. Aenean pharetra magna ac placerat. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Mauris rhoncus aenean vel elit scelerisque mauris. Phasellus faucibus scelerisque eleifend donec pretium. Lacus viverra vitae congue eu. Eget egestas purus viverra accumsan. Quis lectus nulla at volutpat diam. Et tortor at risus viverra adipiscing at in tellus. Amet aliquam id diam maecenas. Ultricies leo integer malesuada nunc vel. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Non arcu risus quis varius quam quisque id."
      }
    ]);
    const showPosts = ref(true);
    return { posts, showPosts };
  }
};
</script>
<style scoped>
.home__title {
  font-size: 3.3rem;
  margin-bottom: 2rem;
}
.home__button {
  border-radius: 1rem;
  padding: 0.3em 1.5em;
  margin-bottom: 1rem;
  color: white;
  border: 0;
  outline: 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5rem;
  background: linear-gradient(
    to bottom,
    hsl(var(--color-primary-hue), var(--color-primary-sat), 65%),
    hsl(var(--color-primary-hue), var(--color-primary-sat), 60%)
  );
}
.home__button:hover {
  background: linear-gradient(
    to top,
    hsl(var(--color-primary-hue), var(--color-primary-sat), 65%),
    hsl(var(--color-primary-hue), var(--color-primary-sat), 60%)
  );
}
</style>
