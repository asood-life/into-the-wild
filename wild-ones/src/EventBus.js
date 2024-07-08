import { reactive } from 'vue';

// creating a reactive EventBus object
const EventBus = reactive({
    data: null, // property to store data

    setData(data) {
        this.data = data;
    },

    getData() {
        return this.data;
    }
});

export default EventBus;
