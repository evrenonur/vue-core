<template>
      <div class="message"><vue-feather type="message-square"></vue-feather></div>
                <ul class="message-dropdown onhover-show-div">
                  <li><vue-feather type="message-square"></vue-feather>
                    <h6 class="f-18 mb-0">Messages</h6>
                  </li>
                  <li>
                    <div class="d-flex align-items-start">
                      <div class="message-img bg-light-primary"><img src="@/assets/images/user/3.jpg" alt=""></div>
                      <div class="flex-grow-1">
                        <h5 class="mb-0"> <router-link to="/email/email-inbox"> Emay Walter</router-link></h5>
                        <p>Do you want to go see movie?</p>
                      </div>
                      <div class="notification-right"><vue-feather type="x"></vue-feather></div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start">
                      <div class="message-img bg-light-primary"><img src="@/assets/images/user/6.jpg" alt=""></div>
                      <div class="flex-grow-1">
                        <h5 class="mb-0"> <router-link to="/email/email-inbox">Jason Borne</router-link></h5>
                        <p>Thank you for rating us.</p>
                      </div>
                      <div class="notification-right"><vue-feather type="x"></vue-feather></div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-items-start">
                      <div class="message-img bg-light-primary"><img src="@/assets/images/user/10.jpg" alt=""></div>
                      <div class="flex-grow-1">
                        <h5 class="mb-0"> <router-link to="/email/email-inbox">Sarah Loren</router-link></h5>
                        <p>What`s the project report update?</p>
                      </div>
                      <div class="notification-right"><vue-feather type="x"></vue-feather></div>
                    </div>
                  </li>
                  <li><router-link class="btn btn-primary" to="/email/email-inbox">Check Messages</router-link></li>
                </ul>
</template>