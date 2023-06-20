<template>
     <div class="account-user"><vue-feather type="user"></vue-feather></div>
                <ul class="profile-dropdown onhover-show-div">
                  <li><router-link to="/users/profile"> <vue-feather type="user"></vue-feather><span>Account</span></router-link></li>
                  <li><router-link to="/email/email-inbox"><vue-feather type="mail"></vue-feather><span>Inbox</span></router-link></li>
                  <li><router-link to="/users/edit"><vue-feather type="settings"></vue-feather><span>Settings</span></router-link></li>
                  <li><a @click="logout"> <vue-feather type="log-in"></vue-feather><span>Log Out</span></a></li>
                </ul>
</template>
<script>

export default {
    components:{
       
    },
     methods: {
      logout: function() {
        
            this.$router.replace('/auth/login');
            localStorage.clear('user')
      }
    },
}
</script>