<script setup lang="ts">
import { useCharacter } from '../../stores/character';
import { mapActions, mapState } from 'pinia';

console.log('character page');
</script>

<template>
  <div class='flex justify-center dark:text-white'>
    <div class="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100" v-if='!loading && !!character'>
      <img v-bind:src='character.image' alt=""
        class="rounded-full flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square">
      <div>
        <h2 class="text-xl font-semibold">{{ character.name }}</h2>
        <span class="block pb-2 text-sm dark:text-gray-400">{{ character.species }} / {{ character.gender }}</span>

        <table class="border-collapse border border-slate-400 w-full">
          <tbody>
            <tr>
              <td class='border border-slate-300 p-2'>Status</td>
              <td class='border border-slate-300 p-2'>{{ character.status }}</td>


            </tr>
            <tr>
              <td class='border border-slate-300 p-2'>Type</td>
              <td class='border border-slate-300 p-2'>{{ character.type || 'N/A' }}</td>

            </tr>
            <tr>
              <td class='border border-slate-300 p-2'>Appears in Episodes</td>
              <td class='border border-slate-300 p-2'>{{ episodes }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script lang='ts'>

export default {
  computed: {
    ...mapState(useCharacter, { character: 'data', loading: 'isLoading', episodes: 'episodeAppearance' })
  },
  methods: {
    ...mapActions(useCharacter, ['fetchCharacter']),

  },
  created() {
    const id = +this.$route.params['id'];
    this.fetchCharacter(id);
  }
}

</script>

<!-- 
● Name
● Status
● Species
● Type
● Gender -->