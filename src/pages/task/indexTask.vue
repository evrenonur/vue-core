<template>
  <Breadcrumbs main="Apps" title="Tasks" />
  <div class="container-fluid">
    <div class="email-wrap bookmark-wrap">
      <div class="row">
        <taskSidebar />

      </div>

    </div>
  </div>
</template>
<script>
import taskSidebar from "@/components/task/taskSidebar.vue"

export default {
  components: {
    taskSidebar,
  },
  data() {
    return {
      filtered: false,
    };
  },
  methods: {
    collapseFilter() {
      this.filtered = !this.filtered;
    },
  }
}
</script>