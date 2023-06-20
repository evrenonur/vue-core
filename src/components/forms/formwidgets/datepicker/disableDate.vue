<template>
    <div class="mb-3 row g-3">
        <label class="col-sm-3 col-form-label text-sm-end">Disable days of week</label>
        <div class="col-xl-5 col-sm-9">

            <datepicker class=" digits" v-model="date" :disabledDates="disabledDates" />
        </div>
    </div>
</template>
<script>
import { ref, computed } from 'vue';

export default {
    setup() {
        const date = ref(new Date());

     
        const disabledDates = computed(() => {
            const today = new Date();
            
            const tomorrow = new Date(today)
            tomorrow.setDate(tomorrow.getDate() + 1)
            
            const afterTomorrow = new Date(tomorrow);
            afterTomorrow.setDate(tomorrow.getDate() + 1);
            
            return [tomorrow, afterTomorrow]
        })
        
        return {
            disabledDates,
            date,
        }
    }
}
</script>