import { storeToRefs } from 'pinia';
import { onMounted, h } from 'vue';
import { usePets } from '../stores/pets';
import PetList from './PetList.vue';

export default {
    setup() {
        const store = usePets();
        const { cats } = storeToRefs(store);

        onMounted(() => {
            store.fetchCats();
        });

        function handleOnClick(index) {
            console.log('Clicked on cat picture #' + index);
        }

        return () =>
            h(PetList, {
                pets: cats.value,
                onClick: handleOnClick,
            });
    },
};
