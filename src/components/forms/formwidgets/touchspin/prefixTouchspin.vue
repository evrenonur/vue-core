<template>
     <div class="col-sm-12 col-md-6">
                  <div class="card">
                    <div class="card-header pb-0">
                       <h4 class="card-title">Touchspin with Prefix</h4><span>Add <code>data-bts-prefix="PREFIX_VALUE"</code> attribute to input to add prefix to touchspin input group.</span>
                    </div>
                    <div class="card-body">
                      <fieldset>
                        <div class="input-group">
                             <button type="button" class="btn btn-primary btn-square bootstrap-touchspin-down" @click="num4--" ><i class="fa fa-minus"></i></button>
                       <span class="input-group-text">#</span>   
                       <input class="touchspin form-control" type="text" v-model="num4"> 
                          <button type="button" class="btn btn-primary btn-square bootstrap-touchspin-down" @click="num4++" ><i class="fa fa-plus"></i></button>
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
             num4:40,
        }
    },
     watch:{
      num4:function(newValue){
        if(newValue >= 100) {
          this.num4 = 100;
        } else if(newValue <= 0) {
          this.num4 = 0;
        }
      },
     }
}
</script>