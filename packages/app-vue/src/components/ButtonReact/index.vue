<script>
import { mount } from "app_react/ButtonReact";
const vueBtn = 'dddd'
export default {
  data() {
    return {
      // vueBtn2: 'VUE btn !!!'
    };
  },
  props: {
    // vueBtn2: String
  },
  mounted() {
    mount(document.getElementById("react"), {
      nameBtn: vueBtn,
    });
  },
};
</script>

<template>
  <div>
    React
    <div id="react" :nameBtn="vueBtn2">{{vueBtn2}}</div>
  </div>
</template>
