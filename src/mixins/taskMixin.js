const taskMixin = {
    
   
    methods:{
        onCustomStyleSubmit(){ 
           this.formSubmitted = true; 
           var values = this.inputs
          values.task.data.length<3 ? values.task.errorMessage = 'Please choose a task':   values.task.errorMessage = ''       
          values.sub.data.length<3 ? values.sub.errorMessage = 'Please choose a sub.':   values.sub.errorMessage = ''       
          values.date.data.length<3 ? values.date.errorMessage = 'Please choose a date.':   values.date.errorMessage = ''       
          values.select.data.length<3 ? values.select.errorMessage = 'Please provide a valid select.':   values.select.errorMessage = ''       
          values.desc.data.length<1 ? values.desc.errorMessage = 'Please select a valid desc.':   values.desc.errorMessage = ''           
        },
        
          }
}
  
  export default taskMixin