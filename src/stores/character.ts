import { defineStore } from 'pinia';
import { Character } from '../models/dto/characters';
import { API_STATIC } from '../api/api.static';

export const useCharacter = defineStore('character-store', {
    state: (): { // TODO: extract this to StateSlice
        data: Character | null,
        loading: boolean;
        loaded: boolean;
    } => {
        return {
            data: null,
            loading: false,
            loaded: false
        }
    },

    getters: {
        result(state) {
            return state.data;
        },

        isLoading(state) {
            return state.loading;
        },

        episodeAppearance(state): string {
            return (state.data?.episode ?? [])
                .map(
                    episodeUrl => 
                        episodeUrl.replace('https://rickandmortyapi.com/api/episode/', '')
                    )
                .join(', ');
        }
    },

    actions: {
        async fetchCharacter(id: number) {
            this.loading = true;
            const response = await fetch(API_STATIC.getCharacter(id));
            try {
                const result = await response.json() as Character;
                this.data = result;
                this.loaded = true;
            } catch (err) {
                this.data = null;
                console.error('Error loading character', err);
                return err;
            }

            this.loading = false;
        },
    }
})