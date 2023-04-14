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
      class="cursor-pointer text-slate-600 dark:text-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 shadow-md max-w-sm w-full lg:max-w-full lg:flex rounded-l rounded-r border-r border-b border-l border-t border-slate-200 dark:border-slate-800" 
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