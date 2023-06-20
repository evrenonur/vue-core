<template>
     <Breadcrumbs main="Apps" title="Support Ticket"/>
     <div class="container-fluid support-ticket">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Ticket List</h4><span>List of ticket opend by customers</span>
                  </div>
                  <div class="card-body">
                    <div class="row">
                        <supportTicket/>
                        <supportTable/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
     </div>
</template>
<script>
import supportTicket from "@/components/support/supportTicket.vue"
import supportTable from "@/components/support/supportTable.vue"
export default {
    components:{
        supportTicket,
        supportTable
    }
}
</script>