<template>
  <Breadcrumbs main="Chat" title="Chat App" />
  <div class="container-fluid">
    <div class="row">
      <searchChat />
      <div class="col call-chat-body">
        <div class="card">
          <div class="card-body p-0">
            <div class="row chat-box">
                <chatRight/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchChat from "@/components/common/searchChat.vue";
import chatRight from "@/components/chat/chatapp/chatRight.vue"
export default {
  components: {
    searchChat,
    chatRight
  },
};
</script>