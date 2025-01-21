<template>
    <div>
        Component A {{counter}}
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.getters['getProducts'];
        }
    },
    mounted() {
        this.$store.dipatch('fetchProducts')
    }
}
</script>