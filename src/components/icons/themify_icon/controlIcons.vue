<template>
    <div class="col-sm-12">
        <div class="card">
            <div class="card-header">
                <h5 class="m-b-0">Control Icons</h5>
            </div>
            <div class="card-body">
                <div class="row icon-lists">

                    <div class="col-sm-6 col-md-6 col-lg-4" v-for="(con, index) in control" :key="index"
                        v-on:click="icon_bar(con.name)">
                        <i class="" :class="con.name"></i>{{ con.name }}
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

import themifyIcon from "@/mixins/themifyIcon"
export default {
    mixins: [themifyIcon],
    data() {
        return {
            customAnimation: {
                enter: "animated bounce",
                exit: "animated bounce",
            },
            icon_bar_status: false,
            select_icon: {
                class: '',
                tag: ''
            },

        };
    },
    methods: {
        icon_bar(icon) {

            this.$emit('selected', icon);
        },
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/vendors/animate.scss"
</style>