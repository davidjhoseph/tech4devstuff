<template>
    <div class="flex">
        <div class="flex flex-col items-center w-20 py-10 space-y-10">
            <button v-for="route in routes" @click="goToRoute(route.route)" class="w-6 h-6"
                :class="activeRoute === route.route ? 'text-green-800' : 'text-red-800' ">
                <component :is="route.icon" />
            </button>
        </div>
        <div class="flex-1 h-full p-10 ml-20 overflow-auto">
            <CounterComponent/>
            <ComponentA />
            <ComponentB />
            <slot />
        </div>
    </div>
</template>

<script>
import {HomeIcon, ContactIcon, CardIcon} from '@/components/icons';
import ComponentA from '@/components/general/ComponentA.vue';
import ComponentB from '@/components/general/ComponentB.vue';
import CounterComponent from '@/components/general/CounterComponent.vue';
export default {
    components: { HomeIcon, ContactIcon, CounterComponent, CardIcon, ComponentA, ComponentB },
    data(){
        return {
            active: true,
            routes: [
                {
                    name: 'Home',
                    icon: 'HomeIcon',
                    route: 'home'
                },
                {
                    name: 'Contact',
                    icon: 'ContactIcon',
                    route: 'contact'
                },
                {
                    name: 'Card',
                    icon: 'CardIcon',
                    route: 'card'
                },
            ]
        }
    },
    computed: {
        activeRoute() {
            let activeRoute = 'home'
            switch(this.$route.name) {
                case 'home':
                    activeRoute = 'home'
                    break;
                case 'contact':
                    activeRoute = 'contact'
                    break;
                case 'card':
                    activeRoute = 'card'
                    break;
                default:
                    activeRoute = 'home'

            }
            return activeRoute;
        }
    },
    methods: {
        goToRoute(name) {
            this.$router.push({name})
        },
        // isActiveRoute(route) {

        // }
    }
}
</script>