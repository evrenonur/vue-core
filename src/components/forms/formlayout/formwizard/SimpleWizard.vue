<template>
    <div class="col-md-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Simple Form Wizard</h4><span>Please Make sure fill all the filed before click on next button</span>
                  </div>
                  <div class="card-body">
                     <Wizard
          squared-tabs
          :custom-tabs="[
             {
            },
            { 
            },
            {
            },
             {
            },
          ]"
          :beforeChange="onTabBeforeChange"
          @change="onChangeCurrentTab"
          @submit.prevent="onSubmit"
        >
          <div class="col-xs-12" v-if="currentTabIndex === 0">
            <personal/>
          </div>
          <div class="col-xs-12 " v-if="currentTabIndex === 1">
            <div class="col-md-12">
              <div class="mb-3">
                <label class="control-label">Email</label>
                   <input class="form-control" type="text" placeholder="name@example.com" required="required">
              </div>
            <div class="mb-3">
                <label class="control-label">Password</label>
                <input class="form-control" type="password" placeholder="Password" required="required">
            </div>
            </div>
          </div>
          <div class="col-xs-12 " v-if="currentTabIndex === 2">
            <div class="col-md-12">
               <div class="mb-3">
                    <label class="control-label">Birth date</label>
                    <input class="form-control" type="date" required="required">
                </div>
                <div class="mb-3">
                    <label class="control-label">Have Passport</label>
                    <input class="form-control" type="text" placeholder="yes/No" required="required">
                </div>
            </div>
          </div>
          <div class="col-xs-12 " v-if="currentTabIndex === 3">
            <div class="col-md-12">
             <div class="mb-3">
                <label class="control-label">State</label>
                <input class="form-control mt-1" type="text" placeholder="State" required="required">
            </div>
            <div class="mb-3">
                <label class="control-label">City</label>
                <input class="form-control mt-1" type="text" placeholder="City" required="required">
            </div>
            </div>
          </div>
        </Wizard>
                  </div>
                </div>
              </div>
</template>
<script>
import personal from "./personalView.vue";
import "form-wizard-vue3/dist/form-wizard-vue3.css";
import Wizard from 'form-wizard-vue3'
export default {
  name: "App",
  components: {
    Wizard,
    personal,
  },
  data(){
    return {
      currentTabIndex: 0,
    };
  },
  methods: {
    onChangeCurrentTab(index) {
      this.currentTabIndex = index;
    },
  
  },
};
</script>