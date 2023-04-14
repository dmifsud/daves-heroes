<script setup lang="ts">
import { useCharacters } from '../../stores/characters';
import { mapActions, mapState } from 'pinia';
import TablePagination from '../../components/TablePagination.vue';

console.log('characters page');



</script>

<template>
  <h2 class='font-bold text-xl text-slate-600 dark:text-white'>Characters</h2>



  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <router-link 
      :to="`/characters/${character.id}`"
      class="cursor-pointer text-slate-600 dark:text-white dark:bg-slate-800 hover:bg-slate-100 shadow-md max-w-sm w-full lg:max-w-full lg:flex rounded-l rounded-r border-r border-b border-l border-t border-slate-200" 
      v-for='character in characters' :key='character.id'
      >
   
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          :style="{ backgroundImage: `url('${character.image}')` }" :title="character.name">
        </div>
        <div
          class="flex flex-col justify-between leading-normal p-4">
          <div class="mb-8">
            <p class="text-sm text-gray-600 flex items-center">
              {{ character.species }}
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2">{{ character.name }}</div>
            <p class="text-sm text-gray-600 flex items-center">
              Status: 
              {{ character.status }}
            </p>
            <p class="text-sm text-gray-600 flex items-center">
              Type:
              {{ character.type || 'N/A' }}
            </p>
            <p class="text-sm text-gray-600 flex items-center">
              Gender:
              {{ character.gender }}
            </p>
          </div>
        </div>
      </router-link> 
  </div>




  <!-- <table
    class="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
    <thead>
      <tr class='bg-slate-50 dark:bg-slate-700'>
        <th
          class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
          Name</th>
        <th
          class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
          Status</th>
        <th
          class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
          Species</th>
        <th
          class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
          Type</th>
        <th
          class="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
          Gender</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='character in characters' :key='character.id'>
        <td class='border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-left'>{{
          character.name }}</td>
        <td class='border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-left'>{{
          character.status }}</td>
        <td class='border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-left'>{{
          character.species }}</td>
        <td class='border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-left'>{{
          character.type }}</td>
        <td class='border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-left'>{{
          character.gender }}</td>
      </tr>
    </tbody>
  </table> -->
  <TablePagination :pagination='pagination' @on-navigate='onNavigate($event)' />
</template>

<style scoped></style>

<script lang='ts'>

export default {
  computed: {
    ...mapState(useCharacters, { characters: 'data', pagination: 'paginationData' })
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