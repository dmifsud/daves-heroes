import { defineStore } from 'pinia';
import { Character } from '../models/dto/characters';
import { Pagination } from '../models/dto/pagination';
import { ApiResponse } from '../models/dto/api-response';

export const useCharacters = defineStore('characters-store', {
    state: (): { // TODO: extract this to StateSlice
        data: Character[],
        loading: boolean;
        loaded: boolean;
        pagination: Pagination;
    } => {
        return {
            data: [],
            loading: false,
            loaded: false,
            pagination: {
                count: 0,
                next: null,
                pages: 0,
                prev: null,
                page: 0,
                pageSize: 0,
            }
        } 
    },

    getters: {
        results(state) {
            return state.data;
        },

        isLoading(state) {
            return state.loading;
        },

        paginationData(state) {
            return state.pagination;
        }
    },

    actions: {
        async fetchCharacters(pageUrl?: string) {
            this.loading = true;
            const response = await fetch(pageUrl ?? 'https://rickandmortyapi.com/api/character');
            try {
                const result = await response.json() as ApiResponse<Character>;
                this.data = result.results;
                this.pagination = {
                    ...result.info,
                    pageSize: Math.round(result.info.count / result.info.pages),
                    page: !pageUrl ? 1 : +pageUrl.split('page=')[1] // TODO: this is slightly dangerous! To improve
                };
                
                this.loaded = true;
            } catch (err) {
                this.data = [];
                console.error('Error loading characters', err);
                return err;
            }

            this.loading = false;
        },
    }
})