<template>
     <div class="col-xl-4 col-sm-6" v-for="item in ticket" :key="item">
                        <div class="card ecommerce-widget pro-gress">
                          <div class="card-body support-ticket-font">
                            <div class="row">
                              <div class="col-5">
                                <h6>{{item.title}}</h6>
                                <h4 class="total-num counter"><number class="counter" ref="number1" :from="0" :to="item.number" :duration="5" :delay="0" easing="Power1.easeOut"/></h4>
                              </div>
                              <div class="col-7">
                                <div class="text-md-end">
                                  <ul>
                                    <li>Profit<span class="product-stts txt-primary ms-2">8989<i class="icon-angle-up f-12"></i></span></li>
                                    <li>Loss<span class="product-stts txt-danger ms-2">2560<i class="icon-angle-down f-12"></i></span></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="progress-showcase">
                              <div class="progress">
                                <div class="progress-bar " :class="item.progress" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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
      ticket:(state)=>state.support.ticket,   
    }),
  },
 
}
</script>