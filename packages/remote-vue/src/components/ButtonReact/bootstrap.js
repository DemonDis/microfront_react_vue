import { createApp } from 'vue'
import ReactComponent from './index'

const mount = (el) => {
  app.use(ReactComponent)
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}
export { mount };