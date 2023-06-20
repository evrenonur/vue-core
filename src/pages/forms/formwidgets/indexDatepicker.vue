<template>
     <Breadcrumbs main="Form Widgets" title="Date Picker"/>
      <div class="container-fluid">
            <div class="card">
              <div class="card-header pb-0">
                <h4>Date Picker</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="date-picker">
                      <form class="theme-form">
                          <defaultDate/>
                          <multipleDate/>
                          <monthDate/>
                          <minimumMaximum/>
                          <rangeDate/>
                          <disableDate/>
                          <orientationDate/>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
</template>
<script>
import defaultDate from "@/components/forms/formwidgets/datepicker/defaultDate.vue"
import multipleDate from "@/components/forms/formwidgets/datepicker/multipleDate.vue"
import monthDate from "@/components/forms/formwidgets/datepicker/monthDate.vue"
import minimumMaximum from "@/components/forms/formwidgets/datepicker/minimumMaximum.vue"
import rangeDate from "@/components/forms/formwidgets/datepicker/rangeDate.vue"
import disableDate from "@/components/forms/formwidgets/datepicker/disableDate.vue"
import orientationDate from "@/components/forms/formwidgets/datepicker/orientationDate.vue"
export default {
    components:{
        defaultDate,
        multipleDate,
        monthDate,
        minimumMaximum,
        rangeDate,
        disableDate,
        orientationDate
    }
}
</script>