<template>
     <div class="col-sm-12">
                  <div class="card profile-header">
                    <div class="profile-img-wrrap"></div>
                    <div class="userpro-box">
                      <div class="img-wrraper">                              
                        <div class="avatar" id="profile-tour"><img class="img-fluid" alt="" src="@/assets/images/user/7.jpg" data-intro="This is Profile image"></div><router-link class="icon-wrapper" id="update-profile-tour" to="/users/edit"> <i class="icofont icofont-pencil-alt-5" data-intro="Change Profile image here"></i></router-link>
                      </div>
                      <div class="user-designation">
                        <div class="title"><a target="_blank" href=""> 
                            <h4>Emay Walter</h4>
                            <h6 class="f-w-500">designer</h6></a></div>
                        <div class="social-media" data-intro="This is your Social details" >
                          <ul class="user-list-social" id="social-bar-tour">
                            <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="https://accounts.google.com/" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="https://dashboard.rss.com/auth/sign-in/" target="_blank"><i class="fa fa-rss"></i></a></li>
                          </ul>
                        </div>
                        <div class="follow">
                          <ul class="follow-list">
                            <li>
                              <div class="follow-num counter">325</div><span>Follower</span>
                            </li>
                            <li>
                              <div class="follow-num counter">450</div><span>Following</span>
                            </li>
                            <li>
                              <div class="follow-num counter">500</div><span>Likes</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
</template>