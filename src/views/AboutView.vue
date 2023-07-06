<template>
 <profilecard/>
 <information/>
 <testimonials/>
</template>
<script>
import profilecard from '@/components/ProfileCard-Comp.vue'
import information from '@/components/Bio-Passion-Comp.vue'
import testimonials from '@/components/Testimonials-Comp.vue'
export default {
  components: {profilecard, information, testimonials}
}
</script>
