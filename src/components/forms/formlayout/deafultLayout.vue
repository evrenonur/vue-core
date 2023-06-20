<template>
     <div class="col-sm-12 col-xl-6">
                <div class="row">
                     <div class="col-sm-12">
                    <div class="card">
                      <div class="card-header pb-0">
                        <h4>Default Form Layout</h4><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
                      </div>
                      <div class="card-body">
                        <form class="theme-form">
                          <div class="mb-3">
                            <label class="col-form-label pt-0" for="exampleInputEmail1">Email address</label>
                            <input class="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email"><small class="form-text text-muted" id="emailHelp">We'll never share your email with anyone else.</small>
                          </div>
                          <div class="mb-3">
                            <label class="col-form-label pt-0" for="exampleInputPassword1">Password</label>
                            <input class="form-control" id="exampleInputPassword1" type="password" placeholder="Password">
                          </div>
                          <div class="checkbox p-0">
                            <input id="dafault-checkbox" type="checkbox">
                            <label class="mb-0" for="dafault-checkbox">Remember my preference</label>
                          </div>
                        </form>
                      </div>
                      <div class="card-footer text-end">
                        <button class="btn btn-primary">Submit</button>
                        <button class="btn btn-secondary ms-2">Cancel</button>
                      </div>
                    </div>
                  </div>
                  <horizontalLayout/>
                </div>
     </div>
</template>
<script>
import horizontalLayout from "./horizontalLayout.vue"
export default {
  components:{
    horizontalLayout
  }
}
</script>