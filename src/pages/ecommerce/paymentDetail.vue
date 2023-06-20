<template>
    <Breadcrumbs main="Ecommerce" title="Payment Details"/>
     <div class="container-fluid credit-card payment-details">
            <div class="row">
                <creditCard/>
                <debitCard/>
                <codCard/>
                <emiCard/>
                <netBanking/>
            </div>
     </div>
</template>
<script>
import creditCard from "@/components/ecommerce/payment/creditCard.vue"
import debitCard from  "@/components/ecommerce/payment/debitCard.vue"
import codCard from "@/components/ecommerce/payment/codCard.vue"
import emiCard from "@/components/ecommerce/payment/emiCard.vue"
import netBanking from "@/components/ecommerce/payment/netBanking.vue"
export default {
    components:{
        creditCard,
        debitCard,
        codCard,
        emiCard,
        netBanking
    }
}
</script>