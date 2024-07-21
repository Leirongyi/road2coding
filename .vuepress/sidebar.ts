import {SidebarConfig4Multiple} from "vuepress/config";
import AlgorithmSideBar from "./sidebars/algorithmSideBar";
import BackendDevSideBar from "./sidebars/backendDevSideBar";
import FrontendDevSideBar from "./sidebars/frontendDevSideBar";
import OpsSideBar from "./sidebars/opsSideBar";
import InterviewSideBar from "./sidebars/interviewSideBar";
import OtherShareSideBar from "./sidebars/otherShareSideBar";
import BugFixManual from "./sidebars/bugFixManual"
// @ts-ignore
export default {
    "/0001-后端开发/": BackendDevSideBar,
    "/0002-前端开发/": FrontendDevSideBar,
    "/0003-算法/": AlgorithmSideBar,
    "/0004-运维/": OpsSideBar,
    "/0005-Bug手册/": BugFixManual,
    "/0006-面试指南/": InterviewSideBar,
    "/0007-other/": OtherShareSideBar,
    "/0008-个人/": ["", "个人经历"],
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
