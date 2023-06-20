<template>
    <ul class="nav nav-tabs border-tab nav-primary" id="top-tab" role="tablist">
              <li class="nav-item" @click="tabContent('call')">
                <a class="nav-link" id="top-home-tab" data-toggle="tab" role="tab" aria-controls="top-home" aria-selected="false" :class="[{ active: activeTab == 'call' }]" >CALL</a>
                <div class="material-border"></div>
              </li>
              <li class="nav-item" @click="tabContent('status')">
                <a class="nav-link" id="profile-top-tab" data-toggle="tab" role="tab" aria-controls="top-profile" aria-selected="false" :class="[{ active: activeTab == 'status'}]">STATUS</a>
                <div class="material-border"></div>
              </li>
              <li class="nav-item" @click="tabContent('profile')">
                <a class="nav-link" id="contact-top-tab" data-toggle="tab" role="tab" aria-controls="top-contact" aria-selected="true" :class="[{ active: activeTab == 'profile' }]" >PROFILE</a>
                <div class="material-border"></div>
              </li>
            </ul>
             <div class="tab-content" id="info-tabContent">
                 <div class="tab-pane fade" :class="{ 'show active': activeTab == 'call' }" id="top-home" role="tabpanel" aria-labelledby="top-home-tab">
                <div class="people-list">
                        <ul class="list digits custom-scrollbar">
                          <li class="clearfix" v-for="(user, index) in users" :key="index" @click="setActiveuser(user.id)">
                              <div class="d-flex align-items-center">
                            <img class="rounded-circle user-image" :src="getImgUrl(user.thumb)" alt=""/>
                            <div class="flex-grow-1">
                            <div class="about">
                              <div class="name">{{ user.name }}</div>
                              <div class="status">
                                <i class="fa " :class="user.icon"></i
                                > {{ user.lastSeenDate }}
                              </div>
                            </div>
                            </div>
                              </div>
                          </li>
                        </ul>
              </div>
              </div>
               <div class="tab-pane fade" :class="{ 'show active': activeTab == 'status' }" id="top-profile" role="tabpanel" aria-labelledby="profile-top-tab" >
                   <statusView/>
               </div>
                <div class="tab-pane fade" id="top-contact"  role="tabpanel" :class="{ 'show active': activeTab == 'profile' }" aria-labelledby="contact-top-tab">
                    <profileView/>
                </div>
             </div>
</template>
<script>
 import { mapState } from 'vuex';
 import statusView from "./statusView.vue"
 import profileView from "./profileView.vue"
 import imageMixin from "@/mixins/commen/imageMixin"
export default {
  mixins:[imageMixin],
   components:{
       statusView,
       profileView
   },
    data(){
        return{
         currentchat: [],
        chatmenutoogle: false,
        activeTab: 'call',
        }
    },
    computed: {
      ...mapState({
           activeuser: (state) => state.chat.activeuser,
        users: (state) =>
          state.chat.users.filter(function (user) {
            if (user.id !== 0) return user;
          }),
       serchUser: (state) => state.chat.serchUser,
       activeusers: (state) =>
          state.chat.users.filter(function (user) {
            if (user.active === 'active' && user.id !== 0) return user;
          }),
        currentChat() {
          return (this.currentchat = this.$store.getters['chat/currentChat']);
        },
      }),
    },    
    methods: {
     
       tabContent(val) {
        this.activeTab = val;
      },
        setActiveuser: function (id) {
        this.$store.dispatch('chat/setActiveuser', id);
      },
      }
}
</script>