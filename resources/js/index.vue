<template>
    <v-app>
        <div style="background-color:black; height:100vh">
            <app-navigator></app-navigator>
            <router-view></router-view>
        </div>
    </v-app>
</template>

<script>
import AppNavigator from './components/admin/AppNavigator.vue'

export default {
    name: 'index',
    components: {
        AppNavigator
    }
}
</script>

<style>

</style>