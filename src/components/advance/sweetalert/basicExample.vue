<template>
    <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Basic Examples</h4>
                  </div>
                  <div class="card-body">
                    <div class="btn-showcase">
                       <button class="btn btn-primary sweet-1" type="button" v-on:click="basic" >Basic</button>
                    <button class="btn btn-secondary sweet-2" type="button" v-on:click="basic_with_title" >With Title alert</button>
                    <button class="btn btn-success sweet-3" type="button" v-on:click="basic_success_alert" >Success alert</button>
                    <button class="btn btn-info sweet-4" type="button" v-on:click="basic_info_alert">Info alert</button>
                      <button class="btn btn-danger sweet-5" type="button" v-on:click="basic_warning_alert">Danger alert</button>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
export default {
    methods:{
         basic:function(){
        this.$swal({
             confirmButtonColor: 'var(--theme-deafult)',
          title:'Hello world!'
        });
      },
      basic_warning_alert:function(){
        this.$swal({
            icon: 'warning',
            title:"Are you sure?",
          text:'Once deleted, you will not be able to recover this imaginary file!',
          showCancelButton: true,
           confirmButtonText: 'Ok',
          confirmButtonColor: 'var(--theme-deafult)',
          cancelButtonText: 'Cancel',
          cancelButtonColor: '#efefef',
        }).then((result)=>{
          if(result.value){
            this.$swal({
             icon: 'success',
              text:'Poof! Your imaginary file has been deleted!',
              type:'success',
                confirmButtonColor: 'var(--theme-deafult)',
            });
          }else{
            this.$swal({
              text:'Your imaginary file is safe!',
                confirmButtonColor: 'var(--theme-deafult)',
            });
          }
        });
      },
      basic_with_title:function(){
        this.$swal({
             confirmButtonColor: 'var(--theme-deafult)',
          title:'Here\'s the title',
          text:'...and here\'s the text!'
        });
      },
      basic_success_alert:function(){
        this.$swal({
             confirmButtonColor: 'var(--theme-deafult)',
          icon: 'warning',
          title:'Good job!',
          text:'You clicked the button!',
          type:'info'
        });
      },
      basic_info_alert:function(){
        this.$swal({
          text:' Click on either the button or outside the modal.',
          confirmButtonColor: 'var(--theme-deafult)',
        }).then((result)=>{
          if(result.value){
            this.$swal({
              text:'The returned value is:'+result.value
            });
          }else{
            this.$swal({
              confirmButtonColor: 'var(--theme-deafult)',
              text:'The returned value is:'+result.value
            });
          }
        });
      }
    }
}
</script>