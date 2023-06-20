<template>
     <div class="container-fluid p-0">
        <div class="row">
          <div class="col-12">     
            <div class="login-card">
              <div>
                <div><a class="logo" ><router-link to="/"> <img class="img-fluid for-light" src="@/assets/images/logo/logo2.png" alt="looginpage"></router-link></a></div>
                <div class="login-main"> 
                  <form class="theme-form">
                    <h4>Reset Your Password</h4>
                    <div class="form-group">
                      <label class="col-form-label">New Password</label>
                      <div class="form-input position-relative">
                        <input class="form-control" type="password" name="login[password]"  placeholder="*********">
                        <div class="show-hide"><span class="show"></span></div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">Retype Password</label>
                      <input class="form-control" type="password" name="login[password]"  placeholder="*********">
                    </div>
                    <div class="form-group mb-0">
                      <div class="checkbox p-0">
                        <input id="checkbox1" type="checkbox">
                        <label class="text-muted" for="checkbox1">Remember password</label>
                      </div>
                      <button class="btn btn-primary btn-block w-100 mt-3" type="submit">Done                          </button>
                    </div>
                    <p class="mt-4 mb-0">Don't have account?<router-link class="ms-2" to="/auth/register">Create Account</router-link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>