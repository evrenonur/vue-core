<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header ">
        <h5 class="card-title">toastr with icon</h5>
      </div>
      <div class="card-body btn-showcase">

        <button class="btn btn-success " type="button" @click="success_with_icon" variant="success">Success</button>

        <button class="btn btn-info " type="button" @click="info_with_icon" variant="info">Info</button>

        <button class="btn btn-danger " type="button" @click="error_with_icon" variant="danger">Error</button>

        <button class="btn btn-info " type="button" @click="info_with_cancle" variant="info">Cancle</button>

      </div>
    </div>
  </div>
</template>
<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
  methods: {
    success_with_icon() {
      toast.success(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored',
      });
    },
    info_with_icon() {
      toast.info(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored',
      });
    },
    error_with_icon() {
      toast.error(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored',
      });
    },
    info_with_cancle() {
      toast.info(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored',
      });
    }
  }
}
</script>