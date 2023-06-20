<template>
     <div class="col-sm-12 col-xl-6 box-col-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>With badges</h4>
                  </div>
                  <div class="card-body">
                    <ul class="list-group">
                      <li class="list-group-item d-flex justify-content-between align-items-center">Cras justo odio<span class="badge badge-primary counter">
                           <number
                  class="bold counter"
                  ref="number1"
                  :from="0"
                  :to="14"
                  :duration="4"
                  :delay="0"
                  easing="Power1.easeOut" /></span></li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in<span class="badge badge-secondary counter">
                          <number
                  class="bold counter"
                  ref="number1"
                  :from="0"
                  :to="2"
                  :duration="3"
                  :delay="0"
                  easing="Power1.easeOut" /></span></li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">Morbi leo risus<span class="badge badge-success rounded-pill counter">
                          <number
                  class="bold counter"
                  ref="number1"
                  :from="0"
                  :to="1"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut" /></span></li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in<span class="badge badge-info rounded-pill">100%</span></li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in<span class="badge badge-warning text-dark counter">
                           <number
                  class="bold counter"
                  ref="number1"
                  :from="0"
                  :to="2"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut" /></span></li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">Morbi leo risus<span class="badge badge-danger rounded-pill">sale</span></li>
                      <li class="list-group-item d-flex justify-content-between align-items-center">Cras justo odio<span class="badge badge-light text-dark counter">
                          <number
                  class="bold counter"
                  ref="number1"
                  :from="0"
                  :to="14"
                  :duration="5"
                  :delay="0"
                  easing="Power1.easeOut" /></span></li>
                    </ul>
                  </div>
                </div>
              </div>
</template>