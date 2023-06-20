<template>
  <Breadcrumbs main="Apps" title="To-Do" />
  <div class="container-fluid email-wrap bookmark-wrap todo-wrap">
    <div class="row">
      <todoSidebar />
      <div class="col-xl-9 xl-70 box-col-70">
        <addTask />
      </div>
    </div>
  </div>
</template>
<script>
import todoSidebar from "@/components/todo/todoSidebar.vue";
import addTask from "@/components/todo/addTask.vue";
export default {
  components: {
    todoSidebar,
    addTask,
  },
};
</script>