import { DefaultTheme } from "vitepress";
import learnSidebar from "../learn/sidebar";
const sidebar: DefaultTheme.Sidebar = {
  "/learn/": learnSidebar,
};

export default sidebar;
