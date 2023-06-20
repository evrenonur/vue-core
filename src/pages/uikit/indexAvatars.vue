<template>
     <Breadcrumbs main="Ui Kits" title="Avatars"/>
      <div class="container-fluid">
            <div class="user-profile">
              <div class="row">
                  <sizingAvatar/>
                  <initialsAvatar/>
                  <statusAvatar/>
                  <groupsAvatar/>
                  <shapAvatar/>
                  <ratioAvatar/>
              </div>
            </div>
      </div>
</template>
<script>
import sizingAvatar from "@/components/uikit/avatar/sizingAvatar.vue"
import initialsAvatar from "@/components/uikit/avatar/initialsAvatar.vue"
import statusAvatar from "@/components/uikit/avatar/statusAvatar.vue"
import groupsAvatar from "@/components/uikit/avatar/groupsAvatar.vue"
import shapAvatar from "@/components/uikit/avatar/shapAvatar.vue"
import ratioAvatar from "@/components/uikit/avatar/ratioAvatar.vue"
export default {
    components:{
        sizingAvatar,
        initialsAvatar,
        statusAvatar,
        groupsAvatar,
        shapAvatar,
        ratioAvatar
    }
}
</script>