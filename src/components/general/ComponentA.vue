<template>
    <div>
        Component A {{counter}}
    </div>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters['getCounter'];
        }
    }
}
</script>