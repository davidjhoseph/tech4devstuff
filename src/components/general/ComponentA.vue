<template>
    <div>
        <div>Component A selected Layout: {{selectedLayout}}</div>
        <LayoutComponent @changedLayout="updateChangedLayout"/>
    </div>
</template>

<script>
import LayoutComponent from './LayoutComponent.vue';

export default {
    data() {
        return {
            selectedLayout: 'list'
        }
    },
    components: {LayoutComponent},
    computed: {
        products() {
            return this.$store.getters['getProducts'];
        }
    },
    methods: {
        updateChangedLayout(layout) {
            this.selectedLayout = layout;
            console.log(layout);
        }
    },
    mounted() {
        // this.$store.dipatch('product/fetchProducts')
    }
}
</script>