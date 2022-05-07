import { defineStore } from 'pinia';

export const usePets = defineStore('pets', {
    state: () => {
        return {
            cats: [],
            dogs: [],
        };
    },

    actions: {
        async fetchCats() {
            try {
                const cats = await fetch(
                    'https://api.thecatapi.com/v1/images/search?limit=10&order=DESC'
                ).then(res => res.json());
                this.cats = cats.map(cat => cat.url);
            } catch (e) {
                //
            }
        },
        async fetchDogs() {
            try {
                const dogs = await fetch(
                    'https://dog.ceo/api/breeds/image/random/10'
                ).then(res => res.json());
                this.dogs = dogs.message;
            } catch (e) {
                //
            }
        },
    },
});
