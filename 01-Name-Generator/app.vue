<script setup lang="ts">
/* Semicolons in interface */
interface OptionState {
  gender: Gender;
  popularity: Popularity;
  length: Length;
}

import { Gender, Popularity, Length, namesList } from '@/data';
/* Vue reactive and auto imported. <OptionState> sets the interfaces */
const options = reactive<OptionState>({
  gender: Gender.GIRL,
  popularity: Popularity.TRENDY,
  length: Length.SHORT
});
const selectedNames = ref<string[]>();
const computeSelectedNames = () => {
  const filteredNames = namesList
    .filter((name) => name.gender === options.gender)
    .filter((name) => name.popularity === options.popularity)
    .filter((name) => {
      if (options.length === Length.ALL) {
        //doesn't matter if it's short or long
        return true;
      } else {
        return name.length === options.length;
      }
    });
  /* Map to create strings from the name-object, since the selected names array needs strings not names. */
  selectedNames.value = filteredNames.map((name) => name.name);
};

/* With script setup can everything be accessed by the temlate. */
</script>

<template>
  <main class="page">
    <h1>Name Generator</h1>
    <p>Chose your options and click the "Find names" button below.</p>
    <section class="options">
      <div class="option option--gender">
        <h4>1) Choose a gender</h4>
        <div class="option__butons">
          <button
            class="button button--left button--primary"
            :class="options.gender === Gender.BOY && 'button--active'"
            @click="options.gender = Gender.BOY"
          >
            Boy
          </button>
          <button
            class="button button--primary"
            :class="options.gender === Gender.GIRL && 'button--active'"
            @click="options.gender = Gender.GIRL"
          >
            Girl
          </button>
          <button
            class="button button--right button--primary"
            :class="options.gender === Gender.UNISEX && 'button--active'"
            @click="options.gender = Gender.UNISEX"
          >
            Unisex
          </button>
        </div>
      </div>
      <div class="option option--popularity">
        <h4>2) Choose the name's popularity</h4>
        <div class="option__butons">
          <button
            class="button button--left button--primary"
            :class="options.popularity === Popularity.UNIQUE && 'button--active'"
            @click="options.popularity = Popularity.UNIQUE"
          >
            Unique
          </button>
          <button
            class="button button--right button--primary"
            :class="options.popularity === Popularity.TRENDY && 'button--active'"
            @click="options.popularity = Popularity.TRENDY"
          >
            Trendy
          </button>
        </div>
      </div>
      <div class="option option--length">
        <h4>3) Choose the name's length</h4>
        <div class="option__butons">
          <button
            class="button button--left button--primary"
            :class="options.length === Length.LONG && 'button--active'"
            @click="options.length = Length.LONG"
          >
            Long
          </button>
          <button
            class="button button--primary"
            :class="options.length === Length.ALL && 'button--active'"
            @click="options.length = Length.ALL"
          >
            Doesn't matter
          </button>
          <button
            class="button button--right button--primary"
            :class="options.length === Length.SHORT && 'button--active'"
            @click="options.length = Length.SHORT"
          >
            Short
          </button>
        </div>
      </div>
      <button class="button button--rounded button--secondary" @click="computeSelectedNames">Find names</button>
    </section>
    <section class="cards">
      <div v-for="(name, i) in selectedNames" :key="`${name}_${i}`" class="card">
        <h4 class="card__name">{{ name }}</h4>
        <span class="card__close">x</span>
      </div>
    </section>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');

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
.option {
  margin-bottom: 2rem;
}

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
.cards {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;

  flex-wrap: wrap;
}
.card {
  background: linear-gradient(to bottom, hsl(222, 67%, 92%) 0%, hsl(222, 67%, 82%));
  border: 0.15rem solid rgb(27, 60, 138);
  border-radius: 1rem;
  flex-basis: 18%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 0.4rem;
}
.card__close {
  display: inline-block;
  font-weight: 900;
  cursor: pointer;
  color: hsl(222, 67%, 82%);
}
.card__close:hover {
  color: rgb(27, 60, 138);
}
.card__name {
  text-transform: uppercase;
  flex-grow: 1;
}
</style>
