<template>
     <div class="mb-3 row g-3">
                          <label class="col-sm-3 col-form-label text-sm-end">Selecting multiple dates</label>
                          <div class="col-xl-5 col-sm-9">
                           
                            <datepicker class="datepicker-here digits"  v-model="date" multiDates />
                          </div>
                        </div>
</template>
<script>
import { ref } from 'vue';

export default {
    setup() {
        const date = ref();
        
        return {
          date,
        }
    }
}
</script>