<template>
    <div class="flex">
        <div class="flex flex-col items-center w-20 py-10 space-y-10" >
            <button @click="goToRoute('home')" class="w-6 h-6" :class="activeRoute === 'home' ? 'text-green-800' : 'text-red-800' ">
                <HomeIcon />
            </button>
            <button @click="goToRoute('contact')" class="w-6 h-6" :class="activeRoute === 'contact' ? 'text-green-800' : 'text-red-800' ">
                <ContactIcon />
            </button>
            <button @click="goToRoute('card')" class="w-6 h-6" :class="activeRoute === 'card' ? 'text-green-800' : 'text-red-800' ">
                <CardIcon />
            </button>
        </div>
        <div class="flex-1 h-full p-10 ml-20 overflow-auto">
            <ComponentA/>
            <ComponentB />
            <slot/>
        </div>
    </div>
</template>

<script>
import {HomeIcon, ContactIcon, CardIcon} from '@/components/icons';
import ComponentA from '@/components/general/ComponentA.vue';
import ComponentB from '@/components/general/ComponentB.vue';
export default {
    components: { HomeIcon, ContactIcon, CardIcon, ComponentA, ComponentB },
    data(){
        return {
            active: true,
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
        }
    }
}
</script>