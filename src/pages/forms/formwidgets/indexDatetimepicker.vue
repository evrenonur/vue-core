<template>
    <Breadcrumbs main="Form Widgets" title="Date Time Picker"/>
     <div class="container-fluid date-time">
            <div class="card">
              <div class="card-header pb-0">
                <h4>Date  Time Picker</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="datetime-picker">
                      <form class="theme-form">
                          <usingLocales/>
                          <timeOnly/>
                          <dateOnly/>
                          <noIcon/>
                          <disableDate/>
                          <viewMode/>
                          <disableDay/>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
     </div>
</template>
<script>
import usingLocales from "@/components/forms/formwidgets/datetimepicker/usingLocales.vue"
import timeOnly from "@/components/forms/formwidgets/datetimepicker/timeOnly.vue"
import dateOnly from "@/components/forms/formwidgets/datetimepicker/dateOnly.vue"
import noIcon from "@/components/forms/formwidgets/datetimepicker/noIcon.vue"
import disableDate from "@/components/forms/formwidgets/datetimepicker/disableDate.vue"
import viewMode from "@/components/forms/formwidgets/datetimepicker/viewMode.vue"
import disableDay from "@/components/forms/formwidgets/datetimepicker/disableDay.vue"
export default {
    components:{
        usingLocales,
        timeOnly,
        dateOnly,
        noIcon,
        disableDate,
        viewMode,
        disableDay
    }
}
</script>