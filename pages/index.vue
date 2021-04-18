<template>
  <ul>
    <li><NuxtLink to="/play">play</NuxtLink></li>
    <li><NuxtLink to="/edit">edit</NuxtLink></li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
ul > li {
  @apply text-red-500;
  @apply text-3xl;
}
</style>
