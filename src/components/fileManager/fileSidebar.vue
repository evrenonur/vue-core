<template>
     <div class="col-xl-3 box-col-30">
                <div class="md-sidebar job-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)">file filter</a>
                  <div class="md-sidebar-aside custom-scrollbar">
                    <div class="file-sidebar">
                      <div class="card">
                        <div class="card-body">
                          <ul>
                            <li>    
                              <div class="btn btn-primary">  <vue-feather type="home"></vue-feather>Home </div>
                            </li>
                            <li>
                              <div class="btn btn-light"><vue-feather type="folder"></vue-feather>All    </div>
                            </li>
                            <li>
                              <div class="btn btn-light"><vue-feather type="clock"></vue-feather>Recent    </div>
                            </li>
                            <li>
                              <div class="btn btn-light"><vue-feather type="star"></vue-feather>Starred      </div>
                            </li>
                            <li>
                              <div class="btn btn-light"><vue-feather type="alert-circle"></vue-feather>Recovery        </div>
                            </li>
                            <li>
                              <div class="btn btn-light"><vue-feather type="trash-2"></vue-feather>Deleted </div>
                            </li>
                          </ul>
                          <hr>
                          <ul>
                            <li>
                              <div class="btn btn-outline-primary">  <vue-feather type="database"></vue-feather> Storage   </div>
                              <div class="m-t-15">
                                <div class="progress sm-progress-bar mb-3">
                                  <div class="progress-bar bg-primary" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 class="f-w-500">25 GB of 100 GB used</h6>
                              </div>
                            </li>
                          </ul>
                          <hr>
                          <ul>
                            <li>
                              <div class="btn btn-outline-primary">  <vue-feather type="grid"></vue-feather>Pricing plan</div>
                            </li>
                            <li> </li>
                            <div class="pricing-plan">
                              <h6>Trial Version </h6>
                              <h5>FREE</h5>
                              <p>100 GB Space</p>
                              <div class="btn btn-outline-primary btn-xs">Selected</div><img class="bg-img" src="@/assets/images/dashboard/folder.png" alt="">
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>