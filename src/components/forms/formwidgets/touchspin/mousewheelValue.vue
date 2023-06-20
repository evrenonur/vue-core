<template>
    <div class="col-sm-12 col-md-6 ">
                  <div class="card">
                    <div class="card-header pb-0">
  <h4 class="card-title">Touchspin mousewheel Disable</h4><span>Add <code>.touchspin-stop-mousewheel</code> class to diable mousewheel.</span>
                    </div>
                    <div class="card-body">
                      <fieldset>
                        <div class="input-group">
                           <button type="button" class="btn btn-primary btn-square bootstrap-touchspin-down" @click="num5--" ><i class="fa fa-minus"></i></button>

                          <input class="touchspin form-control" type="text" v-model="num5">

                          <button type="button" class="btn btn-primary btn-square bootstrap-touchspin-down" @click="num5++" ><i class="fa fa-plus"></i></button>
                           
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
               
   
</template>
<script>
export default {
    data(){
        return{
             num5:40, 
             num9:60
        }
    },
     watch:{
      num5:function(newValue){
        if(newValue >= 100) {
          this.num5 = 100;
        } else if(newValue <= 0) {
          this.num5 = 0;
        }
      },
     }
}
</script>