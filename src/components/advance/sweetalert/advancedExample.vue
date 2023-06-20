<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header pb-0">
        <h4>Advanced State</h4>
      </div>
      <div class="card-body">
        <div class="btn-showcase">
          <button class="btn btn-primary sweet-12" type="button" v-on:click="advanced_success_alert">Primary</button>
          <button class="btn btn-secondary sweet-11" type="button" v-on:click="advanced_danger_alert">Secondary</button>
          <button class="btn btn-success sweet-13" type="button" v-on:click="advanced_info_alert">Success</button>
          <button class="btn btn-info sweet-10" type="button" v-on:click="advanced_warning_alert">Info</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        advanced_success_alert:function(){
        this.$swal({
          text:'A wild Pikachu appeared! What do you want to do?',
          showCancelButton: true,
     
          confirmButtonText: 'Throw Pokéball!',
          confirmButtonColor: 'var(--theme-deafult)',
          cancelButtonText: 'Defeat',
          cancelButtonColor: 'var(--theme-deafult)',
     
        }).then((result)=>{
          if(result.value){
            this.$swal({
                 icon: 'success',
              title:'Gotcha!',
              text:'Pikachu was caught!',
              type:'success',
               confirmButtonColor: 'var(--theme-deafult)',
            });
          }else{
            this.$swal({
              text:'Pikachu fainted! You gained 500 XP!',
               confirmButtonColor: 'var(--theme-deafult)',
            });
          }
        });
      },
      advanced_danger_alert:function(){
        this.$swal({
          text:'Are you sure you want to do this?',
          showCancelButton: true,
          confirmButtonText: 'Aww yiss!',
          confirmButtonColor: 'var(--theme-deafult)',
          cancelButtonText: 'Oh noez!',
          cancelButtonColor: '#efefef',
          reverseButtons: true
        });
      },
      advanced_info_alert:function(){
        this.$swal({
          text:'Write something here:',
          input: 'text',
           confirmButtonColor: 'var(--theme-deafult)',
        }).then((result)=>{
          if(result.value){
            this.$swal({
              text:'You typed:'+result.value,
               confirmButtonColor: 'var(--theme-deafult)',
            });
          } else{
            this.$swal({
              text:'You typed:'+result.value,
               confirmButtonColor: 'var(--theme-deafult)',
            });
          }
        });
      },
      advanced_warning_alert:function(){
        this.$swal({
          text:'Are you sure you want to do this?',
          showCancelButton: true,
          confirmButtonText: 'Aww yiss!',
          confirmButtonColor: 'var(--theme-deafult)',
          cancelButtonText: 'Oh noez!',
          cancelButtonColor: '#efefef',
          reverseButtons: true
        });
      },
    }
}
</script>