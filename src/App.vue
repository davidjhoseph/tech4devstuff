<script>
import { RouterView } from 'vue-router';
import AuthLayout from '@/layouts/AuthLayout.vue'
import AppLayout from '@/layouts/AppLayout.vue'
export default {
  components: { AuthLayout , RouterView, AppLayout},
  data(){
    return {
    }
  },
  // mounted(){
    // How to use vuex state properties
  //   // this.$store.commit('changeCounter', 44); // Mutations
  //   // this.$store.dispatch('getProducts', 44); // Actions
  //   // console.log(this.$store.getters['getCounter']); // Getters
  //   // console.log(this.$store.state.productStore.products) // State
  // },
  computed: {
    currentLayout() {
      return this.$route.path.includes('auth') ? 'AuthLayout' : 'AppLayout';
    },
    // isAuthPage() {
    //   return this.$route.path.includes('auth')
    // }
  }
}
</script>

<template>
  <!-- <component :is="currentLayout">
    <RouterView />
  </component> -->
  <div class="flex">
    <component :is="currentLayout">
      <RouterView/>
    </component>
  </div>
</template>

