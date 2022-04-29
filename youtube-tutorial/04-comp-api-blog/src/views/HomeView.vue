<template>
  <div class="home">
    <h1>
      <a href="youtube.com/watch?v=V-kxBWcPJfo&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=10">
        Blog with the Composition API
      </a>
    </h1>
    <!-- No need to use name.value in the template even though these are refs.  -->
    <!-- ref-variables-->
    <h2>Ref variable</h2>
    <p ref="p">My name is {{ name }} and I'm {{ age }} years old</p>
    <!-- v-model - 2 way data binding to a ref. -->
    <input type="text" v-model="name" />
    <button @click="handleClick">Update vars</button>
    <!-- ref-object -->
    <h2>Ref object</h2>
    <p>User 1: {{ user1.name }}, {{ user1.age }} years old</p>
    <button @click="updateUser1">Update user 1</button>
    <!-- reactive -->
    <h2>Reactive object</h2>
    <p>User 2: {{ user2.name }}, {{ user2.age }} years old</p>
    <button @click="updateUser2">Update user 2</button>
    <!-- Computed -->
    <h2>Computed</h2>
    <p>{{ computedName }}</p>
    <input type="text" name="" id="" v-model="search" />
    <p>Search-term {{ search }}</p>
    <h3>Matched pets</h3>
    <div v-for="pet in matchingPets" :key="pet">{{ pet }}</div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";
// @ is an alias to /src

export default {
  name: "HomeView",
  /* Always runs first */
  /* Create values and functions, return them out of template to access them in template */
  setup() {
    /* this-keyword is not available in setup-method. Old way to do refs this.$refs.refName no longer work with comp api.  */
    /* ref is imported from vue. Variable name is the same as ref attr. in template tag.  */
    /* ref can be existing dom-element (fetched by id, created, query, etc. ) */
    /*  Rarely use template refs in comp api. DOM-content can be accessed in other ways*/
    /* Ref can be any datatype */
    const p = ref(document.createElement("p"));

    /* not reactive values. Opt-api vars in data is reactive by default. */
    /* let name = "Mikaela";
    let age = 36; */

    /* Refs can be used to create reactive values. Ref-object is constant. */
    const name = ref("Mikaela");
    const age = ref("36");
    const user1 = ref({ name: "Mikaela", age: 36 });

    /* Same thing using reactive:  */
    /* Can't use primitive values. Values don't get reactive. */
    const user2 = reactive({ name: "Tobias", age: 38 });

    const handleClick = () => {
      /* P is a ref object.  */
      /* console.log(p); */
      /* Value is the actual dom-element */
      name.value = "Therese";
    };

    const updateUser1 = () => {
      console.log(user1);
      ++user1.value.age;
    };
    const updateUser2 = () => {
      console.log(user2);
      /* With reactive we don't need value */
      ++user2.age;
    };

    const pets = ref(["Yoshi", "Molly", "Rocko", "Acke", "Sol", "Bianca"]);
    /* Computed. Returns a value. Value is assigned when output on page.
     */
    const computedName = computed(() => "Yoshi");
    const search = ref("");
    const matchingPets = computed(() => pets.value.filter((pet) => pet.includes(search.value)));

    /* Check for changes on the search ref */
    watch(search, () => console.log("watch function ran"));

    /* Watches any dependency that might exist inside callback. Runs only once if no dependency exists. 
    We don't have to explicitly say what we're watching*/
    watchEffect(() => console.log("check any change?", search.value));
    /* Return the values that we want to use in the template */
    /* Not same as data() {return age..}, because return from data method is reactive, it will change.
    refs needs to be returned here too, otherwise the ref object would not have a value. It would exist, but it wouldn't refer to a DOM-element. */
    return {
      name,
      age,
      handleClick,
      p,
      user1,
      updateUser1,
      user2,
      updateUser2,
      computedName,
      pets,
      search,
      matchingPets
    };
  }
};
</script>
<style scoped>
a,
a:hover {
  color: inherit;
  text-decoration: none;
}
</style>
