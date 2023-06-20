<template>
     <Breadcrumbs main="Search Pages" title="Search Website" />
      <div class="container-fluid search-page">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                    <searchBar/>
                    <searchTab/>
                </div>
              </div>
            </div>
      </div>
</template>
<script>
import searchBar from "@/components/search/searchBar.vue"
import searchTab from "@/components/search/searchTab.vue"
export default {
    components:{
        searchBar,
        searchTab
    }
}
</script>