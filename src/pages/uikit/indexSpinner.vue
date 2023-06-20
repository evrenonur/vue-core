<template>
    <Breadcrumbs main="Ui Kits" title="Spinners"/>
     <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h4>Loader Style</h4>
                  </div>
                  <div class="card-body">
                    <div class="row">
                        <loaderView/>
                        <spinnerView/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
     </div>
</template>
<script>
import loaderView from "@/components/uikit/spinner/loaderView.vue"
import spinnerView from "@/components/uikit/spinner/spinnerView.vue"
export default {
    components:{
        loaderView,
        spinnerView
    }
}
</script>