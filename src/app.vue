<template>
    <div class="main">
        <h1>这是一个vue脚手架</h1>
        <router-link to="/index">nav to index</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
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