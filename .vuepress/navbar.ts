import {NavItem} from "vuepress/config";

export default [
    {
        text: "后端开发",
        link: '/0001-后端开发/',
        items: [
            {
                text: "basic", link: "/0001-后端开发/#basic",
            },
            {
                text: "Java", link: "/0001-后端开发/#java",
            },
            {
                text: "Spring", link: "/0001-后端开发/#spring",
            },

            {
                text: "SQL", link: "/0001-后端开发/#sql",
            },
            {
                text: "中间件", link: "/0001-后端开发/#中间件",
            },


        ]
    },
    {
        text: "前端开发",
        link: "/0002-前端开发/",
        items: [
            {
                text: "Node", link: "/0002-前端开发/#node",
            },
            {
                text: "React", link: "/0002-前端开发/#react",
            },
            {
                text: "Vue", link: "/0002-前端开发/#vue",
            },

        ]
    },
    {
        text: "算法",
        link: '/0003-算法/',
        items: [
            {
                text: "基础概念", link: "/0003-算法/基础概念",
            },
            {
                text: "LeetCode", link: "/0003-算法/LeetCode",
            },
        ]
    },
    {
        text: "运维",
        link: '/0004-运维/',
        items: [
            {
                text: "Linux", link: "/0004-运维/#Linux",
            },
            {
                text: "Git", link: "/0004-运维/#Git",
            },
            {
                text: "Docker", link: "/0004-运维/#docker",
            },
            {
                text: "云原生", link: "/0004-运维/#云原生",
            },
        ]
    },
    {
        text: "Bug手册",
        link: '/0005-Bug手册/'
    },
    {
        text: "面试指南",
        link: '/0006-面试指南/'
    },
    {
        text:"other",
        link: '/0007-other/'
    },
    {
        text:"个人",
        link: '/0008-个人/'
    },

] as NavItem[];
