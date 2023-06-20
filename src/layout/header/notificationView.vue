<template>
     <div class="notification-box"><vue-feather type="bell"></vue-feather> </div>
                <ul class="notification-dropdown onhover-show-div">
                  <li><vue-feather type="bell"></vue-feather>         
                    <h6 class="f-18 mb-0">Notitications</h6>
                  </li>
                  <li>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0"><vue-feather type="truck"></vue-feather></div>
                      <div class="flex-grow-1">
                        <p><router-link to="/ecommerce/order/history">Delivery processing </router-link><span class="pull-right">6 hr</span></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0"><vue-feather type="shopping-cart"></vue-feather></div>
                      <div class="flex-grow-1">
                        <p><router-link to="/ecommerce/cart">Order Complete</router-link> <span class="pull-right">3 hr</span></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0"><vue-feather type="file-text"></vue-feather></div>
                      <div class="flex-grow-1">
                        <p><router-link to="/ecommerce/invoice">Tickets Generated</router-link><span class="pull-right">1 hr</span></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0"><vue-feather type="send"></vue-feather></div>
                      <div class="flex-grow-1">
                        <p><router-link to="/email/email-inbox">Delivery Complete</router-link><span class="pull-right">45 min</span></p>
                      </div>
                    </div>
                  </li>
                  <li><a class="btn btn-primary" href="javascript:void(0)">Check all notification</a></li>
                </ul>
</template>