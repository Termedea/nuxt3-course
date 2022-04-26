<script setup lang="ts">
import { Gender, Popularity, Length } from '@/data';

/* Buttons are enum types, but value is the enum text */
/* OptionState from parent is actually a state that can be set. No need to send through callback */
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
/* Do not need to deconstruct to access option.title instead of props.option.title */
const props = defineProps<OptionProps>();

const computeButtonClasses = (value: Gender | Popularity | Length, index: number) => {
  const classNames = [];
  if (props.optionState[props.option.category] === value) classNames.push('button--active');
  if (index === 0) classNames.push('button--left');
  if (index === props.option.buttons.length - 1) classNames.push('button--right');
  return classNames.join(' ');
};
</script>

<template>
  <div class="option">
    <h4>{{ option.title }}</h4>
    <div class="option__butons">
      <button
        v-for="(value, i) in option.buttons"
        :key="`button_${i}`"
        class="button button--primary"
        :class="computeButtonClasses(value, i)"
        @click="optionState[option.category] = value"
      >
        {{ value }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.option {
  margin-bottom: 2rem;
}
</style>
