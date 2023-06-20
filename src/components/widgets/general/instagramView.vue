<template>
    <div class="col-sm-6">
                    <div class="card social-widget-card">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="social-font flex-shrink-0"><img src="@/assets/images/general-widget/svg-icon/4.svg" alt=""></div>
                          <div class="flex-grow-1">
                            <h4>Instagram</h4>
                          </div>
                        </div>
                      </div>
                      <div class="card-footer">
                        <div class="row">
                          <div class="col text-center">
                            <h6>Posts</h6>
                            <h5 class="counter mb-0 font-primary mt-1"> <number class="bold counter" ref="number1" :from="0" :to="369" :duration="5" :delay="0" easing="Power1.easeOut" /></h5>
                          </div>
                          <div class="col text-center">
                            <h6>Likes</h6>
                            <h5 class="counter mb-0 font-primary mt-1"> <number class="bold counter" ref="number1" :from="0" :to="3458" :duration="5" :delay="0" easing="Power1.easeOut" /></h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
</template>