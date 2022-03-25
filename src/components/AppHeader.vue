<template>
    <div class="ui secondary pointing menu">
        <!-- router-link is functionally the same as an 'a' tag, but doesn't cause a full
             page refresh -->
        <router-link to="/" class="active item">
            Image Storage
        </router-link>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="item">Gallery</router-link>
                <router-link to="/upload" class="item">Upload</router-link>
                <router-link to="/" class="item" @click="logout">Logout</router-link>
            </div>
            <!-- v-else MUST be placed immediately after an element with v-if -->
            <a v-else href="#" class="ui item" @click="login">
                Login
            </a>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'AppHeader',
        computed: mapGetters(['isLoggedIn']),
        methods: mapActions(['login', 'logout'])
    };
</script>

<style scoped>
    .horizontal {
        display: flex;
        flex-direction: row;
    }
</style>
