<template>
     <div class="container-fluid p-0">
        <!-- Unlock page start-->
        <div class="authentication-main mt-0">
          <div class="row">
            <div class="col-12">
              <div class="login-card">
                <div>
                  <div><a class="logo" ><router-link to="/"> <img class="img-fluid for-light" src="@/assets/images/logo/logo2.png" alt="looginpage"></router-link></a></div>
                  <div class="login-main">
                    <form class="theme-form">
                      <h4 class="mb-0">Unlock  </h4>
                      <div class="form-group">                      
                       <ulockUser/>
                      </div>
                      <div class="form-group">
                        <label class="col-form-label">Enter your Password</label>
                        <div class="form-input position-relative">
                          <input class="form-control" type="password" name="login[password]" required="" placeholder="*********">
                          <div class="show-hide"><span class="show">                      </span></div>
                        </div>
                      </div>
                      <div class="form-group mb-0">
                        <div class="checkbox p-0">
                          <input id="checkbox1" type="checkbox">
                          <label class="text-muted" for="checkbox1">Remember password</label>
                        </div>
                        <button class="btn btn-primary btn-block w-100 mt-3" type="submit">Unlock</button>
                      </div>
                      <p class="mt-4 mb-0">Already Have an account?<router-link class="ms-2" to="/auth/login">Sign in</router-link></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
</template>
<script>
import ulockUser from "@/svg/ulockUser.vue"
export default {
    components:{
        ulockUser
    }
}
</script>