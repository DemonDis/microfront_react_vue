<script>
import { mount } from "host/ButtonReact";
export default {
  data() {
    return {
      iswatch: true,
    };
  },
  mounted() {
    const { onParentNavigate } = mount(document.getElementById("react"), {
      initialPath: this.initialPath,
    });
    this.onParentNavigate = onParentNavigate;
  },
  watch: {
    $route(to, from) {
      let innerRoute = this.getInnerRoute(to.path);
      console.log(
        "watch",
        this.getInnerRoute(to.path),
        this.getInnerRoute(from.path),
        this.iswatch
      );
      if (this.iswatch) {
        if(innerRoute)
        this.onParentNavigate(innerRoute);
        else return true
      } else this.iswatch = true;
    },
  },
  methods: {
    getInnerRoute(path) {
      let inner = path.split(this.initialPath)[1];
      return inner;
    },
  },
};
</script>

<template>
  <div>
    React
    <div id="react"></div>
  </div>
</template>
