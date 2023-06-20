
import { mapState} from "vuex";
import router from '@/router';

const productPage = {
    
    data() {
        return {
          counter: 1,
          modalShow: false,
          activeTab: 'fabric',
        };
      },
      computed: {
         ...mapState({
          products: (state) =>
            state.products.products.find((item) => {
              if (parseInt(router.currentRoute._rawValue.params.id) === item.sku) return item;
            }),
            }),
             swiper() {
          return this.$refs.mySwiper.swiper;
        },
      },
  
      methods: {
        getImgUrl(path) {
          return require('@/assets/images/' + path);
        },
        slideTo(id) {
          this.swiper.slideTo(id, 1000, false);
        },
        addToCart: function (product, qty) {
          product.quantity = qty ? qty : 1;
          this.$store.dispatch('products/addToCart', product);
        },
        increment() {
          if (this.counter < this.quickViewProduct.stock) this.counter++;
        },
        decrement() {
          if (this.counter > 1) this.counter--;
        },
        tabContent(val) {
          this.activeTab = val;
        },
      },
}
  
  export default productPage