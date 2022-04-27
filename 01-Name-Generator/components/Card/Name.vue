<script setup lang="ts">
interface NameProps {
  name: string;
  index: number;
}
const props = defineProps<NameProps>();
/* Defins the kind of events that can be emitted and passed through @event when component is called */
const emit = defineEmits(['remove']);

const removeName = () => {
  emit('remove', props.index);
};
</script>

<template>
  <div class="card">
    <h4 class="card__name">{{ name }}</h4>
    <span @click="removeName" class="card__close">x</span>
  </div>
</template>

<style scoped>
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
  margin: 0.8rem;
}
</style>
