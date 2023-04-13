import { defineConfig } from "vitepress";
import navbar from "./navbar";
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aurora",
  description: "Aurora，让你更懂前端",
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/loog.png' }],],
  base: '/Aurora_blog/', 
  themeConfig: {
    logo: "/loog.png",
    nav: navbar,
    sidebar: sidebar,
    outline: [2, 3],
    outlineTitle: '本页目录',
    // 底部
    footer: {
      message: "根据 MIT 许可证发布。",
      copyright: "Copyright © 2023 Powered by Aurora",
    },
    // 底部文案
    docFooter: {
      next: "下一篇",
      prev: "上一篇",
    },
    lastUpdatedText: "最近更新时间",
    socialLinks: [{ icon: "github", link: "https://github.com/xiaotao000" }],
  },
});
