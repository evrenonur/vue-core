<template>
    <div class="col-sm-12 col-md-6 ">
                  <div class="card">
                    <div class="card-header pb-0"> 
                         <h4 class="card-title">Touchspin Icon Button</h4><span>Use <code>data-bts-button-down-txt & data-bts-button-up-txt</code> attribute to set touchspin icon button.</span>
                    </div>
                    <div class="card-body">
                      <fieldset>
                        <div class="input-group">
                           <button type="button" class="btn btn-primary btn-square bootstrap-touchspin-down" @click="num8--" ><i class="fa fa-minus"></i></button>

                          <input class="touchspin form-control" type="text" v-model="num8">

                          <button type="button" class="btn btn-primary btn-square bootstrap-touchspin-down" @click="num8++" ><i class="fa fa-plus"></i></button>
                           
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
             num8:50.00,
        }
    },
     watch:{
      num8:function(newValue){
        if(newValue >= 100) {
          this.num8 = 100;
        } else if(newValue <= 0) {
          this.num8 = 0;
        }
      },
     }
}
</script>