<script setup lang="ts">
import { Pagination } from '../models/dto/pagination';

defineProps<{ pagination: Pagination }>()
</script>

<template>
  <div>
    <nav class="w-full inline-flex items-center justify-between py-4" aria-label="Pagination">
      <span class='dark:text-white'>{{ displayPageLocation() }}</span>
      <div class='inline-flex'>
        <a href="#" v-bind:class="{ 'cursor-default text-slate-200 hover:text-slate-200 dark:text-slate-800 dark:hover:text-slate-800': isPrevDisabled(pagination) }"
          @click="onNavigationChange($event, 'prev', pagination)"
          class="dark:ring-slate-800 dark:bg-slate-700 dark:text-white relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-slate-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clip-rule="evenodd" />
        </svg>
        <span>Previous</span>
      </a>
      <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-slate-500 ring-1 ring-inset ring-slate-300 hover:bg-gray-50 focus:outline-offset-0" -->
      <!-- <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-500 ring-1 ring-inset ring-slate-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
            <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-slate-500 ring-1 ring-inset ring-slate-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
            <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-slate-300 focus:outline-offset-0">...</span>
            <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-slate-500 ring-1 ring-inset ring-slate-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-500 ring-1 ring-inset ring-slate-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
            <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-500 ring-1 ring-inset ring-slate-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a> -->
        <a href="#" v-bind:class="{ 'cursor-default text-slate-200 hover:text-slate-200': isNextDisabled(pagination) }"
          @click="onNavigationChange($event, 'next', pagination)"
          class="dark:ring-slate-800 dark:bg-slate-700 dark:text-white relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-slate-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span>Next</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>

    </nav>
  </div>
</template>

<script lang='ts'>
export default {
  methods: {
    onNavigationChange($event: Event, navigation: 'next' | 'prev', pagination: Pagination) {
      $event.preventDefault();

      if (navigation === 'next' && !this.isNextDisabled(this.pagination)) {
        this.$emit('on-navigate', pagination.next);
      }

      if (navigation === 'prev' && !this.isPrevDisabled(this.pagination)) {
        this.$emit('on-navigate', pagination.prev);
      }
    },
    isPrevDisabled(pagination: Pagination) {
      return pagination?.prev === null;
    },
    isNextDisabled(pagination: Pagination) {
      return pagination?.next === null;
    },
    displayPageLocation(): string {
      const end = this.pagination.pageSize * this.pagination.page;
      const start = (end - this.pagination.pageSize) + 1;
      return `Showing ${start} to ${end} of ${this.pagination.count}`;
    }
  },

}
</script>

<style scoped></style>
