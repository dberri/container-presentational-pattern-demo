<script setup>
const props = defineProps({
  pets: {
    type: Array,
    default: () => [],
  }
});

const emit = defineEmits(['click']);

function handleClick(index) {
    emit('click', index);
}

defineExpose({
    pets: props.pets,
    handleClick
})
</script>

<template>
  <ul class="pet-list">
      <li v-for="(pet, i) in pets">
          <button @click="handleClick(i)" class="pet-list__button">
              <img :src="pet" class="pet-list__img" />
          </button>
      </li>
  </ul>
</template>


<style scoped>
.pet-list {
    list-style: none;
    padding: 0;
}

.pet-list__button {
    background: transparent;
    padding: 0;
    margin: 0;
    border: none;
}

.pet-list__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>
