<template>
    <div>
        Component B <button @click="updateCounter(344)">update counter</button>
    </div>
</template>
<script>
export default {
    methods: {
        updateCounter(data) {
            this.$store.commit('changeCounter', data)
        }
    }
}
</script>