<template>
     <Breadcrumbs main="Widgets" title="General"/>
       <div class="container-fluid general-widget">
            <div class="row">
              <earningsView/>
              <productsView/>
              <messagesView/>
              <newUser/>
              <saleDetails/>
              <orderDetails/>
              <clockGeneral/>
              <calenderGeneral/>
              <customerFeedback/>
              <managerView/>
              <recentActivity/>
              <newOrder/>
              <usageBrowser/>
              <faceBook/>
              <productCart/>
              <employeeStatus/>
              <explainGeneral/>
              <contactUs/>
            </div>
       </div>
</template>
<script>
import earningsView from "@/components/widgets/general/earningsView.vue"
import productsView from "@/components/widgets/general/productsView.vue"
import messagesView from "@/components/widgets/general/messagesView.vue"
import newUser from "@/components/widgets/general/newUser.vue"
import saleDetails from "@/components/widgets/general/saleDetails.vue"
import orderDetails from "@/components/widgets/general/orderDetails.vue"
import clockGeneral from "@/components/widgets/general/clockGeneral.vue"
import calenderGeneral from "@/components/widgets/general/calenderGeneral.vue"
import customerFeedback from "@/components/widgets/general/customerFeedback.vue"
import managerView from "@/components/widgets/general/managerView.vue"
import recentActivity from "@/components/widgets/general/recentActivity.vue"
import newOrder from "@/components/widgets/general/newOrder.vue"
import usageBrowser from "@/components/widgets/general/usageBrowser.vue"
import faceBook from "@/components/widgets/general/faceBook.vue"
import productCart from "@/components/widgets/general/productCart.vue"
import employeeStatus from "@/components/widgets/general/employeeStatus.vue"
import explainGeneral from "@/components/widgets/general/explainGeneral.vue"
import contactUs from "@/components/widgets/general/contactUs.vue"
export default {
     components:{
          earningsView,
          productsView,
          messagesView,
          newUser,
          saleDetails,
          orderDetails,
          clockGeneral,
          calenderGeneral,
          customerFeedback,
          managerView,
          recentActivity,
          newOrder,
          usageBrowser,
          faceBook,
          productCart,
          employeeStatus,
          explainGeneral,
          contactUs
     }
}
</script>