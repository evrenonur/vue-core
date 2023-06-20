
import { mapState, mapGetters } from "vuex";

const productMixin = {
    
    data(){
        return{
           modalShow: false,
        quickViewProduct: [],
        counter: 1,
        priceArray: [],
        allfilters: [],
        items: [],
       filtered: false,
       filterQuery: "",
        allData: [],
        }
    },
     computed: {
       ...mapState({
        products: (state) => state.products.products,
        productslist: (state) => state.products.productslist,
    }),
      ...mapGetters({
        filterProduct: "products/filterProducts",
        tags: "products/setTags",
        col2: 'products/col2',
        col3:"products/col3",
        col4:"products/col4",
        col6:"products/col6",
        listViewEnable:"products/listViewEnable"
         
      }),
    },
    created() {
        this.allData = this.products;
      },
      methods: {
        allfilter(selectedVal) {
      this.allfilters = selectedVal;
      this.$store.dispatch('products/setTags', selectedVal);
    },
    pricefilterArray(item) {
      this.$store.dispatch('products/priceFilter', item);
    },
      grid2() {
          this.$store.commit('products/grid2', true);
      },
      grid3() {
          this.$store.commit('products/grid3');
      },
      grid4() {
          this.$store.commit('products/grid4');
      },
      grid6() {
          this.$store.commit('products/grid6');
      },
      listView() {
          this.$store.commit('products/listView');
      },
      gridView() {
          this.$store.commit('products/grid4');
      },
      collapseFilter() {
      this.filtered = !this.filtered;
      },
      grid(){
        this.$emit("grid2")
     },
     getImgUrl(path) {
       return require("@/assets/images/" + path);
     },
     onChangeSort(event) {
       this.$store.dispatch("products/sortProducts", event.target.value);
     },
     addToCart: function (product, qty) {
       product.quantity = qty ? qty : 1;
       this.$store.dispatch("products/addToCart", product);
     },
     quickView: function (product) {
       this.modalShow = true;
       return (this.quickViewProduct = product);
     },
     quickViewClose: function () {
       this.modalShow = false;
     },
     increment() {
       if (this.counter < this.quickViewProduct.stock) this.counter++;
     },
     decrement() {
       if (this.counter > 1) this.counter--;
     },
    },
}
  
  export default productMixin