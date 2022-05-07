import { storeToRefs } from 'pinia';
import { onMounted, h } from 'vue';
import { usePets } from '../stores/pets';
import PetList from './PetList.vue';

export default {
    setup() {
        const store = usePets();
        const { dogs } = storeToRefs(store);

        onMounted(() => {
            store.fetchDogs();
        });

        function handleOnClick(index) {
            console.log('Clicked on dog picture #' + index);
        }

        return () =>
            h(PetList, {
                pets: dogs.value,
                onClick: handleOnClick,
            });
    },
};
