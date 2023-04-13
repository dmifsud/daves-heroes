import { defineStore } from 'pinia';

export const useCharacters = defineStore('characters-store', {
    state: () => {
        return {
            data: [],
            loading: false,
            loaded: false,
        }
    },

    getters: {
        results(state) {
            return state.data;
        },

        isLoading(state) {
            return state.loading;
        }
    },

    actions: {
        async fetchCharacters() {
            this.loading = true;
            const response = await fetch('https://rickandmortyapi.com/api/character');
            try {
                const result = await response.json();
                this.data = result.results;
                this.loaded = true;
            } catch (err) {
                this.data = [];
                console.error('Error loading characters', err);
                return err;
            }

            this.loading = false;
        }
    }
})