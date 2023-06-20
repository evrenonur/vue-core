<template>
     <Breadcrumbs main="Users" title="User Cards"/>
      <div class="container-fluid user-card">
            <div class="row">
                <userCard/>
            </div>
      </div>
</template>
<script>
import userCard from "@/components/users/cards/userCard.vue"
export default {
    components:{
        userCard
    }
}
</script>