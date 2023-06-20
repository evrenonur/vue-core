<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Alert State</h4>
                  </div>
                  <div class="card-body">
                    <div class="btn-showcase">
                      <button class="btn btn-primary sweet-8" type="button"  v-on:click="success_alert_state">Primary</button>
                      <button class="btn btn-secondary sweet-7" type="button"  v-on:click="danger_alert_state">Secondary</button>
                      <button class="btn btn-success sweet-9" type="button" v-on:click="info_alert_state">Success</button>
                      <button class="btn btn-info sweet-6" type="button"  v-on:click="warning_alert_state">Info</button>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
export default {
  methods: {
    success_alert_state: function () {
      this.$swal({
        icon: "success",
        title: "Good job!",
        text: "You clicked the button!",
        type: "success",
          confirmButtonColor: 'var(--theme-deafult)',
      });
    },
    danger_alert_state: function () {
      this.$swal({
        icon: "error",
        title: "Good job!",
        text: "You clicked the button!",
        type: "error",
          confirmButtonColor: 'var(--theme-deafult)',
      });
    },
    info_alert_state: function () {
      this.$swal({
        icon: "info",
        title: "Good job!",
        text: "You clicked the button!",
        type: "info",
          confirmButtonColor: 'var(--theme-deafult)',
      });
    },
    warning_alert_state: function () {
      this.$swal({
        icon: "warning",
        title: "Good job!",
        text: "You clicked the button!",
        type: "warning",
          confirmButtonColor: 'var(--theme-deafult)',
      });
    },
  },
};
</script>