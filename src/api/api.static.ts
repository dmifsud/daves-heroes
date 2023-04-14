const baseUrl = 'https://rickandmortyapi.com/api/';


export const API_STATIC = {
    getCharacters: () => `${baseUrl}character/`,
    getCharacter: (id: number) => `${baseUrl}character/${id}`
};