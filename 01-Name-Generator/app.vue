<script setup lang="ts">
import { Gender, Popularity, Length, namesList } from '@/data';
/* Semicolons in interface */
interface OptionState {
  gender: Gender;
  popularity: Popularity;
  length: Length;
}

/* Vue reactive and auto imported.  */
/* Object of type OptionState */
const optionState = reactive<OptionState>({
  gender: Gender.GIRL,
  popularity: Popularity.TRENDY,
  length: Length.SHORT
});

/* ref */
const selectedNames = ref<string[]>();

/* Generate button click callback */
const computeSelectedNames = () => {
  const filteredNames = namesList
    .filter((name) => name.gender === optionState.gender)
    .filter((name) => name.popularity === optionState.popularity)
    .filter((name) => {
      if (optionState.length === Length.ALL) {
        //doesn't matter if it's short or long
        return true;
      } else {
        return name.length === optionState.length;
      }
    });
  /* Map to create strings from the name-object, since the selected names array needs strings not names. */
  selectedNames.value = filteredNames.map((name) => name.name);
};

const optionsArray = [
  {
    title: '1) Choose a gender',
    category: 'gender',
    buttons: [Gender.GIRL, Gender.UNISEX, Gender.BOY]
  },
  {
    title: "2) Choose the name's popularity",
    category: 'popularity',
    buttons: [Popularity.TRENDY, Popularity.UNIQUE]
  },
  {
    title: "3) Choose the name's length",
    category: 'length',
    buttons: [Length.SHORT, Length.ALL, Length.LONG]
  }
];

/* With script setup can everything be accessed by the temlate. */
</script>

<template>
  <main class="page">
    <h1>Name Generator</h1>
    <p>Chose your options and click the "Find names" button below.</p>
    <section class="options">
      <!-- Automatically imported because it's in the component folder -->
      <Option
        v-for="(option, i) in optionsArray"
        :key="`option_${i}`"
        :option="option"
        :optionState="optionState"
      ></Option>
      <button class="button button--rounded button--secondary" @click="computeSelectedNames">Find names</button>
    </section>
    <section class="cards">
      <CardName v-for="(name, i) in selectedNames" :key="`name_${i}`" class="card" :name="name" />
    </section>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');

.button {
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 200;
}
.button--primary {
  color: rgb(27, 60, 138);
  background: white;
  outline: 0.15rem solid rgb(249, 87, 89);
}
.button--secondary {
  background: linear-gradient(to bottom, hsl(222, 67%, 32%) 0%, hsl(222, 67%, 22%) 100%);
  color: white;
  outline: 0.15rem solid rgb(27, 60, 138);
}
.button--rounded {
  border-radius: 1rem;
}
.button--primary:hover,
.button--primary:focus,
.button--primary.button--active {
  background: linear-gradient(to bottom, hsl(359, 93%, 66%) 0%, hsl(359, 93%, 60%));
  color: white;
}

.button--secondary:hover,
.button--secondary:focus,
.button--secondary.button--active {
  background: white;
  color: rgb(27, 60, 138);
  outline: 0.15rem solid rgb(27, 60, 138);
}
.button--left {
  border-radius: 1rem 0 0 1rem;
}
.button--right {
  border-radius: 0 1rem 1rem 0;
}
</style>
<style scoped>
.page {
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
  font-family: 'Alegreya Sas', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
h1 {
  font-size: 3rem;
}
.options {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}

.cards {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
