<template>
     <div class="col-sm-12 col-lg-6 col-xl-8 col-md-12 box-col-6 xl-50">
                <div class="card">
                  <div class="card-header pb-0">
                    <div class="d-flex"> 
                      <div class="flex-grow-1"> 
                        <h4>Contact Us</h4>
                      </div>
                     
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="contact-form">
                      <form class="theme-form">
                        <div class="form-icon"><i class="icofont icofont-envelope-open"></i></div>
                        <div class="mb-3">
                          <label for="exampleInputName">Your Name</label>
                          <input class="form-control" id="exampleInputName" type="text" placeholder="John Dio">
                        </div>
                        <div class="mb-3">
                          <label class="col-form-label" for="exampleInputEmail1">Email</label>
                          <input class="form-control" id="exampleInputEmail1" type="email" placeholder="Demo@gmail.com">
                        </div>
                        <div class="mb-3">
                          <label class="col-form-label" for="exampleInputEmail1">Message</label>
                          <textarea class="form-control textarea" rows="3" cols="50" placeholder="Your Message"></textarea>
                        </div>
                        <div class="text-sm-end"> <router-link class="btn btn-primary" to="/app/contact">SEND IT</router-link></div>
                      </form>
                    </div>
                   
                  </div>
                </div>
              </div>
</template>