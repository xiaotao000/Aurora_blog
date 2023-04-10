import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import not from "./404.vue";

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'not-found': () => h(not)
    })
  }
};
