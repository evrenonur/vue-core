<template>
  <Breadcrumbs main="Apps" title="Project Create" />
  <div class="container-fluid project-create">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <newProject />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import newProject from "@/components/project/createproject/newProject.vue";
export default {
  components: {
    newProject,
  },
};
</script>