<template>
     <div class="col-xl-6 box-col-6">
                <div class="widget-joins card widget-arrow">
                  <div class="card-header pb-0">
                    <h4>Sale details</h4>
                  </div>
                  <div class="card-body">
                    <div class="row gy-4">
                      <div class="col-sm-6">
                        <div class="widget-card">
                          <div class="d-flex align-self-center">
                            <div class="widget-icon bg-light-primary flex-shrink-0"><i class="icofont icofont-arrow-down font-primary"></i></div>
                            <div class="flex-grow-1">
                              <h6>Today</h6>
                              <h5>$<span class="counter"><number
                                 class="bold transition"
                                 ref="number1"
                                :from="0"
                                :to="5698"
                                :duration="5"
                                :delay="0"
                                easing="Power1.easeOut"
                            /></span><span class="font-primary ms-1">-36%($258)</span></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="widget-card">
                          <div class="d-flex align-self-center">
                            <div class="widget-icon bg-light-secondary flex-shrink-0"><i class="icofont icofont-arrow-down font-secondary"></i></div>
                            <div class="flex-grow-1">
                              <h6>Month</h6>
                              <h5>$<span class="counter"> <number
                                 class="bold transition"
                                 ref="number1"
                                :from="0"
                                :to="654"
                                :duration="5"
                                :delay="0"
                                easing="Power1.easeOut"
                                 /></span><span class="font-secondary ms-1">-15%($369)</span></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="widget-card">
                          <div class="d-flex align-self-center">
                            <div class="widget-icon bg-light-success flex-shrink-0"><i class="icofont icofont-arrow-up font-success"></i></div>
                            <div class="flex-grow-1">
                              <h6>Week</h6>
                              <h5>$647<span class="font-success ms-1">+65%($69)</span></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="widget-card">
                          <div class="d-flex align-self-center">
                            <div class="widget-icon bg-light-danger flex-shrink-0"><i class="icofont icofont-arrow-up font-danger"></i></div>
                            <div class="flex-grow-1">
                              <h6>Year</h6>
                              <h5>$918<span class="font-danger ms-1">+90%($54)</span></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>