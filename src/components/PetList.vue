<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';
import { usePets } from '../stores/pets'

const store = usePets();
const { pets } = storeToRefs(store)

onMounted(() => {
    store.fetchCats();
})

const emit = defineEmits(['click']);

function handleClick(index) {
    emit('click', index);
}

defineExpose({
    pets,
    handleClick
})
</script>

<template>
  <ul>
      <li v-for="(pet, i) in pets">
          <button @click="handleClick(i)">
              <img :src="pet" />
          </button>
      </li>
  </ul>
</template>
