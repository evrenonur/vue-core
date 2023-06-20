<template>
     <div class="col-sm-12 col-md-12 col-xl-6">
                  <div class="card">
                    <div class="card-header pb-0">
                      <h4 class="card-title">Touchspin With Dropdown</h4><span>Use <code>data-bts-prefix & data-bts-postfix</code> attribute to set Prefix and Postfix to touchspin input with button.</span>
                    </div>
                    <div class="card-body">
                      <fieldset>
                        <div class="input-group">
                             <button type="button" class="btn btn-primary btn-square bootstrap-touchspin-down" @click="num3--" ><i class="fa fa-minus"></i></button>
                             <span class="input-group-text">Pre</span>
                          <input class="touchspin form-control" type="text" v-model="num3">
                          <span class="input-group-text">Post</span>
                          <button type="button" class="btn btn-primary btn-square bootstrap-touchspin-down" @click="num3++" ><i class="fa fa-plus"></i></button>
                          <div class="dropdown-basic">
                            <div class="dropdown">
                              <div class="btn-group mb-0 me-0">
                                <button class="dropbtn btn-light txt-dark" type="button">Action <span><i class="icofont icofont-arrow-down"></i></span></button>
                                <div class="dropdown-content"><a href="#">Action</a><a href="#">Another Action</a><a href="#">Something Else Here</a>
                                  <div class="dropdown-divider"></div><a href="#">Separated Link </a>
                                </div>
                              </div>
                            </div>
                          </div>
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
             num3:50,
        }
    },
     watch:{
      num3:function(newValue){
        if(newValue >= 100) {
          this.num3 = 100;
        } else if(newValue <= 0) {
          this.num3 = 0;
        }
      },
     }
}
</script>