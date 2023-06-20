<template>
  <div class="container-fluid p-0">
    <div class="row m-0">
      <div class="col-12 p-0">
        <div class="login-card">
          <div>
            <div>
              <a class="logo">
                <img class="img-fluid" src="../assets/images/logo/logo2.png" alt="login page"/>
              </a>
            </div>
            <div class="login-main">
              <form class="theme-form" @submit.prevent="">
                <h4 class="text-center">Giriş Yap</h4>
                <div class="form-group">
                  <label class="col-form-label">E-Posta</label>
                  <input v-model="user.email" class="form-control" type="email" placeholder="E-Posta">
                </div>
                <div class="form-group">
                  <label class="col-form-label">Şifre</label>
                  <div class="form-input position-relative">
                    <input v-model="user.password" :type="type" class="form-control" name="password"
                           placeholder="*********">
                    <div class="show-hide"><span class="show" @click="showPassword"></span></div>
                  </div>
                </div>
                <div class="form-group mb-0">
                  <div class="text-end mt-3">
                    <button class="btn btn-primary btn-block w-100" type="submit" @click="doLogin">Giriş Yap</button>
                  </div>
                </div>
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
      type: 'password',
      user: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    showPassword: function () {
      if (this.type === 'password') {
        this.type = 'text';
      } else {
        this.type = 'password';
      }
    },
    async doLogin() {

      if (!this.user.email || !this.user.password) {
        this.$toast.show('Lütfen tüm alanları doldurunuz!', { theme: 'outline',position: 'top-right', icon : 'times', type: 'error', duration: 2000 });
        return;
      }

      const response = await this.$store.dispatch('login', this.user)

      if (response) {
         this.$router.replace('/');
       } else {
        this.$toast.show('Kullanıcı adı veya şifre hatalı', { theme: 'outline',position: 'top-right', icon : 'times', type: 'error', duration: 2000 });
       }
    },

  }
}
</script>
