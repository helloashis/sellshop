<template>
    <div class="pages-title section-padding" style="background: rgba(0, 0, 0, 0) url(assets/img/page-bg.png) repeat scroll 0 0;">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="pages-title-text text-center">
                        <h2>User Dashboard</h2>
                        <ul class="text-left">
                            <li><router-link to="/">Home </router-link></li>
                            <li><span> // </span>User Dashboard</li>
                            <li><span> // </span>{{ users }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'UserDashboard',


    computed:{
        users(){
            return this.$store.getters.authUsers;
        }
    },
    methods:{
        getUser(){
            this.$store.dispatch('getUsers');

        }
    },
    created(){
        this.getUser();
    }
}
</script>

<style>

</style>
