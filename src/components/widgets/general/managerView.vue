<template>
    <div class="col-xl-4 col-md-12">
                <div class="card custom-profile">                 
                  <div class="card-body">
                    <div class="card-profile"><img class="user-img" src="@/assets/images/general-widget/user-profile.png" alt=""></div>
                    <div class="text-center profile-details">
                      <h4> <router-link to="/users/profile"> James Martin</router-link></h4>
                      <h6>Manager</h6>
                    </div>
                    <ul class="card-social">
                      <li class="bg-fb"><a href="https://www.facebook.com/" data-bs-original-title="" title="" target="_blank"><i class="fa fa-facebook"></i></a></li>
                      <li class="bg-gplus"><a href="https://myaccount.google.com/" data-bs-original-title="" title="" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                      <li class="bg-twitter"><a href="https://twitter.com/" data-bs-original-title="" title="" target="_blank"><i class="fa fa-twitter"></i></a></li>
                      <li class="bg-insta"><a href="https://www.instagram.com/" data-bs-original-title="" title="" target="_blank"><i class="fa fa-instagram"></i></a></li>
                      <li class="bg-linkedin"><a href="https://dashboard.rss.com/auth/sign-in/" data-bs-original-title="" title="" target="_blank"><i class="fa fa-rss"></i></a></li>
                    </ul>
                  </div>
                  <div class="card-footer">
                    <div class="row">
                      <div class="col-4 col-sm-4">
                        <h6>Follower</h6>
                        <h5 class="counter">
                            <number
                       class="bold counter"
                       ref="number1"
                       :from="0"
                       :to="9564"
                       :duration="5"
                       :delay="0"
                       easing="Power1.easeOut"/></h5>
                      </div>
                      <div class="col-4 col-sm-4">
                        <h6>Following</h6>
                        <h5><span class="counter">
                            <number
                       class="bold counter"
                       ref="number1"
                       :from="0"
                       :to="49"
                       :duration="5"
                       :delay="0"
                       easing="Power1.easeOut" /></span>K</h5>
                      </div>
                      <div class="col-4 col-sm-4">
                        <h6>Total Post</h6>
                        <h5><span class="counter">
                            <number
                       class="bold counter"
                       ref="number1"
                       :from="0"
                       :to="96"
                       :duration="5"
                       :delay="0"
                       easing="Power1.easeOut" /></span>M</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>