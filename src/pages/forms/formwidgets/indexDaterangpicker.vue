<template>
      <Breadcrumbs main="Form Widgets" title="Date Range Picker"/>
       <div class="container-fluid">
            <div class="card">
              <div class="card-header pb-0">
                <h4>Date Range Picker</h4>
              </div>
              <div class="card-body">
                <div class="row date-range-picker">
                    <rangePicker/>
                    <singleDate/>
                    <initiallyEmpty/>
                </div>
              </div>
            </div>
       </div>
</template>
<script>
import rangePicker from "@/components/forms/formwidgets/daterangpicker/rangePicker.vue"
import singleDate from "@/components/forms/formwidgets/daterangpicker/singleDate.vue"
import initiallyEmpty from "@/components/forms/formwidgets/daterangpicker/initiallyEmpty.vue"
export default {
    components:{
        rangePicker,
        singleDate,
        initiallyEmpty
    }
}
</script>