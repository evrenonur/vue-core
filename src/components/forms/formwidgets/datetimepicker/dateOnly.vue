<template>
  <div class="mb-3 row g-3">
    <label class="col-sm-3 col-form-label text-end">Date Only</label>
    <div class="col-xl-5 col-sm-7 col-lg-8">
      <div class="input-group date" id="dt-date" data-target-input="nearest">
        <datepicker class=" datetimepicker-input digits" v-model="date" :format="format" />
        <div class="input-group-text" data-target="#dt-date" data-toggle="datetimepicker"><i class="fa fa-calendar"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
    setup() {
        const date = ref();
        
        const format = (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return ` ${day}/${month}/${year}`;
        }
        
        return {
            date,
            format,
        }
    }
}
</script>