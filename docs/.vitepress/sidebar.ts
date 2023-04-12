import { DefaultTheme } from "vitepress";
import learnSidebar from "../learn/sidebar";
import auditionBaseSidebar from '../audition/sidebar'
const sidebar: DefaultTheme.Sidebar = {
  "/learn/": learnSidebar,
  '/audition/base/': auditionBaseSidebar
};

export default sidebar;
