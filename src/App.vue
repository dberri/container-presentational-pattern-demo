<script setup>
import CatList from './components/CatList.container.js'
import DogList from './components/DogList.container.js'
</script>

<template>
  <div class="pets">
    <CatList />
    <DogList />
  </div>
</template>

<style>
@import './assets/base.css';

.pets {
  display: flex;
  gap: 2rem;
}

.pets > * {
  flex: 1;
}
</style>
