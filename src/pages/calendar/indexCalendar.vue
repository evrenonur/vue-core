<template>
  <Breadcrumbs main="Apps" title="Calendar" />
  <div class="container-fluid calendar-basic">
    <div class="card">
      <calendarView />
    </div>
  </div>
</template>
<script>
import calendarView from "@/components/calendar/calendarView.vue"
export default {
  components: { calendarView, },

};
</script>