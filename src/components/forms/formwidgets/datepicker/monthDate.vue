<template>
     <div class="mb-3 row g-3">
                          <label class="col-sm-3 col-form-label text-sm-end">Month selection</label>
                          <div class="col-xl-5 col-sm-9">
                          
                              <datepicker class="datepicker-here  digits" v-model="month" monthPicker />
                          </div>
                        </div>
</template>
<script>
import { ref } from 'vue';

export default {
    setup() {
        const month = ref({ 
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        });
        
        return {
            month,
        }
    }
}
</script>