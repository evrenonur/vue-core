<template>
     <div class="mb-3 row g-3">
                          <label class="col-sm-3 col-form-label text-end">Time Only</label>
                          <div class="col-xl-5 col-sm-7 col-lg-8">
                            <div class="input-group date" id="dt-time" data-target-input="nearest">
                            
                               <Datepicker class=" datetimepicker-input digits" v-model="time" timePicker />
                              <div class="input-group-text" data-target="#dt-time" data-toggle="datetimepicker"><i class="fa fa-clock-o"></i></div>
                            </div>
                          </div>
                        </div>
</template>
<script>
import { ref } from 'vue';

export default {
    setup() {
        const time = ref({ 
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()
        });
        
        return {
            time,
        }
    }
}
</script>