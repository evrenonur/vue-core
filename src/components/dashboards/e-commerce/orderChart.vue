<template>
  <apexchart
    type="line"
    height="320"
    :series="series"
    :options="chartOptions"
  ></apexchart>
</template>

<script>
import orderChart from "@/mixins/orderChart";
export default {
      mixins: [orderChart],
}
</script>