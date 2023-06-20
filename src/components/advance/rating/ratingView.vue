<template>
     <div class="col-md-6">
                <div class="card">
                  <div class="card-header pb-0">
                     <h4>Clickable Value</h4>
                  </div>
                  <div class="card-body">
                    <div class="rating-container digits">
                       <star-rating :show-rating="false" :star-size="20" :max-rating="10" @update:rating="rating = $event"></star-rating>
                       <pre class="mb-0 rating-pre">Rating {{rating}}</pre>   
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header pb-0">
                     <h4>Movie Rating</h4>
                  </div>
                  <div class="card-body">
                    <div class="rating-container digits">
                       <rate :length="5" :value="2"  :ratedesc="['Very bad', 'bad', 'Normal', 'Good', 'Very good']" />
                    </div>
                  </div>
                </div>
              </div>
               <div class="col-md-6">
                <div class="card">
                  <div class="card-header pb-0">
                     <h4>Heart Rating</h4>
                  </div>
                  <div class="card-body">
                    <div class="rating-container digits">
                       <svg style="position: absolute; width: 0; height: 0;"  height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                           <defs>
                          <symbol id="icon-heart" class="icon" viewBox="0 0 32 32">
                         <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z" />
                          </symbol>
                          </defs>
                       </svg>
                   <rate :length="5" :value="0" :showcount="true" iconref="icon-heart"/>
                    </div>
                  </div>
                </div>
              </div>
                <div class="col-md-6">
                <div class="card">
                  <div class="card-header pb-0">
                     <h4>Star Rating</h4>
                  </div>
                  <div class="card-body">
                    <div class="rating-container digits">
                       <star-rating :star-size="20" :max-rating="10" :increment="0.01" ></star-rating>  
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
 import StarRating from 'vue-star-rating';
export default {
    components:{
       StarRating,
    },
    data(){
      return{
        rating: "0",
        rating1:"0",
        rating2:"0",
         disabled: false
      }
    },
    methods:{
      currentRating() {
      return this.rating 
    },
     currentRatingText1() {
      return this.rating1 
    },
     currentRatingText() {
      return this.rating2
    }
    }
}
</script>