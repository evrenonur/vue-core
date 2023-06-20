<template>
     <draggable class="row" >
				<div class="col-sm-12  col-xl-6 " v-for="element in cards" :key="element" >   
					<div class="card" >
						<div class="card-header pb-0" v-html="element.title"></div>
						<div class="card-body">
							<p v-text="element.description"></p>
						</div>
					</div>
				</div> 
        </draggable>
</template>
<script>
import { mapState } from "vuex";
import { VueDraggableNext } from 'vue-draggable-next'
  export default {
    components:{
       draggable: VueDraggableNext,
    },
  
     computed: {
    ...mapState({
      cards:(state)=>state.card.draggable,    
    }),
   },
  };
</script>