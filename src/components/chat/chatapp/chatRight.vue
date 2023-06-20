<template>
     <div class="col chat-right-aside">
                  <div class="chat">
                    <div class="d-flex chat-header clearfix align-items-start">
                      <img class="rounded-circle" v-if="currentchat.thumb" :src="getImgUrl(currentchat.thumb)" alt=""/>
                       <div class="flex-grow-1">
                      <div class="about">
                        <div class="name">
                          {{ currentchat.name}}<!--<span class="font-primary f-12">Typing...</span>-->
                        </div>
                        <div class="status digits">
                          {{ currentchat.lastSeenDate }}
                        </div>
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
                    <div class="chat-history chat-msg-box custom-scrollbar">
                      <ul>
                        <li v-for="(chat, index) in currentChat.chat.messages" :key="index" v-bind:class="{ clearfix: chat.sender == 0 }" >
                          <div class="message" v-bind:class="{'my-message': chat.sender != 0, 'other-message pull-right': chat.sender == 0,
                              }">
                            <img class="rounded-circle float-start chat-user-img img-30 text-end" alt="" v-if="currentchat.thumb && chat.sender != 0" v-bind:src="getImgUrl(currentchat.thumb)"/>
                            <img
                              class="rounded-circle float-end chat-user-img img-30"
                              alt=""
                              v-if="chat.sender == 0"
                              v-bind:src="getImgUrl('user/1.jpg')" />
                            <div
                              class="message-data text-end"
                              v-bind:class="{ 'text-start': chat.sender == 0 }" >
                              <span class="message-data-time">{{ chat.time }}</span>
                            </div>
                            
                            {{ chat.text }}
                          </div>
                        </li>
                      </ul>
                    </div>
                   <addChat/>
                  </div>
                </div>
                <div
                  class="col chat-menu " :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive" id="collapseExample">
                 <chatMenu/>
                </div>
</template>
<script>
 import { mapState } from 'vuex';
 import addChat from "./addChat.vue"
 import chatMenu from "@/components/common/chatMenu.vue"
export default {
    components:{addChat,chatMenu},
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