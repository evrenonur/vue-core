<template>
  <div class="col-sm-12 col-xl-6" v-for="element in cards" :key="element">
    <div class="card">
      <div class="card-header " :class="element.class1">
        <h4 :class="element.class">{{ element.title }}</h4><span>{{ element.span }}</span>
      </div>
      <div class="card-body" :class="element.body">
        <p class="mb-0" v-text="element.description"></p>
      </div>
      <div class="card-footer" :class="element.body">
        <h6 class="mb-0">Card Footer</h6>
      </div>
    </div>
  </div>
  <div class="col-sm-12 col-xl-4" v-for="element in footer" :key="element">
    <div class="card">
      <div class="card-header " :class="element.color">
        <h4>{{ element.title }}</h4>
      </div>
      <div class="card-body">
        <p class="mb-0">{{ element.description }}</p>
      </div>
    </div>
  </div>
  <div :class="element.clas" v-for="element in cardbody" :key="element">
    <div class="card bg-primary height-equal">
      <div class="card-body">
        <div class="d-flex faq-widgets">
          <div class="flex-grow-1">
            <h4>{{ element.title }}</h4>
            <p class="mb-0">{{ element.desc }}</p>
          </div><vue-feather :type="element.icon"></vue-feather>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-12 col-xl-6" v-for="item in card" :key="item">
    <div class="card">
      <div class="card-header" :class="item.color">
        <h4 :class="item.class">{{ item.title }}</h4>
      </div>
      <div class="card-body" :class="item.body">
        <p class="mb-0">{{ item.description }}</p>
      </div>
      <div class="card-footer">
        <h6 class="mb-0">Card Footer</h6>
      </div>
    </div>
  </div>
  <tabCard />
</template>
<script>
import { mapState } from "vuex";
import tabCard from "./tabCard.vue"
export default {
  components: {
    tabCard
  },
  computed: {
    ...mapState({
      cards: (state) => state.card.basic,
      footer: (state) => state.card.footer,
      cardbody: (state) => state.card.faq,
      card: (state) => state.card.cardbody,
    }),
  },
};
</script>