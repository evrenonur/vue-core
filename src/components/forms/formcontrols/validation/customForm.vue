<template>
           <div class="card">
                  <div class="card-header pb-0">  <h4>Custom styles</h4><span class="mt-2">For custom Bootstrap form validation messages, you’ll need to add the <code class="text-danger">novalidate</code> boolean attribute to your <code class="text-danger">&lt;form&gt;</code>. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you.</span><span>When attempting to submit, you’ll see the <code class="text-danger">:invalid </code> and <code class="text-danger">:valid </code> styles applied to your form controls.</span>
                  </div>
                  <div class="card-body">
                    <form class="needs-validation" novalidate="" @submit.prevent="onCustomStyleSubmit">
                      <div class="row g-3">
                        <div class="col-md-4">
                          <label class="form-label" >First name</label>
                        <input type="text" class="form-control"   v-bind:class=" formSubmitted ? inputs.firstname.errorMessage.length ? 'is-invalid' : 'is-valid' : '' " id="name" placeholder="Your name" v-model="inputs.firstname.data">
                        <div class="invalid-feedback" v-if="inputs.firstname.errorMessage.length">{{ inputs.firstname.errorMessage }}</div>
                        <div class="valid-feedback" v-else>Looks Good!</div>
                        </div>
                        <div class="col-md-4">
                          <label class="form-label" for="validationCustom02">Last name</label>
                          <input class="form-control"  type="text" v-bind:class=" formSubmitted ? inputs.lastname.errorMessage.length ? 'is-invalid' : 'is-valid' : '' " id="name" placeholder="Your name" v-model="inputs.lastname.data">
                        <div class="invalid-feedback" v-if="inputs.lastname.errorMessage.length">{{ inputs.lastname.errorMessage }}</div>
                        <div class="valid-feedback" v-else>Looks Good!</div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <label class="form-label" for="validationCustomUsername">Username</label>
                          <div class="input-group"><span class="input-group-text" id="inputGroupPrepend">@</span>
                           <input class="form-control" id="validationCustomUsername" type="text" v-bind:class=" formSubmitted ? inputs.username.errorMessage.length ? 'is-invalid' : 'is-valid' : '' " placeholder="Username" v-model="inputs.username.data" >
                        <div class="invalid-feedback" v-if="inputs.username.errorMessage.length">{{ inputs.username.errorMessage }}</div>
                        <div class="valid-feedback" v-else>Looks Good!</div>
                        </div>
                      </div></div>
                      <div class="row g-3">
                        <div class="col-md-6">
                          <label class="form-label" for="validationCustom03">City</label>
                          <input class="form-control" id="validationCustom03" type="text" v-bind:class=" formSubmitted ? inputs.city.errorMessage.length ? 'is-invalid' : 'is-valid' : '' " placeholder="City" required="" v-model="inputs.city.data">
                        <div class="invalid-feedback" v-if="inputs.city.errorMessage.length">{{ inputs.city.errorMessage }}</div>
                         <div class="valid-feedback" v-else>Looks Good!</div>
                        </div>
                        <div class="col-md-3">
                          <label class="form-label" for="validationCustom04"  >State</label>
                          <select class="form-select" id="validationCustom04" v-bind:class=" formSubmitted ?inputs.state.errorMessage.length ? 'is-invalid' : 'is-valid' : '' "  v-model="inputs.state.data"  required="">
                          <option selected="" disabled="" value="">Choose...</option>
                          <option v-for="(value,index) in optionValues" :value="value" :key="value+index">{{value}}</option>
                        </select>
                        <div class="invalid-feedback" v-if="inputs.state.errorMessage.length">{{ inputs.state.errorMessage }}</div>
                         <div class="valid-feedback" v-else>Looks Good!</div>
                        </div>
                        <div class="col-md-3 mb-3">
                          <label class="form-label" for="validationCustom05">Zip</label>
                         <input class="form-control" id="validationCustom05" type="text" v-bind:class=" formSubmitted ? inputs.zip.errorMessage.length ? 'is-invalid' : 'is-valid' : '' "  v-model="inputs.zip.data" placeholder="Zip" required="">
                        <div class="invalid-feedback" v-if="inputs.zip.errorMessage.length">{{ inputs.zip.errorMessage }}</div>
                         <div class="valid-feedback" v-else>Looks Good!</div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="form-check">
                          <div class="checkbox p-0">
                            <input class="form-check-input" id="invalidCheck" type="checkbox" required="" >
                            <label class="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
                          </div>
                          <div class="invalid-feedback">You must agree before submitting.</div>
                        </div>
                      </div>
                      <button class="btn btn-primary" type="submit">Submit form</button>
                    </form>
                  </div>
               </div>
</template>
<script>
import validationMixin from "@/mixins/commen/validationMixin"
export default {
   mixins: [validationMixin],
   data(){
        return{
          errors: [],
          inputs:{
            firstname:{
              data:'Mark',
              errorMessage:'asdasd',
            },lastname:{
              data:'Otto',
              errorMessage:''
            },username:{
              data:'',
              errorMessage:''
            },city:{
              data:'',
              errorMessage:''
            },state:{
              data:'',
              errorMessage:''
            },zip:{
              data:'',
              errorMessage:''
            },
          },
          optionValues:['one','two','three'],
          formSubmitted:false,
   }
    },    
}
</script>