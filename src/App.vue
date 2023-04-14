<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { ref } from 'vue';
import { AppTheme } from './models/app/theme';
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
  // TODO: create app store and set value there, then on app load, hydrate value from localStorage
  const updateTheme: AppTheme = {
    dark: dark.value 
  };
  // TODO: move local storage handling to a separate helper.
  localStorage.setItem('theme', JSON.stringify(updateTheme));
};

const getToggleText = () => `Switch to ${dark.value ? 'Light' : 'Dark'} mode`;

// On load
// TODO: to clean up
const theme = JSON.parse(localStorage.getItem('theme') ?? '{"dark":true}') as AppTheme;
dark.value = theme.dark;
</script>

<template>
  <div v-bind:class="{ dark }" class='min-h-screen'>
    <div class='dark:bg-slate-600 min-h-screen'>
    <nav
        class="fixed w-full flex items-center justify-between flex-wrap dark:bg-slate-900  bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                <span class="font-semibold text-xl tracking-tight dark:text-white">Dave&rsquo;s Heroes</span>
            </div>
            <div class="block lg:hidden ">
                <button
                    id="nav"
                    class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>
    
        <div class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div class="text-md font-bold text-blue-700 lg:flex-grow">
              <router-link to="/" active-class="border-b-2"
                class="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-700 dark:text-white dark:hover:text-slate-300 px-4 py-2 hover:bg-blue-700 mr-2"
                >Home
              </router-link>

              <router-link to="/characters/" active-class="border-b-2"
                class="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-700 dark:text-white dark:hover:text-slate-300 px-4 py-2 hover:bg-blue-700 mr-2"
                >Characters
              </router-link>
                
            </div>
            
            <div class="flex ">
              <button type="button" class='dark:text-white' @click="toggleDark()">{{ getToggleText() }}</button>
                <a href="#"
                    disabled
                   class="cursor-default block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold mt-4 hover:bg-blue-700 lg:mt-0">Sign
                    in</a>
    
                <a href="#"
                  disabled
                   class="cursor-default block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold mt-4 hover:bg-blue-700 lg:mt-0">login</a>
            </div>
        </div>
    
    </nav>
    
    <div class='router-view'>
      <router-view></router-view>
    </div>
    
    
  </div>
    
    
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

.router-view {
  padding: calc(80px + 2rem) 2rem 2rem 2rem
}
</style>
