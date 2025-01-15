<template>
    This is Home Page
</template>

<script>
import {HomeIcon, ContactIcon, CardIcon} from '@/components/icons';
export default {
    components: { HomeIcon, ContactIcon, CardIcon },
    data(){
        return {
            iconColor: "#2BDA53",
            active: true,
        }
    }
}
</script>