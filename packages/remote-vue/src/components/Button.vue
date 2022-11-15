<script>
// import { mount } from "host/ButtonReact";
export default {
  data() {
    return {
      nameBtn: 'VUE',
    }
  },
  props: {
    disabled: Boolean,
    nameBtn: String
  }
  // mounted() {
  //   const { onParentNavigate } = mount(document.getElementById("react"), {
  //     initialPath: this.initialPath,
    
  //     onSignIn: () => {
  //       console.log("signin");
  //     },
  //   });
  //   this.onParentNavigate = onParentNavigate;
  // },
}
</script>

<template>
  <div id="react"></div>
  <button>
    VUE {{nameBtn}} !!!
  </button>
</template>
