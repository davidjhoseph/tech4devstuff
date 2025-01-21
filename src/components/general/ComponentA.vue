<template>
    <div>
        Component A
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
        // this.$store.dipatch('product/fetchProducts')
    }
}
</script>