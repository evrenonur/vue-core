<template>
    <div class="mb-2">
                          <label for="f1-first-name">First Name</label>
                          <input class="form-control"  v-bind:class=" formSubmitted ? firstError ? 'is-invalid' : 'is-valid' : '' " v-model="firstname" id="f1-first-name" type="text" name="f1-first-name" placeholder="name@example.com" required="">
                        </div>
                        <div class="mb-2">
                          <label for="f1-last-name">Last name</label>
                          <input class="f1-last-name form-control" id="f1-last-name" type="text" name="f1-last-name" placeholder="Last name..." required="">
                        </div>
         
         
</template>
<script>
export default {
     data() {
    return {
      currentTabIndex: 0,
      errors: [],
          formSubmitted:false,
          firstname:"",
          firstError:false,
          lastname:"",
          lastError:false,
    };
  },
  methods: {
      onCustomStyleSubmit(){ 
           this.formSubmitted = true; 
        this.errors = [];          
				if (this.firstname.length<3||this.firstname>10 && this.lastname.length<3 || this.lastname.length>10  ) {
					this.firstError = true;
          this.lastErrorl=true;
				} else {
				this.firstError = false;
        this.lastError=false;
				}
      },
   

  },
}
</script>