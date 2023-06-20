<template>
  <div class="row chat-box">
    <div class="col chat-right-aside">
      <div class="chat">
        <div class="d-flex chat-header clearfix align-items-start">
          <img class="rounded-circle" v-if="currentchat.thumb" :src="getImgUrl(currentchat.thumb)" alt="" />
            <div class="flex-grow-1">
          <div class="about">
            <div class="name">{{ currentchat.name}}</div>
            <div class="status digits">{{ currentchat.lastSeenDate }}</div>
          </div>
            </div>
          <ul class="list-inline float-start float-sm-end chat-menu-icons">
            <li class="list-inline-item">
                <a href="javascript:void(0)"><vue-feather type="search"></vue-feather></a>
            </li>
            <li class="list-inline-item">
                <a href="javascript:void(0)"><vue-feather type="paperclip"></vue-feather></a>
            </li>
            <li class="list-inline-item">
                <a href="javascript:void(0)"><vue-feather type="headphones"></vue-feather></a>
            </li>
            <li class="list-inline-item">
                <a href="javascript:void(0)"><vue-feather type="video"></vue-feather></a>
            </li>
              <li class="list-inline-item toogle-bar" data-bs-toggle="collapse"  data-bs-target="#collapseExample" :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">
              <a href="javascript:void(0)"><vue-feather type="menu"></vue-feather></a>
          </li>
          </ul>
        </div>
        <div class="chat-history ">
                <div class="row" v-for="(chat, index) in currentChat.chat.video" :key="index" v-bind:class="{ clearfix: chat.sender == 0 }">
                  <div class="col text-center pe-0 call-content "  >
                    <div>
                      <div class="total-time">
                        <h2 class="digits">{{chat.time}}</h2>
                      </div>
                      <div class="call-icons">
                        <ul class="list-inline">
                          <li class="list-inline-item"><a href="javascript:void(0)"><i class="icon-video-camera"></i></a></li>
                          <li class="list-inline-item"><a href="javascript:void(0)"><i class="icon-volume"></i></a></li>
                          <li class="list-inline-item"><a href="javascript:void(0)"><i class="icon-user"></i></a></li>
                        </ul>
                      </div>
                      <button class="btn btn-danger btn-block btn-lg">END CALL</button>
                      <div class="receiver-img"><img src="@/assets/images/other-images/receiver-img.jpg" alt=""></div>
                    </div>
                  </div>
                  <div class="col-sm-6 caller-img-sec">
                    <div class="caller-img">
                        <!-- <img class="img-fluid bg-img-cover" src="@/assets/images/other-images/caller.jpg" alt=""> -->
                        </div>
                  </div>
                </div>
        </div>
      </div>
    </div>
    <div class="col chat-menu " :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive" id="collapseExample">
      <chatMenu/>
    </div>
  </div>
</template>
<script>
 import { mapState } from 'vuex';
 import chatMenu from "@/components/common/chatMenu.vue"
export default {
   components:{chatMenu},
    data(){
        return{
         currentchat: [],
        chatmenutoogle: false,
          isActive: false,
        }
    },
    computed: {
      ...mapState({
        currentChat() { 
          return (this.currentchat = this.$store.getters['chat/currentChat']);
        },
      }),
    },
    methods: {
      getImgUrl(path) {
        return require('@/assets/images/' + path);
      },
         toggle() {
      this.isActive = !this.isActive
    },
      }
}
</script>
