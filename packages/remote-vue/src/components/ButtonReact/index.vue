<script>
import { mount } from "host/ButtonReact";

export default {
  data() {
    return {};
  },
  mounted() {
    mount(document.getElementById("react"), {
      nameBtn: 'VUE !!!',
    });
  },
};
</script>

<template>
  <div>
    React
    <div id="react"></div>
  </div>
</template>
