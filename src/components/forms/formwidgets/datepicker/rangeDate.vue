<template>
    <div class="mb-3 row g-3">
        <label class="col-sm-3 col-form-label text-sm-end">Range of dates</label>
        <div class="col-xl-5 col-sm-9">

            <datepicker class="datepicker-here digits" v-model="date" range />
        </div>
    </div>
</template>
<script>
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const date = ref();

       
        onMounted(() => {
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date.value = [startDate, endDate];
        })
        
        return {
            date,
        }
    }
}
</script>