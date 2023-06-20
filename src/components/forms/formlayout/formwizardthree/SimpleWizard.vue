<template>
      <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Form Wizard with icon</h4>
                  </div>
                  <div class="card-body">  
                       <form  method="post">            
        <Wizard
          squared-tabs
          :custom-tabs="[
              {
              title:'Registration',
              icon: 'user'
              },
              {
              title:'Email',
              icon: 'key'
              },
              {
              title:'Birth Date',
              icon: 'twitter'
              }
          ]"
          :beforeChange="onTabBeforeChange"
          @change="onChangeCurrentTab"
          @submit.prevent="onSubmit"
        >
          <div class="col-xs-12" v-if="currentTabIndex === 0">
            <personal />
          </div>
          
               <fieldset v-if="currentTabIndex === 1">
            <div class="mb-2">
                          <label class="sr-only" for="f1-email">Email</label>
                          <input class="f1-email form-control" id="f1-email" type="text" name="f1-email" placeholder="Email..." required="">
                        </div>
                        <div class="mb-2">
                          <label class="sr-only" for="f1-password">Password</label>
                          <input class="f1-password form-control" id="f1-password" type="password" name="f1-password" placeholder="Password..." required="">
                        </div>
                        <div class="mb-2">
                          <label class="sr-only" for="f1-repeat-password">Repeat password</label>
                          <input class="f1-repeat-password form-control" id="f1-repeat-password" type="password" name="f1-repeat-password" placeholder="Repeat password..." required="">
                        </div> 
               </fieldset>       
        
          
            <fieldset v-if="currentTabIndex === 2">
                <div class="mb-2">
                          <label class="sr-only">DD</label>
                          <input class="form-control" id="dd" type="number" placeholder="dd" required="">
                        </div>
                        <div class="mb-2">
                          <label class="sr-only">MM</label>
                          <input class="form-control" id="mm" type="number" placeholder="mm" required="">
                        </div>
                        <div class="mb-2">
                          <label class="sr-only">YYYY</label>
                          <input class="form-control" id="yyyy" type="number" placeholder="yyyy" required="">
                        </div>
            </fieldset>
         
        </Wizard>
                       </form>
                  </div>
                </div>
      </div>
</template>
<script>
import personal from "./personalView.vue"
import "form-wizard-vue3/dist/form-wizard-vue3.css";
import Wizard from "form-wizard-vue3";
export default {
  name: "App",
  components: {
    Wizard,
    personal
  },
  data() {
    return {
      currentTabIndex: 0,
    };
  },
  methods: {
    onChangeCurrentTab(index, ) {
      this.currentTabIndex = index;
    },
  
  },
};
</script>