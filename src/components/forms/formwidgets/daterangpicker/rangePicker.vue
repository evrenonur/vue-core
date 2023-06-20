<template>
  <div class="col-xl-6">
    <div class="daterange-card">
      <h6 class="sub-title">Date Range Picker</h6>
      <p>The Date Range Picker use the current value of the input to initialize, and update the input if new dates are
        chosen.</p>
      <div class="theme-form">
        <div class="form-group">

          <datepicker class=" digits" v-model="date" range />
        </div>
      </div>
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