<template>
      <div class="col-md-9 col-sm-10 text-end"><span class="f-w-600 m-r-5">Showing Products 1 - {{filterProduct.length}} Results</span>
                    <div class="select2-drpdwn-product select-options d-inline-block">
                      <select class="form-control btn-square" name="select"  @change="onChangeSort($event)">
                        <option value="opt1">Featured</option>
                        <option value="opt2">Highest Prices</option>
                        <option value="opt3">Lowest Prices</option>
                      </select>
                    </div>
                  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
     data() {
      return {
        modalShow: false,
        quickViewProduct: [],
        counter: 1,
        priceArray: [],
        allfilters: [],
        items: [],
        filtered: false,
      
      };
    },
     computed: {
      ...mapGetters({
        filterProduct: 'products/filterProducts',
        tags: 'products/setTags'
      }),
    },
    methods:{
          onChangeSort(event) {
        this.$store.dispatch('products/sortProducts', event.target.value);
      },
    }
}
</script>