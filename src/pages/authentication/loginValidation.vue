<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-7 order-1  b-center bg-size"
        :style="{ backgroundImage:'url(' + require('@/assets/images/login/1.jpg') + ')',}">
        <img class="bg-img-cover bg-center" style="display: none" src="@/assets/images/login/1.jpg" alt="looginpage">
      </div>
      <div class="col-xl-5 p-0">
        <div class="login-card">
          <div>
            <div><a class="logo text-center"><router-link to="/"> <img class="img-fluid for-light"
                    src="@/assets/images/logo/logo2.png" alt="looginpage"></router-link></a></div>
            <div class="login-main">
              <form class="theme-form" novalidate="" @submit.prevent="validate">
                <h4 class="text-center">Sign in to account</h4>
                <p class="text-center">Enter your email & password to login</p>
                <div class="form-group">
                  <label class="col-form-label">Email Address</label>
                  <input class="form-control" v-bind:class=" formSubmitted ? emailError ? 'is-invalid' : 'is-valid' : '' "
                    id="email" v-model="email" type="email" required="" placeholder="Test@gmail.com">
                </div>
                <div class="form-group">
                  <label class="col-form-label">Password</label>
                  <div class="form-input position-relative">
                    <input class="form-control" type="password" name="login[password]"
                      v-bind:class=" formSubmitted ? passwordError ? 'is-invalid'  : 'is-valid' : '' " required=""
                      placeholder="*********" v-model="password">
                    <div class="show-hide"><span class="show"> </span></div>
                  </div>
                </div>
                <div class="form-group mb-0">
                  <div class="checkbox p-0">
                    <input id="checkbox1" type="checkbox">
                    <label class="text-muted" for="checkbox1">Remember password</label>
                  </div><a class="link"><router-link to="/authentication/forgetpassword"> Forgot
                      password?</router-link></a>
                  <div class="text-end mt-3">
                    <button class="btn btn-primary btn-block w-100" type="submit">Sign in</button>
                  </div>
                </div>
                <div class="login-social-title">
                  <h6>Or Sign in with </h6>
                </div>
                <div class="form-group">
                  <ul class="login-social">
                    <li><a href="https://www.linkedin.com" target="_blank"><vue-feather type="linkedin"></vue-feather></a>
                    </li>
                    <li><a href="https://twitter.com" target="_blank"><vue-feather type="twitter"></vue-feather></a></li>
                    <li><a href="https://www.facebook.com" target="_blank"><vue-feather type="facebook"></vue-feather></a>
                    </li>
                    <li><a href="https://www.instagram.com" target="_blank"><vue-feather
                          type="instagram"></vue-feather></a></li>
                  </ul>
                </div>
                <p class="mt-4 mb-0 text-center">Don't have account?<router-link class="ms-2" to="/auth/register">Create
                    Account</router-link></p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
 
  data() {
    return {
      email: "",
      formSubmitted: false,
      emailError: false,
      emailFieldClasses: "",
      errors: [],
      password: "",
      passwordError: false,
    };
  },
  methods: {
    validate() {
      this.formSubmitted = true;
      this.errors = [];
      if (this.email.length < 10 || this.email.search("@") == -1) {
        this.emailError = true;
        this.errors.push({});
      } else {
        this.emailError = false;
        this.errors.push({});
 
      }
      if (this.password.length < 7) {
        this.passwordError = true;

      } else {
        this.passwordError = false;
      
      }
    },
  },
};
</script>