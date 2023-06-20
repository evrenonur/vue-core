<template>
     <div class="col-sm-12 col-md-6">
                  <div class="card">
                    <div class="card-header pb-0">
                      <h4>Bloodhound (Suggestion Engine)</h4><span>Bloodhound offers advanced functionalities such as prefetching and backfilling with remote data.</span>
                    </div>
                    <div class="card-body">
                      <div id="bloodhound">
                        <form class="theme-form">
                          <div>
                            <vue3-simple-typeahead :items="list"  class="form-control typeahead form-control" :placeholder="options.placeholder" @selectItem="selectItem" @onInput="onInput" @onBlur="onBlur" :minInputLength="options.minInputLength" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
</template>
<script>
import typeaheadMixin from "@/mixins/commen/typeaheadMixin"
export default {
      mixins: [typeaheadMixin],
}
</script>