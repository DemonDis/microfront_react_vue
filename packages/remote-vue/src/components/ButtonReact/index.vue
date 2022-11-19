<script>
import { mount } from "host/ButtonReact";
export default {
  data() {
    return {};
  },
  props: {
   
  },
  mounted() {
    const { onParentNavigate } = mount(document.getElementById("react"), {
      initialPath: this.initialPath,
      
    });
    this.onParentNavigate = onParentNavigate;
  },
};
</script>

<template>
  <div>
    React
    <div id="react" :nameBtn="ddd"></div>
  </div>
</template>
