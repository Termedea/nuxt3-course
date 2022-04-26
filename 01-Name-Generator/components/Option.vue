<script setup lang="ts">
import { Gender, Popularity, Length } from '@/data';
interface OptionProps {
  option: {
    title: string;
    category: string;
    buttons: Gender[] | Popularity[] | Length[];
  };
  optionState: {
    gender: Gender;
    popularity: Popularity;
    length: Length;
  };
}
const props = defineProps<OptionProps>();
</script>

<template>
  <div class="option">
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
</template>
