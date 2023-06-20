<template>
  <div class="col-xl-6">
    <div class="daterange-card">
      <h6 class="sub-title">Single Date Picker</h6>
      <p>The Date Range Picker can be turned into a single date picker widget with only one calendar. In this example,
        dropdowns to select a month and year have also been enabled at the top of the calendar to quickly jump to
        different months.</p>
      <div class="theme-form">
        <div class="form-group">
          <datepicker class=" digits" v-model="date" :format="format" placeholder="yyyy-mm-dd" />
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