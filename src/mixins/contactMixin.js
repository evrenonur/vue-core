

const contactMixin = {
    
   
    methods:{
        collapseFilter() {
          this.filtered = !this.filtered;
        },
        collapse(){
           this.filter = !this.filter;
        },
        loadFile(event,contact){
          var file = event.target.files[0];
          this.src = URL.createObjectURL(file);
          contact.imgUrl=this.src
        },
          basic_warning_alert:function(index){
          this.$swal({
              icon: 'warning',
              title:"Are you sure?",
            text:'This contact will be deleted from your Personal Contacts and from the chat list too.',
            showCancelButton: true,
             cancelButtonText: 'Cancel',
             confirmButtonText: 'Ok',
              confirmButtonColor: 'var(--theme-deafult)',
          }).then((result)=>{
            if(result.value){
              this.contacts.splice(index,1)
              this.$swal({
               icon: 'success',
                text:'Poof! Your imaginary file has been deleted!',
                type:'success',
                confirmButtonColor: 'var(--theme-deafult)',
              });
            }else{
              this.$swal({
                text:'Your contact is safe!',
                 confirmButtonColor: 'var(--theme-deafult)',
              });
            }
          });
        },
        
     },
     mounted() {
     },
}
  
  export default contactMixin