<script>
import ButtonReact from './components/ButtonReact/index.vue'
export default {
  components: {
    ButtonReact
  },
  data() {
    return {
      nameBtn: 'VUE',
    }
  },
}
</script>


<template>
  <div class="container">
    <div>Name: remote-vue</div>
    <ButtonReact />
  </div>
</template>