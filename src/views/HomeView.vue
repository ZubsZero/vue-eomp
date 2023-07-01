<template>
  <hero/>
  <heading/>
  <Card/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import hero from '@/components/Hero-Comp.vue'
import heading from '@/components/Heading-Comp.vue'
import Card from '@/components/HomeCards-Comp.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, hero, heading, Card
  }
}
</script>
