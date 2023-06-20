<template>
    <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0"> 
                    <h4>Simple Pricing Card</h4>
                  </div>
                  <div class="card-body pricing-content">
                    <div class="row">
                      <div class="col-lg-3 col-sm-6 box-col-3" v-for="item in pricing" :key="item">
                        <div class="card text-center pricing-simple">
                          <div class="card-body">
                            <h3>{{item.title}}</h3>
                            <h1>{{item.price}}</h1>
                            <h6 class="mb-0">{{item.sub}}</h6>
                          </div><a class="btn btn-lg btn-primary btn-block" href="javascript:void(0)">
                            <h5 class="mb-0">Purchase</h5></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  
     computed: {
    ...mapState({
      pricing:(state)=>state.ecommerce.simplePricing,    
    }),
   },
    
}
</script>