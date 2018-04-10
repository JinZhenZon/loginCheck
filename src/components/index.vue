<template>
    <div>
        <button @click = "login">
            登陆
        </button>
        <router-link to = "/page1">页面一</router-link>
        <router-link to = "/page2">页面二</router-link>
        
        <router-view>

        </router-view>
    </div>
</template>

<script>
export default {
        methods:{
            login(){
                this.$store.commit('login')
            }
        }
}
</script>

<style>

</style>
