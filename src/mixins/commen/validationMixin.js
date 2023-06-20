const validationMixin = {
    
   
    methods:{
        onCustomStyleSubmit(){ 
           this.formSubmitted = true; 
           var values = this.inputs
          values.firstname.data.length<3 ? values.firstname.errorMessage = 'Please choose a firstname':   values.firstname.errorMessage = ''       
          values.lastname.data.length<3 ? values.lastname.errorMessage = 'Please choose a lastname.':   values.lastname.errorMessage = ''       
          values.username.data.length<3 ? values.username.errorMessage = 'Please choose a username.':   values.username.errorMessage = ''       
          values.city.data.length<3 ? values.city.errorMessage = 'Please provide a valid city.':   values.city.errorMessage = ''       
          values.state.data.length<1 ? values.state.errorMessage = 'Please select a valid state.':   values.state.errorMessage = ''       
          values.zip.data.length<7 ? values.zip.errorMessage = 'Please provide a valid zip.':   values.zip.errorMessage = ''       
        },
        
          }
}
  
  export default validationMixin