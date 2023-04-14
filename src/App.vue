<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { ref } from 'vue';
const dark = ref(false);

const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const toggleDark = () => {
  dark.value = !dark.value;
};

const getToggleText = () => `Switch to ${dark.value ? 'Light' : 'Dark'} mode`;
</script>

<template>
  <div v-bind:class="{ dark }">
    <router-view></router-view>
    <router-link to="/">Home page</router-link> |
    <router-link to="/characters/">Characters Page</router-link> |
    <router-link to="/characters/32">Characters Page</router-link>
    <h1
      class="text-3xl font-bold underline bg-white dark:bg-slate-800 dark:text-white"
    >
      Hello world!
    </h1>
    <button type="button" @click="toggleDark()">{{ getToggleText() }}</button>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />

    <ul class="divide-y divide-gray-200 dark:bg-slate-800">
      <li v-for="person in people" :key="person.email" class="py-4 flex">
        <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900 dark:text-white">
            {{ person.name }}
          </p>
          <p class="text-sm text-gray-500 dark:text-slate-400">
            {{ person.email }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
