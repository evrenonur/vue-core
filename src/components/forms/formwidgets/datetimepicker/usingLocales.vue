<template>
     <div class="mb-3 row g-3">
                          <label class="col-sm-3 col-form-label text-end">Using Locales</label>
                          <div class="col-xl-5 col-sm-7 col-lg-8">
                            <div class="input-group date" id="dt-local" data-target-input="nearest">
                            
                                <datepicker class=" datetimepicker-input digits"  v-model="date" />
                              <div class="input-group-text" data-target="#dt-local" data-toggle="datetimepicker"><i class="fa fa-calendar"></i></div>
                            </div>
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