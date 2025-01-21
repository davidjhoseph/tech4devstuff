<template>
    <div class="flex items-center space-x-6">
        <button class="p-4 capitalize rounded-lg" v-for="l in layoutList" :class="layout === l ? 'text-white bg-green-600' : 'bg-gray-400 text-black'" @click="changeLayout(l)">{{l}}</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                layout: 'list',
                layoutList: ['list', 'grid'],
            }
        },
        methods: {
            changeLayout(layout) {
                this.layout = layout;
                this.$emit('changedLayout', layout);
            }
        }
    }
</script>