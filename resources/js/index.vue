<template>
    <v-app>
        <div style="background-color:black; height:100vh">
            <admin-navigator v-if="authenticated"></admin-navigator>
            <client-navigator v-else></client-navigator>
            <router-view></router-view>
        </div>
    </v-app>
</template>

<script>
import AdminNavigator from './components/admin/AdminNavigator'
import ClientNavigator from './components/client/ClientNavigator'
import EventBus from './eventbus'

export default {
    name: 'index',
    components: {
        AdminNavigator,
        ClientNavigator,
    },

    data () {
        return {
            authenticated:false
        }
    },

    mounted() {
        var self = this
        this.authCheck()
        EventBus.$on('authCheck', function (payload) {
            self.authCheck()
        })
    },

    methods: {
        authCheck() {
            axios.get('api/user').then(response => {
                if(response.status >= 200 && response.status < 300) {
                this.authenticated = true
                }
            }).catch(err => this.authenticated = false)
        },
    }
}
</script>

<style>

</style>