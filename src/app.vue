<template>
    <div class="main">
        <h1>vuevue标题</h1>
        <router-link to="/index">nav to index</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="postcss" scoped>

</style>