<template>
  <main class="container restaurant">
    <h1>Restaurants</h1>
    <AppRestaurantInfo />
  </main>
</template>

<script>
import AppRestaurantInfo from '@/components/AppRestaurantInfo';

export default {
  name: 'restaurants',
  components: {
    AppRestaurantInfo
  }
}
</script>

<style scoped>

</style>
