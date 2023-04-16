import { DefaultTheme } from "vitepress";
import learnSidebar from "../learn/sidebar";
import auditionBaseSidebar from '../audition/sidebar'
import sourceListSidebar from '../source-list/sidebar'
const sidebar: DefaultTheme.Sidebar = {
  "/learn/": learnSidebar,
  '/audition/base/': auditionBaseSidebar,
  '/source-list/': sourceListSidebar,
};

export default sidebar;
