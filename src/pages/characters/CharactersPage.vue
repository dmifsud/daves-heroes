<script setup lang="ts">
import { defineComponent } from 'vue';
import { useCharacters } from '../../stores/characters';
import { mapActions, mapState } from 'pinia';

console.log('characters page');

</script>

<template>
  <div>this is the characters page</div>

  <table>
    <tr v-for='character in characters' :key='character.id'>
      <td>{{ character.name }}</td>
    </tr>
  </table>
</template>

<style scoped>
</style>

<script lang='ts'>

export default {
  computed: {
    ...mapState(useCharacters, { characters: 'data'})
  },
  methods: {
    ...mapActions(useCharacters, ['fetchCharacters'])
  },
  created() {
    this.fetchCharacters();
  }
};

</script>