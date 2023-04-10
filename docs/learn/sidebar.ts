import { DefaultTheme } from "vitepress";
const frameworkMiniSidebar: DefaultTheme.NavItem[] = [
  {
    text: "学习路线",
    items: [
      { text: "前端学习路线", link: "/learn/notes/web.md" },
      { text: "HTML-Css3 学习路线", link: "/learn/notes/html-css3.md" },
      { text: "JavaScript 学习路线", link: "/learn/notes/javascript.md" },
      { text: "性能优化", link: "/learn/notes/性能优化.md" },
      { text: "Ajax 学习路线", link: "/learn/notes/ajax.md" },
      { text: "git 学习路线", link: "/learn/notes/git.md" },
      { text: "React 学习路线", link: "/learn/notes/react.md" },
      { text: "Vue 学习路线", link: "/learn/notes/vue.md" },
    ],
  },
];

export default frameworkMiniSidebar;
