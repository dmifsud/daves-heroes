<script setup lang="ts">
import { useCharacters } from '../../stores/characters';
import { mapActions, mapState } from 'pinia';
import TablePagination from '../../components/TablePagination.vue';

console.log('characters page');



</script>

<template>
  <div>this is the characters page</div>

  <table class="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
    <thead>
      <tr class='bg-slate-50 dark:bg-slate-700'>
        <th class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Name</th>
        <th class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Status</th>
        <th class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Species</th>
        <th class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Type</th>
        <th class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Gender</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='character in characters' :key='character.id'>
        <td class='border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-left'>{{ character.name }}</td>
        <td class='border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-left'>{{ character.status }}</td>
        <td class='border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-left'>{{ character.species }}</td>
        <td class='border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-left'>{{ character.type }}</td>
        <td class='border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-left'>{{ character.gender }}</td>
      </tr>
    </tbody>
  </table>
  <TablePagination :pagination='pagination' @on-navigate='onNavigate($event)' />

</template>

<style scoped>
</style>

<script lang='ts'>

export default {
  computed: {
    ...mapState(useCharacters, { characters: 'data', pagination: 'paginationData'})
  },
  methods: {
    ...mapActions(useCharacters, ['fetchCharacters']),
    onNavigate(directionApiUrl: string) {
      this.fetchCharacters(directionApiUrl);
    }
  },
  created() {
    this.fetchCharacters();
  }
};

</script>