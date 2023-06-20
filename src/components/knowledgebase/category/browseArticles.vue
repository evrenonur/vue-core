<template>
     <div class="col-sm-12">
                <div class="header-faq">
                  <h4 class="mb-0">knowledge articles by category</h4>
                </div>
                <div class="row browse">
                  <div class="col-xl-4 col-md-6 box-col-33" v-for="item in category" :key="item">
                    <div class="browse-articles height-equal">
                      <h6><span><vue-feather type="archive"></vue-feather></span>{{item.articles}}</h6>
                      <ul>
                        <li><router-link to="/knowledgebase/knowledge-detail">
                            <h5><vue-feather type="file-text"></vue-feather>{{item.articles1}}</h5></router-link></li>
                        <li><router-link to="/knowledgebase/knowledge-detail">
                            <h5><vue-feather type="file-text"></vue-feather>{{item.articles2}}</h5></router-link></li>
                        <li><router-link to="/knowledgebase/knowledge-detail">
                            <h5><vue-feather type="file-text"></vue-feather>{{item.articles3}}</h5></router-link></li>
                        <li><router-link to="/knowledgebase/knowledge-detail">
                            <h5><vue-feather type="file-text"></vue-feather>{{item.articles4}}</h5></router-link></li>
                        <li><router-link class="f-w-600 font-primary" to="/knowledgebase/knowledge-detail"><vue-feather class="me-1" type="arrow-right"></vue-feather><span>See More ({{item.see}})</span></router-link></li>
                      </ul>
                    </div>
                  </div>
                </div>
     </div>
</template>
<script>
import { mapState } from "vuex";
export default {
      computed: {
    ...mapState({
      category:(state)=>state.knowledgebase.category,   
    }),
  },
 
}
</script>