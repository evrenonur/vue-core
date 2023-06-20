<template>
     <div class="col-md-12">
               <div class="mb-3">
                <label class="control-label">First Name</label>
                  <input class="form-control" type="text" placeholder="Johan" required="required">
                </div>
                <div class="mb-3">
                <label class="control-label">Last Name</label>
                    <input class="form-control" type="text" placeholder="Deo" required="required">
                </div>
            </div>
</template>
<script>
export default {
    data(){
        return{
             errors: [],
             formSubmitted:false,
             firstname:"",
            firstError:false,
            lastname:"",
            lastError:false,
        }
    },
    methods:{
        onSubmit(){
            this. formSubmitted=true;
             this.errors = []; 
             if (this.firstname.length<3||this.firstname>10 && this.lastname.length<3 || this.lastname.length>10  ) {
					this.firstError = true;
                   this.lastError=true;
					this.errors.push({      	
					});
				} else {
				this.firstError = false;
                   this.lastError=false;
					this.errors.push({
						
					});
				}
        }
    }
}
</script>