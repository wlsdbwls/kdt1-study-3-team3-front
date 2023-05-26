<template>
  <v-container>
    <div>
      <nav>
        <navigation-menu-page/>
      </nav>
    </div>
  </v-container>
</template>

<script>
  import NavigationMenuPage from '@/views/navigation/NavigationMenuPage.vue'

  export default {
    name: 'Home',

    components: {
      NavigationMenuPage
    },
  }
</script>