import { createApp } from 'vue';
import Button from './components/Button.vue';

const mount = (el) => {
  const app = createApp(Button);
  app.mount(el);
};

export { mount };
